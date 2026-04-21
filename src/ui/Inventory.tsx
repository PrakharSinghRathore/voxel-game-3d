import React, { useState } from 'react';
import { useInventoryStore } from '../inventory/InventoryStore';
import { CraftingSystem } from '../inventory/CraftingSystem';
import { RECIPES } from '../inventory/recipes';

interface InventoryProps {
  isOpen: boolean;
  onClose: () => void;
}

function getItemColor(id: number): string {
  const colors: Record<number, string> = {
    1: '#4CAF50', 2: '#795548', 3: '#9E9E9E', 4: '#FDD835', 9: '#7B1FA2',
    14: '#6D4C41', 101: '#C0C0C0', 102: '#888888', 103: '#555555', 104: '#9C27B0',
    113: '#8D6E63', 114: '#6D4C41',
  };
  return colors[id] || '#666';
}

export const Inventory: React.FC<InventoryProps> = ({ isOpen, onClose }) => {
  const { slots, swapSlots, addItem, removeItem } = useInventoryStore();
  const [craftingGrid, setCraftingGrid] = useState<(number | null)[]>(new Array(9).fill(null));
  const [dragFrom, setDragFrom] = useState<number | null>(null);

  if (!isOpen) return null;

  const recipe = CraftingSystem.matchRecipe(craftingGrid);

  const handleSlotClick = (index: number) => {
    if (dragFrom !== null) {
      swapSlots(dragFrom, index);
      setDragFrom(null);
    } else if (slots[index]) {
      setDragFrom(index);
    }
  };

  const handleCraftClick = () => {
    if (recipe) {
      addItem(recipe.result.id, recipe.result.count);
      setCraftingGrid(new Array(9).fill(null));
    }
  };

  const handleCraftSlotClick = (index: number) => {
    if (dragFrom !== null && slots[dragFrom]) {
      const newGrid = [...craftingGrid];
      newGrid[index] = slots[dragFrom]!.id;
      setCraftingGrid(newGrid);
      removeItem(dragFrom, 1);
      setDragFrom(null);
    }
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center" style={{ pointerEvents: 'all' }}>
      <div className="absolute inset-0 bg-black bg-opacity-70" onClick={onClose} />
      <div className="relative flex gap-6 p-4 bg-gray-900 border border-gray-600 rounded">
        {/* Main inventory grid */}
        <div>
          <h3 className="text-white text-sm mb-2 font-bold">Inventory</h3>
          <div className="grid grid-cols-9 gap-1">
            {slots.map((slot, i) => (
              <div key={i} onClick={() => handleSlotClick(i)}
                className={`w-12 h-12 flex items-center justify-center border cursor-pointer relative hover:bg-gray-700 ${dragFrom === i ? 'border-yellow-400 bg-gray-700' : 'border-gray-600 bg-gray-800'}`}>
                {slot && (
                  <>
                    <div className="w-8 h-8 rounded-sm" style={{ backgroundColor: getItemColor(slot.id) }} />
                    <span className="absolute bottom-0 right-0.5 text-xs text-white">{slot.count > 1 ? slot.count : ''}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Crafting area */}
        <div>
          <h3 className="text-white text-sm mb-2 font-bold">Crafting</h3>
          <div className="grid grid-cols-3 gap-1 mb-2">
            {craftingGrid.map((item, i) => (
              <div key={i} onClick={() => handleCraftSlotClick(i)}
                className="w-12 h-12 flex items-center justify-center border border-gray-600 bg-gray-800 cursor-pointer hover:bg-gray-700">
                {item !== null && <div className="w-8 h-8 rounded-sm" style={{ backgroundColor: getItemColor(item) }} />}
              </div>
            ))}
          </div>
          {/* Result */}
          <div className="flex items-center gap-2">
            <span className="text-white text-lg">→</span>
            <div onClick={handleCraftClick}
              className={`w-12 h-12 flex items-center justify-center border ${recipe ? 'border-green-500 cursor-pointer hover:bg-gray-700' : 'border-gray-600'} bg-gray-800`}>
              {recipe && (
                <div className="w-8 h-8 rounded-sm relative" style={{ backgroundColor: getItemColor(recipe.result.id) }}>
                  <span className="absolute bottom-0 right-0 text-white text-xs">{recipe.result.count}</span>
                </div>
              )}
            </div>
          </div>

          {/* Recipe list */}
          <div className="mt-4 max-h-48 overflow-y-auto">
            <h4 className="text-gray-400 text-xs mb-1">Recipes:</h4>
            {RECIPES.map((r, i) => (
              <div key={i} className="text-gray-300 text-xs py-0.5">{r.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
