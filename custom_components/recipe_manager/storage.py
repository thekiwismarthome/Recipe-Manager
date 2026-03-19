"""Storage management for Recipe Manager."""
from __future__ import annotations

import io
import logging
import re
import shutil
from pathlib import Path
from typing import Dict, List, Optional

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import (
    STORAGE_VERSION,
    STORAGE_KEY_RECIPES,
    STORAGE_KEY_MEAL_PLANS,
    IMAGES_LOCAL_DIR,
    LEGACY_IMAGES_LOCAL_DIR,
    IMAGE_SIZE,
    IMAGE_QUALITY,
)
from .models import Recipe, MealPlanEntry, Ingredient, generate_id, current_timestamp

_LOGGER = logging.getLogger(__name__)
LOCAL_IMAGE_URL_PREFIX = "/local/images/recipe_manager/"
LEGACY_IMAGE_URL_PREFIX = "/local/recipe_manager/images/"


class RecipeStorage:
    """Handle persistent storage for Recipe Manager."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._store_recipes = Store(hass, STORAGE_VERSION, STORAGE_KEY_RECIPES)
        self._store_meal_plans = Store(hass, STORAGE_VERSION, STORAGE_KEY_MEAL_PLANS)
        self._recipes: Dict[str, Recipe] = {}
        self._meal_plans: Dict[str, MealPlanEntry] = {}
        self._images_dir = Path(hass.config.path(IMAGES_LOCAL_DIR))
        self._legacy_images_dir = Path(hass.config.path(LEGACY_IMAGES_LOCAL_DIR))

    async def async_load(self) -> None:
        """Load all data from storage."""
        # Recipes
        recipes_data = await self._store_recipes.async_load()
        if recipes_data:
            for rid, rdata in recipes_data.items():
                try:
                    self._recipes[rid] = Recipe.from_dict(rdata)
                except Exception as exc:
                    _LOGGER.warning("Skipping corrupt recipe %s: %s", rid, exc)
        _LOGGER.info("Loaded %d recipes", len(self._recipes))

        # Meal plans
        mp_data = await self._store_meal_plans.async_load()
        if mp_data:
            for mpid, mpdata in mp_data.items():
                try:
                    self._meal_plans[mpid] = MealPlanEntry.from_dict(mpdata)
                except Exception as exc:
                    _LOGGER.warning("Skipping corrupt meal plan entry %s: %s", mpid, exc)
        _LOGGER.info("Loaded %d meal plan entries", len(self._meal_plans))

        # Ensure image directory exists
        self._images_dir.mkdir(parents=True, exist_ok=True)
        await self._migrate_legacy_images()

    # ------------------------------------------------------------------
    # Recipes
    # ------------------------------------------------------------------

    def get_all_recipes(self) -> List[Recipe]:
        return list(self._recipes.values())

    def get_recipe(self, recipe_id: str) -> Optional[Recipe]:
        return self._recipes.get(recipe_id)

    async def add_recipe(self, data: dict) -> Recipe:
        """Create and persist a new recipe."""
        recipe_id = generate_id()
        now = current_timestamp()
        recipe = Recipe(
            id=recipe_id,
            name=data.get("name") or data.get("title", ""),
            ingredients=[Ingredient.from_dict(i) for i in data.get("ingredients", [])],
            instructions=data.get("instructions", []),
            tags=data.get("tags", []),
            courses=data.get("courses", []),
            categories=data.get("categories", []),
            collections=data.get("collections", []),
            source_url=data.get("source_url"),
            description=data.get("description"),
            image_url=data.get("image_url"),
            cuisine=data.get("cuisine"),
            category=data.get("category"),
            prep_time=data.get("prep_time"),
            cook_time=data.get("cook_time"),
            total_time=data.get("total_time"),
            servings=data.get("servings"),
            servings_text=data.get("servings_text"),
            nutrition=data.get("nutrition"),
            is_favourite=data.get("is_favourite", False),
            rating=data.get("rating"),
            notes=data.get("notes"),
            created_at=now,
            updated_at=now,
        )
        self._recipes[recipe_id] = recipe
        await self._save_recipes()
        return recipe

    async def update_recipe(self, recipe_id: str, data: dict) -> Optional[Recipe]:
        """Update an existing recipe."""
        recipe = self._recipes.get(recipe_id)
        if not recipe:
            return None

        updatable = [
            "name", "source_url", "description", "image_url", "cuisine", "category",
            "prep_time", "cook_time", "total_time", "servings", "servings_text",
            "nutrition", "is_favourite", "rating", "notes", "tags",
            "courses", "categories", "collections",
        ]
        for key in updatable:
            if key in data:
                setattr(recipe, key, data[key])

        if "ingredients" in data:
            recipe.ingredients = [Ingredient.from_dict(i) for i in data["ingredients"]]
        if "instructions" in data:
            recipe.instructions = data["instructions"]

        recipe.updated_at = current_timestamp()
        await self._save_recipes()
        return recipe

    async def delete_recipe(self, recipe_id: str) -> bool:
        """Delete a recipe and its meal plan entries."""
        if recipe_id not in self._recipes:
            return False
        del self._recipes[recipe_id]
        # Remove any meal plan entries for this recipe
        stale = [k for k, v in self._meal_plans.items() if v.recipe_id == recipe_id]
        for k in stale:
            del self._meal_plans[k]
        await self._save_recipes()
        if stale:
            await self._save_meal_plans()
        return True

    async def toggle_favourite(self, recipe_id: str) -> Optional[Recipe]:
        """Toggle the favourite flag on a recipe."""
        recipe = self._recipes.get(recipe_id)
        if not recipe:
            return None
        recipe.is_favourite = not recipe.is_favourite
        recipe.updated_at = current_timestamp()
        await self._save_recipes()
        return recipe

    # ------------------------------------------------------------------
    # Tags
    # ------------------------------------------------------------------

    def get_all_tags(self) -> List[str]:
        """Return all unique tags across all recipes, sorted."""
        tags: set[str] = set()
        for recipe in self._recipes.values():
            tags.update(recipe.tags)
        return sorted(tags)

    # ------------------------------------------------------------------
    # Meal Plans
    # ------------------------------------------------------------------

    def get_meal_plan_entries(self, week_start: Optional[str] = None) -> List[MealPlanEntry]:
        """Return meal plan entries, optionally filtered to a week."""
        entries = list(self._meal_plans.values())
        if week_start:
            # Return entries whose date falls within 7 days from week_start
            from datetime import date, timedelta
            try:
                start = date.fromisoformat(week_start)
                end = start + timedelta(days=6)
                entries = [
                    e for e in entries
                    if start <= date.fromisoformat(e.date) <= end
                ]
            except ValueError:
                pass
        return entries

    async def add_meal_plan_entry(
        self, recipe_id: str, date: str, meal_type: str, servings: int = 1, notes: str = None
    ) -> Optional[MealPlanEntry]:
        """Add a recipe to the meal plan."""
        if recipe_id not in self._recipes:
            return None
        entry = MealPlanEntry(
            id=generate_id(),
            recipe_id=recipe_id,
            date=date,
            meal_type=meal_type,
            servings=servings,
            notes=notes,
        )
        self._meal_plans[entry.id] = entry
        await self._save_meal_plans()
        return entry

    async def remove_meal_plan_entry(self, entry_id: str) -> bool:
        if entry_id not in self._meal_plans:
            return False
        del self._meal_plans[entry_id]
        await self._save_meal_plans()
        return True

    async def clear_meal_plan_week(self, week_start: str) -> int:
        """Remove all entries for a given week."""
        entries = self.get_meal_plan_entries(week_start)
        for e in entries:
            del self._meal_plans[e.id]
        if entries:
            await self._save_meal_plans()
        return len(entries)

    # ------------------------------------------------------------------
    # Image download + save
    # ------------------------------------------------------------------

    @staticmethod
    def _process_and_write_image(raw: bytes, dest: Path) -> None:
        """Synchronous: convert raw image bytes to WebP and write to dest (runs in executor)."""
        from PIL import Image
        img = Image.open(io.BytesIO(raw))
        if img.mode == "RGBA":
            bg = Image.new("RGB", img.size, (255, 255, 255))
            bg.paste(img, mask=img.split()[3])
            img = bg
        elif img.mode != "RGB":
            img = img.convert("RGB")
        img.thumbnail((IMAGE_SIZE, IMAGE_SIZE), Image.LANCZOS)
        out = io.BytesIO()
        img.save(out, format="WEBP", quality=IMAGE_QUALITY)
        dest.write_bytes(out.getvalue())

    async def download_and_save_image(self, image_url: str, recipe_id: str) -> Optional[str]:
        """Download a remote image, convert to WebP, return local URL."""
        from homeassistant.helpers.aiohttp_client import async_get_clientsession
        from aiohttp import ClientTimeout

        safe_id = re.sub(r"[^a-z0-9_-]", "", recipe_id.lower())
        filename = f"recipe_{safe_id}.webp"
        dest = self._images_dir / filename

        try:
            session = async_get_clientsession(self.hass)
            headers = {"User-Agent": "Mozilla/5.0 (compatible; HomeAssistant/RecipeManager)"}
            async with session.get(
                image_url, timeout=ClientTimeout(total=15), headers=headers
            ) as resp:
                if resp.status != 200:
                    return None
                raw = await resp.read()
        except Exception as exc:
            _LOGGER.warning("Failed to download recipe image %s: %s", image_url, exc)
            return None

        try:
            await self.hass.async_add_executor_job(self._process_and_write_image, raw, dest)
            return f"{LOCAL_IMAGE_URL_PREFIX}{filename}"
        except Exception as exc:
            _LOGGER.warning("Failed to convert recipe image: %s", exc)
            return None

    async def save_image_from_bytes(self, raw: bytes, recipe_id: str) -> Optional[str]:
        """Convert raw image bytes to WebP and save locally, return local URL."""
        safe_id = re.sub(r"[^a-z0-9_-]", "", recipe_id.lower())
        filename = f"recipe_{safe_id}.webp"
        dest = self._images_dir / filename

        try:
            await self.hass.async_add_executor_job(self._process_and_write_image, raw, dest)
            return f"{LOCAL_IMAGE_URL_PREFIX}{filename}"
        except Exception as exc:
            _LOGGER.warning("Failed to save image from bytes for %s: %s", recipe_id, exc)
            return None

    async def _migrate_legacy_images(self) -> None:
        """Move old image files and URLs to the new standard path."""
        moved_files = 0
        updated_urls = 0

        if self._legacy_images_dir.exists() and self._legacy_images_dir != self._images_dir:
            for src in self._legacy_images_dir.glob("*"):
                if not src.is_file():
                    continue
                dest = self._images_dir / src.name
                if dest.exists():
                    continue
                try:
                    shutil.move(str(src), str(dest))
                    moved_files += 1
                except Exception as exc:
                    _LOGGER.debug("Could not move legacy image %s: %s", src, exc)

        for recipe in self._recipes.values():
            image_url = recipe.image_url or ""
            if image_url.startswith(LEGACY_IMAGE_URL_PREFIX):
                recipe.image_url = image_url.replace(
                    LEGACY_IMAGE_URL_PREFIX, LOCAL_IMAGE_URL_PREFIX, 1
                )
                recipe.updated_at = current_timestamp()
                updated_urls += 1

        if updated_urls:
            await self._save_recipes()

        if moved_files or updated_urls:
            _LOGGER.info(
                "Migrated recipe images to %s (moved_files=%d, updated_urls=%d)",
                IMAGES_LOCAL_DIR,
                moved_files,
                updated_urls,
            )

    # ------------------------------------------------------------------
    # Private save helpers
    # ------------------------------------------------------------------

    async def _save_recipes(self) -> None:
        data = {rid: r.to_dict() for rid, r in self._recipes.items()}
        await self._store_recipes.async_save(data)

    async def _save_meal_plans(self) -> None:
        data = {mid: m.to_dict() for mid, m in self._meal_plans.items()}
        await self._store_meal_plans.async_save(data)
