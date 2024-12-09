import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NavItem } from './types';

interface MobileMenuItemProps {
  item: NavItem;
  index: number;
  onClick: () => void;
}

export const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ item, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={item.href}
        className="block w-full px-4 py-3 rounded-full text-white hover:bg-white/10 transition-colors"
        onClick={onClick}
      >
        {item.name}
      </Link>
    </motion.div>
  );
};