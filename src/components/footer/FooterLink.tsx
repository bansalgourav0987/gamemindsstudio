import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={href}
        className="text-gray-400 hover:text-white transition-colors"
      >
        {children}
      </Link>
    </motion.div>
  );
};