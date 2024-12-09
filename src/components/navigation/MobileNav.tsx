import React from 'react';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileMenu } from './MobileMenu';
import { NavItem } from './types';

interface MobileNavProps {
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  items,
  isOpen,
  onToggle,
  onClose
}) => {
  return (
    <div className="md:hidden">
      <MobileMenuButton isOpen={isOpen} onToggle={onToggle} />
      <MobileMenu 
        items={items} 
        isOpen={isOpen} 
        onClose={onClose}
        className="absolute top-full right-4 mt-4 w-64 bg-gray-900/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden z-50"
      />
    </div>
  );
};