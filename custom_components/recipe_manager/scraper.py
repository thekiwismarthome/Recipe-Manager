"""Recipe scraper for Recipe Manager.

Uses the `recipe-scrapers` library as the primary parser with a
JSON-LD / schema.org fallback for sites not yet supported.
"""
from __future__ import annotations

import json
import logging
import re
from typing import Any, Dict, List, Optional

from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from aiohttp import ClientTimeout

_LOGGER = logging.getLogger(__name__)

_USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/124.0.0.0 Safari/537.36"
)

_REQUEST_HEADERS = {
    "User-Agent": _USER_AGENT,
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "DNT": "1",
    "Upgrade-Insecure-Requests": "1",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1",
    "Cache-Control": "max-age=0",
}


async def async_scrape_recipe(hass: HomeAssistant, url: str) -> Dict[str, Any]:
    """Fetch and parse a recipe from a URL.

    Returns a dict with keys matching the Recipe dataclass fields.
    Raises ValueError if the page cannot be parsed as a recipe.
    """
    session = async_get_clientsession(hass)

    try:
        async with session.get(
            url, timeout=ClientTimeout(total=30), headers=_REQUEST_HEADERS, allow_redirects=True
        ) as resp:
            if resp.status != 200:
                raise ValueError(f"HTTP {resp.status} fetching {url}")
            html = await resp.text(errors="replace")
    except Exception as exc:
        raise ValueError(f"Failed to fetch URL: {exc}") from exc

    # Try recipe-scrapers with wild_mode=True (handles 1000+ known sites *and*
    # uses its own JSON-LD / microdata fallback for unknown sites).
    try:
        from recipe_scrapers import scrape_html  # type: ignore[import]

        scraper = scrape_html(html, org_url=url, wild_mode=True)
        result = _extract_from_scraper(scraper, url)
        if result.get("name"):
            # recipe-scrapers often omits nutrition or returns only calories without
            # macros — supplement from JSON-LD for any missing fields
            try:
                jld = _extract_from_jsonld(html, url)
                jld_nutr = jld.get("nutrition") or {}
                if jld_nutr:
                    existing = result.get("nutrition") or {}
                    # JSON-LD is base; recipe-scrapers values take precedence where present
                    result["nutrition"] = {**jld_nutr, **existing} or None
            except Exception:
                pass
            return result
        _LOGGER.debug("recipe-scrapers returned no title for %s, trying JSON-LD fallback", url)
    except Exception as exc:
        _LOGGER.debug("recipe-scrapers failed for %s: %s", url, exc)

    # Last resort: our own JSON-LD parser
    try:
        return _extract_from_jsonld(html, url)
    except Exception as exc:
        raise ValueError(
            f"Could not parse a recipe from {url}: {exc}"
        ) from exc


# ---------------------------------------------------------------------------
# Internal helpers
# ---------------------------------------------------------------------------

def _extract_from_scraper(scraper: Any, url: str) -> Dict[str, Any]:
    """Extract recipe data from a recipe-scrapers Scraper object."""

    def _safe(fn):
        try:
            return fn()
        except Exception:
            return None

    name = _safe(scraper.title) or ""
    if not name:
        raise ValueError("No recipe title found")

    # Ingredients: recipe-scrapers returns a list of strings
    raw_ingredients: List[str] = _safe(scraper.ingredients) or []
    ingredients = [_parse_ingredient_string(s) for s in raw_ingredients]

    # Instructions: use instructions_list() for a proper list of steps
    instructions: List[str] = _safe(scraper.instructions_list) or []
    if not instructions:
        # Fallback: split the combined instructions string
        raw_instructions = _safe(scraper.instructions) or ""
        instructions = _split_instructions(raw_instructions)

    # Times are in minutes
    prep_time = _safe(scraper.prep_time)
    cook_time = _safe(scraper.cook_time)
    total_time = _safe(scraper.total_time)

    servings_text = _safe(scraper.yields)
    servings = _extract_servings_count(servings_text)

    image_url = _safe(scraper.image)
    description = _safe(scraper.description)
    # cuisine and category may return a list on some sites
    cuisine = _first_or_str(_safe(scraper.cuisine))
    category = _first_or_str(_safe(scraper.category))

    nutrition_raw = _safe(scraper.nutrients)
    nutrition = _normalise_nutrition(nutrition_raw) if nutrition_raw else None

    # Tags from keywords / category
    tags: List[str] = []
    kw = _safe(scraper.keywords)
    if kw:
        if isinstance(kw, list):
            tags.extend(kw)
        elif isinstance(kw, str):
            tags.extend([t.strip() for t in kw.split(",") if t.strip()])
    if category:
        tags.append(category.strip())
    tags = list(dict.fromkeys(t.lower() for t in tags if t))

    return {
        "name": name.strip(),
        "source_url": url,
        "description": description,
        "image_url": image_url,
        "ingredients": ingredients,
        "instructions": instructions,
        "prep_time": _to_int_minutes(prep_time),
        "cook_time": _to_int_minutes(cook_time),
        "total_time": _to_int_minutes(total_time),
        "servings": servings,
        "servings_text": servings_text,
        "cuisine": cuisine,
        "category": category,
        "nutrition": nutrition,
        "tags": tags,
    }


