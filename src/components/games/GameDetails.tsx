import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Calendar, Tag, Award } from 'lucide-react';
import { Game } from './types';

interface GameDetailsProps {
  game: Game;
  onClose: () => void;
}

export const GameDetails: React.FC<GameDetailsProps> = ({ game, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800/90 rounded-2xl p-6 max-w-2xl w-full backdrop-blur-xl border border-gray-700/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 bg-electric-blue/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium"
          >
            {game.category}
          </motion.span>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">{game.title}</h2>
        <p className="text-gray-300 mb-6">{game.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-300">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span>{game.rating} Rating</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Users className="w-5 h-5 text-blue-400" />
            <span>{game.players} Players</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Tag className="w-5 h-5 text-green-400" />
            <span>{game.category}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Award className="w-5 h-5 text-purple-400" />
            <span>Featured</span>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-electric-blue text-gray-900 rounded-xl font-medium"
          >
            Play Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="px-6 py-2 bg-gray-700 text-white rounded-xl font-medium"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};