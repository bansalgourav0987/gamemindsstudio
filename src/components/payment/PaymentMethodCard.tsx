import React from 'react';
import { motion } from 'framer-motion';
import { PaymentMethod } from './types';

interface PaymentMethodCardProps {
  method: PaymentMethod;
  index: number;
}

export const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({ method, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative h-16 mb-6"
      >
        <img
          src={method.logo}
          alt={method.name}
          className="h-full object-contain"
        />
      </motion.div>

      <h3 className="text-xl font-bold text-white mb-4">{method.name}</h3>
      <p className="text-gray-400 mb-6">{method.description}</p>

      <div className="space-y-3">
        {method.features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.1 }}
            className="flex items-center text-sm text-gray-300"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3" />
            {feature}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};