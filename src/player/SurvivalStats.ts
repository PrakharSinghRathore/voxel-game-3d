import { BiomeID, BIOME_DEFS } from '../types/biomes';

export class SurvivalStats {
  health = 100; hunger = 100; thirst = 100; stamina = 100;
  temperature = 0.2; mana = 100; maxMana = 100; isDead = false;
  private currentBiome: BiomeID = BiomeID.PLAINS;
  private isSprinting = false;

  update(dt: number): void {
    if (this.isDead) return;
    this.hunger -= 1.0 * dt / 60;
    this.thirst -= 1.5 * dt / 60;
    if (this.isSprinting) this.stamina -= 20 * dt; else this.stamina += 10 * dt;
    const biomeTemp = BIOME_DEFS[this.currentBiome].temperature;
    this.temperature += (biomeTemp - this.temperature) * dt * 0.1;
    this.mana = Math.min(this.maxMana, this.mana + 5 * dt);
    this.hunger = Math.max(0, Math.min(100, this.hunger));
    this.thirst = Math.max(0, Math.min(100, this.thirst));
    this.stamina = Math.max(0, Math.min(100, this.stamina));
    if (this.hunger < 20) this.health -= 2 * dt;
    if (this.thirst < 20) this.health -= 2 * dt;
    this.health = Math.max(0, Math.min(100, this.health));
    if (this.health <= 0) this.isDead = true;
  }

  setBiome(biome: BiomeID): void { this.currentBiome = biome; }
  setSprinting(sprinting: boolean): void { this.isSprinting = sprinting; }
  canSprint(): boolean { return this.stamina >= 5; }
  addThirst(amount: number): void { this.thirst = Math.min(100, this.thirst + amount); }
  addHealth(amount: number): void { this.health = Math.min(100, this.health + amount); }
  respawn(): void { this.health = 100; this.hunger = 100; this.thirst = 100; this.stamina = 100; this.isDead = false; }
}
