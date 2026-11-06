---
title: Getting started
---

# Getting started

Recipe Manager has two parts that arrive together. The **integration** stores your recipes and meal plan on your Home Assistant. The **card** is the screen you use. The integration serves its own copy of the card, so you only install one thing.

You need Home Assistant **2024.8.0** or newer and [HACS](https://hacs.xyz).

## 1. Add the integration with HACS

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=thekiwismarthome&repository=Recipe-Manager&category=integration)

Or add it by hand:

1. Open **HACS** in the Home Assistant sidebar and choose **Integrations**.
2. Open the three-dot menu, then **Custom repositories**.
3. Paste `https://github.com/thekiwismarthome/Recipe-Manager`, choose the category **Integration** and press **Add**.
4. Find **Recipe Manager** in the list and press **Download**.

Then restart Home Assistant from **Settings → System → Restart**.

## 2. Set up the integration

[![Open your Home Assistant instance and start setting up a new integration.](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=recipe_manager)

Go to **Settings → Devices & services → Add integration**, search for **Recipe Manager** and follow the prompt. There are no accounts or settings to fill in, and only one Recipe Manager can be set up per Home Assistant.

## 3. Add the card to a dashboard

1. Open a dashboard and press **Edit** (the pencil).
2. Choose **Add card** and search for **Recipe Manager Card**.
3. Press **Save**.

Or add it in the YAML editor:

```yaml
type: custom:recipe-manager-card
```

::: tip Give it room
The card works best on its own dashboard tab. Choose the **Panel (single card)** view type and it will fill the whole screen, with the bottom bar on a phone and the sidebar on a tablet or desktop.
:::

If you also install the [Recipe Manager Card](https://github.com/thekiwismarthome/Recipe-Manager-Card) repository from HACS, that is fine. The two copies do not clash.

## 4. Add your first recipe

Press the **+** button, then pick one of three ways:

- **From URL.** Paste the address of a recipe page.
- **Manual.** Type it in yourself.
- **Import.** Bring in a Recipe Keeper export.

[Adding and editing recipes](adding-recipes) explains each one.

## Updating

Updates arrive through HACS. After you update, restart Home Assistant and do a hard refresh in the browser (**Ctrl+Shift+R**, or **Cmd+Shift+R** on a Mac) so you get the new card and not the cached one.

## Try it first

Not sure yet? The [live demo](../demo) runs the real card on sample recipes in your browser.
