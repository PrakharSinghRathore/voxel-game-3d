import React, { useState } from 'react';
import { useInventoryStore } from '../inventory/InventoryStore';
import { CraftingSystem } from '../inventory/CraftingSystem';
import { RECIPES, Recipe } from '../inventory/recipes';
import { getItemName, getItemColor, getItemDef, ItemID } from '../inventory/ItemDefs';

interface InventoryProps {
  isOpen: boolean;
  onClose: () => void;
}

type CraftCategory = 'all' | 'tools' | 'weapons' | 'materials' | 'blocks' | 'food' | 'armor';

export const Inventory: React.FC<InventoryProps> = ({ isOpen, onClose }) => {
  const { slots, swapSlots, addItem, removeItem } = useInventoryStore();
  const [craftingGrid, setCraftingGrid] = useState<(number | null)[]>(new Array(9).fill(null));
  const [dragFrom, setDragFrom] = useState<number | null>(null);
  const [category, setCategory] = useState<CraftCategory>('all');
  const [quickCraftMode, setQuickCraftMode] = useState(false);

  if (!isOpen) return null;

  const recipe = CraftingSystem.matchRecipe(craftingGrid);
  const filteredRecipes = category === 'all' ? RECIPES : RECIPES.filter(r => r.category === category);

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

  const handleQuickCraft = (r: Recipe) => {
    if (CraftingSystem.quickCraft(r, removeItem, slots)) {
      addItem(r.result.id, r.result.count);
    }
  };

  const handleClearCrafting = () => {
    // Return items from crafting grid to inventory
    for (const item of craftingGrid) {
      if (item !== null) {
        addItem(item, 1);
      }
    }
    setCraftingGrid(new Array(9).fill(null));
  };

  const categories: { key: CraftCategory; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'materials', label: 'Materials' },
    { key: 'blocks', label: 'Blocks' },
    { key: 'tools', label: 'Tools' },
    { key: 'weapons', label: 'Weapons' },
    { key: 'food', label: 'Food' },
    { key: 'armor', label: 'Armor' },
  ];

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center" style={{ pointerEvents: 'all', fontFamily: 'monospace' }}>
      <div className="absolute inset-0 bg-black bg-opacity-70" onClick={onClose} />
      <div className="relative flex gap-6 p-6 bg-gray-900 border border-gray-600 rounded-lg max-h-[90vh] overflow-y-auto">
        {/* Main inventory grid */}
        <div>
          <h3 className="text-white text-sm mb-2 font-bold">Inventory</h3>
          {/* Hotbar */}
          <div className="grid grid-cols-9 gap-1 mb-2">
            {slots.slice(0, 9).map((slot, i) => (
              <div key={i} onClick={() => handleSlotClick(i)} title={slot ? getItemName(slot.id) : ''}
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
          {/* Main storage */}
          <div className="grid grid-cols-9 gap-1">
            {slots.slice(9).map((slot, i) => {
              const realIndex = i + 9;
              return (
                <div key={i} onClick={() => handleSlotClick(realIndex)} title={slot ? getItemName(slot.id) : ''}
                  className={`w-12 h-12 flex items-center justify-center border cursor-pointer relative hover:bg-gray-700 ${dragFrom === realIndex ? 'border-yellow-400 bg-gray-700' : 'border-gray-600 bg-gray-800'}`}>
                  {slot && (
                    <>
                      <div className="w-8 h-8 rounded-sm" style={{ backgroundColor: getItemColor(slot.id) }} />
                      <span className="absolute bottom-0 right-0.5 text-xs text-white">{slot.count > 1 ? slot.count : ''}</span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Crafting area */}
        <div className="flex flex-col">
          <h3 className="text-white text-sm mb-2 font-bold">Crafting Table</h3>
          <div className="grid grid-cols-3 gap-1 mb-2">
            {craftingGrid.map((item, i) => (
              <div key={i} onClick={() => handleCraftSlotClick(i)} title={item !== null ? getItemName(item) : ''}
                className="w-12 h-12 flex items-center justify-center border border-gray-600 bg-gray-800 cursor-pointer hover:bg-gray-700">
                {item !== null && <div className="w-8 h-8 rounded-sm" style={{ backgroundColor: getItemColor(item) }} />}
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-white text-lg">→</span>
            <div onClick={handleCraftClick} title={recipe ? `${getItemName(recipe.result.id)} x${recipe.result.count}` : ''}
              className={`w-12 h-12 flex items-center justify-center border ${recipe ? 'border-green-500 cursor-pointer hover:bg-gray-700 animate-pulse' : 'border-gray-600'} bg-gray-800`}>
              {recipe && (
                <div className="w-8 h-8 rounded-sm relative" style={{ backgroundColor: getItemColor(recipe.result.id) }}>
                  <span className="absolute bottom-0 right-0 text-white text-xs">{recipe.result.count > 1 ? recipe.result.count : ''}</span>
                </div>
              )}
            </div>
            {recipe && <span className="text-green-400 text-xs">{getItemName(recipe.result.id)}</span>}
          </div>

          <button onClick={handleClearCrafting} className="text-xs text-gray-400 hover:text-white mb-3 cursor-pointer">
            Clear Grid
          </button>

          {/* Quick craft toggle */}
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={() => setQuickCraftMode(!quickCraftMode)}
              className={`text-xs px-2 py-1 rounded cursor-pointer ${quickCraftMode ? 'bg-green-700 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Quick Craft
            </button>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-1 mb-2">
            {categories.map(c => (
              <button key={c.key} onClick={() => setCategory(c.key)}
                className={`text-xs px-2 py-0.5 rounded cursor-pointer ${category === c.key ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
                {c.label}
              </button>
            ))}
          </div>

          {/* Recipe list */}
          <div className="max-h-64 overflow-y-auto space-y-1">
            {filteredRecipes.map((r, i) => {
              const canCraft = CraftingSystem.canCraft(r, slots);
              const required = CraftingSystem.getRequiredItems(r);

              return (
                <div key={i}
                  onClick={() => quickCraftMode && canCraft && handleQuickCraft(r)}
                  className={`text-xs p-2 rounded border ${canCraft ? 'border-green-800 bg-gray-800 cursor-pointer hover:bg-gray-700' : 'border-gray-700 bg-gray-850 opacity-60'} ${quickCraftMode && canCraft ? 'hover:bg-green-900' : ''}`}>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-sm flex-shrink-0" style={{ backgroundColor: getItemColor(r.result.id) }} />
                    <div>
                      <div className={`${canCraft ? 'text-green-400' : 'text-gray-400'}`}>{r.name} x{r.result.count}</div>
                      <div className="text-gray-500 flex flex-wrap gap-x-2">
                        {Array.from(required.entries()).map(([id, count]) => (
                          <span key={id} className={getItemCount(id) >= count ? 'text-gray-400' : 'text-red-400'}>
                            {getItemName(id)}:{count}
                          </span>
                        ))}
                      </div>
                    </div>
                    {quickCraftMode && canCraft && (
                      <span className="text-green-400 ml-auto">Craft</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

function getItemCount(id: number): number {
  const slots = useInventoryStore.getState().slots;
  let total = 0;
  for (const slot of slots) {
    if (slot && slot.id === id) total += slot.count;
  }
  return total;
}
