import { Recipe, RECIPES } from './recipes';

export class CraftingSystem {
  static matchRecipe(grid: (number | null)[]): Recipe | null {
    for (const recipe of RECIPES) {
      if (CraftingSystem.matchesPattern(grid, recipe.pattern)) {
        return recipe;
      }
    }
    return null;
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
