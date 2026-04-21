import React, { useState } from 'react';

interface StartScreenProps {
  onNewGame: (seed: number) => void;
  onLoadGame: () => void;
  hasSave: boolean;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onNewGame, onLoadGame, hasSave }) => {
  const [seedInput, setSeedInput] = useState('');

  const handleNewGame = () => {
    const seed = seedInput ? parseInt(seedInput) || 0 : Math.floor(Math.random() * 999999);
    onNewGame(seed);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950"
      style={{ pointerEvents: 'all' }}
    >
      <h1 className="text-5xl font-bold text-white mb-2 tracking-wider">VOXEL SURVIVAL</h1>
      <p className="text-gray-400 mb-8">A block world awaits</p>

      <div className="flex flex-col items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Seed (optional)"
          value={seedInput}
          onChange={(e) => setSeedInput(e.target.value)}
          className="px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded w-64 text-center"
        />
        <button
          onClick={handleNewGame}
          className="px-8 py-3 bg-green-700 text-white rounded hover:bg-green-600 text-lg font-bold w-64 cursor-pointer"
        >
          New Game
        </button>
        {hasSave && (
          <button
            onClick={onLoadGame}
            className="px-8 py-3 bg-blue-700 text-white rounded hover:bg-blue-600 text-lg font-bold w-64 cursor-pointer"
          >
            Load Game
          </button>
        )}
      </div>

      <div className="text-gray-500 text-sm max-w-md text-center">
        <h3 className="text-gray-400 font-bold mb-2">Controls</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-left">
          <span>WASD</span><span>Move</span>
          <span>Mouse</span><span>Look</span>
          <span>Space</span><span>Jump</span>
          <span>Shift</span><span>Sprint</span>
          <span>LMB</span><span>Break Block</span>
          <span>E</span><span>Place Block</span>
          <span>F</span><span>Drink Water</span>
          <span>Tab</span><span>Inventory</span>
          <span>1-9</span><span>Hotbar Slot</span>
          <span>Scroll</span><span>Cycle Slot</span>
          <span>F5</span><span>Save Game</span>
        </div>
      </div>
    </div>
  );
};
