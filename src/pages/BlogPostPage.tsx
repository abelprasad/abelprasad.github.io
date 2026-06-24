import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { allPosts, formatDate } from '../data/posts';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = allPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="antialiased min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <p className="text-gray-400 text-lg">Post not found.</p>
        <button onClick={() => navigate('/blog')} className="mt-6 text-brand-purple hover:text-white transition-colors">← Back to Blog</button>
      </main>
    );
  }

  return (
    <main className="antialiased min-h-screen">
      <Navbar />
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </button>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-brand-purple/20 text-brand-purple text-xs rounded-full font-mono">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-xs text-gray-600 font-mono mb-12 border-b border-white/5 pb-8">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <div
            className="text-gray-300 leading-relaxed text-lg
              [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4
              [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:mb-6
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2
              [&_li]:text-gray-300
              [&_strong]:text-white [&_strong]:font-semibold
              [&_em]:italic
              [&_a]:text-brand-purple [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-white
              [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_code]:text-brand-purple
              [&_pre]:bg-white/5 [&_pre]:border [&_pre]:border-white/10 [&_pre]:rounded-xl [&_pre]:p-6 [&_pre]:overflow-x-auto [&_pre]:mb-6 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-gray-300 [&_pre_code]:text-sm
              [&_blockquote]:border-l-2 [&_blockquote]:border-brand-purple [&_blockquote]:pl-6 [&_blockquote]:text-gray-400 [&_blockquote]:italic [&_blockquote]:mb-6
              [&_hr]:border-white/10 [&_hr]:my-10"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />
        </div>
      </article>
      <footer className="py-12 px-6 text-center text-gray-600 text-xs border-t border-white/5 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Designed & Coded with Passion
      </footer>
    </main>
  );
};

export default BlogPostPage;
