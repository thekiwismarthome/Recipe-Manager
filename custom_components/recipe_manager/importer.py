"""Recipe Keeper (.rkeeper) import parser for Recipe Manager.

The .rkeeper file is a ZIP archive containing:
  - recipebook.html  — all recipes in HTML
  - images/          — recipe photos
"""
from __future__ import annotations

import io
import logging
import re
import zipfile
from typing import Any, Dict, List, Optional, Tuple

_LOGGER = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Public entry point
# ---------------------------------------------------------------------------

def parse_recipe_keeper_html(
    html_content: str,
    images: Optional[Dict[str, bytes]] = None,
) -> List[Dict[str, Any]]:
    """Parse Recipe Keeper HTML and return a list of recipe dicts.

    html_content — the HTML text from recipebook.html (or equivalent)
    images       — optional map of filename → raw bytes for embedding photos.
                   When omitted, recipes include ``_image_filename`` (the src
                   reference from the HTML) so the caller can supply images
                   separately (e.g. uploaded one-by-one from the browser).
    """
    if images is None:
        images = {}

    try:
        from bs4 import BeautifulSoup  # type: ignore[import]
    except ImportError as exc:
        raise ValueError(
            "BeautifulSoup4 is required for Recipe Keeper import"
        ) from exc

    soup = BeautifulSoup(html_content, "html.parser")

    # Strategy 1: standard Recipe Keeper class
    containers = soup.find_all(class_="recipe-details")
    _LOGGER.info("Recipe Keeper import: found %d containers with class='recipe-details'", len(containers))

    # Strategy 2: any block that contains a recipe-name child
    if not containers:
        containers = [
            el for el in soup.find_all(["article", "section", "div"])
            if el.find(class_=re.compile(r"recipe-name", re.I))
        ]
        _LOGGER.info("Recipe Keeper import: fallback found %d containers with recipe-name child", len(containers))

    if not containers:
        # Log a sample of the HTML to help diagnose structure
        sample = html_content[:1000].replace("\n", " ")
        _LOGGER.warning("Recipe Keeper import: no recipe containers found. HTML sample: %s", sample)
        raise ValueError(
            "No recipe containers found — check this is a valid Recipe Keeper export"
        )

    # Log the first container's HTML for diagnostics
    _LOGGER.info(
        "Recipe Keeper import: first container HTML sample: %s",
        str(containers[0])[:600].replace("\n", " "),
    )

    recipes: List[Dict[str, Any]] = []
    for container in containers:
        try:
            recipe = _parse_recipe_container(container, images)
            if recipe and recipe.get("name"):
                recipes.append(recipe)
            elif recipe:
                _LOGGER.warning("Recipe Keeper import: skipping container with no name")
        except Exception as exc:  # noqa: BLE001
            _LOGGER.warning("Recipe Keeper import: skipping unparseable container: %s", exc)

    _LOGGER.info(
        "Parsed %d recipes from Recipe Keeper HTML (%d images available)",
        len(recipes),
        len(images),
    )
    return recipes


def parse_recipe_keeper_bytes(
    data: bytes,
) -> Tuple[List[Dict[str, Any]], Dict[str, bytes]]:
    """Parse a .rkeeper ZIP and return (recipes, images).

    recipes  — list of recipe dicts ready for storage.add_recipe()
    images   — map of original filename → raw image bytes
    """
    try:
        zf = zipfile.ZipFile(io.BytesIO(data))
    except zipfile.BadZipFile as exc:
        raise ValueError("Not a valid .rkeeper archive (bad ZIP)") from exc

    with zf:
        html_file = next(
            (n for n in zf.namelist() if n.endswith(".html")), None
        )
        if not html_file:
            raise ValueError("No HTML file found inside .rkeeper archive")

        html_content = zf.read(html_file).decode("utf-8", errors="replace")

        image_extensions = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp"}
        images: Dict[str, bytes] = {
            n: zf.read(n)
            for n in zf.namelist()
            if any(n.lower().endswith(ext) for ext in image_extensions)
        }

    recipes = parse_recipe_keeper_html(html_content, images)
    return recipes, images


