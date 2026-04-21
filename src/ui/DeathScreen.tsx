import React from 'react';

interface DeathScreenProps {
  onRespawn: () => void;
}

export const DeathScreen: React.FC<DeathScreenProps> = ({ onRespawn }) => {
  return (
    <div
      className="fixed inset-0 z-40 flex flex-col items-center justify-center"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(139,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)',
        pointerEvents: 'all',
      }}
    >
      <h1 className="text-6xl font-bold text-red-500 mb-8 tracking-widest">YOU DIED</h1>
      <button
        onClick={onRespawn}
        className="px-8 py-3 bg-gray-800 text-white border border-gray-500 rounded hover:bg-gray-700 text-lg cursor-pointer"
      >
        Respawn
      </button>
    </div>
  );
};
