import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Passion',
    description: 'We pour our hearts into every project, driven by our love for gaming and creativity.',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation',
    description: 'Constantly pushing boundaries and exploring new possibilities in game development.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community',
    description: 'Building strong relationships with our players and valuing their feedback.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Excellence',
    description: 'Committed to delivering high-quality experiences that exceed expectations.',
    gradient: 'from-purple-500 to-indigo-500'
  }
];

export const CoreValues: React.FC = () => {
  return (
    <div className="relative py-20">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-deep-purple/10 to-gray-900">
        {/* Animated gradient lines */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent"
              style={{ top: `${i * 25}%` }}
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
        </div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full filter blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-deep-purple/20 rounded-full filter blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-16"
        >
          Our Core Values
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 group relative overflow-hidden"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg`}
              >
                {value.icon}
              </motion.div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors">
                {value.title}
              </h4>
              <p className="text-gray-300 relative z-10">{value.description}</p>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${value.gradient} blur-xl`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};