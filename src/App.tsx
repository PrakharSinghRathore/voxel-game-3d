import React, { useEffect, useRef, useState, useCallback } from 'react';
import { GameEngine, GameState, PickupNotification } from './engine/GameEngine';
import { HUD } from './ui/HUD';
import { Inventory } from './ui/Inventory';
import { Minimap } from './ui/Minimap';
import { DeathScreen } from './ui/DeathScreen';
import { StartScreen } from './ui/StartScreen';
import { Crosshair } from './ui/Crosshair';
import { useInventoryStore } from './inventory/InventoryStore';
import { ItemID } from './inventory/ItemDefs';

// ═══════════════════════════════
// APP — Root: GameCanvas + HUD overlay
// ═══════════════════════════════

const App: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<GameEngine | null>(null);

  const [gameState, setGameState] = useState<GameState>('menu');
  const [hasSave, setHasSave] = useState(false);
  const [stats, setStats] = useState({
    health: 100, hunger: 100, thirst: 100,
    stamina: 100, temperature: 0.2, mana: 100, maxMana: 100,
  });
  const [pickupNotifications, setPickupNotifications] = useState<PickupNotification[]>([]);
  const selectedItem = useInventoryStore((state) => state.getSelectedItem());

  useEffect(() => {
    // Check for existing save
    const engine = new GameEngine();
    engineRef.current = engine;

    engine.saveManager.hasSave().then(setHasSave);

    return () => {
      engine.stop();
    };
  }, []);

  const initEngine = useCallback((canvas: HTMLDivElement) => {
    if (!canvas || !engineRef.current) return;

    const engine = engineRef.current;
    const canvasEl = engine.renderer.getDomElement();
    canvas.appendChild(canvasEl);

    engine.init(canvasEl);

    engine.onStateChange = (state: GameState) => {
      setGameState(state);
    };

    engine.onStatsUpdate = (newStats) => {
      setStats(newStats);
    };

    engine.onPickupNotification = (notifications) => {
      setPickupNotifications([...notifications]);
    };
  }, []);

  const handleNewGame = useCallback((seed: number) => {
    if (!engineRef.current) return;
    const canvasContainer = canvasRef.current;
    if (canvasContainer) {
      initEngine(canvasContainer);
    }
    engineRef.current.startGame(seed);
  }, [initEngine]);

  const handleLoadGame = useCallback(() => {
    if (!engineRef.current) return;
    const canvasContainer = canvasRef.current;
    if (canvasContainer) {
      initEngine(canvasContainer);
    }
    engineRef.current.loadGame();
  }, [initEngine]);

  const handleRespawn = useCallback(() => {
    engineRef.current?.respawn();
  }, []);

  const handleCloseInventory = useCallback(() => {
    if (engineRef.current) {
      engineRef.current.gameState = 'playing';
      setGameState('playing');
    }
  }, []);

  const playerX = engineRef.current?.player?.position.x ?? 0;
  const playerZ = engineRef.current?.player?.position.z ?? 0;
  const hasStaff = selectedItem?.id === ItemID.MAGIC_STAFF;

  return (
    <div className="w-full h-full relative">
      {/* Game canvas container */}
      <div ref={canvasRef} className="w-full h-full" />

      {/* UI Overlays */}
      {gameState === 'menu' && (
        <StartScreen
          onNewGame={handleNewGame}
          onLoadGame={handleLoadGame}
          hasSave={hasSave}
        />
      )}

      {gameState === 'playing' && (
        <>
          <HUD
            health={stats.health}
            hunger={stats.hunger}
            thirst={stats.thirst}
            stamina={stats.stamina}
            temperature={stats.temperature}
            mana={stats.mana}
            maxMana={stats.maxMana}
            hasStaff={hasStaff}
            breakProgress={engineRef.current?.blockInteraction?.getBreakProgress() ?? 0}
            pickupNotifications={pickupNotifications}
          />
          <Crosshair />
          <Minimap
            playerX={playerX}
            playerZ={playerZ}
            getBiomeAt={(wx, wz) => engineRef.current?.getBiomeAt(wx, wz) ?? 0}
          />
        </>
      )}

      {gameState === 'inventory' && (
        <>
          <HUD
            health={stats.health}
            hunger={stats.hunger}
            thirst={stats.thirst}
            stamina={stats.stamina}
            temperature={stats.temperature}
            mana={stats.mana}
            maxMana={stats.maxMana}
            hasStaff={hasStaff}
            breakProgress={0}
            pickupNotifications={pickupNotifications}
          />
          <Inventory isOpen={true} onClose={handleCloseInventory} />
        </>
      )}

      {gameState === 'dead' && (
        <DeathScreen onRespawn={handleRespawn} />
      )}
    </div>
  );
};

export default App;
