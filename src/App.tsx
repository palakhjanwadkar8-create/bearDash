// App.tsx - Root Application coordinating Pages, Modals, Audio and Navigation

import React, { useState, useEffect } from 'react';
import { PlayerCustomization } from './game/types';
import { Header } from './components/Header';
import { LandingHero } from './components/LandingHero';
import { FeaturesSection } from './components/FeaturesSection';
import { PowerupsGuide } from './components/PowerupsGuide';
import { LeaderboardView } from './components/LeaderboardView';
import { CharacterSelect } from './components/CharacterSelect';
import { LobbyView } from './components/LobbyView';
import { GameCanvas } from './components/GameCanvas';
import { ProfileModal } from './components/ProfileModal';
import { AchievementsModal } from './components/AchievementsModal';
import { SettingsModal } from './components/SettingsModal';
import { Footer } from './components/Footer';
import { soundEngine } from './audio/SoundEngine';
import { networkClient } from './network/NetworkClient';

export const App: React.FC = () => {
  // Navigation State
  const [currentTab, setCurrentTab] = useState<'landing' | 'wardrobe' | 'lobby' | 'game'>('landing');

  // Player Customization State (persisted in localStorage)
  const [customization, setCustomization] = useState<PlayerCustomization>(() => {
    try {
      const saved = localStorage.getItem('bear_dash_racer');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return {
      name: 'Baby Bear 🐻',
      fur: 'brown',
      hat: 'crown',
      scarf: 'red',
      backpack: 'honeypot',
    };
  });

  // Match & Lobby State
  const [roomCode, setRoomCode] = useState<string>('BEAR-7788');
  const [isHost, setIsHost] = useState<boolean>(true);
  const [botCount, setBotCount] = useState<number>(3);

  // Settings State
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [screenShakeEnabled, setScreenShakeEnabled] = useState<boolean>(true);
  const [scanlinesEnabled, setScanlinesEnabled] = useState<boolean>(false);
  const [colorblindMode, setColorblindMode] = useState<string>('none');

  // Modals
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showAchievements, setShowAchievements] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  // Initialize sound context on first user click anywhere
  useEffect(() => {
    const handleFirstTouch = () => {
      soundEngine.init();
      window.removeEventListener('pointerdown', handleFirstTouch);
    };
    window.addEventListener('pointerdown', handleFirstTouch);
    return () => window.removeEventListener('pointerdown', handleFirstTouch);
  }, []);

  // Handlers
  const handlePlaySinglePlayer = () => {
    setBotCount(3);
    setCurrentTab('game');
  };

  const handlePlayMultiplayer = () => {
    const code = networkClient.createRoom(customization);
    setRoomCode(code);
    setIsHost(true);
    setCurrentTab('lobby');
  };

  const handleJoinRoomCode = (code: string) => {
    networkClient.joinRoom(code, customization);
    setRoomCode(code);
    setIsHost(false);
    setCurrentTab('lobby');
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#1A1224] text-white ${
        colorblindMode !== 'none' ? `cb-${colorblindMode}` : ''
      }`}
    >
      {/* Global Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        customization={customization}
        onOpenProfile={() => setShowProfile(true)}
        onOpenAchievements={() => setShowAchievements(true)}
        onOpenSettings={() => setShowSettings(true)}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {currentTab === 'landing' && (
          <>
            <LandingHero
              customization={customization}
              onPlaySinglePlayer={handlePlaySinglePlayer}
              onPlayMultiplayer={handlePlayMultiplayer}
              onJoinRoomCode={handleJoinRoomCode}
              onCustomize={() => setCurrentTab('wardrobe')}
            />
            <FeaturesSection />
            <PowerupsGuide />
            <LeaderboardView />
          </>
        )}

        {currentTab === 'wardrobe' && (
          <CharacterSelect
            customization={customization}
            setCustomization={setCustomization}
            onSaveAndClose={() => setCurrentTab('landing')}
          />
        )}

        {currentTab === 'lobby' && (
          <LobbyView
            roomCode={roomCode}
            isHost={isHost}
            customization={customization}
            botCount={botCount}
            setBotCount={setBotCount}
            onStartRace={() => setCurrentTab('game')}
            onLeaveLobby={() => setCurrentTab('landing')}
            onCustomize={() => setCurrentTab('wardrobe')}
          />
        )}

        {currentTab === 'game' && (
          <GameCanvas
            customization={customization}
            botCount={botCount}
            onExitToLobby={() => setCurrentTab('lobby')}
            onOpenSettings={() => setShowSettings(true)}
            scanlinesEnabled={scanlinesEnabled}
          />
        )}
      </main>

      {/* Footer (shown on Landing and Wardrobe tabs) */}
      {(currentTab === 'landing' || currentTab === 'wardrobe') && <Footer />}

      {/* Modals */}
      {showProfile && (
        <ProfileModal
          customization={customization}
          onClose={() => setShowProfile(false)}
        />
      )}

      {showAchievements && (
        <AchievementsModal onClose={() => setShowAchievements(false)} />
      )}

      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
          screenShakeEnabled={screenShakeEnabled}
          setScreenShakeEnabled={setScreenShakeEnabled}
          scanlinesEnabled={scanlinesEnabled}
          setScanlinesEnabled={setScanlinesEnabled}
          colorblindMode={colorblindMode}
          setColorblindMode={setColorblindMode}
        />
      )}
    </div>
  );
};

