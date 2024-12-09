import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface BlogSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const BlogSearch: React.FC<BlogSearchProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mb-12"
    >
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search blog posts..."
        className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
      />
    </motion.div>
  );
};