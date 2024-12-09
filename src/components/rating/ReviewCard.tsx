import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  text: string;
  author: string;
  rating: number;
  index: number;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ text, author, rating, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2
      }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.1 + i * 0.1,
        type: "spring",
        stiffness: 150
      }
    })
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 p-6 rounded-lg transform-gpu"
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={starVariants}
            initial="hidden"
            whileInView="visible"
          >
            <Star
              className={`w-5 h-5 ${
                i < Math.floor(rating)
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-600'
              }`}
            />
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.5 }}
        className="text-gray-300 mb-4 italic"
      >
        "{text}"
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.7 }}
        className="text-blue-400 font-medium"
      >
        {author}
      </motion.p>
    </motion.div>
  );
};