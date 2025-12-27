import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center backdrop-blur-md bg-brand-black/50 border-b border-white/5">
    <Link to="/" className="text-xl font-extrabold tracking-tighter hover:text-brand-purple transition-colors">
      ABEL<span className="text-brand-purple">PRASAD</span>
    </Link>
    <div className="space-x-8 text-sm font-medium uppercase tracking-widest text-gray-400 hidden md:flex">
      <a href="#projects" className="hover:text-brand-purple transition-colors">Projects</a>
      <a href="#about" className="hover:text-brand-purple transition-colors">About</a>
      <a href="#contact" className="hover:text-brand-purple transition-colors">Contact</a>
    </div>
  </nav>
);

const Hero = () => {
  // Generate random stars
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
      {/* Animated Stars */}
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

      {/* Shooting Stars */}
      <div className="absolute top-20 right-20 w-1 h-1 bg-white shooting-star" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-60 w-1 h-1 bg-white shooting-star" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-60 left-40 w-1 h-1 bg-white shooting-star" style={{ animationDelay: '8s' }}></div>

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-darkPurple/10 rounded-full blur-[120px] animate-pulse-slow delay-700"></div>

    <div className="relative z-10 text-center max-w-4xl">
      <p className="text-brand-purple font-mono tracking-widest mb-4 animate-fade-in uppercase text-sm">Full-Stack Developer & AI Enthusiast</p>
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-tight">
        Building <span className="text-gradient">intelligent solutions</span> that matter.
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Computer Science student passionate about full-stack development and AI/ML. Experienced in React, Node.js, Python, and cloud technologies.
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

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hi! I'm Abel's AI assistant. Ask me about his projects, tech stack, or experience!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: "You are Abel Prasad's AI assistant. Abel is a Computer Science student at Penn State University (graduating May 2026) and a full-stack developer passionate about AI/ML. His skills include: Frontend (React, Next.js, TypeScript, Tailwind), Backend (Node.js, Express, FastAPI, Python, MongoDB, PostgreSQL), and AI/ML (TensorFlow, NLP, Transformers, RAG). His key projects: FanTravels (full-stack app with FastAPI/Next.js/PostgreSQL), Sathika Boutique (e-commerce with Stripe), and ClipCheck (ML misinformation detection). He's open to internships and freelance work. Keep responses concise and professional. For contact, direct to abelprasad4@gmail.com or LinkedIn."
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Groq API Error:', data);
        throw new Error(data.error?.message || 'API request failed');
      }

      const aiResponse = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that request.";

      setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Connection error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-[#111] border border-white/10 rounded-3xl flex flex-col shadow-2xl overflow-hidden transition-all duration-300">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-brand-purple/5">
            <h4 className="font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              AI Assistant
            </h4>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'assistant' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-brand-purple to-brand-darkPurple flex items-center justify-center animate-pulse-slow">
                    <div className="w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    </div>
                  </div>
                )}
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-brand-purple text-white rounded-br-none' : 'bg-white/5 text-gray-300 rounded-bl-none border border-white/5'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-brand-purple to-brand-darkPurple flex items-center justify-center animate-spin-slow">
                  <div className="w-6 h-6 rounded-full border-2 border-white/30 border-t-white"></div>
                </div>
                <div className="bg-white/5 text-gray-500 px-4 py-3 rounded-2xl rounded-bl-none border border-white/5 text-xs">
                  <span className="animate-pulse">AI is thinking...</span>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 bg-brand-black border-t border-white/5">
            <div className="relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-brand-purple transition-all pr-12"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1.5 p-2 text-brand-purple hover:text-white disabled:opacity-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center shadow-xl shadow-brand-purple/20 hover:scale-110 active:scale-95 transition-all glow-purple"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </button>
      )}
    </div>
  );
};

// Shared project data
const allProjects: Project[] = [
  {
    title: "FanTravels",
    description: "Full-stack web app connecting pop-culture fandom with UNESCO World Heritage Sites. Features user check-ins, posts, badges, and geolocation mapping with PostGIS.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "PostGIS", "Tailwind"],
    link: "https://github.com/abelprasad/Fan-Travels"
  },
  {
    title: "Sathika Boutique",
    description: "Full-stack e-commerce platform with product catalog, shopping cart, checkout flow, and Stripe payment integration. Includes admin dashboard for inventory management.",
    tags: ["Next.js", "MongoDB", "Express.js", "Stripe", "TypeScript"],
    link: "https://github.com/abelprasad/SathikaBoutique"
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
            <p className="text-gray-400 text-lg">A comprehensive collection of my work in full-stack development and AI/ML.</p>
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
      <AIAssistant />
    </main>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 px-6 bg-brand-purple/5 border-t border-white/5">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-extrabold mb-8">Let's build something <span className="text-brand-purple">extraordinary.</span></h2>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
        Open to internships, freelance projects, and collaboration opportunities.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <a href="mailto:abelprasad4@gmail.com" className="bg-white text-brand-black px-10 py-4 rounded-full font-bold hover:bg-brand-purple hover:text-white transition-all">
          Email Me
        </a>
        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/abelprasad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/abel-prasad/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <main className="antialiased">
      <Navbar />
      <Hero />
      <Projects />
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="aspect-[4/5] bg-white/5 rounded-3xl relative overflow-hidden group border border-white/5 hover:border-brand-purple/50 transition-all duration-700">
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
            
            {/* The Headshot Image */}
            <img
              src="/headshot.jpg"
              alt="Abel Prasad Headshot"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
            />

            {/* Glowing Accent */}
            <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none"></div>
            
            {/* Decorative Label */}
            <div className="absolute bottom-8 left-8 z-30 transform group-hover:translate-x-2 transition-transform duration-500">
              <span className="text-brand-purple font-mono text-xs tracking-[0.3em] uppercase block mb-1">Lead Creative</span>
              <span className="text-white font-extrabold text-2xl tracking-tighter">THE DEVELOPER</span>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold">Computer Science student at Penn State University.</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Full-stack developer passionate about building intelligent web applications. Experienced in modern web technologies and AI/ML, with a focus on creating scalable solutions. Graduating May 2026.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <h5 className="text-brand-purple font-mono text-sm mb-4">FRONTEND</h5>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>React / Next.js</li>
                <li>TypeScript / JavaScript</li>
                <li>Tailwind CSS</li>
                <li>HTML / CSS</li>
              </ul>
            </div>
            <div>
              <h5 className="text-brand-purple font-mono text-sm mb-4">BACKEND</h5>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Node.js / Express.js</li>
                <li>FastAPI / Python</li>
                <li>MongoDB / PostgreSQL</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div>
              <h5 className="text-brand-purple font-mono text-sm mb-4">AI/ML</h5>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>TensorFlow / Pandas</li>
                <li>NLP / Transformers</li>
                <li>RAG / Agentic AI</li>
                <li>NumPy / Scikit-learn</li>
              </ul>
            </div>
            <div>
              <h5 className="text-brand-purple font-mono text-sm mb-4">CLOUD & TOOLS</h5>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>AWS / Azure / GCP</li>
                <li>Docker / GitHub</li>
                <li>Linux / SQL</li>
                <li>Vercel / Render</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <footer className="py-12 px-6 text-center text-gray-600 text-xs border-t border-white/5 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Designed & Coded with Passion
      </footer>
      <AIAssistant />
    </main>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);