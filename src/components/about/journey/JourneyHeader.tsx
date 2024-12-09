import React from 'react';
import { motion } from 'framer-motion';

export const JourneyHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="inline-block px-4 py-1 bg-electric-blue/10 rounded-full text-electric-blue 
          text-sm font-medium mb-4"
      >
        Our Journey
      </motion.div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent 
        bg-gradient-to-r from-electric-blue to-deep-purple">
        From Vision to Reality
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Follow our path of innovation and growth as we continue to push
        the boundaries of gaming technology and creative storytelling.
      </p>
    </motion.div>
  );
};