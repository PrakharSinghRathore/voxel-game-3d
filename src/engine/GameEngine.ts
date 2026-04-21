import * as THREE from 'three';
import { useInventoryStore } from '../inventory/InventoryStore';
import { Renderer } from '../rendering/Renderer';
import { SkyRenderer } from '../rendering/SkyRenderer';
import { WaterRenderer } from '../rendering/WaterRenderer';
import { FogSystem } from '../rendering/FogSystem';
import { ParticleSystem } from '../rendering/ParticleSystem';
import { DayNightCycle } from '../rendering/DayNightCycle';
import { ChunkRenderer } from '../rendering/ChunkRenderer';
import { PostProcess } from '../rendering/PostProcess';
import { AssetManager } from './AssetManager';
import { InputManager } from './InputManager';
import { createChunkWorker } from './ChunkWorker';
import { WorldManager } from '../world/WorldManager';
import { Player } from '../player/Player';
import { PlayerController } from '../player/PlayerController';
import { Camera } from '../player/Camera';
import { BlockInteraction } from '../player/BlockInteraction';
import { SurvivalStats } from '../player/SurvivalStats';
import { EntityManager } from '../entities/EntityManager';
import { ItemDropManager } from '../entities/ItemDropManager';
import { BulletPool } from '../combat/BulletPool';
import { WeaponManager } from '../combat/WeaponManager';
import { DamageSystem } from '../combat/DamageSystem';
import { SaveManager } from '../save/SaveManager';
import { PortalManager } from '../portals/PortalManager';
import { BiomeID } from '../types/biomes';
import { BlockID, isBlockSolid } from '../types/blocks';
import { CHUNK_SIZE } from '../world/constants';
import { initNoise, setSeed } from '../utils/noise';

// ═══════════════════════════════
// GAME ENGINE — Main loop, systems registry
// ═══════════════════════════════

export type GameState = 'menu' | 'playing' | 'inventory' | 'dead';

export interface PickupNotification {
  id: number;
  count: number;
  time: number;
}

export class GameEngine {
  // Rendering
  renderer: Renderer;
  private skyRenderer!: SkyRenderer;
  private waterRenderer!: WaterRenderer;
  private fogSystem!: FogSystem;
  private particleSystem!: ParticleSystem;
  private dayNightCycle!: DayNightCycle;
  private chunkRenderer!: ChunkRenderer;
  private postProcess!: PostProcess;

  // Engine systems
  assetManager: AssetManager;
  inputManager: InputManager;

  // World
  worldManager: WorldManager | null = null;

  // Player
  player: Player | null = null;
  private playerController: PlayerController | null = null;
  private camera: Camera | null = null;
  blockInteraction: BlockInteraction | null = null;
  survivalStats: SurvivalStats | null = null;

  // Entities & Combat
  private entityManager: EntityManager | null = null;
  private itemDropManager: ItemDropManager | null = null;
  private bulletPool: BulletPool | null = null;
  private weaponManager: WeaponManager | null = null;
  private damageSystem: DamageSystem | null = null;

  // Save
  saveManager: SaveManager;

  // Portals
  private portalManager: PortalManager | null = null;

  // State
  gameState: GameState = 'menu';
  private animFrameId: number = 0;
  private lastTime: number = 0;
  private elapsed: number = 0;
  private seed: number = 0;
  private paused: boolean = false;

  // Worker
  private chunkWorker: Worker | null = null;
  private pendingMeshes: Map<string, boolean> = new Map();

  // Pickup notifications
  pickupNotifications: PickupNotification[] = [];

  // Callbacks for React
  onStateChange: ((state: GameState) => void) | null = null;
  onStatsUpdate: ((stats: { health: number; hunger: number; thirst: number; stamina: number; temperature: number; mana: number; maxMana: number }) => void) | null = null;
  onPickupNotification: ((notifications: PickupNotification[]) => void) | null = null;

  constructor() {
    this.renderer = new Renderer();
    this.assetManager = new AssetManager();
    this.inputManager = new InputManager();
    this.saveManager = new SaveManager();
  }

