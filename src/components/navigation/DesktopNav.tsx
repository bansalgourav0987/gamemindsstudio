import React from 'react';
import { motion } from 'framer-motion';
import { NavItem } from './types';
import { AnimatedNavLink } from './AnimatedNavLink';

interface DesktopNavProps {
  items: NavItem[];
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ items }) => {
  return (
    <motion.div 
      className="hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
    >
      <div className="flex items-center space-x-2">
        {items.map((item) => (
          <AnimatedNavLink
            key={item.name}
            to={item.href}
            className="text-gray-300 hover:text-white px-3 py-1.5 rounded-full text-sm font-medium transition-colors hover:bg-gray-800/30"
          >
            {item.name}
          </AnimatedNavLink>
        ))}
      </div>
    </motion.div>
  );
};