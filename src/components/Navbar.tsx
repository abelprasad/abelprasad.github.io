import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const anchor = (hash: string) => pathname === '/' ? hash : `/${hash}`;

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center backdrop-blur-md bg-brand-black/70 border-b border-brand-line">
      <Link to="/" className="font-mono text-sm font-bold tracking-[0.15em] hover:text-brand-green transition-colors">
        <span className="text-brand-darkGreen">abel@indra</span><span className="text-brand-muted">:~$</span><span className="blink text-brand-green">█</span>
      </Link>
      <div className="flex items-center gap-6">
        <div className="space-x-8 text-xs font-mono uppercase tracking-[0.2em] text-brand-muted hidden md:flex">
          <a href={anchor('#experience')} className="hover:text-brand-green transition-colors">Experience</a>
          <a href={anchor('#projects')} className="hover:text-brand-green transition-colors">Projects</a>
          <a href={anchor('#stack')} className="hover:text-brand-green transition-colors">Stack</a>
          <Link to="/blog" className="hover:text-brand-green transition-colors">Log</Link>
          <a href={anchor('#contact')} className="hover:text-brand-green transition-colors">Contact</a>
        </div>
        <span className="hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-brand-muted">
          <span className="status-dot inline-block w-1.5 h-1.5 rounded-full bg-brand-green text-brand-green"></span>
          ONLINE
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
