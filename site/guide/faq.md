---
title: FAQ and troubleshooting
---

# FAQ and troubleshooting

## Troubleshooting

| Problem | What to try |
|---|---|
| The card says "Custom element doesn't exist" | Restart Home Assistant after installing, then hard refresh the browser (**Ctrl+Shift+R**). |
| Integration not found when adding it | You need to restart Home Assistant after the HACS download. |
| The card says "Connecting…" or recipes do not load | Check that **Recipe Manager** is listed under **Settings → Devices & services**, and that the page can reach Home Assistant's WebSocket (a reverse proxy must allow it). |
| The card still looks old after an update | Restart Home Assistant, then hard refresh. Mobile apps may need the app's cache cleared too. |
| Scraping fails | The site may block automated requests, or have no readable recipe data. Try another site, or use **Enter manually instead**. |
| Photos do not show | Check that `config/www/images/recipe_manager/` exists and Home Assistant can write to it. Photos are served from `/local/images/recipe_manager/`. |
| "Keep screen on" is not available | Browsers only allow it over HTTPS. Open Home Assistant through a secure address. |
| A timer finished but there was no sound | Browsers only play sound after you have touched the page. Tap the card once, and check **Settings → Advanced → Timer sound** is not set to Silent. |
| Timers show on one device only | They were started as "this device" timers. Switch on **Global** before starting to share them. |
| Metric conversion button is missing | Turn on **Show metric conversion button** in **Settings → Advanced**. |

## Questions

### Do I need an account or an internet connection?

No account. Everything is stored on your own Home Assistant. You only need the internet to scrape a recipe from a web page or to fetch a photo from a link.

### Who can see my recipes?

Everyone who can open a dashboard with the card on your Home Assistant sees the same recipes and meal plan. Settings such as the look and language are saved per browser.

### Do I need to install the card separately?

No. The integration serves its own copy of the card. If you also install the card from HACS, both can exist together.

### Is there a limit on recipes?

There is no limit built in. Recipes are small pieces of text and each photo is compressed to a small WebP file.

### Can I move my recipes in from another app?

Yes, from Recipe Keeper, using the **Import** tab. See [Adding and editing recipes](adding-recipes). For anything else, scrape the recipe from its web page or enter it by hand.

### Does it work with Shopping List Manager?

Yes, and it is optional. See [Shopping list](shopping).

### Which languages are available?

English, German, Spanish, French, Italian, Dutch and Portuguese.

## Still stuck?

Open an issue on [GitHub](https://github.com/thekiwismarthome/Recipe-Manager/issues). Say which versions of Home Assistant, Recipe Manager and your browser you use, and what you did before it went wrong. The **Settings → Help** page shows the Recipe Manager and card versions and has a **Report a problem** link.
