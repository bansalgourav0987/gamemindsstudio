import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../common/SectionTitle';
import { TechnologyGrid } from './TechnologyGrid';
import { GridBackground } from '../../common/GridBackground';

export const TechnologySection: React.FC = () => {
  return (
    <GridBackground className="py-20 bg-gray-900/95 relative">
      {/* Additional ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-indigo-900/20 to-gray-900/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <SectionTitle>Our Technology Stack</SectionTitle>
          <p className="text-gray-300 text-lg leading-relaxed">
            We leverage cutting-edge technologies to create immersive gaming experiences
            that push the boundaries of what's possible in digital entertainment.
          </p>
        </motion.div>

        <TechnologyGrid />
      </div>
    </GridBackground>
  );
};