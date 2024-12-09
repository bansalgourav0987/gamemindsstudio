import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { Particles } from './effects/Particles';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-gray-900 overflow-hidden">
      <Particles />
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 flex justify-center"
          >
            <Gamepad2 className="h-24 w-24 text-electric-blue animate-float" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-deep-purple"
          >
            Game Minds Studio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300"
          >
            Crafting Digital Dreams Into Reality
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 space-x-4"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-electric-blue text-gray-900 rounded-full font-medium hover:bg-blue-400 transition-colors"
            >
              Explore Our Games
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 border-2 border-electric-blue text-electric-blue rounded-full font-medium hover:bg-electric-blue/10 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/40 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/40 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};