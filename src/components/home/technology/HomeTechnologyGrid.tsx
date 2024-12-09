import React from 'react';
import { motion } from 'framer-motion';
import { HomeTechnologyCard } from './HomeTechnologyCard';
import { technologies } from '../../about/technology/technologies';

export const HomeTechnologyGrid: React.FC = () => {
  // Select featured technologies for homepage
  const featuredTechnologies = technologies.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {featuredTechnologies.map((tech, index) => (
        <HomeTechnologyCard
          key={tech.title}
          technology={tech}
          index={index}
        />
      ))}
    </motion.div>
  );
};