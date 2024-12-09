import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { usePlatformDetect } from '../../hooks/usePlatformDetect';

export const LoadingIndicator: React.FC = () => {
  const { isAndroid } = usePlatformDetect();

  // Simplified animation for Android devices
  const androidAnimation = {
    rotate: [0, 360],
    transition: { duration: 1, repeat: Infinity, ease: "linear" }
  };

  // Rich animation for other platforms
  const defaultAnimation = {
    scale: [1, 1.2, 1],
    rotate: [0, 360],
    transition: { 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      className="relative w-16 h-16 flex items-center justify-center"
      animate={isAndroid ? androidAnimation : defaultAnimation}
    >
      <Gamepad2 className="w-12 h-12 text-electric-blue" />
    </motion.div>
  );
};