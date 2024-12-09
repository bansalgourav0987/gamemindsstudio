import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { BlogList } from '../../components/blog/cms/BlogList';
import { blogPosts } from '../../components/blog/data/blogPosts';
import { Link } from 'react-router-dom';

export const AdminBlogPage: React.FC = () => {
  const [posts, setPosts] = useState(blogPosts);

  const handleDelete = (slug: string) => {
    setPosts(posts.filter(post => post.slug !== slug));
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Blog Management</h1>
          <Link to="/admin/blog/new">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-electric-blue text-gray-900 rounded-lg font-medium flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New Post
            </motion.button>
          </Link>
        </div>

        <BlogList posts={posts} onDelete={handleDelete} />
      </div>
    </div>
  );
};