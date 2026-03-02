"""WebSocket command handlers for Recipe Manager."""
from __future__ import annotations

import logging
from typing import Any, Dict

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from ..const import (
    DOMAIN,
    EVENT_RECIPE_ADDED,
    EVENT_RECIPE_UPDATED,
    EVENT_RECIPE_DELETED,
    EVENT_MEAL_PLAN_UPDATED,
    MEAL_TYPES,
)
from ..storage import RecipeStorage

_LOGGER = logging.getLogger(__name__)

DATA_STORAGE = f"{DOMAIN}_storage"


def get_storage(hass: HomeAssistant) -> RecipeStorage:
    return hass.data[DOMAIN][DATA_STORAGE]


# ===========================================================================
# Subscribe
# ===========================================================================

@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/subscribe"})
@websocket_api.async_response
async def websocket_subscribe(hass, connection, msg):
    """Subscribe to recipe manager events."""
    async def _forward(event):
        connection.send_message(
            websocket_api.event_message(
                msg["id"],
                {"event_type": event.event_type, "data": event.data},
            )
        )

    events = [
        EVENT_RECIPE_ADDED, EVENT_RECIPE_UPDATED,
        EVENT_RECIPE_DELETED, EVENT_MEAL_PLAN_UPDATED,
    ]
    unsubs = [hass.bus.async_listen(e, _forward) for e in events]

    @callback
    def _unsub():
        for unsub in unsubs:
            unsub()

    connection.subscriptions[msg["id"]] = _unsub
    connection.send_result(msg["id"], {"subscribed": True})


# ===========================================================================
# Recipes
# ===========================================================================

