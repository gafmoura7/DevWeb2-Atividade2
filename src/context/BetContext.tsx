import { createContext, useContext, useState, type ReactNode } from 'react';

interface BetContextType {
  currentBet: number[];
  history: number[][];
  generateBet: () => void;
}

const BetContext = createContext<BetContextType | undefined>(undefined);

function generateRandomBet(): number[] {
  const numbers = new Set<number>();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 60) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

interface BetProviderProps {
  children: ReactNode;
}

export function BetProvider({ children }: BetProviderProps) {
  const [currentBet, setCurrentBet] = useState<number[]>([]);
  const [history, setHistory] = useState<number[][]>([]);

  const generateBet = () => {
    const bet = generateRandomBet();
    setCurrentBet(bet);
    setHistory(prev => [...prev, bet]);
  };

  return (
    <BetContext.Provider value={{ currentBet, history, generateBet }}>
      {children}
    </BetContext.Provider>
  );
}

export function useBet(): BetContextType {
  const context = useContext(BetContext);
  if (!context) {
    throw new Error('useBet must be used within a BetProvider');
  }
  return context;
}