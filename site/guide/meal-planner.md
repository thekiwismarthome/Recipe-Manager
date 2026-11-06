---
title: Meal planner
---

# Meal planner

The planner puts your recipes on the calendar. Open it from the **Planner** tab on a phone, or from the sidebar on a tablet or desktop. If you never plan meals, turn the tab off under **Settings → Appearance → Navigation**.

## The week

Use the arrows to move between weeks. **This week** shows when you are on the current one, and **Today** takes you back from anywhere else. Each day has four slots: **breakfast**, **lunch**, **dinner** and **snack**.

In Fresh and Compact you pick a day from a row of chips (a dot marks the days that have something planned). That day appears as one card with its four slots, and the next day sits beside it on a wide screen. Classic shows the whole week as a grid.

## Planning a meal

1. Press **+** on a slot. Pick the day first if you are in the day view.
2. Search for a recipe, set how many servings (it starts at 2) and tap the recipe.
3. It appears in the slot straight away, on every dashboard.

You can put more than one recipe in a slot. If you are looking at a recipe, **Plan** opens the planner with an arrow at the top that takes you back to that recipe.

Each meal shows its recipe photo, name, time and servings. Press **×** to remove one, or **Clear this week** to start the week again.

## Tonight

The Fresh home screen shows the dinner planned for today in the **Tonight** card, with a **Cook** button that opens the recipe. It also says how many of the week's seven dinners are planned.

## Meal colours

Each meal has its own colour so the week is easy to read at a glance: amber for breakfast, blue for lunch, purple for dinner and pink for a snack.

## Using the plan elsewhere

The plan is stored with your recipes in Home Assistant, so it is included in the [backup file](backup). Changes also fire a Home Assistant event, `recipe_manager_meal_plan_updated`, which you can use in an automation.
