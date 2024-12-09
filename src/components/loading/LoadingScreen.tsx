import React from 'react';
import { motion } from 'framer-motion';
import { LoadingLogo } from './LoadingLogo';
import { LoadingText } from './LoadingText';
import { LoadingBackground } from './LoadingBackground';

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gray-900 flex flex-col items-center justify-center"
    >
      <LoadingBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        <LoadingLogo />
        <LoadingText />
      </div>
    </motion.div>
  );
};