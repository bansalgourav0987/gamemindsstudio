import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Particles } from '../effects/Particles';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-gray-900 overflow-hidden">
      <Particles />
      
      <div className="relative z-10 h-full flex items-center justify-center pt-32">
        <div className="text-center max-w-4xl px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <Gamepad2 className="h-16 w-16 text-electric-blue animate-float mx-auto" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-deep-purple"
          >
            Game Minds Studio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-300"
          >
            Crafting Digital Dreams Into Reality
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 space-x-4"
          >
            <Link to="/games">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-electric-blue text-gray-900 rounded-xl font-medium hover:bg-blue-400 transition-colors shadow-lg hover:shadow-xl text-sm"
              >
                Explore Our Games
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 border-2 border-electric-blue text-electric-blue rounded-xl font-medium hover:bg-electric-blue/10 transition-colors text-sm"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};