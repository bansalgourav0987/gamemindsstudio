import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, ArrowRight } from 'lucide-react';
import { Game } from './types';

interface GameProps {
  game: Game;
  index: number;
  onClick: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1
    }
  }
};

export const GameCard: React.FC<GameProps> = ({ game, index, onClick }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transform-gpu border border-white/5 cursor-pointer"
      onClick={onClick}
    >
      <motion.div 
        className="relative h-48 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="absolute top-2 right-2 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium"
        >
          {game.category}
        </motion.div>
      </motion.div>

      <div className="p-6">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.3 }}
          className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors"
        >
          {game.title}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.4 }}
          className="text-gray-400 mb-4 line-clamp-2"
        >
          {game.description}
        </motion.p>

        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.5 }}
            className="flex items-center space-x-2"
          >
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white">{game.rating}</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.5 }}
            className="flex items-center space-x-2 text-gray-400"
          >
            <Users className="w-5 h-5" />
            <span>{game.players}</span>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full py-2 px-4 bg-gradient-to-r from-electric-blue to-deep-purple rounded-lg text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
        >
          View Details
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
};