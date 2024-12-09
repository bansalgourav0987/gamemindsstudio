import React from 'react';
import { NavContainer } from './NavContainer';
import { NavContent } from './NavContent';
import { useScrollEffect } from './hooks/useScrollEffect';
import { useNavigationState } from '../../hooks/useNavigationState';

export const Navigation: React.FC = () => {
  const isScrolled = useScrollEffect(50);
  const { isMenuOpen, toggleMenu, closeMenu, isMobileOrTablet } = useNavigationState();

  return (
    <NavContainer isScrolled={isScrolled}>
      <NavContent 
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        isMobileOrTablet={isMobileOrTablet}
        onToggleMenu={toggleMenu}
        onCloseMenu={closeMenu}
      />
    </NavContainer>
  );
};