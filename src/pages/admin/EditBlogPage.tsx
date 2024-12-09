import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogEditor } from '../../components/blog/cms/BlogEditor';
import { useBlogPost } from '../../hooks/useBlogPost';

export const EditBlogPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = useBlogPost(slug);

  const handleSave = () => {
    // In a real application, this would save to a backend
    navigate('/admin/blog');
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-8">
          {slug === 'new' ? 'Create New Post' : 'Edit Post'}
        </h1>
        <BlogEditor onSave={handleSave} initialPost={post || undefined} />
      </div>
    </div>
  );
};