import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { usePlatformDetect } from '../../hooks/usePlatformDetect';

export const LoadingLogo: React.FC = () => {
  const { isAndroid } = usePlatformDetect();

  const logoVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const androidAnimation = {
    rotate: [0, 360],
    transition: { duration: 1, repeat: Infinity, ease: "linear" }
  };

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
    <div className="relative flex items-center justify-center">
      <motion.div
        className="relative w-24 h-24 flex items-center justify-center"
        variants={logoVariants}
        initial="initial"
        animate="animate"
      >
        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 bg-electric-blue/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ filter: 'blur(10px)' }}
        />

        <motion.div
          animate={isAndroid ? androidAnimation : defaultAnimation}
          className="relative w-16 h-16 text-electric-blue"
        >
          <Gamepad2 className="w-full h-full" />
          
          {/* Inner glow */}
          <motion.div
            className="absolute inset-0 bg-electric-blue/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ filter: 'blur(4px)' }}
          />
        </motion.div>

        {/* Additional decorative elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute w-2 h-2 bg-electric-blue/50 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 90}deg) translateX(${48}px)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};