# ---------------------------------------------------------------------------
# Per-recipe parsing
# ---------------------------------------------------------------------------

def _text(container: Any, *class_names: str) -> Optional[str]:
    """Return stripped text of the first matching class, or None."""
    for cls in class_names:
        el = container.find(class_=re.compile(rf"\b{re.escape(cls)}\b", re.I))
        if el:
            t = el.get_text(" ", strip=True)
            if t:
                return t
    return None


def _parse_recipe_container(
    container: Any, images: Dict[str, bytes]
) -> Dict[str, Any]:
    """Parse one recipe <div class="recipe-details"> block."""

    # --- Name ---
    name = _text(container, "recipe-name")
    if not name:
        for tag in ("h2", "h3", "h1"):
            el = container.find(tag)
            if el:
                name = el.get_text(strip=True)
                break
    if not name:
        return {}

    # --- Description ---
    description = _text(container, "recipe-description")

    # --- Servings ---
    servings_text = _text(
        container, "recipe-serving-size", "recipe-yield", "recipe-servings"
    )
    servings: Optional[int] = None
    if servings_text:
        m = re.search(r"\d+", servings_text)
        servings = int(m.group()) if m else None

    # --- Times ---
    prep_time = _parse_time(_text(container, "recipe-prep-time", "recipe-preptime"))
    cook_time = _parse_time(_text(container, "recipe-cook-time", "recipe-cooktime"))
    total_time = _parse_time(
        _text(container, "recipe-total-time", "recipe-totaltime")
    )

    # --- Cuisine / Category → tags ---
    cuisine = _text(container, "recipe-cuisine")
    category_text = _text(container, "recipe-categories", "recipe-category")
    tags: List[str] = []
    if category_text:
        tags = [t.strip().lower() for t in re.split(r"[,;/]", category_text) if t.strip()]

    # --- Source URL ---
    source_url = _text(container, "recipe-source", "recipe-url", "recipe-source-url")
    if source_url and not source_url.startswith("http"):
        source_url = None

    # --- Notes ---
    notes = _text(container, "recipe-notes", "recipe-note")

    # --- Image ---
    image_bytes: Optional[bytes] = None
    image_src: Optional[str] = None
    photo_el = container.find(class_=re.compile(r"recipe-photo", re.I))
    if photo_el:
        img = photo_el if photo_el.name == "img" else photo_el.find("img")
        if img:
            image_src = img.get("src") or img.get("data-src")
    if not image_src:
        img = container.find("img")
        if img:
            src = img.get("src", "")
            if not any(skip in src.lower() for skip in ("logo", "icon", "banner")):
                image_src = src
    if image_src:
        image_bytes = images.get(image_src)
        if not image_bytes:
            basename = image_src.split("/")[-1]
            for k, v in images.items():
                if k.split("/")[-1] == basename:
                    image_bytes = v
                    break

    # --- Ingredients ---
    ingredients: List[Dict[str, Any]] = []
    ing_el = container.find(
        class_=re.compile(
            r"recipe-ingredients?|p-ingredients?|ingredient-list|ingredients-list", re.I
        )
    )
    if ing_el:
        items = ing_el.find_all("li") or ing_el.find_all("p") or ing_el.find_all("span")
        if items:
            for item in items:
                txt = item.get_text(" ", strip=True)
                if txt:
                    ingredients.append(_parse_ingredient_line(txt))
        else:
            # Fall back to splitting the whole text block by newlines
            for line in ing_el.get_text("\n", strip=True).split("\n"):
                line = line.strip()
                if line:
                    ingredients.append(_parse_ingredient_line(line))

    # --- Instructions / Directions ---
    # Recipe Keeper uses several class names across versions; try them all.
    instructions: List[str] = []
    method_el = container.find(
        class_=re.compile(
            r"recipe-method-directions|recipe-method|recipe-directions?"
            r"|recipe-instructions?|recipe-steps?"
            r"|e-instructions?|directions?-list|steps?-list"
            r"|method|directions?",
            re.I,
        )
    )

    if not method_el:
        # Fallback: look for any element whose text starts with numbered steps
        for el in container.find_all(["ol", "ul"]):
            if el.find("li"):
                # Heuristic: if the first <li> looks like a cooking step
                first_li = el.find("li")
                first_text = first_li.get_text(strip=True) if first_li else ""
                if len(first_text) > 10:
                    # Check it's not the ingredients list
                    if el is not ing_el:
                        method_el = el
                        _LOGGER.debug("Recipe Keeper import: using fallback <ol/ul> for directions")
                        break

    if method_el:
        items = method_el.find_all("li") or method_el.find_all("p")
        if items:
            for item in items:
                txt = item.get_text(" ", strip=True)
                # Strip leading numbering like "1." or "Step 1:"
                txt = re.sub(r"^(?:Step\s*)?\d+[.):\s]+", "", txt, flags=re.I).strip()
                if txt:
                    instructions.append(txt)
        else:
            raw_text = method_el.get_text("\n", strip=True)
            for line in raw_text.split("\n"):
                line = re.sub(r"^(?:Step\s*)?\d+[.):\s]+", "", line.strip(), flags=re.I).strip()
                if line:
                    instructions.append(line)
    else:
        _LOGGER.warning(
            "Recipe Keeper import: no directions element found for recipe '%s'", name
        )

    # --- Nutrition (from dedicated element, then from notes text) ---
    nutrition: Optional[Dict[str, str]] = None
    nutr_el = container.find(
        class_=re.compile(r"recipe-nutrition", re.I)
    )
    if nutr_el:
        nutrition = {}
        for item in nutr_el.find_all(["li", "span", "div", "td"]):
            txt = item.get_text(" ", strip=True)
            m = re.match(r"(.+?):\s*(.+)", txt)
            if m:
                key = m.group(1).strip().lower().replace(" ", "_")
                nutrition[key] = m.group(2).strip()
        if not nutrition:
            nutrition = None

    # If no dedicated nutrition element, try to parse from notes
    if not nutrition and notes:
        parsed_nutrition, cleaned_notes = _extract_nutrition_from_notes(notes)
        if parsed_nutrition:
            nutrition = parsed_nutrition
            notes = cleaned_notes  # Remove nutrition lines from notes

    return {
        "name": name.strip(),
        "description": description,
        "servings": servings,
        "servings_text": servings_text,
        "prep_time": prep_time,
        "cook_time": cook_time,
        "total_time": total_time,
        "cuisine": cuisine,
        "tags": tags,
        "source_url": source_url,
        "notes": notes,
        "ingredients": ingredients,
        "instructions": instructions,
        "nutrition": nutrition,
        # _image_bytes: raw bytes when images dict was provided (parse_recipe_keeper_bytes)
        "_image_bytes": image_bytes,
        # _image_filename: src reference in HTML (used for two-phase browser upload)
        "_image_filename": image_src,
    }


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _parse_time(text: Optional[str]) -> Optional[int]:
    """Parse human time strings to minutes.

    Handles: "1 hour 30 mins", "45 minutes", "1h 30m", "30", etc.
    """
    if not text:
        return None
    t = text.strip().lower()
    # "1 hour(s) 30 min(s)"
    m = re.match(r"(\d+)\s*h(?:ours?)?\s*(?:and\s*)?(\d+)\s*m(?:in(?:utes?)?)?", t)
    if m:
        return int(m.group(1)) * 60 + int(m.group(2))
    # "30 minutes" / "30 mins" / "30m"
    m = re.match(r"(\d+)\s*m(?:in(?:utes?)?)?$", t)
    if m:
        return int(m.group(1))
    # "1 hour" / "2 hours"
    m = re.match(r"(\d+)\s*h(?:ours?)?$", t)
    if m:
        return int(m.group(1)) * 60
    # bare number — assume minutes
    m = re.match(r"^(\d+)$", t)
    if m:
        return int(m.group(1))
    return None


