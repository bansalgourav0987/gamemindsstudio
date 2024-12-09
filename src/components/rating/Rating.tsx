import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Trophy, ThumbsUp } from 'lucide-react';
import { StatCard } from './StatCard';
import { ReviewCard } from './ReviewCard';

const stats = [
  {
    icon: <Star className="w-8 h-8" />,
    value: "4.9",
    label: "Average Rating",
    suffix: "/5"
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "1M+",
    label: "Active Players",
    suffix: ""
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    value: "50+",
    label: "Awards Won",
    suffix: ""
  },
  {
    icon: <ThumbsUp className="w-8 h-8" />,
    value: "98",
    label: "Player Satisfaction",
    suffix: "%"
  }
];

const reviews = [
  {
    text: "The most innovative game studio I've seen in years. Their attention to detail is unmatched!",
    author: "Gaming Weekly",
    rating: 5
  },
  {
    text: "Consistently delivering groundbreaking experiences that push the boundaries of what's possible.",
    author: "GameSpot",
    rating: 5
  },
  {
    text: "Their games combine stunning visuals with deep, engaging gameplay mechanics.",
    author: "IGN",
    rating: 4.8
  }
];

export const Rating: React.FC = () => {
  return (
    <section className="relative py-20 bg-gray-900/95 backdrop-blur-xl">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Hexagon Grid */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`hex-${i}`}
              className="absolute w-32 h-32"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Floating Orbs */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-4 h-4 rounded-full bg-white/5"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Animated Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px w-full bg-white/5"
            style={{ top: `${i * 12.5}%` }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0],
              x: [-100, 100],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}

        {/* Glowing Corner Effects */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`corner-${i}`}
            className="absolute w-64 h-64"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
              top: i < 2 ? '-5%' : 'auto',
              bottom: i >= 2 ? '-5%' : 'auto',
              left: i % 2 === 0 ? '-5%' : 'auto',
              right: i % 2 === 1 ? '-5%' : 'auto',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}

        {/* Shooting Stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute h-px w-32 bg-gradient-to-r from-transparent via-white to-transparent"
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Industry Recognition
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              index={index}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.author}
              text={review.text}
              author={review.author}
              rating={review.rating}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};