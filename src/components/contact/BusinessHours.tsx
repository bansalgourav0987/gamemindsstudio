import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const hours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' }
];

export const BusinessHours: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-full"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="p-3 bg-purple-500/10 rounded-xl">
          <Clock className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Business Hours</h3>
      </motion.div>

      <div className="space-y-6">
        {hours.map((schedule, index) => (
          <motion.div
            key={schedule.day}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="flex justify-between items-center group">
              <span className="text-gray-400 group-hover:text-white transition-colors">
                {schedule.day}
              </span>
              <span className="text-white font-medium bg-purple-500/10 px-3 py-1 rounded-full text-sm">
                {schedule.time}
              </span>
            </div>
            {index !== hours.length - 1 && (
              <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-4 bg-purple-500/5 rounded-xl border border-purple-500/10"
      >
        <p className="text-gray-400 text-sm text-center">
          All times are in local timezone (GMT+5:00)
        </p>
      </motion.div>
    </motion.div>
  );
};