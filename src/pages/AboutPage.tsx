import React from 'react';
import { motion } from 'framer-motion';
import { About } from '../components/About';
import { OurStory } from '../components/about/OurStory';
import { CoreValues } from '../components/about/CoreValues';
import { Journey } from '../components/about/Journey';
import { TechnologySection } from '../components/about/technology/TechnologySection';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <OurStory />
        <CoreValues />
        <TechnologySection />
        <Journey />
        <About />
      </motion.div>
    </div>
  );
};