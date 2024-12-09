import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface LegalSectionProps {
  icon: LucideIcon;
  title: string;
  content: string;
  index: number;
  type: 'privacy' | 'legal' | 'cookies';
}

const sectionColors = {
  privacy: 'blue',
  legal: 'purple',
  cookies: 'green'
} as const;

export const LegalSection: React.FC<LegalSectionProps> = ({
  icon: Icon,
  title,
  content,
  index,
  type
}) => {
  const color = sectionColors[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 bg-${color}-500/10 rounded-lg`}>
          <Icon className={`w-6 h-6 text-${color}-400`} />
        </div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <p className="text-gray-300 whitespace-pre-line">{content}</p>
    </motion.div>
  );
};