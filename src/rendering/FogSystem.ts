import * as THREE from 'three';
import { BiomeID, BIOME_DEFS } from '../types/biomes';

// ═══════════════════════════════
// FOG SYSTEM — Atmospheric fog that blends into sky
// ═══════════════════════════════

export class FogSystem {
  private scene: THREE.Scene;
  private targetColor: THREE.Color = new THREE.Color();
  private targetNear: number = 50;
  private targetFar: number = 250;
  private currentColor: THREE.Color = new THREE.Color();
  private currentNear: number = 50;
  private currentFar: number = 250;
  private sunHeight: number = 1.0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    scene.fog = new THREE.Fog(0xC8E6C9, 50, 250);
    this.currentColor.set(0xC8E6C9);
    this.targetColor.set(0xC8E6C9);
  }

  setBiomeFog(biome: BiomeID): void {
    const def = BIOME_DEFS[biome];
    this.targetColor.setRGB(def.fogColor[0], def.fogColor[1], def.fogColor[2]);

    // Adjust fog distance based on biome type
    switch (biome) {
      case BiomeID.OCEAN:
        this.targetNear = 40;
        this.targetFar = 180;
        break;
      case BiomeID.BEACH:
        this.targetNear = 60;
        this.targetFar = 240;
        break;
      case BiomeID.DESERT:
        this.targetNear = 50;
        this.targetFar = 200; // Shorter due to sand haze
        break;
      case BiomeID.JUNGLE:
        this.targetNear = 40;
        this.targetFar = 160; // Dense foliage reduces visibility
        break;
      case BiomeID.DARK_FOREST:
        this.targetNear = 30;
        this.targetFar = 140; // Very limited visibility
        break;
      case BiomeID.MOUNTAINS:
        this.targetNear = 60;
        this.targetFar = 280; // Clear mountain air
        break;
      case BiomeID.SNOWY_PLAINS:
        this.targetNear = 45;
        this.targetFar = 190; // Snow haze
        break;
      default:
        this.targetNear = 60;
        this.targetFar = 220;
        break;
    }
  }

  setCaveFog(): void {
    this.targetColor.setHex(0x111111);
    this.targetNear = 5;
    this.targetFar = 40;
  }

  setSunHeight(h: number): void {
    this.sunHeight = h;
  }

  update(dt: number): void {
    const lerpSpeed = dt * 2.0;
    this.currentColor.lerp(this.targetColor, lerpSpeed);
    this.currentNear += (this.targetNear - this.currentNear) * lerpSpeed;
    this.currentFar += (this.targetFar - this.currentFar) * lerpSpeed;

    if (this.scene.fog instanceof THREE.Fog) {
      const fogColor = this.currentColor.clone();

      // At night, fog becomes darker
      if (this.sunHeight < 0) {
        const nightFactor = Math.min(1, -this.sunHeight * 2);
        fogColor.lerp(new THREE.Color(0x050D1A), nightFactor * 0.7);
      }
      // At sunset, add warm tint
      else if (this.sunHeight < 0.2) {
        const sunsetFactor = 1 - this.sunHeight / 0.2;
        fogColor.lerp(new THREE.Color(0xFFCC80), sunsetFactor * 0.3);
      }

      this.scene.fog.color.copy(fogColor);
      (this.scene.fog as THREE.Fog).near = this.currentNear;
      (this.scene.fog as THREE.Fog).far = this.currentFar;
    }
  }
}
