import React from 'react';
import { motion } from 'framer-motion';
import { Milestone } from './types';

interface JourneyMilestoneProps {
  milestone: Milestone;
  index: number;
}

export const JourneyMilestone: React.FC<JourneyMilestoneProps> = ({ milestone, index }) => {
  const Icon = milestone.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      <div className="flex items-start gap-8">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="hidden md:flex w-20 h-20 shrink-0 items-center justify-center rounded-2xl
            bg-gradient-to-br from-electric-blue/10 to-deep-purple/10 border border-white/5"
        >
          <Icon className="w-8 h-8 text-electric-blue" />
        </motion.div>

        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
              className="md:hidden w-12 h-12 shrink-0 flex items-center justify-center rounded-xl
                bg-gradient-to-br from-electric-blue/10 to-deep-purple/10 border border-white/5"
            >
              <Icon className="w-6 h-6 text-electric-blue" />
            </motion.div>
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.4 }}
                className="inline-block px-3 py-1 text-sm font-medium rounded-full
                  bg-electric-blue/10 text-electric-blue mb-2"
              >
                {milestone.year}
              </motion.span>
              <h3 className="text-2xl font-bold text-white">{milestone.title}</h3>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-blue/0 to-deep-purple/0
              group-hover:from-electric-blue/5 group-hover:to-deep-purple/5 transition-all duration-500" />
            
            <div className="relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/5
              group-hover:border-electric-blue/20 transition-colors duration-300">
              <p className="text-gray-300 mb-4 leading-relaxed">{milestone.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {milestone.achievements.map((achievement, idx) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-electric-blue to-deep-purple" />
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};