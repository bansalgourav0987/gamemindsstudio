import React from 'react';
import { motion } from 'framer-motion';
import { JourneyMilestone } from './JourneyMilestone';
import { milestones } from './data/milestones';

export const JourneyTimeline: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute left-10 top-0 bottom-0 w-px hidden md:block">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full w-full bg-gradient-to-b from-electric-blue via-deep-purple to-electric-blue
            origin-top"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-electric-blue 
            via-deep-purple to-electric-blue blur-sm opacity-50" />
        </motion.div>
      </div>

      <div className="space-y-16">
        {milestones.map((milestone, index) => (
          <JourneyMilestone
            key={milestone.title}
            milestone={milestone}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};