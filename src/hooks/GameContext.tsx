import { createContext, useContext, type ReactNode } from 'react';
import type { GameState, Event, Stats } from '@/engine/types';

export interface GameContextValue {
  state: GameState;
  startGame: () => void;
  advanceYear: () => void;
  selectChoice: (choiceIndex: number) => { success: boolean; text: string; effects: Partial<Stats> } | null;
  setEvent: (event: Event | null) => void;
  setEnding: (ending: NonNullable<GameState['ending']>) => void;
  resetGame: () => void;
  updateStats: (effects: Partial<Stats>) => void;
  addRelationship: (npcId: string, delta: number) => void;
  equipItem: (itemId: string) => void;
  unequipItem: (itemId: string) => void;
}

export const GameContext = createContext<GameContextValue | null>(null);

export function useGameContext(): GameContextValue {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return ctx;
}

export function GameProvider({
  value,
  children,
}: {
  value: GameContextValue;
  children: ReactNode;
}) {
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
