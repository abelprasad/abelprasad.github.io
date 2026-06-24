import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';
import { allPosts } from '../data/posts';

const BlogPage = () => {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(allPosts.flatMap(p => p.tags)));
  const filtered = activeTag ? allPosts.filter(p => p.tags.includes(activeTag)) : allPosts;

  return (
    <main className="antialiased min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            Back to Home
          </button>
          <div className="mb-10">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Blog</h1>
            <p className="text-gray-400 text-lg">Thoughts on building software, AI, and the occasional late-night debugging session.</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${activeTag === null ? 'bg-brand-purple text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${activeTag === tag ? 'bg-brand-purple text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(post => <BlogCard key={post.slug} post={post} />)}
          </div>
          {filtered.length === 0 && (
            <p className="text-gray-500 text-center py-16 font-mono">No posts tagged "{activeTag}" yet.</p>
          )}
        </div>
      </section>
      <footer className="py-12 px-6 text-center text-gray-600 text-xs border-t border-white/5 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Designed & Coded with Passion
      </footer>
    </main>
  );
};

export default BlogPage;
