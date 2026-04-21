import React, { useRef, useEffect } from 'react';
import { BiomeID } from '../types/biomes';

interface MinimapProps {
  playerX: number;
  playerZ: number;
  getBiomeAt: (wx: number, wz: number) => BiomeID;
}

const BIOME_COLORS: Record<BiomeID, string> = {
  [BiomeID.OCEAN]: '#1565C0',
  [BiomeID.BEACH]: '#FDD835',
  [BiomeID.PLAINS]: '#4CAF50',
  [BiomeID.FOREST]: '#2E7D32',
  [BiomeID.DARK_FOREST]: '#1B5E20',
  [BiomeID.SAVANNA]: '#8BC34A',
  [BiomeID.DESERT]: '#F9A825',
  [BiomeID.JUNGLE]: '#388E3C',
  [BiomeID.SNOWY_PLAINS]: '#E0E0E0',
  [BiomeID.MOUNTAINS]: '#78909C',
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
