"""Data models for Recipe Manager."""
from dataclasses import dataclass, field, asdict
from datetime import datetime
from typing import Optional, List, Dict, Any
import uuid


def generate_id() -> str:
    """Generate a unique ID."""
    return str(uuid.uuid4())


def current_timestamp() -> str:
    """Get current ISO timestamp."""
    return datetime.utcnow().isoformat() + "Z"


@dataclass
class Ingredient:
    """A single ingredient in a recipe."""
    name: str
    amount: Optional[str] = None
    unit: Optional[str] = None
    notes: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Ingredient":
        return cls(
            name=data["name"],
            amount=data.get("amount"),
            unit=data.get("unit"),
            notes=data.get("notes"),
        )


@dataclass
class Recipe:
    """A recipe record."""
    id: str
    title: str
    ingredients: List[Ingredient] = field(default_factory=list)
    instructions: List[str] = field(default_factory=list)
    tags: List[str] = field(default_factory=list)
    source_url: Optional[str] = None
    description: Optional[str] = None
    image_url: Optional[str] = None
    cuisine: Optional[str] = None
    category: Optional[str] = None   # e.g. "main", "side", "dessert"
    prep_time: Optional[int] = None   # minutes
    cook_time: Optional[int] = None   # minutes
    total_time: Optional[int] = None  # minutes
    servings: Optional[int] = None
    servings_text: Optional[str] = None
    nutrition: Optional[Dict[str, Any]] = None
    favourite: bool = False
    rating: Optional[int] = None      # 1-5
    notes: Optional[str] = None
    created_at: str = field(default_factory=current_timestamp)
    updated_at: str = field(default_factory=current_timestamp)

    def to_dict(self) -> Dict[str, Any]:
        d = asdict(self)
        d["ingredients"] = [i.to_dict() for i in self.ingredients]
        return d

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Recipe":
        ingredients = [
            Ingredient.from_dict(i) for i in data.get("ingredients", [])
        ]
        return cls(
            id=data["id"],
            title=data["title"],
            ingredients=ingredients,
            instructions=data.get("instructions", []),
            tags=data.get("tags", []),
            source_url=data.get("source_url"),
            description=data.get("description"),
            image_url=data.get("image_url"),
            cuisine=data.get("cuisine"),
            category=data.get("category"),
            prep_time=data.get("prep_time"),
            cook_time=data.get("cook_time"),
            total_time=data.get("total_time"),
            servings=data.get("servings"),
            servings_text=data.get("servings_text"),
            nutrition=data.get("nutrition"),
            favourite=data.get("favourite", False),
            rating=data.get("rating"),
            notes=data.get("notes"),
            created_at=data.get("created_at", current_timestamp()),
            updated_at=data.get("updated_at", current_timestamp()),
        )


@dataclass
class MealPlanEntry:
    """An entry in the meal plan (one recipe on one day)."""
    id: str
    recipe_id: str
    date: str           # ISO date string e.g. "2026-03-05"
    meal_type: str      # breakfast / lunch / dinner / snack / dessert
    servings: int = 1
    notes: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "MealPlanEntry":
        return cls(
            id=data["id"],
            recipe_id=data["recipe_id"],
            date=data["date"],
            meal_type=data["meal_type"],
            servings=data.get("servings", 1),
            notes=data.get("notes"),
        )
