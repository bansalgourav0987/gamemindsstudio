import React from 'react';
import { motion } from 'framer-motion';
import { JourneyTimeline } from './journey/JourneyTimeline';

export const Journey: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From humble beginnings to industry recognition, follow our path of innovation
            and growth in the gaming industry.
          </p>
        </motion.div>

        <JourneyTimeline />
      </div>
    </section>
  );
};