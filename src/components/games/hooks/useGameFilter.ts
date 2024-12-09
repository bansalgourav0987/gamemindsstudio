import { useMemo } from 'react';
import { Game, GameFilterOptions } from '../types';

export const useGameFilter = (games: Game[], filters: GameFilterOptions) => {
  return useMemo(() => {
    return games.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                          game.description.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesCategory = !filters.category || game.category === filters.category;
      
      return matchesSearch && matchesCategory;
    });
  }, [games, filters.search, filters.category]);
};