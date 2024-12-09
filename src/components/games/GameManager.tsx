import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { GameGrid } from './GameGrid';
import { GameFilters } from './filters/GameFilters';
import { GameDetails } from './GameDetails';
import { Game, GameFilterOptions } from './types';
import { useGameSort } from './hooks/useGameSort';
import { useGameFilter } from './hooks/useGameFilter';

interface GameManagerProps {
  games: Game[];
}

export const GameManager: React.FC<GameManagerProps> = ({ games }) => {
  const [filters, setFilters] = useState<GameFilterOptions>({
    search: '',
    category: '',
    sortBy: 'rating'
  });

  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredGames = useGameFilter(games, filters);
  const sortedGames = useGameSort(filteredGames, filters.sortBy);

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
  };

  return (
    <div>
      <GameFilters filters={filters} onFilterChange={setFilters} />
      <GameGrid games={sortedGames} onGameClick={handleGameClick} />
      
      <AnimatePresence>
        {selectedGame && (
          <GameDetails
            game={selectedGame}
            onClose={() => setSelectedGame(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};