import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { marked } from 'marked';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  htmlContent: string;
}

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center backdrop-blur-md bg-brand-black/50 border-b border-white/5">
    <Link to="/" className="text-xl font-extrabold tracking-tighter hover:text-brand-purple transition-colors">
      ABEL<span className="text-brand-purple">PRASAD</span>
    </Link>
    <div className="space-x-8 text-sm font-medium uppercase tracking-widest text-gray-400 hidden md:flex">
      <a href="#experience" className="hover:text-brand-purple transition-colors">Experience</a>
      <a href="#projects" className="hover:text-brand-purple transition-colors">Projects</a>
      <a href="#about" className="hover:text-brand-purple transition-colors">About</a>
      <Link to="/blog" className="hover:text-brand-purple transition-colors">Blog</Link>
      <a href="#contact" className="hover:text-brand-purple transition-colors">Contact</a>
    </div>
  </nav>
);

const Hero = () => {
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${2 + Math.random() * 3}s`,
    size: Math.random() > 0.7 ? 2 : Math.random() > 0.4 ? 1.5 : 1
  }));

  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-black">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration
          }}
        />
      ))}

      <div className="absolute top-20 right-20 w-1 h-1 bg-white shooting-star" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-60 w-1 h-1 bg-white shooting-star" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-60 left-40 w-1 h-1 bg-white shooting-star" style={{ animationDelay: '8s' }}></div>

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-darkPurple/10 rounded-full blur-[120px] animate-pulse-slow delay-700"></div>

      <div className="relative z-10 text-center max-w-4xl">
        <p className="text-brand-purple font-mono tracking-widest mb-4 animate-fade-in uppercase text-sm">Full-Stack Developer</p>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-tight">
          Building <span className="text-gradient">intelligent solutions</span> that matter.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          CS student at Penn State Abington. Associate Software Engineer at Ascensus. I build full-stack systems with Java, Spring Boot, Angular, and whatever else gets the job done.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects" className="px-8 py-4 bg-brand-purple hover:bg-brand-darkPurple text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-purple/20">
            Explore Projects
          </a>
          <a href="/resume.pdf" download className="px-8 py-4 bg-white/10 border border-white/20 hover:border-brand-purple hover:bg-white/20 text-white font-bold rounded-full transition-all flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Resume
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border border-white/10 hover:border-brand-purple text-white font-bold rounded-full transition-all">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-brand-purple/50 transition-all duration-500 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-brand-purple/20 rounded-lg flex items-center justify-center text-brand-purple">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        </div>
        <a href={project.link} className="text-gray-500 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
      </div>
      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full font-mono">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Shared experience data
const allExperience: Experience[] = [
  {
    role: "Associate Software Engineer",
    company: "Ascensus",
    period: "Jul 2026 – Present",
    bullets: [
      "Full-stack engineer on the Application Development team in Dresher, PA, working across the stack while completing a CS degree at Penn State Abington.",
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "DOGSRUN",
    period: "Oct 2025 – Present",
    bullets: [
      "Owned the full-stack shelter portal from scratch — designed the Microsoft Dataverse schema, built the frontend on Power Pages, and wired all backend logic through Power Automate, cutting staff data entry time by ~40%.",
      "Shipped a real-time alert system across dog intake, rescue matching, and adoptions by wiring each component directly into live Dataverse entity tables — staff see updates instantly without manual refreshes.",
      "Replaced a manual upload process with a version-controlled PAC CLI pipeline that diffs every deploy across Dogs, Rescue Contacts, and Search Criteria tables, bringing deployment errors down to zero."
    ]
  },
  {
    role: "Software Engineer",
    company: "Scout — Autonomous Internship Agent",
    period: "Dec 2025 – Present",
    bullets: [
      "Built a self-hosted multi-agent system that automatically finds, scores, and tracks internship postings — LLM planning handles goal decomposition, Playwright handles scraping, FastAPI + SQLite handle everything else.",
      "Cut manual review time by 80% by rewriting the scoring engine with role/skill keyword matching and negative filters — went from skimming 50+ noisy results daily to a tight shortlist of relevant postings.",
      "Delivers a ranked digest every morning via HTML email and Telegram with each posting's score, match rationale, and apply link — nothing slips through across the boards it monitors."
    ]
  }
];

const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <div className="group relative bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-brand-purple/50 transition-all duration-500 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="relative z-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <div>
          <h3 className="text-xl font-bold">{exp.role}</h3>
          <p className="text-brand-purple font-mono text-sm mt-1">{exp.company}</p>
        </div>
        <span className="text-gray-500 font-mono text-xs whitespace-nowrap">{exp.period}</span>
      </div>
      <ul className="space-y-3">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
            <span className="text-brand-purple mt-1 flex-shrink-0">▪</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ExperienceSection = () => (
  <section id="experience" className="py-32 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold mb-6">Experience</h2>
        <p className="text-gray-400">Where I've shipped real software for real users.</p>
      </div>
      <div className="flex flex-col gap-8">
        {allExperience.map(exp => <ExperienceCard key={exp.company} exp={exp} />)}
      </div>
    </div>
  </section>
);

// Shared project data
const allProjects: Project[] = [
  {
    title: "SENTINEL",
    description: "Defense-focused flight intelligence platform. Ingests live ADS-B data, correlates aircraft with threat databases, and visualizes airspace activity on an interactive map. Built for real operational use cases in defense and airspace monitoring.",
    tags: ["Java 21", "Spring Boot", "Angular", "PostgreSQL", "Groq", "Docker"],
    link: "https://sentinel.abelprasad.dev/public"
  },
  {
    title: "DOGSRUN",
    description: "Dog Shelter & Rescue Unification Network — nonprofit platform connecting shelters and rescues across the country. Features 501(c)(3) org approval flows, 150+ PG County dogs with enriched profiles, real-time alert system, full admin portal, and a hardened API with 45/45 security tests passing.",
    tags: ["Next.js 15", "Supabase", "Resend", "Vercel", "Sentry"],
    link: "https://dogsrun.org"
  },
  {
    title: "Scout",
    description: "Self-hosted multi-agent internship detection and outreach system. Crawls GitHub internship repos, scores 2,700+ listings against a custom rubric (location, stack, title, AI focus), delivers a ranked daily digest via HTML email and Telegram, and auto cold-emails high-scoring companies via Gmail SMTP with resume attached.",
    tags: ["FastAPI", "SQLite", "Playwright", "Ollama", "Python"],
    link: "https://github.com/abelprasad"
  },
  {
    title: "Fillr",
    description: "AI-powered Chrome extension that automates job applications with one-click autofill. Features intelligent field detection across 40+ types, AI-generated cover letters and custom answers using Groq/Llama, application tracking, and privacy-first local storage.",
    tags: ["Chrome Extension", "JavaScript", "Groq AI", "Manifest V3"],
    link: "https://github.com/abelprasad/fillr"
  },
  {
    title: "Mini-Pupper Robotics",
    description: "Capstone robotics project securing a quadruped robot's control network with mTLS across all microservices. Built a MongoDB telemetry pipeline and Redis state layer for real-time sensor inspection, and integrated AprilTag detection with a ROS2 Python control layer for autonomous maze navigation without GPS.",
    tags: ["ROS2", "Python", "MongoDB", "Redis", "mTLS"],
    link: "https://github.com/abelprasad"
  },
  {
    title: "FanTravels",
    description: "Full-stack web app connecting pop-culture fandom with UNESCO World Heritage Sites. Features user check-ins, posts, badges, and geolocation mapping with PostGIS.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "PostGIS", "Tailwind"],
    link: "https://github.com/abelprasad/Fan-Travels"
  },
  {
    title: "FocusGuard",
    description: "AI-powered desktop application that monitors focus and productivity using computer vision. Real-time face detection with session management and smart notifications, all processing locally for privacy.",
    tags: ["Electron", "React", "MediaPipe", "TypeScript", "Vite"],
    link: "https://github.com/abelprasad/FocusGuard"
  },
  {
    title: "ClipCheck",
    description: "ML-based misinformation detection system for Reddit using NLP and sentiment analysis. Achieves 85%+ accuracy with supervised learning algorithms.",
    tags: ["Python", "Flask", "NLP", "TensorFlow", "Scikit-learn"],
    link: "https://github.com/abelprasad/Clip-Check"
  },
  {
    title: "CryptoBear",
    description: "Automated grid-trading bot for cryptocurrency markets. Executes systematic trading strategies on BTC/USD through Alpaca with real-time Telegram notifications and cloud deployment.",
    tags: ["Python", "CCXT", "Alpaca API", "Docker", "GCP"],
    link: "https://github.com/abelprasad/CryptoBear"
  }
];

// --- Blog post loading from markdown files ---

function parseFrontmatter(raw: string): { data: Record<string, string | string[]>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const yamlStr = match[1];
  const content = match[2];
  const data: Record<string, string | string[]> = {};
  for (const line of yamlStr.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim();
    if (!key) continue;
    if (val.startsWith('[')) {
      try { data[key] = JSON.parse(val); } catch { data[key] = []; }
    } else {
      data[key] = val.replace(/^["']|["']$/g, '');
    }
  }
  return { data, content };
}

function calcReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

function loadPosts(): BlogPost[] {
  const modules = import.meta.glob('/posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  return Object.entries(modules)
    .map(([path, raw]) => {
      const slug = path.replace('/posts/', '').replace('.md', '');
      const { data, content } = parseFrontmatter(raw);
      return {
        slug,
        title: data.title as string,
        excerpt: data.excerpt as string,
        date: data.date as string,
        readTime: calcReadTime(content),
        tags: (data.tags as string[]) || [],
        htmlContent: marked.parse(content) as string,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const allPosts = loadPosts();

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

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mwvkbpkl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 px-6 bg-brand-purple/5 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-8">Let's build something <span className="text-brand-purple">extraordinary.</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to collaboration, freelance projects, and connecting with other builders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-brand-purple transition-colors text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-brand-purple transition-colors text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-brand-purple transition-colors text-white resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-4 bg-brand-purple hover:bg-brand-darkPurple text-white font-bold rounded-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-sm text-center">Message sent successfully! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Oops! Something went wrong. Please try again or email directly.</p>
            )}
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Have a project in mind or want to collaborate? Fill out the form or reach out directly through email or social media.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:abelprasad4@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-brand-purple/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span>abelprasad4@gmail.com</span>
              </a>

              <a href="https://github.com/abelprasad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-brand-purple/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <span>github.com/abelprasad</span>
              </a>

              <a href="https://www.linkedin.com/in/abel-prasad/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-brand-purple/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <span>linkedin.com/in/abel-prasad</span>
              </a>
            </div>
          </div>
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
          <h2 className="text-4xl font-extrabold">CS student at Penn State Abington. Associate Software Engineer at Ascensus.</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Full-stack developer building production systems. My stack is Java 21, Spring Boot, Angular, PostgreSQL, and Docker. I also work in TypeScript, Python, and whatever the job needs. Expected December 2026.
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);