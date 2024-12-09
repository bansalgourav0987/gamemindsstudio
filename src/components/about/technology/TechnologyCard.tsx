import React from 'react';
import { motion } from 'framer-motion';
import { Technology } from './types';

interface TechnologyCardProps {
  technology: Technology;
  index: number;
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  technology: { icon: Icon, title, description, color, features },
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 border border-white/10 group hover:bg-gray-800/90 transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={`w-16 h-16 mb-6 rounded-full ${color} flex items-center justify-center shadow-lg shadow-indigo-500/20`}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>

      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors">
        {title}
      </h3>
      <p className="text-gray-300 mb-6">{description}</p>

      <div className="space-y-2">
        {features.map((feature, idx) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.1 }}
            className="flex items-center space-x-2"
          >
            <div className={`w-1.5 h-1.5 rounded-full ${color.replace('bg-gradient-to-br', 'bg')} opacity-75 shadow-sm shadow-white/10`} />
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* New: Hover effect glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/0 via-electric-blue/0 to-purple-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl rounded-xl" />
    </motion.div>
  );
};