import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { NavContactButton } from './NavContactButton';
import { NavBackground } from './NavBackground';
import { navItems } from './data/navItems';

interface NavContentProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  isMobileOrTablet: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}

export const NavContent: React.FC<NavContentProps> = ({
  isScrolled,
  isMenuOpen,
  isMobileOrTablet,
  onToggleMenu,
  onCloseMenu
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        relative flex items-center justify-between
        ${isMobileOrTablet ? 'px-3 py-2' : 'px-5 py-2'}
        shadow-lg shadow-black/5
        max-w-5xl mx-auto
        group
      `}
    >
      <NavBackground isScrolled={isScrolled} />
      
      <div className="relative z-10 flex items-center justify-between w-full">
        <Logo />
        <div className="flex items-center gap-4">
          <DesktopNav items={navItems} />
          <NavContactButton />
          <MobileNav 
            items={[...navItems, { name: 'Contact', href: '/contact' }]}
            isOpen={isMenuOpen}
            onToggle={onToggleMenu}
            onClose={onCloseMenu}
          />
        </div>
      </div>
    </motion.div>
  );
};