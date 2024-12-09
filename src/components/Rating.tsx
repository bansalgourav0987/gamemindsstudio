import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Trophy, ThumbsUp } from 'lucide-react';

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
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Industry Recognition
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
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
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center text-white"
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(review.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
              <p className="text-blue-400 font-medium">{review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};