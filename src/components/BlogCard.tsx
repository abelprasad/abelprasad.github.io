import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, formatDate } from '../data/posts';

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link to={`/blog/${post.slug}`} className="card-hover group block bg-brand-panel border border-white/10 p-7 relative h-full">
    <div className="flex flex-wrap gap-2 mb-5">
      {post.tags.map(tag => (
        <span key={tag} className="px-2.5 py-1 bg-white/5 text-gray-500 text-[11px] font-mono">{tag}</span>
      ))}
    </div>
    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-purple transition-colors leading-snug tracking-tight">{post.title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
    <div className="flex items-center justify-between text-[11px] text-gray-600 font-mono tracking-[0.15em]">
      <span>{formatDate(post.date)}</span>
      <span>{post.readTime}</span>
    </div>
  </Link>
);

export default BlogCard;
