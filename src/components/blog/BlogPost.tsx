import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useBlogPost } from '../../hooks/useBlogPost';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = useBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">Post not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/blog">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </motion.button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-electric-blue/90 text-gray-900 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4"
              >
                {post.category}
              </motion.div>
              <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
};