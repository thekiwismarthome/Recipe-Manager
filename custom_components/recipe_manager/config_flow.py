"""Config flow for Recipe Manager."""
import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback

from .const import DOMAIN


class RecipeManagerConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Recipe Manager."""

    VERSION = 1

    async def async_step_user(self, user_input=None):
        """Handle the initial step."""
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")

        if user_input is not None:
            return self.async_create_entry(title="Recipe Manager", data={})

        return self.async_show_form(step_id="user")

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        return OptionsFlowHandler(config_entry)


class OptionsFlowHandler(config_entries.OptionsFlow):
    """Handle options flow."""

    def __init__(self, config_entry):
        self.config_entry = config_entry

    async def async_step_init(self, user_input=None):
        if user_input is not None:
            return self.async_create_entry(title="", data=user_input)

        return self.async_show_form(
            step_id="init",
            data_schema=vol.Schema({
                vol.Optional(
                    "default_servings",
                    default=self.config_entry.options.get("default_servings", 4),
                ): vol.In([1, 2, 4, 6, 8]),
                vol.Optional(
                    "download_images",
                    default=self.config_entry.options.get("download_images", True),
                ): bool,
            }),
        )