def _extract_from_jsonld(html: str, url: str) -> Dict[str, Any]:
    """Parse JSON-LD script blocks looking for schema.org/Recipe."""
    import re as _re

    pattern = _re.compile(
        r'<script[^>]+type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
        _re.DOTALL | _re.IGNORECASE,
    )

    for match in pattern.finditer(html):
        try:
            data = json.loads(match.group(1).strip())
        except json.JSONDecodeError:
            continue

        # Handle @graph arrays
        if isinstance(data, dict) and "@graph" in data:
            nodes = data["@graph"]
        elif isinstance(data, list):
            nodes = data
        else:
            nodes = [data]

        for node in nodes:
            if not isinstance(node, dict):
                continue
            node_type = node.get("@type", "")
            if isinstance(node_type, list):
                node_type = " ".join(node_type)
            if "Recipe" not in node_type:
                continue
            return _extract_from_jsonld_node(node, url)

    raise ValueError("No JSON-LD Recipe found in page")


def _extract_from_jsonld_node(node: Dict[str, Any], url: str) -> Dict[str, Any]:
    """Convert a JSON-LD Recipe node to our internal dict."""

    name = node.get("name", "").strip()
    if not name:
        raise ValueError("No title in JSON-LD Recipe")

    # Ingredients
    raw_ingredients = node.get("recipeIngredient", [])
    ingredients = [_parse_ingredient_string(s) for s in raw_ingredients if isinstance(s, str)]

    # Instructions
    raw_instructions = node.get("recipeInstructions", [])
    instructions = _parse_jsonld_instructions(raw_instructions)

    # Times (ISO 8601 durations like PT30M)
    prep_time = _parse_iso_duration(node.get("prepTime", ""))
    cook_time = _parse_iso_duration(node.get("cookTime", ""))
    total_time = _parse_iso_duration(node.get("totalTime", ""))

    # Servings
    servings_raw = node.get("recipeYield", node.get("yield", ""))
    if isinstance(servings_raw, list):
        servings_raw = servings_raw[0] if servings_raw else ""
    servings_text = str(servings_raw) if servings_raw else None
    servings = _extract_servings_count(servings_text)

    # Image
    image = node.get("image", "")
    if isinstance(image, dict):
        image = image.get("url", "")
    elif isinstance(image, list):
        image = image[0] if image else ""
        if isinstance(image, dict):
            image = image.get("url", "")
    image_url = str(image) if image else None

    # Description
    description = node.get("description", "").strip() or None

    # Cuisine / category
    cuisine = _first_or_str(node.get("recipeCuisine"))
    category = _first_or_str(node.get("recipeCategory"))

    # Keywords → tags
    keywords_raw = node.get("keywords", "")
    tags: List[str] = []
    if isinstance(keywords_raw, list):
        tags.extend(keywords_raw)
    elif isinstance(keywords_raw, str):
        tags.extend([k.strip() for k in keywords_raw.split(",") if k.strip()])
    if category:
        tags.append(category)
    tags = list(dict.fromkeys(t.lower() for t in tags if t))

    # Nutrition
    nutrition_node = node.get("nutrition")
    nutrition = _normalise_nutrition(nutrition_node) if nutrition_node else None

    return {
        "name": name,
        "source_url": url,
        "description": description,
        "image_url": image_url,
        "ingredients": ingredients,
        "instructions": instructions,
        "prep_time": prep_time,
        "cook_time": cook_time,
        "total_time": total_time,
        "servings": servings,
        "servings_text": servings_text,
        "cuisine": cuisine,
        "category": category,
        "nutrition": nutrition,
        "tags": tags,
    }


# ---------------------------------------------------------------------------
# Parsing utilities
# ---------------------------------------------------------------------------

