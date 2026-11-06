---
title: Backup
---

# Backup

## Download a backup file

Go to **Settings → Sync** and press **Download backup**. Your browser saves a file called `recipe-manager-backup-` followed by today's date. It is plain JSON and holds:

- every recipe, with its ingredients, steps, nutrition, notes, tags, courses, categories, collections and rating
- every meal plan entry

It does not include the photo files themselves, only the address each recipe uses. It does not include your card settings or your timers.

::: info Restoring
The card does not have a Restore button yet. The file is there so your recipes are never locked in: you can read it in any text editor, keep a copy before an upgrade, or hand it to someone to help you.
:::

## Back up the whole thing

Recipes and meal plans live in Home Assistant's own storage, and photos live in `config/www/images/recipe_manager/`. A normal Home Assistant backup (**Settings → System → Backups**) therefore covers both. Take one before you upgrade, and keep a copy somewhere off the Home Assistant machine.

## Everything stays local

Recipes, photos and plans are stored on your Home Assistant and are not sent anywhere. The only time Recipe Manager reaches out is when *you* paste a web address to scrape, or ask it to download a photo from a link.
