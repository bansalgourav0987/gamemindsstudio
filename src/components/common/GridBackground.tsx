import React from 'react';
import { motion } from 'framer-motion';

interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Enhanced Grid Pattern with better visibility */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem, 4rem 4rem, 1rem 1rem, 1rem 1rem'
          }}
        />
      </div>

      {/* Enhanced Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-fuchsia-600/30 rounded-full filter blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-indigo-600/30 rounded-full filter blur-[120px]"
      />

      {/* New: Animated gradient lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-white to-transparent"
            style={{ top: `${i * 20}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* New: Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 backdrop-blur-[2px]">
        {children}
      </div>
    </div>
  );
};