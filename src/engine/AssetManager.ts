import * as THREE from 'three';
import { ATLAS_SIZE, ATLAS_TILES, TILE_SIZE } from '../world/constants';
import { BlockID, BLOCK_DEFS } from '../types/blocks';

// ═══════════════════════════════
// ASSET MANAGER — Texture Atlas Generator
// Procedurally generates a 512×512 canvas texture atlas
// ═══════════════════════════════

export class AssetManager {
  atlas: THREE.CanvasTexture | null = null;
  private canvas: HTMLCanvasElement | null = null;

  init(): void {
    this.canvas = document.createElement('canvas');
    this.canvas.width = ATLAS_SIZE;
    this.canvas.height = ATLAS_SIZE;
    const ctx = this.canvas.getContext('2d')!;

    // Fill with magenta for debugging missing tiles
    ctx.fillStyle = '#FF00FF';
    ctx.fillRect(0, 0, ATLAS_SIZE, ATLAS_SIZE);

    // Generate each tile
    this.drawTile(ctx, BlockID.GRASS, (c, x, y) => {
      // Grass top: green base + darker noise flecks + lighter streaks
      c.fillStyle = '#4CAF50';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 20; i++) {
        c.fillStyle = '#388E3C';
        const fx = x + Math.floor(Math.random() * TILE_SIZE);
        const fy = y + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(fx, fy, 2, 2);
      }
      for (let i = 0; i < 5; i++) {
        c.fillStyle = '#81C784';
        const fx = x + Math.floor(Math.random() * (TILE_SIZE - 6));
        const fy = y + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(fx, fy, 6, 1);
      }
    });

