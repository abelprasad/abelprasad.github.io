import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

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
    <div className="text-xl font-extrabold tracking-tighter">
      PORT<span className="text-brand-purple">FOLIO</span>
    </div>
    <div className="space-x-8 text-sm font-medium uppercase tracking-widest text-gray-400 hidden md:flex">
      <a href="#projects" className="hover:text-brand-purple transition-colors">Projects</a>
      <a href="#about" className="hover:text-brand-purple transition-colors">About</a>
      <a href="#contact" className="hover:text-brand-purple transition-colors">Contact</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] animate-pulse-slow"></div>
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-darkPurple/10 rounded-full blur-[120px] animate-pulse-slow delay-700"></div>

    <div className="relative z-10 text-center max-w-4xl">
      <p className="text-brand-purple font-mono tracking-widest mb-4 animate-fade-in uppercase text-sm">Frontend Engineer & UI Designer</p>
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-tight">
        Building <span className="text-gradient">digital experiences</span> that matter.
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Focusing on minimalist design and performant code. Specialized in React, TypeScript, and the Gemini ecosystem.
      </p>
      <div className="flex gap-4 justify-center">
        <a href="#projects" className="px-8 py-4 bg-brand-purple hover:bg-brand-darkPurple text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-purple/20">
          Explore Projects
        </a>
        <a href="#contact" className="px-8 py-4 bg-transparent border border-white/10 hover:border-brand-purple text-white font-bold rounded-full transition-all">
          Get in Touch
        </a>
      </div>
    </div>
  </section>
);

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
    { role: 'assistant', text: "Hi! I'm the AI version of the developer. Ask me about their stack, experience, or approach to design!" }
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
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are the AI Digital Twin for a world-class Senior Frontend Engineer. You are helpful, professional, and minimalist in your responses. You specialize in React, Tailwind, and high-end UI design. Keep your answers concise and elegant. If someone asks for contact info, direct them to the contact section or say they can reach out via LinkedIn.",
        }
      });

      setMessages(prev => [...prev, { role: 'assistant', text: response.text || "I'm sorry, I couldn't process that request." }]);
    } catch (error) {
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
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-brand-purple text-white rounded-br-none' : 'bg-white/5 text-gray-300 rounded-bl-none border border-white/5'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 text-gray-500 px-4 py-3 rounded-2xl rounded-bl-none border border-white/5 text-xs animate-pulse">
                  AI is thinking...
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

const Projects = () => {
  const data: Project[] = [
    {
      title: "Nebula Dashboard",
      description: "A data visualization platform for high-performance computing environments using D3.js and React.",
      tags: ["React", "D3.js", "Tailwind", "Firebase"],
      link: "#"
    },
    {
      title: "Etherum Wallet SDK",
      description: "Developer tools for seamless web3 integration in modern browser applications with a focus on UX.",
      tags: ["TypeScript", "Ethers.js", "Next.js"],
      link: "#"
    },
    {
      title: "Zenith OS",
      description: "A browser-based operating system mockup built to explore the limits of web technologies and performance.",
      tags: ["WebAssembly", "Rust", "React"],
      link: "#"
    },
    {
      title: "Synthetix Design System",
      description: "A comprehensive, accessible design library for enterprise-scale UI development.",
      tags: ["Storybook", "Framer Motion", "SCSS"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold mb-6">Featured Projects</h2>
            <p className="text-gray-400">Selected works that showcase technical expertise and design sensibility.</p>
          </div>
          <div className="h-px bg-white/10 flex-1 mx-8 hidden md:block mb-6"></div>
          <div className="text-brand-purple font-mono text-sm mb-6">VIEW ALL / 24</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 px-6 bg-brand-purple/5 border-t border-white/5">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-extrabold mb-8">Let's build something <span className="text-brand-purple">extraordinary.</span></h2>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
        Currently available for selected freelance work and collaboration.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <a href="mailto:hello@example.com" className="bg-white text-brand-black px-10 py-4 rounded-full font-bold hover:bg-brand-purple hover:text-white transition-all">
          Email Me
        </a>
        <div className="flex items-center justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
              alt="Developer Headshot"
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
          <h2 className="text-4xl font-extrabold">Engineering intuitive interfaces since 2018.</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            I'm a designer-engineer hybrid focused on building products that look as good as they function. My work sits at the intersection of aesthetic minimalism and high-performance engineering.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <h5 className="text-brand-purple font-mono text-sm mb-4">FRONTEND</h5>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Three.js / Canvas</li>
              </ul>
            </div>
            <div>
              <h5 className="text-brand-purple font-mono text-sm mb-4">ECOSYSTEM</h5>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Gemini API</li>
                <li>Node.js / Go</li>
                <li>PostgreSQL</li>
                <li>Vercel / AWS</li>
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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);