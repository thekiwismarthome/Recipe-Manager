# Release Notes — Recipe Manager v1.0.0

First public release of the Recipe Manager Home Assistant integration.

## What's Included

### Recipe Storage
- Full recipe data model: name, description, ingredients, directions, nutrition, notes, images, tags, courses, categories and collections
- Rating (1–5 stars) and favourites
- UUID-based recipe IDs with creation/update timestamps
- JSON storage via Home Assistant's built-in `Store` class (no external database needed)

### Recipe Scraping
- Import recipes from any major recipe website by URL
- Extracts title, description, ingredients, directions, nutrition, images and metadata automatically
- Improved browser-like request headers to work with Cloudflare-protected sites
- Falls back to JSON-LD extraction for sites that hide structured data
- Ingredient parser correctly separates amount, unit and name

### Image Management
- Upload images from the Lovelace card (base64 transfer, saved as WebP)
- Download and cache remote images locally (`/config/www/images/recipe_manager/`)
- Images resized to max 400 px and converted to WebP on save

### Recipe Keeper Import
- Bulk import from a Recipe Keeper HTML export file
- Imports all recipes including images in a single operation

### Meal Planner
- Weekly meal plan storage with breakfast, lunch, dinner and snack slots
- Get/set plan entries via WebSocket

### WebSocket API
- Full real-time WebSocket API for the Lovelace card
- Event subscriptions: `recipe_added`, `recipe_updated`, `recipe_deleted`, `meal_plan_updated`
- Commands: get all recipes, get recipe, add, update, delete, toggle favourite, scrape URL, upload image, download image, get tags, get/update meal plan, import Recipe Keeper

### Tags
- Tags computed on-the-fly from all recipes — no separate tag storage needed

## Installation

See the [README](README.md) for full HACS installation instructions.

> **Also install:** [Recipe Manager Card](https://github.com/thekiwismarthome/Recipe-Manager-Card) to get the Lovelace UI frontend.
