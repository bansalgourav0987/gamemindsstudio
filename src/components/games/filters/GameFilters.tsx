import React from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { GameFilterOptions } from '../types';

interface GameFiltersProps {
  filters: GameFilterOptions;
  onFilterChange: (filters: GameFilterOptions) => void;
}

export const GameFilters: React.FC<GameFiltersProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={filters.search}
          onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
          placeholder="Search games..."
          className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
        />
      </div>

      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-4"
      >
        <select
          value={filters.category}
          onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
          className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-electric-blue"
        >
          <option value="">All Categories</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Strategy</option>
          <option value="Adventure">Adventure</option>
          <option value="Racing">Racing</option>
        </select>

        <select
          value={filters.sortBy}
          onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value as 'rating' | 'players' | 'name' })}
          className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-electric-blue"
        >
          <option value="rating">Sort by Rating</option>
          <option value="players">Sort by Players</option>
          <option value="name">Sort by Name</option>
        </select>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange({ search: '', category: '', sortBy: 'rating' })}
          className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white hover:bg-gray-700/50 transition-colors flex items-center gap-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Reset Filters
        </motion.button>
      </motion.div>
    </div>
  );
};