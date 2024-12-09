import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from './types';
import { MobileMenuItem } from './MobileMenuItem';

interface MobileMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  items, 
  isOpen, 
  onClose,
  className = ''
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className={className}
          >
            <div className="p-4 space-y-2">
              {items.map((item, index) => (
                <MobileMenuItem
                  key={item.name}
                  item={item}
                  index={index}
                  onClick={onClose}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};