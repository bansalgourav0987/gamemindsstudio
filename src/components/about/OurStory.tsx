import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Gamepad } from 'lucide-react';

const stats = [
  {
    icon: <Gamepad className="w-6 h-6" />,
    value: "40+",
    label: "Games Created"
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "1M+",
    label: "Active Players"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    value: "50+",
    label: "Awards Won"
  }
];

export const OurStory: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-indigo-900/20 to-gray-900">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-blue-900/30 animate-gradient" />
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-2xl text-gray-300">Pioneering game innovation since 2024</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Game Minds Studio, we're driven by a singular mission: to revolutionize
                gaming through cutting-edge innovation and unwavering commitment to quality.
                We believe that every player deserves experiences that enhance their
                imagination and pushes the boundaries of what's possible in digital entertainment.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 mx-auto mb-4 bg-electric-blue/20 rounded-full flex items-center justify-center text-electric-blue"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-deep-purple/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80"
                alt="Game Development"
                className="w-full h-full object-cover rounded-2xl opacity-75 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};