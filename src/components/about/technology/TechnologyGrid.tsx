import React from 'react';
import { motion } from 'framer-motion';
import { TechnologyCard } from './TechnologyCard';
import { technologies } from './technologies';

export const TechnologyGrid: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {technologies.map((tech, index) => (
        <TechnologyCard
          key={tech.title}
          technology={tech}
          index={index}
        />
      ))}
    </motion.div>
  );
};