@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/recipes/get_all"})
@callback
def websocket_get_all_recipes(hass, connection, msg):
    """Return all recipes."""
    storage = get_storage(hass)
    recipes = [r.to_dict() for r in storage.get_all_recipes()]
    connection.send_result(msg["id"], {"recipes": recipes})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/recipes/get",
    vol.Required("recipe_id"): str,
})
@callback
def websocket_get_recipe(hass, connection, msg):
    """Return a single recipe by ID."""
    storage = get_storage(hass)
    recipe = storage.get_recipe(msg["recipe_id"])
    if not recipe:
        connection.send_error(msg["id"], "not_found", "Recipe not found")
        return
    connection.send_result(msg["id"], {"recipe": recipe.to_dict()})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/recipes/scrape",
    vol.Required("url"): str,
})
@websocket_api.async_response
async def websocket_scrape_recipe(hass, connection, msg):
    """Scrape a recipe from a URL and return the parsed data (not saved)."""
    from ..scraper import async_scrape_recipe

    try:
        data = await async_scrape_recipe(hass, msg["url"])
        connection.send_result(msg["id"], {"recipe": data})
    except ValueError as exc:
        connection.send_error(msg["id"], "scrape_failed", str(exc))


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/recipes/add",
    vol.Required("name"): str,
    vol.Optional("ingredients"): list,
    vol.Optional("instructions"): list,
    vol.Optional("tags"): list,
    vol.Optional("courses"): list,
    vol.Optional("categories"): list,
    vol.Optional("collections"): list,
    vol.Optional("source_url"): str,
    vol.Optional("description"): str,
    vol.Optional("image_url"): str,
    vol.Optional("cuisine"): str,
    vol.Optional("category"): str,
    vol.Optional("prep_time"): int,
    vol.Optional("cook_time"): int,
    vol.Optional("total_time"): int,
    vol.Optional("servings"): int,
    vol.Optional("servings_text"): str,
    vol.Optional("nutrition"): dict,
    vol.Optional("rating"): int,
    vol.Optional("notes"): str,
    vol.Optional("is_favourite"): bool,
    vol.Optional("download_image"): bool,
})
@websocket_api.async_response
async def websocket_add_recipe(hass, connection, msg):
    """Save a new recipe."""
    storage = get_storage(hass)
    data = {k: v for k, v in msg.items() if k not in ("id", "type")}

    # Optionally download and localise the image
    if msg.get("download_image") and data.get("image_url"):
        local_url = await storage.download_and_save_image(
            data["image_url"], "tmp_" + data["name"][:20].replace(" ", "_")
        )
        if local_url:
            data["image_url"] = local_url

    recipe = await storage.add_recipe(data)

    # Re-save with correct ID-based image filename
    if msg.get("download_image") and recipe.image_url and recipe.image_url.startswith("/local"):
        local_url = await storage.download_and_save_image(
            msg.get("image_url", recipe.image_url), recipe.id
        )
        if local_url:
            await storage.update_recipe(recipe.id, {"image_url": local_url})
            recipe = storage.get_recipe(recipe.id)

    hass.bus.async_fire(EVENT_RECIPE_ADDED, {"recipe_id": recipe.id})
    connection.send_result(msg["id"], {"recipe": recipe.to_dict()})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/recipes/update",
    vol.Required("recipe_id"): str,
    vol.Optional("name"): str,
    vol.Optional("ingredients"): list,
    vol.Optional("instructions"): list,
    vol.Optional("tags"): list,
    vol.Optional("courses"): list,
    vol.Optional("categories"): list,
    vol.Optional("collections"): list,
    vol.Optional("source_url"): str,
    vol.Optional("description"): str,
    vol.Optional("image_url"): str,
    vol.Optional("cuisine"): str,
    vol.Optional("category"): str,
    vol.Optional("prep_time"): int,
    vol.Optional("cook_time"): int,
    vol.Optional("total_time"): int,
    vol.Optional("servings"): int,
    vol.Optional("servings_text"): str,
    vol.Optional("nutrition"): dict,
    vol.Optional("notes"): str,
    vol.Optional("is_favourite"): bool,
    vol.Optional("rating"): int,
})
@websocket_api.async_response
async def websocket_update_recipe(hass, connection, msg):
    """Update an existing recipe."""
    storage = get_storage(hass)
    data = {k: v for k, v in msg.items() if k not in ("id", "type", "recipe_id")}
    recipe = await storage.update_recipe(msg["recipe_id"], data)
    if not recipe:
        connection.send_error(msg["id"], "not_found", "Recipe not found")
        return
    hass.bus.async_fire(EVENT_RECIPE_UPDATED, {"recipe_id": recipe.id})
    connection.send_result(msg["id"], {"recipe": recipe.to_dict()})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/recipes/delete",
    vol.Required("recipe_id"): str,
})
@websocket_api.async_response
async def websocket_delete_recipe(hass, connection, msg):
    """Delete a recipe."""
    storage = get_storage(hass)
    ok = await storage.delete_recipe(msg["recipe_id"])
    if not ok:
        connection.send_error(msg["id"], "not_found", "Recipe not found")
        return
    hass.bus.async_fire(EVENT_RECIPE_DELETED, {"recipe_id": msg["recipe_id"]})
    connection.send_result(msg["id"], {"deleted": True})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/recipes/toggle_favourite",
    vol.Required("recipe_id"): str,
})
@websocket_api.async_response
async def websocket_toggle_favourite(hass, connection, msg):
    """Toggle the favourite flag on a recipe."""
    storage = get_storage(hass)
    recipe = await storage.toggle_favourite(msg["recipe_id"])
    if not recipe:
        connection.send_error(msg["id"], "not_found", "Recipe not found")
        return
    hass.bus.async_fire(EVENT_RECIPE_UPDATED, {"recipe_id": recipe.id})
    connection.send_result(msg["id"], {"recipe": recipe.to_dict()})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/recipes/download_image",
    vol.Required("recipe_id"): str,
    vol.Required("image_url"): str,
})
@websocket_api.async_response
async def websocket_download_recipe_image(hass, connection, msg):
    """Download and localise a recipe image."""
    storage = get_storage(hass)
    local_url = await storage.download_and_save_image(msg["image_url"], msg["recipe_id"])
    if not local_url:
        connection.send_error(msg["id"], "download_failed", "Could not download image")
        return
    connection.send_result(msg["id"], {"local_url": local_url})


# ===========================================================================
# Tags
# ===========================================================================

@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/tags/get_all"})
@callback
def websocket_get_tags(hass, connection, msg):
    """Return all unique tags."""
    storage = get_storage(hass)
    connection.send_result(msg["id"], {"tags": storage.get_all_tags()})


# ===========================================================================
# Meal Plan
# ===========================================================================

