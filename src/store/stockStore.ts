import create from 'zustand';

interface StockState {
  symbol: string;
  setSymbol: (symbol: string) => void;
  watchlist: string[];
  addToWatchlist: (symbol: string) => void;
  removeFromWatchlist: (symbol: string) => void;
}

export const useStockStore = create<StockState>((set) => ({
  symbol: 'AAPL',
  setSymbol: (symbol) => set({ symbol }),
  watchlist: [],
  addToWatchlist: (symbol) => 
    set((state) => ({ 
      watchlist: [...state.watchlist, symbol] 
    })),
  removeFromWatchlist: (symbol) =>
    set((state) => ({ 
      watchlist: state.watchlist.filter((s) => s !== symbol) 
    })),
}));