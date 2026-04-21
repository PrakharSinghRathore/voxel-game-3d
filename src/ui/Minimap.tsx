import React, { useRef, useEffect } from 'react';
import { BiomeID } from '../types/biomes';

interface MinimapProps {
  playerX: number;
  playerZ: number;
  getBiomeAt: (wx: number, wz: number) => BiomeID;
}

const BIOME_COLORS: Record<BiomeID, string> = {
  [BiomeID.PLAINS]: '#4CAF50',
  [BiomeID.DESERT]: '#FDD835',
  [BiomeID.TUNDRA]: '#E0E0E0',
  [BiomeID.MARSH]: '#4E342E',
  [BiomeID.CRYSTAL_CAVERNS]: '#9C27B0',
};

export const Minimap: React.FC<MinimapProps> = ({ playerX, playerZ, getBiomeAt }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCount = useRef(0);

  useEffect(() => {
    frameCount.current++;
    if (frameCount.current % 10 !== 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 64;
    const radius = 32;

    for (let px = 0; px < size; px++) {
      for (let py = 0; py < size; py++) {
        const wx = Math.floor(playerX) + (px - radius);
        const wz = Math.floor(playerZ) + (py - radius);
        const biome = getBiomeAt(wx, wz);
        ctx.fillStyle = BIOME_COLORS[biome] || '#333';
        ctx.fillRect(px, py, 1, 1);
      }
    }

    // Player dot
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(radius - 1, radius - 1, 3, 3);
  });

  return (
    <canvas
      ref={canvasRef}
      width={64}
      height={64}
      className="fixed top-4 right-4 z-20 border border-gray-600 rounded"
      style={{ imageRendering: 'pixelated', width: '96px', height: '96px' }}
    />
  );
};
