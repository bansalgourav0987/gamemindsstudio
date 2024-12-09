import React from 'react';
import { motion } from 'framer-motion';
import { Technology } from '../../about/technology/types';

interface HomeTechnologyCardProps {
  technology: Technology;
  index: number;
}

export const HomeTechnologyCard: React.FC<HomeTechnologyCardProps> = ({
  technology: { icon: Icon, title, description, color },
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 group h-full"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={`w-16 h-16 mb-6 rounded-full ${color} flex items-center justify-center`}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>

      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};