# German ingredient units (EL = Esslöffel, TL = Teelöffel, Prise, Bund, Pck. ...) so recipes from
# German sites split into amount / unit / name instead of leaving "EL" inside the name.
_DE_UNIT_CANON: Dict[str, str] = {
    "el": "EL", "esslöffel": "EL", "essloeffel": "EL",
    "tl": "TL", "teelöffel": "TL", "teeloeffel": "TL",
    "msp": "Msp.", "messerspitze": "Msp.", "messerspitzen": "Msp.",
    "prise": "Prise", "prisen": "Prise",
    "bund": "Bund", "bd": "Bund",
    "pck": "Pck.", "pkg": "Pck.", "pkt": "Pck.", "päckchen": "Pck.", "paeckchen": "Pck.",
    "packung": "Pck.", "packungen": "Pck.",
    "dose": "Dose", "dosen": "Dose",
    "zehe": "Zehe", "zehen": "Zehe",
    "stück": "Stück", "stueck": "Stück", "stk": "Stück", "stck": "Stück",
    "scheibe": "Scheibe", "scheiben": "Scheibe",
    "blatt": "Blatt", "blätter": "Blatt",
    "stange": "Stange", "stangen": "Stange",
    "zweig": "Zweig", "zweige": "Zweig",
    "kopf": "Kopf", "köpfe": "Kopf",
    "handvoll": "Handvoll",
    "tasse": "Tasse", "tassen": "Tasse",
    "becher": "Becher", "glas": "Glas", "gläser": "Glas",
    "tüte": "Tüte", "tüten": "Tüte",
    "liter": "l", "dl": "dl", "cl": "cl",
    "würfel": "Würfel",
    "stängel": "Stängel", "staengel": "Stängel", "stiel": "Stiel", "stiele": "Stiel",
    "schuss": "Schuss", "spritzer": "Spritzer",
}

# Unit words accepted by the ingredient parser (English + German).
_UNIT_WORDS = (
    r"tsp|tbsp|tablespoons?|teaspoons?|cups?|oz|lbs?|g|kg|mg|ml|mL|L|dl|cl|litre?s?|liters?|"
    r"pint|quart|gallon|fl\.?\s*oz|can|cans|bunch|head|clove|cloves|slice|slices|"
    r"piece|pieces|sheet|sheets|pinch|dash|handful|sprig|sprigs|stalk|stalks|"
    # German
    r"EL|TL|Msp|Messerspitzen?|Prisen?|Bund|Bd|Pck|Pkg|Pkt|Päckchen|Packungen?|Dosen?|Zehen?|"
    r"St(?:ü|ue)ck|Stk|Stck|Scheiben?|Bl(?:ä|ae)tter|Blatt|Stangen?|Zweige?|K(?:ö|oe)pfe|Kopf|"
    r"Handvoll|Tassen?|Becher|Gl(?:ä|ae)ser|Glas|T(?:ü|ue)ten?|Esslöffel|Teelöffel|Würfel|Liter|"
    r"St(?:ä|ae)ngel|Stiele?|Schuss|Spritzer"
)

_UNICODE_FRACTIONS = {
    "½": " 1/2", "¼": " 1/4", "¾": " 3/4", "⅓": " 1/3", "⅔": " 2/3",
    "⅛": " 1/8", "⅜": " 3/8", "⅝": " 5/8", "⅞": " 7/8",
}


