import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, ArrowRight } from 'lucide-react';
import { Game } from '../../games/types';
import { Link } from 'react-router-dom';

interface HomepageGameCardProps {
  game: Game;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const HomepageGameCard: React.FC<HomepageGameCardProps> = ({ game, index }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 relative"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl" />
      </div>

      <div className="relative">
        <div className="relative h-48">
          <motion.img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="absolute bottom-4 left-4 right-4"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
              className="inline-block bg-indigo-500/90 text-white px-3 py-1 rounded-full text-sm font-medium mb-2"
            >
              {game.category}
            </motion.span>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
              {game.title}
            </h3>
          </motion.div>
        </div>

        <div className="p-6 relative z-10">
          <p className="text-gray-400 mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors">
            {game.description}
          </p>

          <div className="flex justify-between items-center mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.4 }}
              className="flex items-center gap-2"
            >
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-white">{game.rating}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.4 }}
              className="flex items-center gap-2 text-gray-400"
            >
              <Users className="w-5 h-5" />
              <span>{game.players}</span>
            </motion.div>
          </div>

          <Link to="/games">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-medium flex items-center justify-center gap-2 group opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Play Now
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};