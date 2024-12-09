import React from 'react';
import { motion } from 'framer-motion';

export const LoadingBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(0, 247, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(107, 70, 193, 0.15) 0%, transparent 50%)
            `
          }}
        />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-electric-blue/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
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
                ? 'rgba(0, 247, 255, 0.15)'
                : 'rgba(107, 70, 193, 0.15)'
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

      {/* Shooting stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute h-px w-32 bg-gradient-to-r from-transparent via-electric-blue to-transparent"
          style={{
            top: `${Math.random() * 100}%`,
            left: '-10%',
            rotate: '45deg',
          }}
          animate={{
            x: ['0%', '1500%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};