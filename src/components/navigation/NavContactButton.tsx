import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const NavContactButton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="hidden md:block"
    >
      <Link
        to="/contact"
        className="px-4 py-1.5 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
      >
        Contact
      </Link>
    </motion.div>
  );
};