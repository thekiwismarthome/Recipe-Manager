"""Constants for Recipe Manager."""

DOMAIN = "recipe_manager"

# Storage keys
STORAGE_VERSION = 1
STORAGE_KEY_RECIPES = f"{DOMAIN}.recipes"
STORAGE_KEY_TAGS = f"{DOMAIN}.tags"
STORAGE_KEY_MEAL_PLANS = f"{DOMAIN}.meal_plans"
STORAGE_KEY_GLOBAL_TIMERS = f"{DOMAIN}.global_timers"

# Events
EVENT_RECIPE_ADDED = f"{DOMAIN}_recipe_added"
EVENT_RECIPE_UPDATED = f"{DOMAIN}_recipe_updated"
EVENT_RECIPE_DELETED = f"{DOMAIN}_recipe_deleted"
EVENT_MEAL_PLAN_UPDATED = f"{DOMAIN}_meal_plan_updated"
EVENT_GLOBAL_TIMER_ADDED = f"{DOMAIN}_global_timer_added"
EVENT_GLOBAL_TIMER_UPDATED = f"{DOMAIN}_global_timer_updated"
EVENT_GLOBAL_TIMER_DELETED = f"{DOMAIN}_global_timer_deleted"

# Image config
IMAGE_SIZE = 400
IMAGE_QUALITY = 85
IMAGES_LOCAL_DIR = "www/images/recipe_manager"
LEGACY_IMAGES_LOCAL_DIR = "www/recipe_manager/images"

# Meal types
MEAL_TYPES = ["breakfast", "lunch", "dinner", "snack", "dessert"]

# Shopping Manager domain (for cross-integration calls)
SHOPPING_MANAGER_DOMAIN = "shopping_list_manager"