@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/meal_plan/get",
    vol.Optional("week_start"): str,
})
@callback
def websocket_get_meal_plan(hass, connection, msg):
    """Return meal plan entries."""
    storage = get_storage(hass)
    entries = storage.get_meal_plan_entries(msg.get("week_start"))
    # Attach recipe title + image for convenience
    result = []
    for entry in entries:
        d = entry.to_dict()
        recipe = storage.get_recipe(entry.recipe_id)
        if recipe:
            d["recipe_name"] = recipe.name
            d["recipe_image"] = recipe.image_url
        result.append(d)
    connection.send_result(msg["id"], {"entries": result})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/meal_plan/add",
    vol.Required("recipe_id"): str,
    vol.Required("date"): str,
    vol.Required("meal_type"): vol.In(MEAL_TYPES),
    vol.Optional("servings"): int,
    vol.Optional("notes"): str,
})
@websocket_api.async_response
async def websocket_add_meal_plan(hass, connection, msg):
    """Add a recipe to the meal plan."""
    storage = get_storage(hass)
    entry = await storage.add_meal_plan_entry(
        recipe_id=msg["recipe_id"],
        date=msg["date"],
        meal_type=msg["meal_type"],
        servings=msg.get("servings", 1),
        notes=msg.get("notes"),
    )
    if not entry:
        connection.send_error(msg["id"], "not_found", "Recipe not found")
        return
    hass.bus.async_fire(EVENT_MEAL_PLAN_UPDATED, {})
    connection.send_result(msg["id"], {"entry": entry.to_dict()})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/meal_plan/remove",
    vol.Required("entry_id"): str,
})
@websocket_api.async_response
async def websocket_remove_meal_plan(hass, connection, msg):
    """Remove a meal plan entry."""
    storage = get_storage(hass)
    ok = await storage.remove_meal_plan_entry(msg["entry_id"])
    if not ok:
        connection.send_error(msg["id"], "not_found", "Entry not found")
        return
    hass.bus.async_fire(EVENT_MEAL_PLAN_UPDATED, {})
    connection.send_result(msg["id"], {"removed": True})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/meal_plan/clear",
    vol.Required("week_start"): str,
})
@websocket_api.async_response
async def websocket_clear_meal_plan(hass, connection, msg):
    """Clear all meal plan entries for a week."""
    storage = get_storage(hass)
    count = await storage.clear_meal_plan_week(msg["week_start"])
    hass.bus.async_fire(EVENT_MEAL_PLAN_UPDATED, {})
    connection.send_result(msg["id"], {"cleared": count})


# ===========================================================================
# Import
# ===========================================================================

@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/import/recipe_keeper",
    vol.Required("html_content"): str,
})
@websocket_api.async_response
async def websocket_import_recipe_keeper(hass, connection, msg):
    """Import recipes from Recipe Keeper HTML content.

    The frontend parses the ZIP with JSZip and sends only the HTML text here.
    Images are uploaded separately via recipe_manager/recipes/upload_image so
    that large photo sets don't exceed the WebSocket message size limit.
    """
    from ..importer import parse_recipe_keeper_html

    try:
        recipes = parse_recipe_keeper_html(msg["html_content"])
    except ValueError as exc:
        connection.send_error(msg["id"], "parse_failed", str(exc))
        return

    storage = get_storage(hass)
    imported = 0
    failed = 0
    recipe_images: list = []

    for recipe_data in recipes:
        try:
            image_filename = recipe_data.pop("_image_filename", None)
            recipe_data.pop("_image_bytes", None)  # not used in this path

            recipe = await storage.add_recipe(recipe_data)
            hass.bus.async_fire(EVENT_RECIPE_ADDED, {"recipe_id": recipe.id})

            if image_filename:
                recipe_images.append({
                    "recipe_id": recipe.id,
                    "image_filename": image_filename,
                })

            imported += 1
        except Exception as exc:  # noqa: BLE001
            _LOGGER.warning("Failed to import recipe '%s': %s", recipe_data.get("name"), exc)
            failed += 1

    _LOGGER.info("Recipe Keeper import: %d imported, %d failed", imported, failed)
    connection.send_result(msg["id"], {
        "imported": imported,
        "failed": failed,
        "recipe_images": recipe_images,
    })


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/recipes/upload_image",
    vol.Required("recipe_id"): str,
    vol.Required("image_data"): str,  # base64-encoded image bytes
})
@websocket_api.async_response
async def websocket_upload_recipe_image(hass, connection, msg):
    """Save a base64-encoded image for a recipe and update its image_url."""
    import base64

    storage = get_storage(hass)
    recipe = storage.get_recipe(msg["recipe_id"])
    if not recipe:
        connection.send_error(msg["id"], "not_found", "Recipe not found")
        return

    try:
        raw = base64.b64decode(msg["image_data"])
    except Exception as exc:
        connection.send_error(msg["id"], "invalid_data", f"Could not decode image: {exc}")
        return

    local_url = await storage.save_image_from_bytes(raw, msg["recipe_id"])
    if not local_url:
        connection.send_error(msg["id"], "save_failed", "Could not save image file")
        return

    await storage.update_recipe(msg["recipe_id"], {"image_url": local_url})
    connection.send_result(msg["id"], {"image_url": local_url})
