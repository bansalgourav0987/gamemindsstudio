import { useState, useEffect } from 'react';
import { BlogPost } from '../components/blog/types';
import { blogPosts } from '../components/blog/data/blogPosts';

export const useBlogPost = (slug?: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      const foundPost = blogPosts.find(p => p.slug === slug);
      setPost(foundPost || null);
    }
  }, [slug]);

  return post;
};