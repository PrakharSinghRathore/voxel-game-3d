import { Recipe, RECIPES } from './recipes';

export class CraftingSystem {
  /**
   * Match a 3x3 crafting grid against all recipes.
   * Supports shapeless matching (pattern can be positioned anywhere in the grid).
   */
  static matchRecipe(grid: (number | null)[]): Recipe | null {
    for (const recipe of RECIPES) {
      if (CraftingSystem.matchesPattern(grid, recipe.pattern)) {
        return recipe;
      }
    }
    return null;
  }

  /**
   * Get all available recipes that can be crafted from current inventory
   */
  static getAvailableRecipes(inventorySlots: (import('../types/save').ItemStack | null)[]): Recipe[] {
    const available: Recipe[] = [];
    for (const recipe of RECIPES) {
      if (CraftingSystem.canCraft(recipe, inventorySlots)) {
        available.push(recipe);
      }
    }
    return available;
  }

  /**
   * Check if a recipe can be crafted with current inventory
   */
  static canCraft(recipe: Recipe, inventorySlots: (import('../types/save').ItemStack | null)[]): boolean {
    // Count required items
    const required: Map<number, number> = new Map();
    for (const item of recipe.pattern) {
      if (item !== null) {
        required.set(item, (required.get(item) ?? 0) + 1);
      }
    }

    // Count available items in inventory
    const available: Map<number, number> = new Map();
    for (const slot of inventorySlots) {
      if (slot) {
        available.set(slot.id, (available.get(slot.id) ?? 0) + slot.count);
      }
    }

    // Check if we have enough
    for (const [id, count] of required) {
      if ((available.get(id) ?? 0) < count) return false;
    }
    return true;
  }

  /**
   * Get the required items for a recipe (with counts)
   */
  static getRequiredItems(recipe: Recipe): Map<number, number> {
    const required: Map<number, number> = new Map();
    for (const item of recipe.pattern) {
      if (item !== null) {
        required.set(item, (required.get(item) ?? 0) + 1);
      }
    }
    return required;
  }

  /**
   * Quick-craft a recipe using inventory items (removes from inventory, returns result)
   */
  static quickCraft(recipe: Recipe, removeItem: (slot: number, count: number) => void, slots: (import('../types/save').ItemStack | null)[]): boolean {
    // Count required items
    const required = CraftingSystem.getRequiredItems(recipe);

    // Check availability
    const available: Map<number, number> = new Map();
    for (const slot of slots) {
      if (slot) {
        available.set(slot.id, (available.get(slot.id) ?? 0) + slot.count);
      }
    }
    for (const [id, count] of required) {
      if ((available.get(id) ?? 0) < count) return false;
    }

    // Remove items from inventory
    for (const [id, count] of required) {
      let remaining = count;
      for (let i = 0; i < slots.length && remaining > 0; i++) {
        if (slots[i] && slots[i]!.id === id) {
          const toRemove = Math.min(remaining, slots[i]!.count);
          removeItem(i, toRemove);
          remaining -= toRemove;
        }
      }
    }

    return true;
  }

  private static matchesPattern(grid: (number | null)[], pattern: (number | null)[]): boolean {
    // Find the bounding box of non-null entries in both grid and pattern
    const gridBounds = CraftingSystem.getBounds(grid);
    const patternBounds = CraftingSystem.getBounds(pattern);

    if (!gridBounds || !patternBounds) return false;
    if (gridBounds.w !== patternBounds.w || gridBounds.h !== patternBounds.h) return false;

    // Compare within bounding box
    for (let dy = 0; dy < gridBounds.h; dy++) {
      for (let dx = 0; dx < gridBounds.w; dx++) {
        const gi = (gridBounds.y + dy) * 3 + (gridBounds.x + dx);
        const pi = (patternBounds.y + dy) * 3 + (patternBounds.x + dx);
        if (grid[gi] !== pattern[pi]) return false;
      }
    }
    return true;
  }

  private static getBounds(arr: (number | null)[]): { x: number; y: number; w: number; h: number } | null {
    let minX = 3, minY = 3, maxX = -1, maxY = -1;
    for (let i = 0; i < 9; i++) {
      if (arr[i] !== null) {
        const x = i % 3;
        const y = Math.floor(i / 3);
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
    if (maxX < 0) return null;
    return { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 };
  }
}
