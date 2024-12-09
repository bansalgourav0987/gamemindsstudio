import React from 'react';
import { motion } from 'framer-motion';

export const JourneyBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)
            `
          }}
        />
      </div>

      {/* Animated lines */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-[1px] w-full"
          style={{
            top: `${i * 10}%`,
            background: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.2), transparent)',
            filter: 'blur(1px)'
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear"
          }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)'
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }}
        />
      ))}

      {/* Glowing orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-96 h-96 rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, ${
              i % 2 === 0 
                ? 'rgba(147, 51, 234, 0.15)'
                : 'rgba(59, 130, 246, 0.15)'
            } 0%, transparent 70%)`,
            left: `${i * 25}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};