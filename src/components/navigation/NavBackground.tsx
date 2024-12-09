import React from 'react';
import { motion } from 'framer-motion';

interface NavBackgroundProps {
  isScrolled: boolean;
}

export const NavBackground: React.FC<NavBackgroundProps> = ({ isScrolled }) => {
  return (
    <motion.div 
      className={`
        absolute inset-0 
        ${isScrolled ? 'bg-gray-900/95' : 'bg-gray-900/75'}
        backdrop-blur-md rounded-full
        border border-white/10 transition-all duration-300
        group-hover:bg-gray-900/90 group-hover:border-white/20
      `}
    >
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 rounded-full opacity-50"
        style={{
          background: 'linear-gradient(to right, rgba(0, 247, 255, 0.05), rgba(107, 70, 193, 0.05))'
        }}
      />

      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 247, 255, 0.1) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};