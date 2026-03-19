# Recipe Manager for Home Assistant

A Home Assistant custom integration that gives you a full recipe management system — store, search, scrape, and meal-plan your recipes, all inside Home Assistant.

> **This is the backend integration.** To use it you also need the [Recipe Manager Card](https://github.com/thekiwismarthome/Recipe-Manager-Card) frontend, which is installed separately via HACS.

---

## Features

- **Recipe library** — store unlimited recipes with ingredients, directions, nutrition facts, images, notes, tags, courses, categories and collections
- **Web scraping** — import recipes directly from any major recipe website by pasting a URL
- **Recipe Keeper import** — bulk-import your existing collection from a Recipe Keeper HTML export
- **Meal planner** — plan breakfast, lunch, dinner and snacks across a weekly calendar
- **Image management** — upload images from your device or download and cache remote images locally
- **Shopping list** — add recipe ingredients to a shopping list (works with [Shopping List Manager Card](https://github.com/thekiwismarthome/shopping-list-manager-card))
- **Real-time updates** — WebSocket event stream keeps every dashboard in sync instantly
- **Fully local** — all data stored on your Home Assistant instance, no cloud required

---

## Requirements

- Home Assistant **2024.8.0** or newer
- HACS installed ([hacs.xyz](https://hacs.xyz))

---

## Installation

### Step 1 — Add via HACS

Click the button below to add this repository directly to HACS:

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thekiwismarthome&repository=Recipe-Manager&category=integration)

<details>
<summary>Manual HACS steps</summary>

1. Open HACS in your Home Assistant sidebar
2. Click **Integrations**
3. Click the three-dot menu (top right) → **Custom repositories**
4. Paste `https://github.com/thekiwismarthome/Recipe-Manager` and select category **Integration**
5. Click **Add**, then search for **Recipe Manager** and click **Download**

</details>

### Step 2 — Restart Home Assistant

Go to **Settings → System → Restart** and wait for HA to come back up.

### Step 3 — Add the Integration

Click the button below to add the integration to your Home Assistant:

[![Open your Home Assistant instance and start setting up a new integration.](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=recipe_manager)

<details>
<summary>Manual steps</summary>

1. Go to **Settings → Devices & Services → Add Integration**
2. Search for **Recipe Manager** and click it
3. Follow the setup wizard (no credentials needed — it runs fully locally)

</details>

### Step 4 — Install the Card

Install the [Recipe Manager Card](https://github.com/thekiwismarthome/Recipe-Manager-Card) to get the full UI. See that repo for card installation instructions.

---

## Adding the Card to Your Dashboard

Once both are installed:

1. Go to any dashboard and enter **Edit mode**
2. Click **Add Card** → search for **Custom: Recipe Manager Card**
3. Add it and save

---

## Updating

Updates are managed through HACS. When a new version is available you will see a notification in the HACS panel. Click **Update** then restart Home Assistant.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Integration not found after install | Make sure you restarted Home Assistant |
| Recipe scraping fails | The site may block bots — try a different recipe site |
| Images not loading | Check that `/config/www/images/recipe_manager/` exists and is writable |
| Card not appearing | Make sure Recipe Manager Card is also installed via HACS |

---

## Related

- [Recipe Manager Card](https://github.com/thekiwismarthome/Recipe-Manager-Card) — the Lovelace frontend UI
- [Shopping List Manager Card](https://github.com/thekiwismarthome/shopping-list-manager-card) — optional shopping list integration

---

## License

MIT License — see [LICENSE](LICENSE)
