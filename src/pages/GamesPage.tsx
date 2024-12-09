import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/common/SectionTitle';
import { GridBackground } from '../components/common/GridBackground';
import { GameBackground } from '../components/games/GameBackground';
import { GameManager } from '../components/games/GameManager';
import { games } from '../data/games';

export const GamesPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 pt-24 overflow-hidden">
      <GameBackground />

      <GridBackground className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-12"
        >
          <SectionTitle>Our Game Collection</SectionTitle>
          <GameManager games={games} />
        </motion.div>
      </GridBackground>
    </div>
  );
};