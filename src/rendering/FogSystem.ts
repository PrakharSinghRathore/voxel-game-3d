import * as THREE from 'three';
import { BiomeID, BIOME_DEFS } from '../types/biomes';

export class FogSystem {
  private scene: THREE.Scene;
  private targetColor: THREE.Color = new THREE.Color();
  private targetDensity: number = 0.012;
  private currentColor: THREE.Color = new THREE.Color();
  private currentDensity: number = 0.012;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    scene.fog = new THREE.FogExp2(0xC8E6C9, 0.012);
    this.currentColor.set(0xC8E6C9);
    this.targetColor.set(0xC8E6C9);
  }

  setBiomeFog(biome: BiomeID): void {
    const def = BIOME_DEFS[biome];
    this.targetColor.setRGB(def.fogColor[0], def.fogColor[1], def.fogColor[2]);
    this.targetDensity = def.fogDensity;
  }

  setCaveFog(): void {
    this.targetColor.setHex(0x111111);
    this.targetDensity = 0.04;
  }

  update(dt: number): void {
    const lerpSpeed = dt * 2.0;
    this.currentColor.lerp(this.targetColor, lerpSpeed);
    this.currentDensity += (this.targetDensity - this.currentDensity) * lerpSpeed;
    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.color.copy(this.currentColor);
      this.scene.fog.density = this.currentDensity;
    }
  }
}
