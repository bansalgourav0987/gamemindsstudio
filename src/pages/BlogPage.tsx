import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BlogGrid } from '../components/blog/BlogGrid';
import { BlogSearch } from '../components/blog/BlogSearch';
import { CategoryFilter } from '../components/blog/CategoryFilter';
import { blogPosts, categories } from '../components/blog/data/blogPosts';
import { GridBackground } from '../components/common/GridBackground';

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <GridBackground>
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Game Development Blog
            </h1>
            <p className="text-gray-400 text-lg">
              Insights, tutorials, and updates from the gaming industry
            </p>
          </motion.div>

          <BlogSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <BlogGrid posts={filteredPosts} />
        </div>
      </GridBackground>
    </div>
  );
};