  init(canvas: HTMLCanvasElement): void {
    // Init rendering
    this.assetManager.init();
    this.inputManager.init(canvas);

    // Setup scene
    this.skyRenderer = new SkyRenderer(this.renderer.mainScene);
    this.waterRenderer = new WaterRenderer();
    this.fogSystem = new FogSystem(this.renderer.mainScene);
    this.particleSystem = new ParticleSystem(this.renderer.mainScene);
    this.dayNightCycle = new DayNightCycle(this.renderer.mainScene);
    this.chunkRenderer = new ChunkRenderer(this.renderer.mainScene, this.assetManager);
    this.postProcess = new PostProcess();

    // Ambient light is already added by DayNightCycle
    // Add point lights pool for glowstone/lava effects
    for (let i = 0; i < 8; i++) {
      const light = new THREE.PointLight(0xFF8F00, 0, 15);
      this.renderer.mainScene.add(light);
    }

    // Chunk worker
    this.chunkWorker = createChunkWorker();
    this.chunkWorker.onmessage = (e) => {
      const { chunkX, chunkZ, positions, normals, uvs, colors, indices, waterPositions, waterNormals, waterUvs, waterIndices } = e.data;
      const key = `${chunkX},${chunkZ}`;
      this.pendingMeshes.delete(key);
      this.chunkRenderer.uploadChunk(key, {
        positions, normals, uvs, colors, indices,
        waterPositions, waterNormals, waterUvs, waterIndices,
      }, this.waterRenderer.getMaterial());
    };
  }

  startGame(seed: number): void {
    this.seed = seed;
    setSeed(seed);
    initNoise();

    // Create world
    this.worldManager = new WorldManager(seed);

    // Pre-generate chunks around spawn so we can find ground
    this.worldManager.update(0, 0);
    for (let i = 0; i < 5; i++) {
      this.worldManager.update(0, 0);
    }

    // Create player — find land above water for spawn
    this.player = new Player((wx, wy, wz) => this.worldManager!.getBlock(wx, wy, wz));
    const spawn = Player.findLandSpawn((wx, wy, wz) => this.worldManager!.getBlock(wx, wy, wz), 8, 8);
    this.player.position = { x: spawn.x, y: spawn.y, z: spawn.z };

    // Player systems
    this.survivalStats = new SurvivalStats();
    this.playerController = new PlayerController(this.player, this.inputManager, this.renderer);
    this.camera = new Camera(this.player, this.inputManager, this.renderer);
    this.blockInteraction = new BlockInteraction(this.player, this.inputManager, this.worldManager);
    this.blockInteraction.setSurvivalStats(this.survivalStats);
    this.blockInteraction.setParticleSystem(this.particleSystem);

    // Set initial camera position to player eye level
    const eye = this.player.getEyePosition();
    this.renderer.setMainCameraPosition(eye.x, eye.y, eye.z);
    this.renderer.setMainCameraRotation(this.player.yaw, this.player.pitch);

    // Item Drop Manager — handles dropped items and pickup
    this.itemDropManager = new ItemDropManager(
      this.renderer.mainScene,
      (wx, wy, wz) => this.worldManager!.getBlock(wx, wy, wz)
    );
    this.itemDropManager.setOnItemPickup((id, count) => {
      // Add to inventory
      useInventoryStore.getState().addItem(id, count);
      // Show pickup notification
      this.pickupNotifications.push({ id, count, time: this.elapsed });
      this.onPickupNotification?.(this.pickupNotifications);
    });
    this.blockInteraction.setItemDropManager(this.itemDropManager);

    // Entities
    this.entityManager = new EntityManager(
      this.renderer.mainScene,
      (wx, wy, wz) => this.worldManager!.getBlock(wx, wy, wz)
    );
    this.entityManager.setPlayerPosition(this.player.position);
    // When creatures die, drop items
    this.entityManager.setOnLootDrop((itemId, count) => {
      if (this.player && this.itemDropManager) {
        // Drop at player's feet for simplicity
        this.itemDropManager.dropItem(
          itemId, count,
          this.player.position.x,
          this.player.position.y + 1,
          this.player.position.z,
          (Math.random() - 0.5) * 2, 2, (Math.random() - 0.5) * 2
        );
      }
    });

    // Combat
    this.bulletPool = new BulletPool(this.renderer.mainScene);
    this.weaponManager = new WeaponManager(
      this.inputManager, this.player, this.bulletPool, this.particleSystem, this.renderer
    );
    this.damageSystem = new DamageSystem(this.entityManager, this.player, this.survivalStats, this.bulletPool);

    // Portals
    this.portalManager = new PortalManager(
      this.renderer.mainScene, this.worldManager, this.player, this.postProcess
    );

    // Save system
    this.saveManager.init(
      this.player, this.survivalStats,
      this.worldManager.getTerrainGenerator(),
      this.worldManager.getBiomeGenerator(),
      this.worldManager.getAllChunks()
    );

    this.gameState = 'playing';
    this.onStateChange?.('playing');

    // Initial chunk load - generate all chunks first, then send to worker
    this.worldManager.update(this.player.position.x, this.player.position.z);
    // Keep loading chunks for a few more frames worth
    for (let i = 0; i < 5; i++) {
      this.worldManager.update(this.player.position.x, this.player.position.z);
    }
    this.rebuildAllVisibleChunks();

    // Start game loop
    this.lastTime = performance.now();
    this.gameLoop();
  }

