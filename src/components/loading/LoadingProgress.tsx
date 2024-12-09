import React from 'react';
import { motion } from 'framer-motion';

export const LoadingProgress: React.FC = () => {
  return (
    <div className="relative w-48 h-1 bg-gray-800 rounded-full overflow-hidden mt-6">
      <motion.div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-electric-blue to-deep-purple rounded-full"
        initial={{ width: "0%" }}
        animate={{ 
          width: "100%",
          transition: {
            duration: 2,
            ease: "easeInOut"
          }
        }}
      />
      
      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 bg-electric-blue/30 rounded-full"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ filter: 'blur(4px)' }}
      />
    </div>
  );
};