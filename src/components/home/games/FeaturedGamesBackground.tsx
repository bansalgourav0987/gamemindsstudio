import React from 'react';
import { motion } from 'framer-motion';

export const FeaturedGamesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '3rem 3rem'
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-indigo-500/30"
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

      {/* Floating orbs with trails */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute"
          style={{
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 2 === 0 
                  ? 'rgba(99, 102, 241, 0.3) 0%, transparent 70%'
                  : 'rgba(67, 56, 202, 0.3) 0%, transparent 70%'
              })`,
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: i % 2 === 0 
                ? 'rgba(99, 102, 241, 0.2)'
                : 'rgba(67, 56, 202, 0.2)',
            }}
            animate={{
              scale: [1.2, 1.5, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          />
        </motion.div>
      ))}

      {/* Animated gradient lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px w-full"
          style={{
            top: `${i * 12.5}%`,
            background: 'linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.3) 50%, transparent 100%)',
            filter: 'blur(2px)'
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear"
          }}
        />
      ))}

      {/* Pulsing corner gradients */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`corner-${i}`}
          className="absolute w-[40rem] h-[40rem]"
          style={{
            background: `
              radial-gradient(
                circle,
                ${i % 2 === 0 ? 'rgba(99, 102, 241, 0.15)' : 'rgba(67, 56, 202, 0.15)'} 0%,
                transparent 70%
              )
            `,
            top: i < 2 ? '-20%' : 'auto',
            bottom: i >= 2 ? '-20%' : 'auto',
            left: i % 2 === 0 ? '-20%' : 'auto',
            right: i % 2 === 1 ? '-20%' : 'auto',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, i % 2 === 0 ? 45 : -45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Central glow effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};