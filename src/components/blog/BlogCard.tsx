import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from './types';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/5"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute top-4 right-4 bg-electric-blue/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium"
        >
          {post.category}
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-400 mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <Link to={`/blog/${post.slug}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-electric-blue font-medium group"
          >
            Read More
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </Link>
      </div>
    </motion.article>
  );
};