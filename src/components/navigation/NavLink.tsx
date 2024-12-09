import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from './types';

interface NavLinkProps {
  item: NavItem;
}

export const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  const location = useLocation();
  const isActive = location.pathname === item.href;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Link
        to={item.href}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          isActive
            ? 'bg-gray-800/50 text-white'
            : 'text-white/90 hover:text-white hover:bg-gray-800/30'
        }`}
      >
        {item.name}
      </Link>
    </motion.div>
  );
};