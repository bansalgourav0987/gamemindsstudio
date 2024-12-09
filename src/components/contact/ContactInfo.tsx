import React from 'react';
import { motion } from 'framer-motion';
import { ContactMethod } from './ContactMethod';
import { contactDetails } from './data/contactDetails';

export const ContactInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-full"
    >
      <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
      <div className="space-y-8">
        {contactDetails.map((detail, index) => (
          <ContactMethod
            key={detail.label}
            detail={detail}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-4 bg-electric-blue/5 rounded-xl border border-electric-blue/10"
      >
        <p className="text-gray-400 text-sm text-center">
          Available during business hours for immediate assistance
        </p>
      </motion.div>
    </motion.div>
  );
};