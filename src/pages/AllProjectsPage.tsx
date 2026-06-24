import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import Contact from '../components/Contact';
import { allProjects } from '../data/projects';

const AllProjectsPage = () => {
  const navigate = useNavigate();

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

          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">All Projects</h1>
            <p className="text-gray-400 text-lg">A comprehensive collection of my work in full-stack development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map(p => <ProjectCard key={p.title} project={p} />)}
          </div>
        </div>
      </section>
      <Contact />
      <footer className="py-12 px-6 text-center text-gray-600 text-xs border-t border-white/5 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Designed & Coded with Passion
      </footer>
    </main>
  );
};

export default AllProjectsPage;