  loadGame(): void {
    this.saveManager.load().then((data) => {
      if (!data) return;
      this.startGame(data.seed);
      // Apply saved state
      if (this.player && this.survivalStats) {
        this.player.position = {
          x: data.player.position[0],
          y: data.player.position[1],
          z: data.player.position[2],
        };
        this.player.yaw = data.player.rotation[0];
        this.player.pitch = data.player.rotation[1];
        this.survivalStats.health = data.player.stats.health;
        this.survivalStats.hunger = data.player.stats.hunger;
        this.survivalStats.thirst = data.player.stats.thirst;
        this.survivalStats.stamina = data.player.stats.stamina;
        this.survivalStats.temperature = data.player.stats.temperature;
        this.survivalStats.mana = data.player.stats.mana;
      }
      // Restore inventory
      if (data.inventory) {
        useInventoryStore.getState().setSlots(data.inventory);
      }
    });
  }

  private gameLoop = (): void => {
    this.animFrameId = requestAnimationFrame(this.gameLoop);

    const now = performance.now();
    const delta = (now - this.lastTime) / 1000;
    this.lastTime = now;
    const dt = Math.min(delta, 0.05); // Cap at 50ms

    this.elapsed += dt;

    // Clean old pickup notifications
    this.pickupNotifications = this.pickupNotifications.filter(n => this.elapsed - n.time < 2.0);

    // Input
    this.inputManager.flush();

    // Check for inventory toggle
    if (this.inputManager.isKeyJustPressed('Tab') && this.gameState === 'playing') {
      this.gameState = 'inventory';
      this.onStateChange?.('inventory');
      this.inputManager.exitPointerLock();
    } else if (this.inputManager.isKeyJustPressed('Tab') && this.gameState === 'inventory') {
      this.gameState = 'playing';
      this.onStateChange?.('playing');
    }

    // Check for number keys (hotbar)
    for (let i = 1; i <= 9; i++) {
      if (this.inputManager.isKeyJustPressed(`Digit${i}`)) {
        useInventoryStore.getState().selectSlot(i - 1);
      }
    }

    // Scroll wheel for hotbar
    const scroll = this.inputManager.getScrollDelta();
    if (scroll !== 0) {
      const store = useInventoryStore.getState();
      const newSlot = (store.selected + (scroll > 0 ? 1 : -1) + 9) % 9;
      useInventoryStore.getState().selectSlot(newSlot);
    }

    // F5 save
    if (this.inputManager.isKeyJustPressed('F5')) {
      this.saveManager.save().catch(console.error);
    }

    if (this.gameState === 'playing' && !this.paused) {
      // Update player
      this.playerController?.update(dt);
      this.player?.update(dt);
      this.camera?.update(dt);

      // Update block interaction
      this.blockInteraction?.update(dt);

      // Update item drops — check pickup
      if (this.itemDropManager && this.player) {
        this.itemDropManager.update(
          dt,
          this.player.position.x,
          this.player.position.y + 0.9,
          this.player.position.z
        );
      }

      // Update survival stats
      if (this.survivalStats && this.player) {
        const biome = this.worldManager?.getBiomeAt(
          Math.floor(this.player.position.x),
          Math.floor(this.player.position.z)
        ) ?? BiomeID.PLAINS;
        this.survivalStats.setBiome(biome as BiomeID);
        this.survivalStats.setSprinting(this.player.isSprinting);
        this.survivalStats.update(dt);

        if (this.survivalStats.isDead) {
          this.gameState = 'dead' as GameState;
          this.onStateChange?.('dead');
        }

        // Notify UI
        this.onStatsUpdate?.({
          health: this.survivalStats.health,
          hunger: this.survivalStats.hunger,
          thirst: this.survivalStats.thirst,
          stamina: this.survivalStats.stamina,
          temperature: this.survivalStats.temperature,
          mana: this.survivalStats.mana,
          maxMana: this.survivalStats.maxMana,
        });
      }

      // Update entities
      if (this.entityManager && this.player) {
        this.entityManager.setPlayerPosition(this.player.position);
        this.entityManager.update(dt);
      }

      // Update combat
      this.weaponManager?.update(dt, (x, y, z) => this.worldManager?.getBlock(x, y, z) ?? 0);
      this.bulletPool?.update(dt, (x, y, z) => isBlockSolid(this.worldManager?.getBlock(x, y, z) ?? 0 as BlockID));
      this.damageSystem?.update(dt);

      // Update world (chunk loading/unloading)
      if (this.worldManager && this.player) {
        const dirtyKeys = this.worldManager.update(this.player.position.x, this.player.position.z);
        for (const key of dirtyKeys) {
          this.sendChunkToWorker(key);
        }
      }

      // Update fog based on biome
      if (this.fogSystem && this.player && this.worldManager) {
        const biome = this.worldManager.getBiomeAt(
          Math.floor(this.player.position.x),
          Math.floor(this.player.position.z)
        );
        if (this.player.position.y < 30) {
          this.fogSystem.setCaveFog();
        } else {
          this.fogSystem.setBiomeFog(biome as BiomeID);
        }
        // Pass sun height for realistic fog coloring
        this.fogSystem.setSunHeight(this.dayNightCycle.getSunHeight());
        this.fogSystem.update(dt);
      }

      // Update portals
      this.portalManager?.update(dt);
    }

    // Update rendering (always, even when paused)
    this.dayNightCycle.update(dt);
    this.particleSystem.update(dt);

    const sunDir = this.dayNightCycle.getSunDirection();
    this.skyRenderer.update(this.elapsed, sunDir, this.dayNightCycle.getDayProgress(), this.renderer.mainCamera.position);
    this.waterRenderer.updateUniforms(
      this.elapsed,
      this.renderer.mainCamera.position,
      sunDir
    );

    // Render
    this.renderer.render();

    // Auto-save
    this.saveManager.checkAutosave(this.elapsed);
  };

