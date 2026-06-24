import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const anchor = (hash: string) => pathname === '/' ? hash : `/${hash}`;

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center backdrop-blur-md bg-brand-black/50 border-b border-white/5">
      <Link to="/" className="text-xl font-extrabold tracking-tighter hover:text-brand-purple transition-colors">
        ABEL<span className="text-brand-purple">PRASAD</span>
      </Link>
      <div className="space-x-8 text-sm font-medium uppercase tracking-widest text-gray-400 hidden md:flex">
        <a href={anchor('#experience')} className="hover:text-brand-purple transition-colors">Experience</a>
        <a href={anchor('#projects')} className="hover:text-brand-purple transition-colors">Projects</a>
        <a href={anchor('#about')} className="hover:text-brand-purple transition-colors">About</a>
        <Link to="/blog" className="hover:text-brand-purple transition-colors">Blog</Link>
        <a href={anchor('#contact')} className="hover:text-brand-purple transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
