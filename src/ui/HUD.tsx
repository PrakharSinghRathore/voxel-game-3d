import React, { useEffect, useState } from 'react';
import { useInventoryStore } from '../inventory/InventoryStore';
import { getItemName, getItemColor } from '../inventory/ItemDefs';

interface HUDProps {
  health: number;
  hunger: number;
  thirst: number;
  stamina: number;
  temperature: number;
  mana: number;
  maxMana: number;
  hasStaff: boolean;
  breakProgress: number;
  pickupNotifications: { id: number; count: number; time: number }[];
}

export const HUD: React.FC<HUDProps> = ({ health, hunger, thirst, stamina, temperature, mana, maxMana, hasStaff, breakProgress, pickupNotifications }) => {
  const { slots, selected } = useInventoryStore();

  const Bar: React.FC<{ value: number; max: number; color: string; icon: string }> = ({ value, max, color, icon }) => (
    <div className="flex items-center gap-1 mb-1">
      <span className="text-sm w-5 text-center">{icon}</span>
      <div className="w-32 h-3 bg-gray-800 rounded overflow-hidden border border-gray-600">
        <div className={`h-full ${color} transition-all duration-200`} style={{ width: `${(value / max) * 100}%` }} />
      </div>
    </div>
  );

  const selectedItem = slots[selected];

  return (
    <div className="fixed inset-0 pointer-events-none z-20" style={{ fontFamily: 'monospace' }}>
      {/* Stats bars - top left */}
      <div className="absolute top-4 left-4">
        <Bar value={health} max={100} color="bg-red-500" icon="❤" />
        <Bar value={hunger} max={100} color="bg-orange-400" icon="🍗" />
        <Bar value={thirst} max={100} color="bg-blue-400" icon="💧" />
        <Bar value={stamina} max={100} color="bg-yellow-400" icon="⚡" />
        {hasStaff && <Bar value={mana} max={maxMana} color="bg-purple-500" icon="✦" />}
        {temperature < -0.5 && <div className="text-cyan-300 text-sm">❄ Cold</div>}
        {temperature > 0.7 && <div className="text-red-300 text-sm">🔥 Hot</div>}
      </div>

      {/* Break progress */}
      {breakProgress > 0 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8">
          <div className="w-16 h-1 bg-gray-700 rounded">
            <div className="h-full bg-white rounded" style={{ width: `${breakProgress * 100}%` }} />
          </div>
        </div>
      )}

      {/* Selected item name */}
      {selectedItem && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
          {getItemName(selectedItem.id)} {selectedItem.count > 1 ? `x${selectedItem.count}` : ''}
        </div>
      )}

      {/* Item pickup notifications */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1">
        {pickupNotifications.slice(-5).map((notif, i) => (
          <PickupNotification key={notif.time} id={notif.id} count={notif.count} index={i} />
        ))}
      </div>

      {/* Hotbar - bottom center */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
        {slots.slice(0, 9).map((slot, i) => (
          <div key={i} className={`w-12 h-12 flex items-center justify-center border-2 ${i === selected ? 'border-white bg-gray-700' : 'border-gray-600 bg-gray-800'} relative`}>
            {slot && (
              <>
                <div className="w-8 h-8 rounded-sm" style={{ backgroundColor: getItemColor(slot.id) }} />
                <span className="absolute bottom-0 right-0.5 text-xs text-white">{slot.count > 1 ? slot.count : ''}</span>
              </>
            )}
            <span className="absolute top-0 left-0.5 text-xs text-gray-400">{i + 1}</span>
          </div>
        ))}
      </div>

      {/* Controls hint */}
      <div className="absolute bottom-4 right-4 text-gray-500 text-xs space-y-0.5">
        <div>LMB: Mine | RMB: Place</div>
        <div>Q: Drop | Tab: Inventory</div>
        <div>WASD: Move | Space: Jump</div>
      </div>
    </div>
  );
};

// Pickup notification component with fade animation
const PickupNotification: React.FC<{ id: number; count: number; index: number }> = ({ id, count, index }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setOpacity(0), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="text-sm text-white px-2 py-0.5 rounded transition-opacity duration-500"
      style={{
        opacity,
        backgroundColor: 'rgba(0,0,0,0.6)',
        transform: `translateY(${index * -5}px)`,
      }}
    >
      +{count} {getItemName(id)}
    </div>
  );
};