  private sendChunkToWorker(key: string): void {
    if (!this.worldManager || !this.chunkWorker || this.pendingMeshes.has(key)) return;
    const cx = parseInt(key.split(',')[0]);
    const cz = parseInt(key.split(',')[1]);
    const chunk = this.worldManager.getChunk(cx, cz);
    if (!chunk) return;

    const neighbors = this.worldManager.getNeighborVoxels(cx, cz);
    const biomeMap = this.worldManager.getBiomeMap(cx, cz);
    const neighborBiomes = this.worldManager.getNeighborBiomeMaps(cx, cz);
    this.pendingMeshes.set(key, true);

    this.chunkWorker.postMessage({
      chunkX: cx,
      chunkZ: cz,
      voxels: chunk.voxels,
      neighbors,
      biomeMap: biomeMap ?? null,
      neighborBiomes,
    });
  }

  private rebuildAllVisibleChunks(): void {
    if (!this.worldManager) return;
    for (const [key] of this.worldManager.getAllChunks()) {
      this.sendChunkToWorker(key);
    }
  }

  respawn(): void {
    this.survivalStats?.respawn();
    if (this.player && this.worldManager) {
      const spawn = Player.findLandSpawn((wx, wy, wz) => this.worldManager!.getBlock(wx, wy, wz), 8, 8);
      this.player.position = { x: spawn.x, y: spawn.y, z: spawn.z };
      this.player.velocity = { x: 0, y: 0, z: 0 };
      const eye = this.player.getEyePosition();
      this.renderer.setMainCameraPosition(eye.x, eye.y, eye.z);
      this.renderer.setMainCameraRotation(this.player.yaw, this.player.pitch);
    }
    this.gameState = 'playing';
    this.onStateChange?.('playing');
  }

  stop(): void {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
  }

  getBiomeAt(wx: number, wz: number): BiomeID {
    return this.worldManager?.getBiomeAt(wx, wz) ?? BiomeID.PLAINS;
  }
}
