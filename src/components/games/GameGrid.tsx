import React from 'react';
import { motion } from 'framer-motion';
import { GameCard } from './GameCard';
import { Game } from './types';

interface GameGridProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const GameGrid: React.FC<GameGridProps> = ({ games, onGameClick }) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {games.map((game, index) => (
        <GameCard 
          key={game.title} 
          game={game} 
          index={index}
          onClick={() => onGameClick(game)}
        />
      ))}
    </motion.div>
  );
};