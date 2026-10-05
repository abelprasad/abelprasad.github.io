import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import { ExperienceSection } from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import Contact from '../components/Contact';
import { allProjects } from '../data/projects';
import { allPosts } from '../data/posts';

const stackGroups: [string, string[]][] = [
  ["LANGUAGES", ["Java", "Python", "TypeScript", "SQL"]],
  ["BACKEND", ["Spring Boot", "FastAPI", "Node.js", "REST"]],
  ["FRONTEND", ["React", "Next.js", "Angular", "Tailwind"]],
  ["DATA", ["PostgreSQL", "Supabase", "SQLite"]],
  ["AI SYSTEMS", ["Ollama", "LLM Orchestration", "RAG", "Groq"]],
  ["INFRA", ["Docker", "AWS", "Tailscale", "Linux"]],
];

const Stack = () => (
  <section id="stack" className="py-24 md:py-32 px-6 border-t border-brand-line">
    <div className="max-w-7xl mx-auto">
      <SectionHeader index="03" label="ARSENAL" title="Stack"
        description="Production tooling, not tutorial toys. Everything below has shipped in a real system." />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-brand-line border border-brand-line">
        {stackGroups.map(([group, items]) => (
          <div key={group} className="bg-white p-6">
            <p className="font-mono text-brand-darkGreen text-[11px] tracking-[0.3em] mb-5">{group}</p>
            <ul className="space-y-2.5">
              {items.map(item => (
                <li key={item} className="text-brand-ink text-sm">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 md:py-32 px-6 border-t border-brand-line">
    <div className="max-w-7xl mx-auto">
      <SectionHeader index="04" label="OPERATOR" title="About" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative overflow-hidden border border-brand-line group max-w-md">
          <img
            src="/headshot.jpg"
            alt="Abel Prasad"
            className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            <p className="font-mono text-brand-darkGreen text-[11px] tracking-[0.3em] mb-1">ABEL PRASAD</p>
            <p className="font-mono text-brand-muted text-[11px] tracking-[0.2em]">PHILADELPHIA, PA</p>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-xl md:text-2xl font-bold leading-snug tracking-tight">
            Associate Software Engineer at Ascensus. CS at Penn State Abington, graduating December 2026.
          </p>
          <p className="text-brand-muted leading-relaxed">
            I build production systems \u2014 flight intelligence, nonprofit platforms,
            autonomous agents \u2014 and self-host everything on my own hardware. No demos that
            only run on localhost. If it is not deployed, it does not count.
          </p>
          <p className="text-brand-muted leading-relaxed">
            Generalist by design: Java, Python, TypeScript \u2014 whatever the system needs.
            I care about software that works in production, for real users.
          </p>
          <div className="flex gap-4 flex-wrap pt-2">
            <a href="https://github.com/abelprasad" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 border border-brand-line hover:border-brand-green font-mono text-xs tracking-[0.2em] transition-colors">
              GITHUB
            </a>
            <a href="https://www.linkedin.com/in/abel-prasad/" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 border border-brand-line hover:border-brand-green font-mono text-xs tracking-[0.2em] transition-colors">
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  const featured = allProjects.filter(p => p.flagship);
  const rest = allProjects.filter(p => !p.flagship).slice(0, 3);

  return (
    <main className="antialiased">
      <Navbar />
      <Hero />
      <ExperienceSection />

      <section id="projects" className="py-24 md:py-32 px-6 border-t border-brand-line">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 gap-6">
            <div>
              <p className="font-mono text-xs md:text-sm mb-5">
                <span className="text-gray-600">[</span><span className="text-brand-darkGreen">02</span><span className="text-gray-600">]</span>
                <span className="text-brand-darkGreen"> abel@indra</span><span className="text-gray-600">:</span><span className="text-brand-muted">~/portfolio</span><span className="text-gray-600">$ </span>
                <span className="text-brand-ink">cat deployed-systems.log</span>
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Featured Projects</h2>
            </div>
            <Link to="/projects" className="font-mono text-brand-darkGreen text-xs tracking-[0.2em] hover:text-green-800 transition-colors flex items-center gap-2 shrink-0">
              VIEW ALL / {allProjects.length}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          {featured.map((p, i) => <ProjectCard key={p.title} project={p} index={"0" + (i + 1)} />)}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => <ProjectCard key={p.title} project={p} index={"0" + (i + 2)} />)}
          </div>
        </div>
      </section>

      <Stack />
      <About />

      <section className="py-24 md:py-32 px-6 border-t border-brand-line">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 gap-6">
            <div>
              <p className="font-mono text-xs md:text-sm mb-5">
                <span className="text-gray-600">[</span><span className="text-brand-darkGreen">05</span><span className="text-gray-600">]</span>
                <span className="text-brand-darkGreen"> abel@indra</span><span className="text-gray-600">:</span><span className="text-brand-muted">~/portfolio</span><span className="text-gray-600">$ </span>
                <span className="text-brand-ink">cat transmission.log</span>
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">From the Log</h2>
            </div>
            <Link to="/blog" className="font-mono text-brand-darkGreen text-xs tracking-[0.2em] hover:text-green-800 transition-colors flex items-center gap-2 shrink-0">
              VIEW ALL / {allPosts.length}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.slice(0, 3).map(post => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      <Contact />
      <footer className="py-10 px-6 border-t border-brand-line">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] tracking-[0.3em] text-gray-600">ABEL PRASAD // {new Date().getFullYear()}</p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-gray-600 flex items-center gap-2">
            <span className="status-dot inline-block w-1.5 h-1.5 rounded-full bg-brand-green text-brand-green"></span>
            ALL SYSTEMS NOMINAL
          </p>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
