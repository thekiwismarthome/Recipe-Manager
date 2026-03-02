"""Recipe Manager integration for Home Assistant."""
from __future__ import annotations

import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.typing import ConfigType

from .const import (
    DOMAIN,
    EVENT_RECIPE_ADDED,
    EVENT_RECIPE_UPDATED,
    EVENT_RECIPE_DELETED,
    EVENT_MEAL_PLAN_UPDATED,
)
from .storage import RecipeStorage

_LOGGER = logging.getLogger(__name__)

DATA_STORAGE = f"{DOMAIN}_storage"


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Recipe Manager from a config entry."""
    _LOGGER.info("Setting up Recipe Manager")

    storage = RecipeStorage(hass)
    await storage.async_load()

    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN][DATA_STORAGE] = storage

    entry.async_on_unload(entry.add_update_listener(_update_listener))

    await _register_websocket_handlers(hass)
    await _register_frontend(hass)

    # Dummy listeners so non-admin users can subscribe to events
    def _noop(event):
        pass

    for evt in [EVENT_RECIPE_ADDED, EVENT_RECIPE_UPDATED, EVENT_RECIPE_DELETED, EVENT_MEAL_PLAN_UPDATED]:
        hass.bus.async_listen(evt, _noop)

    _LOGGER.info("Recipe Manager setup complete")
    return True


async def _update_listener(hass: HomeAssistant, entry: ConfigEntry) -> None:
    await hass.config_entries.async_reload(entry.entry_id)


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    _LOGGER.info("Unloading Recipe Manager")
    if DOMAIN in hass.data:
        hass.data[DOMAIN].pop(DATA_STORAGE, None)
    return True


async def _register_websocket_handlers(hass: HomeAssistant) -> None:
    from homeassistant.components import websocket_api
    from .websocket import handlers as h

    cmds = [
        h.websocket_subscribe,
        # Recipes
        h.websocket_get_all_recipes,
        h.websocket_get_recipe,
        h.websocket_scrape_recipe,
        h.websocket_add_recipe,
        h.websocket_update_recipe,
        h.websocket_delete_recipe,
        h.websocket_toggle_favourite,
        h.websocket_download_recipe_image,
        # Tags
        h.websocket_get_tags,
        # Meal Plan
        h.websocket_get_meal_plan,
        h.websocket_add_meal_plan,
        h.websocket_remove_meal_plan,
        h.websocket_clear_meal_plan,
        # Import
        h.websocket_import_recipe_keeper,
    ]
    for cmd in cmds:
        websocket_api.async_register_command(hass, cmd)


async def _register_frontend(hass: HomeAssistant) -> None:
    """Frontend resources are provided by the separate Recipe Manager Card HACS plugin."""
    _LOGGER.debug("Frontend resources skipped (separate HACS module)")
