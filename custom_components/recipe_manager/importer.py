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

    containers = soup.find_all(class_="recipe-details")
    if not containers:
        containers = [
            el for el in soup.find_all(["article", "section", "div"])
            if el.find(class_=re.compile(r"recipe-name", re.I))
        ]

    if not containers:
        raise ValueError(
            "No recipe containers found — check this is a valid Recipe Keeper export"
        )

    recipes: List[Dict[str, Any]] = []
    for container in containers:
        try:
            recipe = _parse_recipe_container(container, images)
            if recipe and recipe.get("name"):
                recipes.append(recipe)
        except Exception as exc:  # noqa: BLE001
            _LOGGER.debug("Skipping unparseable recipe container: %s", exc)

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
    ing_el = container.find(class_=re.compile(r"recipe-ingredients?", re.I))
    if ing_el:
        for li in ing_el.find_all("li"):
            txt = li.get_text(" ", strip=True)
            if txt:
                ingredients.append(_parse_ingredient_line(txt))

    # --- Instructions ---
    instructions: List[str] = []
    method_el = container.find(
        class_=re.compile(r"recipe-(method|directions?|instructions?)", re.I)
    )
    if method_el:
        for li in method_el.find_all("li"):
            txt = li.get_text(" ", strip=True)
            if txt:
                instructions.append(txt)

    # --- Nutrition (best-effort) ---
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


def _parse_ingredient_line(raw: str) -> Dict[str, Any]:
    """Split an ingredient string into {amount, unit, name}."""
    raw = raw.strip()
    pattern = re.compile(
        r"^"
        r"(?P<amount>\d+(?:[.,/]\d+)?(?:\s*[-–]\s*\d+(?:[.,/]\d+)?)?"
        r"(?:\s+\d+/\d+)?)?"
        r"\s*"
        r"(?P<unit>tsp|tbsp|tablespoons?|teaspoons?|cups?|oz|lbs?|g|kg|ml|L"
        r"|litres?|liters?|pints?|quarts?|gallons?|fl\.?\s*oz|cans?"
        r"|bunches?|heads?|cloves?|slices?|pieces?|sheets?|pinch(?:es)?"
        r"|dash(?:es)?|handfuls?|sprigs?|stalks?)\.?"
        r")?\s*"
        r"(?P<name>.+?)$",
        re.IGNORECASE,
    )
    m = pattern.match(raw)
    if not m:
        return {"name": raw, "amount": None, "unit": None, "notes": None}

    amount = (m.group("amount") or "").strip() or None
    unit = (m.group("unit") or "").strip() or None
    rest = (m.group("name") or "").strip()
    name, notes = rest, None
    if "," in rest:
        parts = rest.split(",", 1)
        name = parts[0].strip()
        notes = parts[1].strip()
    return {"name": name, "amount": amount, "unit": unit, "notes": notes}
