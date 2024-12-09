import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../common/SectionTitle';
import { HomeTechnologyGrid } from './HomeTechnologyGrid';
import { GridBackground } from '../../common/GridBackground';

export const HomeTechnologySection: React.FC = () => {
  return (
    <GridBackground className="py-20">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <SectionTitle>Advanced Gaming Technology</SectionTitle>
          <p className="text-gray-400 text-lg">
            Experience the future of gaming with our cutting-edge technology stack,
            pushing the boundaries of what's possible in interactive entertainment.
          </p>
        </motion.div>

        <HomeTechnologyGrid />
      </div>
    </GridBackground>
  );
};