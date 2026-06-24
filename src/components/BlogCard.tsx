import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, formatDate } from '../data/posts';

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link to={`/blog/${post.slug}`} className="group block bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-brand-purple/50 transition-all duration-500 overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="relative z-10">
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full font-mono">{tag}</span>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-brand-purple transition-colors leading-snug">{post.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
      <div className="flex items-center justify-between text-xs text-gray-600 font-mono">
        <span>{formatDate(post.date)}</span>
        <span>{post.readTime}</span>
      </div>
    </div>
  </Link>
);

export default BlogCard;
