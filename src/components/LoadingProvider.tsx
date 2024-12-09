import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useDeviceDetect } from '../hooks/useDeviceDetect';
import { usePlatformDetect } from '../hooks/usePlatformDetect';
import { LoadingScreen } from './loading/LoadingScreen';
import { useLoading } from '../hooks/useLoading';

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const isLoading = useLoading(2000);
  const { isMobile, isTablet } = useDeviceDetect();
  const { isAndroid } = usePlatformDetect();

  // Shorter loading time for Android devices
  const loadingTime = isAndroid ? 1000 : 2000;
  
  // Skip loading screen for mobile/tablet or show shorter version for Android
  const shouldShowLoading = isLoading && (!isMobile || !isTablet || isAndroid);

  return (
    <AnimatePresence mode="wait">
      {shouldShowLoading ? <LoadingScreen /> : children}
    </AnimatePresence>
  );
};