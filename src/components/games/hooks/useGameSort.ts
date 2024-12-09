import { useMemo } from 'react';
import { Game } from '../types';

export const useGameSort = (games: Game[], sortBy: 'rating' | 'players' | 'name') => {
  return useMemo(() => {
    return [...games].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'players':
          return parseInt(b.players) - parseInt(a.players);
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [games, sortBy]);
};