---
layout: home
title: Recipe Manager
titleTemplate: Recipes, meal plans and timers for Home Assistant
hero:
  name: Home Assistant integration + card
  text: Every recipe you cook, inside Home Assistant.
  tagline: Keep your recipes, plan the week's dinners, send ingredients to the shopping list and run the kitchen timers, all on your own server. Free and open source.
  actions:
    - theme: brand
      text: Try the live demo
      link: /demo
    - theme: alt
      text: Install with HACS
      link: /guide/getting-started
features:
  - icon:
      src: /icons/library.svg
      width: 24
      height: 24
    title: A library that stays yours
    details: Store as many recipes as you like, with photos, ingredients, steps, nutrition, notes, tags, courses, categories and collections. It all lives on your Home Assistant, with no account and no cloud.
  - icon:
      src: /icons/link.svg
      width: 24
      height: 24
    title: Paste a link, get a recipe
    details: Paste the address of a recipe page and the card reads the title, ingredients, steps, times and photo for you. Or bring in a whole Recipe Keeper export at once.
  - icon:
      src: /icons/scale.svg
      width: 24
      height: 24
    title: Made for cooking
    details: Scale the servings, convert cups and ounces to grams and millilitres, tick off ingredients as you go, and keep the screen awake while your hands are covered in flour.
  - icon:
      src: /icons/timer.svg
      width: 24
      height: 24
    title: Timers you can tap
    details: Tap "11 minutes" in a method step to start a timer. Share timers across the house, and see the ones you started by voice on a Voice PE.
  - icon:
      src: /icons/plan.svg
      width: 24
      height: 24
    title: A meal planner
    details: Put breakfast, lunch, dinner and snacks on the calendar. The home screen shows what is for dinner tonight, with a Cook button.
  - icon:
      src: /icons/cart.svg
      width: 24
      height: 24
    title: Straight to the shopping list
    details: Add a recipe's ingredients to your list in one tap. It works on its own, and works even better with Shopping List Manager.
---

## Two designs, three themes {#designs}

Pick the look under **Settings → Appearance**. Fresh and Compact share the Meadow, Slate and Sunset themes and both work in light and dark. A third style, Classic, keeps the original look. Both phones below are the real card.

<div class="rm-two">
  <figure>
    <PhoneFrame ui="fresh" theme="sunset" mode="light" />
    <figcaption><b>Fresh</b>Rounded photo cards, a "Tonight" card for the dinner you planned and a floating menu. Starts light.</figcaption>
  </figure>
  <figure class="dark">
    <PhoneFrame ui="compact" theme="slate" mode="dark" />
    <figcaption><b>Compact</b>Dense recipe rows you can open and close, with a flat tab bar. Starts dark.</figcaption>
  </figure>
</div>

[Change the design, theme and colour mode in the live demo →](/demo)

## Install in about five minutes {#install}

<div class="rm-steps">
<div>

### Add the integration
In HACS, add the repository as an integration, download it and restart Home Assistant.

```text
thekiwismarthome/Recipe-Manager
```

</div>
<div>

### Set it up
Go to **Settings → Devices & services → Add integration** and search for **Recipe Manager**. There is nothing to fill in.

</div>
<div>

### Add the card
The card comes with the integration. Pick **Recipe Manager Card** from the Add card list on any dashboard.

```yaml
type: custom:recipe-manager-card
```

</div>
</div>

The [getting started guide](/guide/getting-started) has the details and one-click HACS links.

## User manual {#manual}

<div class="rm-links">
  <a href="guide/getting-started"><b>Getting started</b><span>Install, add the card, add your first recipe.</span></a>
  <a href="guide/cooking"><b>Cooking from a recipe</b><span>Scale servings, convert units, timers and the cooking checklist.</span></a>
  <a href="guide/meal-planner"><b>Meal planner</b><span>Plan the week and see tonight's dinner.</span></a>
  <a href="guide/timers"><b>Timers</b><span>Local, shared and Voice PE timers, and two sensors for automations.</span></a>
</div>
