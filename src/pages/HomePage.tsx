import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { ExperienceSection } from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import Contact from '../components/Contact';
import { allProjects } from '../data/projects';
import { allPosts } from '../data/posts';

const Projects = () => {
  const data = allProjects.slice(0, 3);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold mb-6">Featured Projects</h2>
            <p className="text-gray-400">Selected works that showcase technical expertise and design sensibility.</p>
          </div>
          <div className="h-px bg-white/10 flex-1 mx-8 hidden md:block mb-6"></div>
          <Link to="/projects" className="text-brand-purple font-mono text-sm mb-6 hover:text-white transition-colors flex items-center gap-2">
            VIEW ALL / {allProjects.length}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <main className="antialiased">
      <Navbar />
      <Hero />
      <ExperienceSection />
      <Projects />
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="aspect-[4/5] bg-white/5 rounded-3xl relative overflow-hidden group border border-white/5 hover:border-brand-purple/50 transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
            <img
              src="/headshot.jpg"
              alt="Abel Prasad Headshot"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 z-30 transform group-hover:translate-x-2 transition-transform duration-500">
              <span className="text-brand-purple font-mono text-xs tracking-[0.3em] uppercase block mb-1">Lead Creative</span>
              <span className="text-white font-extrabold text-2xl tracking-tighter">THE DEVELOPER</span>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold">Full-stack developer. CS student at Penn State Abington, graduating December 2026.</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            I build production systems, not demos. My shipped stack spans TypeScript, Python, and Java — React, Next.js, FastAPI, Spring Boot, Supabase, PostgreSQL. Starting as an Associate Software Engineer at Ascensus in July 2026 while finishing my degree.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <h5 className="text-brand-purple font-mono text-sm mb-4">FRONTEND</h5>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Angular</li>
                <li>React / Next.js</li>
                <li>TypeScript / JavaScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h5 className="text-brand-purple font-mono text-sm mb-4">BACKEND</h5>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Java 21 / Spring Boot</li>
                <li>FastAPI / Node.js</li>
                <li>Express.js / REST APIs</li>
                <li>Power Automate</li>
              </ul>
            </div>
            <div>
              <h5 className="text-brand-purple font-mono text-sm mb-4">DATABASES</h5>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Supabase</li>
                <li>Microsoft Dataverse</li>
              </ul>
            </div>
            <div>
              <h5 className="text-brand-purple font-mono text-sm mb-4">INFRA & TOOLS</h5>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Docker / Linux / Git</li>
                <li>AWS / GCP</li>
                <li>Cloudflare / Tailscale</li>
                <li>Playwright / PAC CLI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold mb-6">From the Blog</h2>
              <p className="text-gray-400">Thoughts on building software, AI, and lessons learned along the way.</p>
            </div>
            <div className="h-px bg-white/10 flex-1 mx-8 hidden md:block mb-6"></div>
            <Link to="/blog" className="text-brand-purple font-mono text-sm mb-6 hover:text-white transition-colors flex items-center gap-2">
              VIEW ALL / {allPosts.length}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map(post => <BlogCard key={post.slug} post={post} />)}
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

export default HomePage;
