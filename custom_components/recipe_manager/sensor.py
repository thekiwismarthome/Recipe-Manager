"""Sensors exposing Recipe Manager's global (shared) timers to Home Assistant.

Two entities are created per config entry:

* ``sensor.recipe_manager_timers``      - number of active (running/paused) timers,
                                          with the full timer list as an attribute.
* ``sensor.recipe_manager_next_timer``  - timestamp of the soonest running timer
                                          (usable as a ``time`` trigger).

Timers are stored with an absolute start time, so the finish time is exact and
never goes stale. The sensors refresh on every global-timer event and again at
the moment the next running timer finishes.
"""
from __future__ import annotations

from datetime import datetime
from typing import Any, Callable, Optional

from homeassistant.components.sensor import SensorDeviceClass, SensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.device_registry import DeviceEntryType, DeviceInfo
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.event import async_track_point_in_utc_time
from homeassistant.util import dt as dt_util

from .const import (
    DOMAIN,
    EVENT_GLOBAL_TIMER_ADDED,
    EVENT_GLOBAL_TIMER_UPDATED,
    EVENT_GLOBAL_TIMER_DELETED,
)
from .websocket.handlers import get_timer_storage

_EVENTS = (
    EVENT_GLOBAL_TIMER_ADDED,
    EVENT_GLOBAL_TIMER_UPDATED,
    EVENT_GLOBAL_TIMER_DELETED,
)

_STATUS_ORDER = {"running": 0, "paused": 1, "finished": 2}


def summarise_timers(timers: list[dict], now_ts: float) -> list[dict[str, Any]]:
    """Turn raw stored timers into a sorted list of display dicts."""
    items: list[dict[str, Any]] = []
    for t in timers:
        duration = int(t.get("duration") or 0)
        item: dict[str, Any] = {
            "id": t.get("id"),
            "label": t.get("label"),
            "duration": duration,
        }
        if t.get("running"):
            end_ts = float(t.get("start_time") or now_ts) + duration
            item["status"] = "running" if end_ts > now_ts else "finished"
            item["finishes_at"] = dt_util.utc_from_timestamp(end_ts).isoformat()
            item["_end_ts"] = end_ts
        else:
            remaining = t.get("paused_remaining")
            item["status"] = "paused"
            item["remaining"] = int(duration if remaining is None else remaining)
        items.append(item)

    items.sort(key=lambda i: (_STATUS_ORDER[i["status"]], i.get("_end_ts", 0)))
    return items


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the timer sensors."""
    async_add_entities([
        RecipeManagerTimersSensor(hass, entry),
        RecipeManagerNextTimerSensor(hass, entry),
    ])


class _BaseTimerSensor(SensorEntity):
    """Shared plumbing: listen for timer events and the next finish time."""

    _attr_has_entity_name = True
    _attr_should_poll = False

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry, key: str) -> None:
        self.hass = hass
        self._attr_unique_id = f"{entry.entry_id}_{key}"
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, entry.entry_id)},
            name="Recipe Manager",
            entry_type=DeviceEntryType.SERVICE,
        )
        self._unsub_finish: Optional[Callable[[], None]] = None

    async def async_added_to_hass(self) -> None:
        for evt in _EVENTS:
            self.async_on_remove(self.hass.bus.async_listen(evt, self._handle_event))
        self._refresh()

    async def async_will_remove_from_hass(self) -> None:
        self._cancel_finish()

    def _cancel_finish(self) -> None:
        if self._unsub_finish is not None:
            self._unsub_finish()
            self._unsub_finish = None

    @callback
    def _handle_event(self, event) -> None:
        self._refresh()
        self.async_write_ha_state()

    @callback
    def _handle_finish(self, now: datetime) -> None:
        self._unsub_finish = None
        self._refresh()
        self.async_write_ha_state()

    @callback
    def _refresh(self) -> None:
        now_ts = dt_util.utcnow().timestamp()
        items = summarise_timers(get_timer_storage(self.hass).get_timers(), now_ts)
        self._apply(items)

        # Re-run when the soonest running timer finishes so status/state move on.
        self._cancel_finish()
        running = [i["_end_ts"] for i in items if i["status"] == "running"]
        if running:
            self._unsub_finish = async_track_point_in_utc_time(
                self.hass, self._handle_finish, dt_util.utc_from_timestamp(min(running))
            )

    def _apply(self, items: list[dict[str, Any]]) -> None:
        raise NotImplementedError


class RecipeManagerTimersSensor(_BaseTimerSensor):
    """Count of active timers, with every timer listed in the attributes."""

    _attr_name = "Timers"
    _attr_icon = "mdi:timer-outline"
    _attr_native_unit_of_measurement = "timers"

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry) -> None:
        super().__init__(hass, entry, "timers")

    def _apply(self, items: list[dict[str, Any]]) -> None:
        self._attr_native_value = sum(1 for i in items if i["status"] in ("running", "paused"))
        self._attr_extra_state_attributes = {
            "finished": sum(1 for i in items if i["status"] == "finished"),
            "timers": [{k: v for k, v in i.items() if not k.startswith("_")} for i in items],
        }


class RecipeManagerNextTimerSensor(_BaseTimerSensor):
    """Timestamp of the soonest running timer."""

    _attr_name = "Next timer"
    _attr_icon = "mdi:timer-sand"
    _attr_device_class = SensorDeviceClass.TIMESTAMP

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry) -> None:
        super().__init__(hass, entry, "next_timer")

    def _apply(self, items: list[dict[str, Any]]) -> None:
        nxt = next((i for i in items if i["status"] == "running"), None)
        if nxt is None:
            self._attr_native_value = None
            self._attr_extra_state_attributes = {"label": None, "timer_id": None}
            return
        self._attr_native_value = dt_util.utc_from_timestamp(nxt["_end_ts"])
        self._attr_extra_state_attributes = {"label": nxt["label"], "timer_id": nxt["id"]}
