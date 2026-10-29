// GameCanvas.tsx - HTML5 Canvas Gameplay Component with Full HUD, Mobile Controls and Spectator Overlay

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { GameEngine } from '../game/GameEngine';
import { PixelRenderer } from '../game/PixelRenderer';
import { LevelGenerator } from '../game/LevelGenerator';
import { PlayerCustomization, RaceResult } from '../game/types';
import { GAME_CONSTANTS, POWERUPS_CONFIG } from '../game/constants';
import { soundEngine } from '../audio/SoundEngine';
import { VictoryModal } from './VictoryModal';

interface GameCanvasProps {
  customization: PlayerCustomization;
  botCount: number;
  onExitToLobby: () => void;
  onOpenSettings: () => void;
  scanlinesEnabled: boolean;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({
  customization,
  botCount,
  onExitToLobby,
  onOpenSettings,
  scanlinesEnabled,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<GameEngine | null>(null);
  const rendererRef = useRef<PixelRenderer | null>(null);
  const requestRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // React UI state synced from engine for smooth HUD
  const [hudLives, setHudLives] = useState(3);
  const [hudGems, setHudGems] = useState(0);
  const [hudScore, setHudScore] = useState(0);
  const [hudPowerups, setHudPowerups] = useState<{ type: string; remaining: number; max: number }[]>([]);
  const [raceProgress, setRaceProgress] = useState(0);
  const [isEliminated, setIsEliminated] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [raceResults, setRaceResults] = useState<RaceResult[] | null>(null);

  // Initialize game session
  const initGame = useCallback(() => {
    const level = LevelGenerator.generateLevel();
    const engine = new GameEngine(level, customization, botCount);
    engineRef.current = engine;

    engine.onFinishCallback = (results) => {
      setRaceResults(results);
    };

    engine.onEliminatedCallback = () => {
      setIsEliminated(true);
    };

    setIsEliminated(false);
    setRaceResults(null);
    setIsPaused(false);

    soundEngine.startBGM();
  }, [customization, botCount]);

  useEffect(() => {
    initGame();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    rendererRef.current = new PixelRenderer(ctx, GAME_CONSTANTS.CANVAS_WIDTH, GAME_CONSTANTS.CANVAS_HEIGHT);

    // Main animation loop
    const animate = (time: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time;
      const dt = Math.min(0.1, (time - lastTimeRef.current) / 1000);
      lastTimeRef.current = time;

      const engine = engineRef.current;
      const renderer = rendererRef.current;

      if (engine && renderer && ctx) {
        if (!engine.isPaused) {
          engine.update(dt);
        }

        // Render Frame
        ctx.clearRect(0, 0, GAME_CONSTANTS.CANVAS_WIDTH, GAME_CONSTANTS.CANVAS_HEIGHT);
        renderer.render(
          dt,
          engine.level,
          engine.players,
          engine.localPlayer,
          engine.particles,
          engine.cameraX,
          engine.cameraY
        );

        // Sync HUD
        setHudLives(engine.localPlayer.lives);
        setHudGems(engine.localPlayer.gemsCollected);
        setHudScore(engine.localPlayer.score);
        setHudPowerups(
          engine.localPlayer.activePowerups.map((ap) => ({
            type: ap.type,
            remaining: ap.remainingDuration,
            max: ap.maxDuration,
          }))
        );
        setRaceProgress(Math.min(100, (engine.localPlayer.x / engine.level.finishX) * 100));

        // Check pause key
        if (engine.input.pauseJustPressed) {
          setIsPaused((prev) => !prev);
          engine.isPaused = !engine.isPaused;
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
      soundEngine.stopBGM();
      soundEngine.stopHeartbeat();
    };
  }, [initGame]);

  // Touch Handlers for Mobile Controls
  const handleTouchDir = (key: 'left' | 'right' | 'jump' | 'dash', active: boolean) => {
    if (engineRef.current) {
      engineRef.current.input.setTouchInput(key, active);
    }
  };

  const togglePause = () => {
    if (engineRef.current) {
      const next = !isPaused;
      engineRef.current.isPaused = next;
      setIsPaused(next);
    }
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-65px)] flex flex-col items-center justify-center p-2 sm:p-4 bg-[#140D1B] select-none">
      {/* Canvas Container with 16:9 Aspect Ratio */}
      <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border-4 border-[#FF758F]/50 shadow-2xl bg-black">
        <canvas
          ref={canvasRef}
          width={GAME_CONSTANTS.CANVAS_WIDTH}
          height={GAME_CONSTANTS.CANVAS_HEIGHT}
          className="w-full h-full object-contain pixel-canvas block"
        />

        {/* Optional Retro CRT Scanlines Overlay */}
        {scanlinesEnabled && <div className="absolute inset-0 scanlines pointer-events-none" />}

        {/* --- Top In-Game HUD --- */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between pointer-events-none z-20">
          {/* Top-Left: Lives, Gems, Active Boosters */}
          <div className="space-y-2 pointer-events-auto">
            {/* Lives ❤️ ❤️ ❤️ */}
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10">
              <span className="text-xs font-pixel text-gray-300">LIVES:</span>
              <div className="flex gap-1 text-base">
                {[1, 2, 3].map((heartIndex) => (
                  <span
                    key={heartIndex}
                    className={`transition-transform duration-200 ${
                      heartIndex <= hudLives
                        ? 'opacity-100 scale-100'
                        : 'opacity-25 scale-75 grayscale'
                    }`}
                  >
                    ❤️
                  </span>
                ))}
              </div>
            </div>

            {/* Gems & Score */}
            <div className="flex items-center gap-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10">
              <div className="flex items-center gap-1.5 text-xs font-pixel text-yellow-300">
                <span>💎</span>
                <span>{hudGems}</span>
              </div>
              <div className="h-3 w-px bg-white/20" />
              <div className="text-xs font-mono font-bold text-gray-200">
                {hudScore.toLocaleString()} pts
              </div>
            </div>

            {/* Active Boosters Badges */}
            {hudPowerups.length > 0 && (
              <div className="flex flex-col gap-1.5">
                {hudPowerups.map((ap) => {
                  const cfg = POWERUPS_CONFIG[ap.type];
                  const pct = Math.max(0, (ap.remaining / Math.max(1, ap.max)) * 100);
                  return (
                    <div
                      key={ap.type}
                      className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border text-xs"
                      style={{ borderColor: cfg ? cfg.color : '#FFD166' }}
                    >
                      <span>{cfg?.icon || '⚡'}</span>
                      <span className="font-pixel text-[10px] text-white">
                        {cfg?.name || ap.type}
                      </span>
                      <div className="w-12 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-400 to-pink-500 transition-all duration-100"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Top-Right: Mini-Map Progress & Pause Button */}
          <div className="flex flex-col items-end gap-2 pointer-events-auto">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePause}
                className="bg-black/60 hover:bg-black/80 px-2.5 py-1.5 rounded-xl border border-white/10 text-xs font-pixel text-gray-200"
              >
                ⏸️ PAUSE
              </button>
            </div>

            {/* Mini Race Progress Bar */}
            <div className="bg-black/60 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10 w-44 sm:w-56 space-y-1">
              <div className="flex justify-between text-[10px] font-pixel text-gray-300">
                <span>START</span>
                <span className="text-[#FFD166]">🏁 {Math.floor(raceProgress)}%</span>
              </div>
              <div className="relative w-full h-2.5 bg-gray-800 rounded-full overflow-hidden border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-[#FF7B54] via-[#FF758F] to-[#70E000] rounded-full transition-all duration-75"
                  style={{ width: `${raceProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Elimination Overlay: "BABY BEAR ELIMINATED" */}
        {isEliminated && !raceResults && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4 z-30 animate-pulse-fast">
            <div className="text-6xl animate-bounce">💔</div>
            <h2 className="font-pixel text-lg sm:text-2xl text-[#FF3366] tracking-wider">
              BABY BEAR ELIMINATED!
            </h2>
            <p className="text-sm text-gray-300 font-fun max-w-sm">
              All hearts lost! You have turned into an angelic spectator ghost. You can watch the
              remaining bears race to the finish line!
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => engineRef.current?.cycleSpectator(-1)}
                className="btn-pixel btn-pixel-blue px-4 py-2 rounded-xl font-pixel text-xs"
              >
                ◀ Prev Bear
              </button>
              <button
                onClick={() => engineRef.current?.cycleSpectator(1)}
                className="btn-pixel btn-pixel-pink px-4 py-2 rounded-xl font-pixel text-xs"
              >
                Next Bear ▶
              </button>
              <button
                onClick={initGame}
                className="btn-pixel btn-pixel-gold px-4 py-2 rounded-xl font-pixel text-xs"
              >
                Try Again 🔄
              </button>
            </div>
          </div>
        )}

        {/* Pause Modal */}
        {isPaused && (
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md flex flex-col items-center justify-center p-6 z-40">
            <div className="pixel-box max-w-xs w-full p-6 text-center space-y-4">
              <h3 className="font-pixel text-sm text-[#FFD166]">GAME PAUSED</h3>
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={togglePause}
                  className="w-full btn-pixel btn-pixel-gold py-2.5 rounded-xl font-pixel text-xs"
                >
                  RESUME
                </button>
                <button
                  onClick={initGame}
                  className="w-full btn-pixel btn-pixel-pink py-2.5 rounded-xl font-pixel text-xs"
                >
                  RESTART RACE 🔄
                </button>
                <button
                  onClick={onOpenSettings}
                  className="w-full btn-pixel btn-pixel-purple py-2.5 rounded-xl font-pixel text-xs"
                >
                  SETTINGS ⚙️
                </button>
                <button
                  onClick={onExitToLobby}
                  className="w-full py-2.5 rounded-xl bg-gray-700 hover:bg-gray-600 font-pixel text-xs text-gray-200"
                >
                  QUIT TO LOBBY
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Victory Celebration Modal */}
        {raceResults && (
          <VictoryModal
            results={raceResults}
            onPlayAgain={initGame}
            onReturnToLobby={onExitToLobby}
          />
        )}
      </div>

      {/* --- Responsive Touch Controls (Mobile & Tablet) --- */}
      <div className="w-full max-w-5xl mt-3 flex items-center justify-between px-2 sm:px-4 touch-control select-none md:hidden">
        {/* Directional D-Pad (Left / Right) */}
        <div className="flex gap-2">
          <button
            onTouchStart={() => handleTouchDir('left', true)}
            onTouchEnd={() => handleTouchDir('left', false)}
            onMouseDown={() => handleTouchDir('left', true)}
            onMouseUp={() => handleTouchDir('left', false)}
            className="w-14 h-14 rounded-2xl bg-white/15 active:bg-white/30 border-2 border-white/20 flex items-center justify-center text-xl font-bold shadow-md"
          >
            ◀
          </button>
          <button
            onTouchStart={() => handleTouchDir('right', true)}
            onTouchEnd={() => handleTouchDir('right', false)}
            onMouseDown={() => handleTouchDir('right', true)}
            onMouseUp={() => handleTouchDir('right', false)}
            className="w-14 h-14 rounded-2xl bg-white/15 active:bg-white/30 border-2 border-white/20 flex items-center justify-center text-xl font-bold shadow-md"
          >
            ▶
          </button>
        </div>

        {/* Action Buttons (Dash & Jump) */}
        <div className="flex gap-3">
          <button
            onTouchStart={() => handleTouchDir('dash', true)}
            onTouchEnd={() => handleTouchDir('dash', false)}
            onMouseDown={() => handleTouchDir('dash', true)}
            onMouseUp={() => handleTouchDir('dash', false)}
            className="w-14 h-14 rounded-2xl bg-[#4CC9F0]/30 active:bg-[#4CC9F0]/50 border-2 border-[#4CC9F0] flex items-center justify-center text-xs font-pixel text-[#4CC9F0] shadow-md"
          >
            DASH
          </button>
          <button
            onTouchStart={() => handleTouchDir('jump', true)}
            onTouchEnd={() => handleTouchDir('jump', false)}
            onMouseDown={() => handleTouchDir('jump', true)}
            onMouseUp={() => handleTouchDir('jump', false)}
            className="w-16 h-14 rounded-2xl bg-[#FF758F]/40 active:bg-[#FF758F]/60 border-2 border-[#FF758F] flex items-center justify-center text-xs font-pixel text-white shadow-lg"
          >
            JUMP
          </button>
        </div>
      </div>
    </div>
  );
};

