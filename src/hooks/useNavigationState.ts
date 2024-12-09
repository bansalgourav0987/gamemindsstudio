import { useState, useCallback, useEffect } from 'react';
import { useDeviceDetect } from './useDeviceDetect';
import { useLocation } from 'react-router-dom';

export const useNavigationState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile, isTablet } = useDeviceDetect();
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    if (isMenuOpen) {
      closeMenu();
    }
  }, [location.pathname]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => {
      const newState = !prev;
      document.body.style.overflow = newState ? 'hidden' : 'auto';
      return newState;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    isMobileOrTablet: isMobile || isTablet
  };
};