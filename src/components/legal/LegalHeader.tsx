import React from 'react';
import { motion } from 'framer-motion';

interface LegalHeaderProps {
  title: string;
  lastUpdated: string;
}

export const LegalHeader: React.FC<LegalHeaderProps> = ({ title, lastUpdated }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <div className="flex items-center gap-2">
        <span className="text-gray-400">Last updated:</span>
        <span className="text-gray-300">{lastUpdated}</span>
      </div>
    </motion.div>
  );
};