# Globally-accepted measurement abbreviations.
# Covers both American spellings (liter, gram) and
# British/international spellings (litre, gramme, etc.).
_UNIT_NORMALIZE: Dict[str, str] = {
    # Teaspoon
    "teaspoon":           "tsp",
    "teaspoons":          "tsp",
    # Tablespoon
    "tablespoon":         "Tbsp",
    "tablespoons":        "Tbsp",
    # Ounce / fluid ounce
    "ounce":              "oz",
    "ounces":             "oz",
    "fluid ounce":        "fl oz",
    "fluid ounces":       "fl oz",
    # Pound
    "pound":              "lb",
    "pounds":             "lb",
    "lbs":                "lb",
    # Gram  (American: gram / British: gramme)
    "gram":               "g",
    "grams":              "g",
    "gramme":             "g",
    "grammes":            "g",
    # Kilogram  (American: kilogram / British: kilogramme)
    "kilogram":           "kg",
    "kilograms":          "kg",
    "kilogramme":         "kg",
    "kilogrammes":        "kg",
    # Millilitre  (British: millilitre / American: milliliter)
    "millilitre":         "ml",
    "millilitres":        "ml",
    "milliliter":         "ml",
    "milliliters":        "ml",
    # Centilitre  (British: centilitre / American: centiliter)
    "centilitre":         "cl",
    "centilitres":        "cl",
    "centiliter":         "cl",
    "centiliters":        "cl",
    # Decilitre  (British: decilitre / American: deciliter)
    "decilitre":          "dl",
    "decilitres":         "dl",
    "deciliter":          "dl",
    "deciliters":         "dl",
    # Litre  (British: litre / American: liter)
    "litre":              "L",
    "litres":             "L",
    "liter":              "L",
    "liters":             "L",
    # Pint / quart / gallon (same spelling internationally)
    "pint":               "pt",
    "pints":              "pt",
    "quart":              "qt",
    "quarts":             "qt",
    "gallon":             "gal",
    "gallons":            "gal",
}


