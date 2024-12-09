import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2 } from 'lucide-react';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';

interface BlogListProps {
  posts: BlogPost[];
  onDelete: (slug: string) => void;
}

export const BlogList: React.FC<BlogListProps> = ({ posts, onDelete }) => {
  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-between group hover:bg-gray-800 transition-colors"
        >
          <div className="flex items-center gap-4">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-white font-medium group-hover:text-electric-blue transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm">{post.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link to={`/admin/blog/edit/${post.slug}`}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Edit className="w-4 h-4" />
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onDelete(post.slug)}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};