    this.drawTile(ctx, BlockID.DIRT, (c, x, y) => {
      c.fillStyle = '#795548';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 25; i++) {
        c.fillStyle = Math.random() > 0.5 ? '#6D4C41' : '#8D6E63';
        const fx = x + Math.floor(Math.random() * TILE_SIZE);
        const fy = y + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(fx, fy, 2, 2);
      }
    });

    // Grass side: brown bottom 60% + green top 40%
    this.drawTileAt(ctx, 1, 0, (c, x, y) => {
      c.fillStyle = '#795548';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      c.fillStyle = '#4CAF50';
      c.fillRect(x, y, TILE_SIZE, Math.floor(TILE_SIZE * 0.4));
      for (let i = 0; i < 10; i++) {
        c.fillStyle = '#388E3C';
        const fx = x + Math.floor(Math.random() * TILE_SIZE);
        const fy = y + Math.floor(Math.random() * TILE_SIZE * 0.4);
        c.fillRect(fx, fy, 2, 2);
      }
    });

    // Dirt tile (for bottom of grass)
    this.drawTileAt(ctx, 2, 0, (c, x, y) => {
      c.fillStyle = '#795548';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 20; i++) {
        c.fillStyle = '#6D4C41';
        const fx = x + Math.floor(Math.random() * TILE_SIZE);
        const fy = y + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(fx, fy, 3, 2);
      }
    });

    // Stone
    this.drawTile(ctx, BlockID.STONE, (c, x, y) => {
      c.fillStyle = '#9E9E9E';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      // Cracks
      for (let i = 0; i < 4; i++) {
        c.strokeStyle = '#757575';
        c.lineWidth = 1;
        c.beginPath();
        c.moveTo(x + Math.random() * TILE_SIZE, y + Math.random() * TILE_SIZE);
        c.quadraticCurveTo(
          x + Math.random() * TILE_SIZE, y + Math.random() * TILE_SIZE,
          x + Math.random() * TILE_SIZE, y + Math.random() * TILE_SIZE
        );
        c.stroke();
      }
    });

    // Sand
    this.drawTile(ctx, BlockID.SAND, (c, x, y) => {
      c.fillStyle = '#FDD835';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 6; i++) {
        c.fillStyle = '#F9A825';
        const fy = y + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(x, fy, TILE_SIZE, 1);
      }
    });

    // Sandstone
    this.drawTile(ctx, BlockID.SANDSTONE, (c, x, y) => {
      c.fillStyle = '#E8C86A';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 3; i++) {
        c.fillStyle = '#D4B04A';
        const fy = y + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(x, fy, TILE_SIZE, 2);
      }
    });

    // Snow
    this.drawTile(ctx, BlockID.SNOW, (c, x, y) => {
      c.fillStyle = '#FAFAFA';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 15; i++) {
        c.fillStyle = '#BBDEFB';
        const fx = x + Math.floor(Math.random() * TILE_SIZE);
        const fy = y + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(fx, fy, 2, 2);
      }
    });

    // Ice
    this.drawTile(ctx, BlockID.ICE, (c, x, y) => {
      c.fillStyle = '#B3E5FC';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      // Lighter center
      c.fillStyle = '#E1F5FE';
      c.fillRect(x + 8, y + 8, 16, 16);
    });

    // Mud
    this.drawTile(ctx, BlockID.MUD, (c, x, y) => {
      c.fillStyle = '#4E342E';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 8; i++) {
        c.fillStyle = '#3E2723';
        const fx = x + Math.floor(Math.random() * TILE_SIZE);
        const fy = y + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(fx, fy, 4, 3);
      }
    });

    // Crystal
    this.drawTile(ctx, BlockID.CRYSTAL, (c, x, y) => {
      c.fillStyle = '#7B1FA2';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      // Diagonal highlights
      c.strokeStyle = '#FFFFFF';
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(x, y); c.lineTo(x + TILE_SIZE, y + TILE_SIZE);
      c.stroke();
      c.beginPath();
      c.moveTo(x + TILE_SIZE, y); c.lineTo(x, y + TILE_SIZE);
      c.stroke();
    });

    // Glowstone
    this.drawTile(ctx, BlockID.GLOWSTONE, (c, x, y) => {
      c.fillStyle = '#FF8F00';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      c.fillStyle = '#FFD54F';
      c.fillRect(x + 10, y + 10, 12, 12);
      c.fillStyle = '#FFFFFF';
      c.fillRect(x + 14, y + 14, 4, 4);
    });

    // Lava (3 frames concept - we draw base frame)
    this.drawTile(ctx, BlockID.LAVA, (c, x, y) => {
      c.fillStyle = '#E65100';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      c.fillStyle = '#FF6D00';
      c.fillRect(x + 4, y + 4, 24, 24);
      c.fillStyle = '#FFAB00';
      c.fillRect(x + 10, y + 10, 12, 12);
    });

    // Wood
    this.drawTile(ctx, BlockID.WOOD, (c, x, y) => {
      c.fillStyle = '#6D4C41';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 5; i++) {
        c.fillStyle = '#5D4037';
        const fx = x + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(fx, y, 1, TILE_SIZE);
      }
    });

    // Leaves
    this.drawTile(ctx, BlockID.LEAVES, (c, x, y) => {
      c.fillStyle = '#2E7D32';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 30; i++) {
        c.fillStyle = '#1B5E20';
        const fx = x + Math.floor(Math.random() * TILE_SIZE);
        const fy = y + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(fx, fy, 3, 3);
      }
    });

    // Cactus
    this.drawTile(ctx, BlockID.CACTUS, (c, x, y) => {
      c.fillStyle = '#2E7D32';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      c.fillStyle = '#1B5E20';
      c.fillRect(x + 2, y, 1, TILE_SIZE);
      c.fillRect(x + TILE_SIZE - 3, y, 1, TILE_SIZE);
    });

    // Bedrock
    this.drawTile(ctx, BlockID.BEDROCK, (c, x, y) => {
      c.fillStyle = '#212121';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 10; i++) {
        c.fillStyle = '#424242';
        const fx = x + Math.floor(Math.random() * TILE_SIZE);
        const fy = y + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(fx, fy, 4, 3);
      }
    });

    // Coal Ore
    this.drawTile(ctx, BlockID.COAL_ORE, (c, x, y) => {
      c.fillStyle = '#9E9E9E';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 5; i++) {
        c.fillStyle = '#212121';
        const fx = x + Math.floor(Math.random() * (TILE_SIZE - 4));
        const fy = y + Math.floor(Math.random() * (TILE_SIZE - 4));
        c.fillRect(fx, fy, 4, 4);
      }
    });

    // Iron Ore
    this.drawTile(ctx, BlockID.IRON_ORE, (c, x, y) => {
      c.fillStyle = '#9E9E9E';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 5; i++) {
        c.fillStyle = '#E8C86A';
        const fx = x + Math.floor(Math.random() * (TILE_SIZE - 3));
        const fy = y + Math.floor(Math.random() * (TILE_SIZE - 3));
        c.fillRect(fx, fy, 3, 3);
      }
    });

    // Gold Ore
    this.drawTile(ctx, BlockID.GOLD_ORE, (c, x, y) => {
      c.fillStyle = '#9E9E9E';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 5; i++) {
        c.fillStyle = '#FFD700';
        const fx = x + Math.floor(Math.random() * (TILE_SIZE - 3));
        const fy = y + Math.floor(Math.random() * (TILE_SIZE - 3));
        c.fillRect(fx, fy, 3, 3);
      }
    });

    // Diamond Ore
    this.drawTile(ctx, BlockID.DIAMOND_ORE, (c, x, y) => {
      c.fillStyle = '#9E9E9E';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 5; i++) {
        c.fillStyle = '#00BCD4';
        const fx = x + Math.floor(Math.random() * (TILE_SIZE - 3));
        const fy = y + Math.floor(Math.random() * (TILE_SIZE - 3));
        c.fillRect(fx, fy, 3, 3);
      }
    });

    // Portal Frame
    this.drawTile(ctx, BlockID.PORTAL_FRAME, (c, x, y) => {
      c.fillStyle = '#6A1B9A';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      c.strokeStyle = '#CE93D8';
      c.lineWidth = 2;
      c.strokeRect(x + 4, y + 4, TILE_SIZE - 8, TILE_SIZE - 8);
    });

    // Portal Active
    this.drawTile(ctx, BlockID.PORTAL_ACTIVE, (c, x, y) => {
      c.fillStyle = '#AA00FF';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 10; i++) {
        c.fillStyle = '#E040FB';
        const fx = x + Math.floor(Math.random() * TILE_SIZE);
        const fy = y + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(fx, fy, 2, 2);
      }
    });

    // Lily Pad
    this.drawTile(ctx, BlockID.LILY_PAD, (c, x, y) => {
      c.fillStyle = '#1B5E20';
      c.fillRect(x + 4, y + 4, TILE_SIZE - 8, TILE_SIZE - 8);
    });

    // Spruce Wood
    this.drawTile(ctx, BlockID.SPRUCE_WOOD, (c, x, y) => {
      c.fillStyle = '#4E342E';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 6; i++) {
        c.fillStyle = '#3E2723';
        const fx = x + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(fx, y, 1, TILE_SIZE);
      }
    });

    // Spruce Leaves
    this.drawTile(ctx, BlockID.SPRUCE_LEAVES, (c, x, y) => {
      c.fillStyle = '#1B5E20';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 20; i++) {
        c.fillStyle = '#0D3B0F';
        const fx = x + Math.floor(Math.random() * TILE_SIZE);
        const fy = y + Math.floor(Math.random() * TILE_SIZE);
        c.fillRect(fx, fy, 3, 3);
      }
    });

    // Packed Ice
    this.drawTile(ctx, BlockID.PACKED_ICE, (c, x, y) => {
      c.fillStyle = '#81D4FA';
      c.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      for (let i = 0; i < 5; i++) {
        c.fillStyle = '#B3E5FC';
        const fx = x + Math.floor(Math.random() * (TILE_SIZE - 4));
        const fy = y + Math.floor(Math.random() * (TILE_SIZE - 4));
        c.fillRect(fx, fy, 4, 4);
      }
    });

    // Create texture
    this.atlas = new THREE.CanvasTexture(this.canvas);
    this.atlas.magFilter = THREE.NearestFilter;
    this.atlas.minFilter = THREE.NearestFilter;
    this.atlas.wrapS = THREE.ClampToEdgeWrapping;
    this.atlas.wrapT = THREE.ClampToEdgeWrapping;
    this.atlas.colorSpace = THREE.SRGBColorSpace;
    this.atlas.needsUpdate = true;
  }

  private drawTile(ctx: CanvasRenderingContext2D, blockId: BlockID, drawer: (ctx: CanvasRenderingContext2D, x: number, y: number) => void): void {
    const def = BLOCK_DEFS[blockId];
    const x = def.atlasTileX * TILE_SIZE;
    const y = def.atlasTileY * TILE_SIZE;
    drawer(ctx, x, y);
  }

  private drawTileAt(ctx: CanvasRenderingContext2D, tileX: number, tileY: number, drawer: (ctx: CanvasRenderingContext2D, x: number, y: number) => void): void {
    const x = tileX * TILE_SIZE;
    const y = tileY * TILE_SIZE;
    drawer(ctx, x, y);
  }

  getTexture(): THREE.CanvasTexture {
    if (!this.atlas) this.init();
    return this.atlas!;
  }
}
