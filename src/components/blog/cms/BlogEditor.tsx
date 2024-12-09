import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Image, Tag, User } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogEditorProps {
  onSave: (post: Partial<BlogPost>) => void;
  initialPost?: BlogPost;
}

export const BlogEditor: React.FC<BlogEditorProps> = ({ onSave, initialPost }) => {
  const [post, setPost] = useState<Partial<BlogPost>>(initialPost || {
    title: '',
    content: '',
    excerpt: '',
    coverImage: '',
    category: '',
    slug: '',
    author: '',
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(post);
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    setPost(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Title
        </label>
        <input
          type="text"
          value={post.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-electric-blue focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Author
        </label>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            value={post.author}
            onChange={(e) => setPost(prev => ({ ...prev, author: e.target.value }))}
            className="flex-1 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-electric-blue focus:border-transparent"
            placeholder="Enter author name"
            required
          />
          <User className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Cover Image URL
        </label>
        <div className="flex gap-4">
          <input
            type="url"
            value={post.coverImage}
            onChange={(e) => setPost(prev => ({ ...prev, coverImage: e.target.value }))}
            className="flex-1 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-electric-blue focus:border-transparent"
            required
          />
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gray-700 rounded-lg flex items-center gap-2"
            onClick={() => window.open(post.coverImage, '_blank')}
          >
            <Image className="w-4 h-4" />
            Preview
          </motion.button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Category
        </label>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            value={post.category}
            onChange={(e) => setPost(prev => ({ ...prev, category: e.target.value }))}
            className="flex-1 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-electric-blue focus:border-transparent"
            required
          />
          <Tag className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Excerpt
        </label>
        <textarea
          value={post.excerpt}
          onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
          className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-electric-blue focus:border-transparent h-24"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Content
        </label>
        <textarea
          value={post.content}
          onChange={(e) => setPost(prev => ({ ...prev, content: e.target.value }))}
          className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-electric-blue focus:border-transparent h-64"
          required
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 bg-electric-blue text-gray-900 rounded-lg font-medium flex items-center justify-center gap-2"
      >
        <Save className="w-4 h-4" />
        Save Post
      </motion.button>
    </motion.form>
  );
};