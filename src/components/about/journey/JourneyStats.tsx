import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Star, Award } from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    value: '50+',
    label: 'Awards Won'
  },
  {
    icon: Users,
    value: '1M+',
    label: 'Active Players'
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Average Rating'
  },
  {
    icon: Award,
    value: '100+',
    label: 'Team Members'
  }
];

export const JourneyStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center"
          >
            <stat.icon className="w-8 h-8 text-purple-400" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="text-3xl font-bold text-white mb-2"
          >
            {stat.value}
          </motion.div>
          <div className="text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};