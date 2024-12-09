import React from 'react';
import { motion } from 'framer-motion';

interface NavContainerProps {
  children: React.ReactNode;
  isScrolled: boolean;
}

export const NavContainer: React.FC<NavContainerProps> = ({ children, isScrolled }) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.nav>
  );
};