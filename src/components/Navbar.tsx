import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const anchor = (hash: string) => pathname === '/' ? hash : `/${hash}`;

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center backdrop-blur-md bg-brand-black/70 border-b border-white/10">
      <Link to="/" className="font-mono text-sm font-bold tracking-[0.25em] hover:text-brand-purple transition-colors">
        ABEL<span className="text-brand-purple">_</span>PRASAD
      </Link>
      <div className="flex items-center gap-6">
        <div className="space-x-8 text-xs font-mono uppercase tracking-[0.2em] text-gray-400 hidden md:flex">
          <a href={anchor('#experience')} className="hover:text-brand-purple transition-colors">Experience</a>
          <a href={anchor('#projects')} className="hover:text-brand-purple transition-colors">Projects</a>
          <a href={anchor('#stack')} className="hover:text-brand-purple transition-colors">Stack</a>
          <Link to="/blog" className="hover:text-brand-purple transition-colors">Log</Link>
          <a href={anchor('#contact')} className="hover:text-brand-purple transition-colors">Contact</a>
        </div>
        <span className="hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-gray-500">
          <span className="status-dot inline-block w-1.5 h-1.5 rounded-full bg-brand-purple text-brand-purple"></span>
          ONLINE
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
