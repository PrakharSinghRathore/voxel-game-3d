import { create } from 'zustand';
import { ItemStack } from '../types/save';
import { getItemDef } from './ItemDefs';

interface InventoryState {
  slots: (ItemStack | null)[];
  selected: number;
  addItem: (id: number, count: number) => boolean;
  removeItem: (slot: number, count: number) => void;
  swapSlots: (a: number, b: number) => void;
  selectSlot: (slot: number) => void;
  getSelectedItem: () => ItemStack | null;
  setSlots: (slots: (ItemStack | null)[]) => void;
  getCountOfItem: (id: number) => number;
}

const MAX_STACK = 64;

export const useInventoryStore = create<InventoryState>((set, get) => ({
  slots: new Array(36).fill(null),
  selected: 0,

  addItem: (id: number, count: number): boolean => {
    let added = false;
    set(state => {
      const slots = [...state.slots];
      let remaining = count;
      const def = getItemDef(id);
      const maxStack = def?.maxStack ?? MAX_STACK;

      // First try to stack with existing items
      for (let i = 0; i < 36 && remaining > 0; i++) {
        const slot = slots[i];
        if (slot && slot.id === id && slot.count < maxStack) {
          const canAdd = Math.min(remaining, maxStack - slot.count);
          slots[i] = { id, count: slot.count + canAdd };
          remaining -= canAdd;
          added = true;
        }
      }

      // Then fill empty slots
      for (let i = 0; i < 36 && remaining > 0; i++) {
        if (!slots[i]) {
          const canAdd = Math.min(remaining, maxStack);
          slots[i] = { id, count: canAdd };
          remaining -= canAdd;
          added = true;
        }
      }

      return { slots };
    });
    return added;
  },

  removeItem: (slot: number, count: number) => {
    set(state => {
      const slots = [...state.slots];
      const item = slots[slot];
      if (!item) return state;
      if (item.count <= count) {
        slots[slot] = null;
      } else {
        slots[slot] = { id: item.id, count: item.count - count };
      }
      return { slots };
    });
  },

  swapSlots: (a: number, b: number) => {
    set(state => {
      const slots = [...state.slots];
      const temp = slots[a];
      slots[a] = slots[b];
      slots[b] = temp;
      return { slots };
    });
  },

  selectSlot: (slot: number) => set({ selected: Math.max(0, Math.min(8, slot)) }),

  getSelectedItem: () => {
    const state = get();
    return state.slots[state.selected];
  },

  setSlots: (slots: (ItemStack | null)[]) => set({ slots }),

  getCountOfItem: (id: number): number => {
    const state = get();
    let total = 0;
    for (const slot of state.slots) {
      if (slot && slot.id === id) total += slot.count;
    }
    return total;
  },
}));
