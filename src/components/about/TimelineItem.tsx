import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative"
  >
    <div className="absolute -left-[41px] w-5 h-5 bg-purple-500 rounded-full" />
    <div className="mb-1 text-sm text-purple-400">{year}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);