def _parse_ingredient_string(raw: str) -> Dict[str, Any]:
    """Try to split an ingredient string into amount / unit / name.

    Returns a dict suitable for Ingredient.from_dict().
    E.g. "2 cups plain flour, sifted"  →  {amount:"2", unit:"cups", name:"plain flour", notes:"sifted"}
    German units work too: "2 EL Olivenöl" → {amount:"2", unit:"EL", name:"Olivenöl"}.
    """
    if not raw or not isinstance(raw, str):
        return {"name": str(raw or ""), "amount": None, "unit": None, "notes": None}

    raw = raw.strip()
    for glyph, frac in _UNICODE_FRACTIONS.items():
        raw = raw.replace(glyph, frac)
    raw = re.sub(r"\s+", " ", raw).strip()

    # "ca. 200 g Butter" / "etwa 2 EL Öl": parse the rest and keep the hint as a note
    approx = None
    am = re.match(r"^(ca\.?|circa|etwa|ungefähr|approx\.?|about)\s+(?=\d)", raw, re.IGNORECASE)
    if am:
        word = am.group(1).lower().rstrip(".")
        approx = "ca." if word == "ca" else word
        raw = raw[am.end():]

    # Pattern: optional number (incl fractions) + optional unit + rest.
    # The unit must be a whole word, otherwise "Gurke" would become unit "G" + name "urke".
    pattern = re.compile(
        r"^"
        r"(?P<amount>\d+(?:[.,/]\d+)?(?:\s*-\s*\d+(?:[.,/]\d+)?)?\s*(?:\d+/\d+)?)?"
        r"\s*"
        r"(?:(?P<unit>" + _UNIT_WORDS + r")(?=[\s.,;:]|$)\.?)?"
        r"\s*"
        r"(?P<name>.+?)$",
        re.IGNORECASE,
    )
    m = pattern.match(raw)
    if not m:
        return {"name": raw, "amount": None, "unit": None, "notes": None}

    amount = (m.group("amount") or "").strip() or None
    unit = (m.group("unit") or "").strip() or None
    rest = (m.group("name") or "").strip()

    # A unit without an amount is part of the name ("Liter Wasser" is rare; "Dosen" alone is a word)
    if unit and not amount:
        rest = f"{unit} {rest}".strip()
        unit = None

    if amount:
        # German decimal comma: "1,5" -> "1.5" (fractions like 1/2 are left alone)
        amount = re.sub(r"(?<=\d),(?=\d)", ".", amount)
    if unit:
        unit = _DE_UNIT_CANON.get(unit.lower().rstrip("."), unit)

    # Split notes after comma
    name = rest
    notes = None
    if "," in rest:
        parts = rest.split(",", 1)
        name = parts[0].strip()
        notes = parts[1].strip()

    if approx:
        notes = (f"{approx} {notes}" if approx == "ca." else f"{approx}, {notes}") if notes else approx
    return {"name": name, "amount": amount, "unit": unit, "notes": notes}


def _split_instructions(raw: str) -> List[str]:
    """Split a potentially multi-paragraph instruction string into steps."""
    if not raw:
        return []
    if isinstance(raw, list):
        return [s.strip() for s in raw if s.strip()]
    # Split on double newlines or numbered steps
    steps = re.split(r"\n{2,}|\r\n{2,}", raw.strip())
    if len(steps) == 1:
        # Try splitting on single newlines
        steps = re.split(r"\n|\r\n", raw.strip())
    return [s.strip() for s in steps if s.strip()]


def _parse_jsonld_instructions(raw: Any) -> List[str]:
    """Parse instructions from JSON-LD (string, list of strings, or HowToStep)."""
    if not raw:
        return []
    if isinstance(raw, str):
        return _split_instructions(raw)
    steps = []
    for item in raw:
        if isinstance(item, str):
            steps.append(item.strip())
        elif isinstance(item, dict):
            # HowToSection or HowToStep
            t = item.get("@type", "")
            if "HowToSection" in t:
                sub = item.get("itemListElement", [])
                steps.extend(_parse_jsonld_instructions(sub))
            else:
                text = item.get("text", item.get("name", "")).strip()
                if text:
                    steps.append(text)
    return [s for s in steps if s]


def _parse_iso_duration(duration: str) -> Optional[int]:
    """Convert ISO 8601 duration (PT1H30M) to minutes."""
    if not duration:
        return None
    m = re.match(r"P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?", str(duration))
    if not m:
        return None
    days = int(m.group(1) or 0)
    hours = int(m.group(2) or 0)
    mins = int(m.group(3) or 0)
    total = days * 1440 + hours * 60 + mins
    return total if total > 0 else None


def _to_int_minutes(value: Any) -> Optional[int]:
    """Coerce a value to integer minutes."""
    if value is None:
        return None
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def _extract_servings_count(text: Optional[str]) -> Optional[int]:
    """Extract the first integer from a servings string like '4 servings'."""
    if not text:
        return None
    m = re.search(r"\d+", str(text))
    return int(m.group()) if m else None


def _first_or_str(value: Any) -> Optional[str]:
    """Return the first element of a list or the string itself."""
    if not value:
        return None
    if isinstance(value, list):
        return str(value[0]).strip() if value else None
    return str(value).strip()


def _normalise_nutrition(raw: Any) -> Optional[Dict[str, Any]]:
    """Normalise a nutrition dict / schema.org NutritionInformation."""
    if not raw or not isinstance(raw, dict):
        return None
    keys_map = {
        "calories": "calories",
        "carbohydrateContent": "carbohydrates",
        "proteinContent": "protein",
        "fatContent": "fat",
        "saturatedFatContent": "saturated_fat",
        "sugarContent": "sugar",
        "fiberContent": "fiber",
        "sodiumContent": "sodium",
        "cholesterolContent": "cholesterol",
    }
    result = {}
    for src, dst in keys_map.items():
        v = raw.get(src) or raw.get(dst)
        if v is not None:
            result[dst] = str(v)
    return result if result else None