def _normalize_unit(unit: Optional[str]) -> Optional[str]:
    """Normalize a measurement unit to its standard abbreviation."""
    if not unit:
        return unit
    return _UNIT_NORMALIZE.get(unit.lower(), unit)


# Compiled once at module level for efficiency.
# Unit alternation covers both American and British/international spellings.
_INGREDIENT_RE = re.compile(
    r"^"
    r"(?P<amount>\d+(?:[.,/]\d+)?(?:\s*[-–]\s*\d+(?:[.,/]\d+)?)?"
    r"(?:\s+\d+/\d+)?)?"
    r"\s*"
    r"(?P<unit>"
    # Abbreviations first (short, unambiguous)
    r"tsp|tbsp|fl\.?\s*oz"
    # Full names — teaspoon/tablespoon
    r"|tablespoons?|teaspoons?"
    # Volume — litre/liter/millilitre/milliliter/centilitre/centiliter/decilitre/deciliter
    r"|(?:milli|centi|deci)?lit(?:re|er)s?"
    r"|ml|cl|dl|L"
    # Mass — gramme/gram/kilogramme/kilogram
    r"|kilo(?:gramme|gram)s?|(?:gramme|gram)s?"
    r"|kg|g"
    # Other imperial
    r"|cups?|oz|lbs?|pints?|quarts?|gallons?"
    # Countable / descriptive
    r"|cans?|bunches?|heads?|cloves?|slices?|pieces?|sheets?"
    r"|pinch(?:es)?|dash(?:es)?|handfuls?|sprigs?|stalks?"
    r")?\.?"
    r"\s*"
    r"(?P<name>.+?)$",
    re.IGNORECASE,
)


