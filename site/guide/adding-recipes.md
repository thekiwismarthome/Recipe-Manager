---
title: Adding and editing recipes
---

# Adding and editing recipes

Press the **+** button. In Fresh it floats at the bottom right. In Compact it sits in the header. The add screen has three tabs.

## From URL

Paste the address of a recipe page and press the button. Recipe Manager reads the page and fills in the name, description, photo, times, servings, ingredients, steps and nutrition where it can find them. It uses the [recipe-scrapers](https://github.com/hhursev/recipe-scrapers) library, which knows many popular recipe sites, and falls back to the standard recipe data most sites embed in their pages.

You then see the result in the manual form. **Nothing is saved until you press save**, so you can fix a quantity, add tags or change the photo first.

::: tip If a site will not scrape
Some sites block automated requests, and a few have no readable recipe data. Use **Enter manually instead** and type or paste the recipe in.
:::

## Manual

Fill in whatever you have. Only the name is required. The form covers:

- name, description, source address and notes
- prep time, cook time, servings and the 1 to 5 star rating
- courses, categories, collections and tags (separate several with commas)
- ingredients, with an amount, a unit and a name on each line, and section headings such as "Sauce"
- the method, one step per line
- nutrition facts: calories, fat, saturated fat, carbohydrates, fibre, sugar, protein, sodium and cholesterol

Ingredients and steps can be reordered by dragging, or with the up and down arrows. Press **Enter** to add the next line.

## Import from Recipe Keeper

Export your collection from the Recipe Keeper app, choose the **Import** tab, pick the exported **.zip** file and press **Import Recipes**. The card unpacks the file in your browser and sends the recipes to Home Assistant, so large collections do not hit message size limits.

Leave **Save recipe photos locally** on to copy the pictures to your Home Assistant. When it finishes you see how many recipes came in and how many could not be read.

## Photos

On a recipe, **Edit** lets you upload a photo from the device or paste the address of an image. The page you scrape from can also supply one. Photos are saved on your Home Assistant, in `config/www/images/recipe_manager/`, converted to a compact WebP image no larger than 400 pixels. You can add more than one photo, choose which is the main one, and remove any you do not want.

## Editing and deleting

Open a recipe and press **Edit**. Change anything, press save, and every dashboard shows the update straight away. **Delete** needs two presses: the first asks you to confirm, and if you do not press again within a few seconds it goes back to normal.
