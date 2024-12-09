import React from 'react';
import { motion } from 'framer-motion';

export const AboutContent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-lg text-gray-300 leading-relaxed"
      >
        Founded in 2024, Game Minds Studio has been at the forefront of creating
        immersive gaming experiences that push the boundaries of technology and
        storytelling. Our team of passionate developers, artists, and designers
        work together to bring unique digital worlds to life.
      </motion.p>
      
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.4
        }}
        className="mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
        >
          Join Our Team
        </motion.button>
      </motion.div>
    </div>
  );
};