import React from 'react';
import { motion } from 'framer-motion';

interface ValueProps {
  value: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const ValueCard: React.FC<ValueProps> = ({ value, index }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="text-center"
    >
      <motion.div
        whileHover={{ 
          scale: 1.1,
          rotate: 360,
          backgroundColor: "#4f46e5"
        }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center text-white transform-gpu"
      >
        {value.icon}
      </motion.div>
      
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.2 }}
        className="text-xl font-bold text-white mb-4"
      >
        {value.title}
      </motion.h3>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.3 }}
        className="text-gray-400"
      >
        {value.description}
      </motion.p>
    </motion.div>
  );
};