import React from 'react';
import { motion } from 'framer-motion';
import { Game } from '../../games/types';
import { HomepageGameCard } from './HomepageGameCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FeaturedGamesBackground } from './FeaturedGamesBackground';

interface FeaturedGamesProps {
  games: Game[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const FeaturedGames: React.FC<FeaturedGamesProps> = ({ games }) => {
  // Show only top 3 games by rating
  const featuredGames = [...games]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="relative py-20 overflow-hidden bg-gray-900">
      <FeaturedGamesBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 bg-indigo-500/10 rounded-full text-indigo-400 text-sm font-medium mb-4"
            >
              Featured Games
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-2">Top Rated Games</h2>
            <p className="text-gray-400">Experience our most acclaimed titles</p>
          </motion.div>

          <Link to="/games">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-indigo-500/10 text-indigo-400 rounded-xl font-medium flex items-center gap-2 hover:bg-indigo-500/20 transition-colors"
            >
              View All Games
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredGames.map((game, index) => (
            <HomepageGameCard
              key={game.title}
              game={game}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};