import React from 'react';
import { motion } from 'framer-motion';
import { Contact } from '../components/Contact';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};