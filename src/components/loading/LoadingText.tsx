import React from 'react';
import { motion } from 'framer-motion';
import { usePlatformDetect } from '../../hooks/usePlatformDetect';
import { LoadingProgress } from './LoadingProgress';

export const LoadingText: React.FC = () => {
  const { isAndroid } = usePlatformDetect();

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  };

  const titleVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      variants={textVariants}
      initial="initial"
      animate="animate"
      className="text-center"
    >
      <motion.h2
        variants={titleVariants}
        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-deep-purple mb-4"
      >
        Game Minds Studio
      </motion.h2>
      {!isAndroid && (
        <>
          <p className="text-gray-400 mb-4">
            Loading amazing experiences...
          </p>
          <LoadingProgress />
        </>
      )}
    </motion.div>
  );
};