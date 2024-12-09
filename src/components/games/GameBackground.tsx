import React from 'react';
import { motion } from 'framer-motion';

export const GameBackground: React.FC = () => {
  return (
    <>
      {/* Enhanced floating orbs with trails */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `linear-gradient(to right, rgb(56, 189, 248, ${0.6 + (i % 3) * 0.15}), rgb(59, 130, 246, ${0.6 + (i % 3) * 0.15}))`,
            boxShadow: '0 0 35px rgba(56, 189, 248, 0.6)'
          }}
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: 0
          }}
          animate={{
            x: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%'
            ],
            y: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%'
            ],
            scale: [0, 1.5, 0.8, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Enhanced animated grid lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div key={`grid-${i}`}>
            <motion.div
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"
              style={{ top: `${i * 6.67}%` }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scaleX: [0.9, 1.1, 0.9],
                boxShadow: [
                  '0 0 20px rgba(56, 189, 248, 0.4)',
                  '0 0 35px rgba(56, 189, 248, 0.6)',
                  '0 0 20px rgba(56, 189, 248, 0.4)'
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
            <motion.div
              className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-sky-400/30 to-transparent"
              style={{ left: `${i * 6.67}%` }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scaleY: [0.9, 1.1, 0.9],
                boxShadow: [
                  '0 0 20px rgba(56, 189, 248, 0.4)',
                  '0 0 35px rgba(56, 189, 248, 0.6)',
                  '0 0 20px rgba(56, 189, 248, 0.4)'
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          </div>
        ))}
      </div>

      {/* Enhanced shooting stars */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute h-[2px] w-32 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent"
          initial={{
            opacity: 0,
            x: '-100%',
            y: '-100%',
            rotate: Math.random() * 180
          }}
          animate={{
            opacity: [0, 1, 0],
            x: ['0%', '200%'],
            y: ['0%', '200%'],
          }}
          transition={{
            duration: Math.random() * 6 + 8,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            filter: 'blur(1px)',
            boxShadow: '0 0 20px rgba(56, 189, 248, 0.8)'
          }}
        />
      ))}

      {/* Enhanced glowing corner effects */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`corner-${i}`}
          className="absolute w-96 h-96 rounded-full filter blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, transparent 70%)',
            top: i < 2 ? '-10%' : 'auto',
            bottom: i >= 2 ? '-10%' : 'auto',
            left: i % 2 === 0 ? '-10%' : 'auto',
            right: i % 2 === 1 ? '-10%' : 'auto',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            rotate: [0, i % 2 === 0 ? 45 : -45, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* New: Pulsing center glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* New: Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-sky-400/60"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100
          }}
          animate={{
            y: -100,
            x: Math.random() * 200 - 100,
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
          style={{
            filter: 'blur(1px)',
            boxShadow: '0 0 10px rgba(56, 189, 248, 0.6)'
          }}
        />
      ))}
    </>
  );
};