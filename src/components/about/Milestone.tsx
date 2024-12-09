import React from 'react';
import { motion } from 'framer-motion';

interface MilestoneProps {
  milestone: {
    year: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  index: number;
  isLeft: boolean;
}

export const Milestone: React.FC<MilestoneProps> = ({ milestone, index, isLeft }) => {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`w-1/2 ${isLeft ? 'pr-16 text-right' : 'pl-16'} ${isLeft ? 'ml-auto mr-[50%]' : 'ml-[50%]'}`}
      >
        <div className={`bg-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/5 ${isLeft ? 'mr-8' : 'ml-8'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-full bg-purple-600/20 ${isLeft ? 'order-last' : ''}`}>
              {milestone.icon}
            </div>
            <div>
              <span className="text-purple-400 font-medium">{milestone.year}</span>
              <h4 className="text-xl font-bold text-white">{milestone.title}</h4>
            </div>
          </div>
          <p className="text-gray-300">{milestone.description}</p>
        </div>
      </motion.div>

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900"
      />
    </div>
  );
};