_UNICODE_FRACTIONS: Dict[str, str] = {
    "\u00bd": "1/2",  # ½
    "\u00bc": "1/4",  # ¼
    "\u00be": "3/4",  # ¾
    "\u2153": "1/3",  # ⅓
    "\u2154": "2/3",  # ⅔
    "\u215b": "1/8",  # ⅛
    "\u215c": "3/8",  # ⅜
    "\u215d": "5/8",  # ⅝
    "\u215e": "7/8",  # ⅞
}


def _normalize_fractions(text: str) -> str:
    """Replace Unicode fraction chars with ASCII equivalents.

    Handles bare fractions ("½" → "1/2") and mixed numbers ("1½" → "1 1/2").
    """
    for char, replacement in _UNICODE_FRACTIONS.items():
        # "1½" → "1 1/2" (digit immediately followed by fraction)
        text = re.sub(rf"(\d){re.escape(char)}", rf"\1 {replacement}", text)
        text = text.replace(char, replacement)
    return text


def _parse_ingredient_line(raw: str) -> Dict[str, Any]:
    """Split an ingredient string into {amount, unit, name}."""
    raw = _normalize_fractions(raw.strip())
    m = _INGREDIENT_RE.match(raw)
    if not m:
        return {"name": raw, "amount": None, "unit": None, "notes": None}

    amount = (m.group("amount") or "").strip() or None
    unit = _normalize_unit((m.group("unit") or "").strip() or None)
    rest = (m.group("name") or "").strip()
    name, notes = rest, None
    if "," in rest:
        parts = rest.split(",", 1)
        name = parts[0].strip()
        notes = parts[1].strip()
    return {"name": name, "amount": amount, "unit": unit, "notes": notes}


# Nutrition field patterns to extract from free-text notes
_NUTRITION_PATTERNS: List[Tuple[str, str]] = [
    (r"calories?\s*[:\-]\s*(\d+(?:\.\d+)?)\s*(?:kcal)?",                  "calories"),
    (r"total\s+fat\s*[:\-]\s*(\d+(?:\.\d+)?)\s*g?",                       "fat"),
    (r"saturated\s+fat\s*[:\-]\s*(\d+(?:\.\d+)?)\s*g?",                   "saturated_fat"),
    (r"trans\s+fat\s*[:\-]\s*(\d+(?:\.\d+)?)\s*g?",                       "trans_fat"),
    (r"cholesterol\s*[:\-]\s*(\d+(?:\.\d+)?)\s*mg?",                      "cholesterol"),
    (r"sodium\s*[:\-]\s*(\d+(?:\.\d+)?)\s*mg?",                           "sodium"),
    (r"(?:total\s+)?carb(?:ohydrate)?s?\s*[:\-]\s*(\d+(?:\.\d+)?)\s*g?",  "carbohydrates"),
    (r"(?:dietary\s+)?fiber\s*[:\-]\s*(\d+(?:\.\d+)?)\s*g?",              "fiber"),
    (r"(?:total\s+)?sugars?\s*[:\-]\s*(\d+(?:\.\d+)?)\s*g?",              "sugar"),
    (r"protein\s*[:\-]\s*(\d+(?:\.\d+)?)\s*g?",                           "protein"),
]


def _extract_nutrition_from_notes(
    notes_text: str,
) -> Tuple[Optional[Dict[str, str]], Optional[str]]:
    """Try to extract nutrition values embedded in the notes field.

    Returns (nutrition_dict_or_None, cleaned_notes_or_None).
    Lines that contain matched nutrition data are removed from the returned notes.
    """
    if not notes_text:
        return None, notes_text

    nutrition: Dict[str, str] = {}
    remaining_lines: List[str] = []

    for line in notes_text.splitlines():
        matched = False
        for pattern, key in _NUTRITION_PATTERNS:
            m = re.search(pattern, line, re.I)
            if m:
                nutrition[key] = m.group(1)
                matched = True
                break
        if not matched:
            remaining_lines.append(line)

    if not nutrition:
        return None, notes_text

    cleaned = "\n".join(remaining_lines).strip() or None
    return nutrition, cleaned
