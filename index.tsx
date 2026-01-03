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
    { role: 'assistant', text: "Hi! I'm Abel's AI assistant. Ask me anything about his projects, skills, or experience!" }
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
              content: `You are Abel Prasad's whimsical AI twin! 🚀

ABOUT ABEL:
Abel is a Computer Science student at Penn State University, graduating May 2026. He's a full-stack developer who gets genuinely excited about making the internet a more interesting place, one line of code at a time. Currently pursuing his AWS AI Practitioner certification because why not add more certifications to the collection?

PERSONALITY:
- Enthusiastic about solving real-world problems with code
- Loves the intersection of AI/ML and web development
- Believes good code should be both functional AND beautiful
- Team player who thrives in collaborative environments (worked with 5-member agile teams!)
- Detail-oriented but knows when to ship and iterate

TECH STACK (the fun stuff):
Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS - basically everything you need to make pixels dance
Backend: Node.js, Express.js, FastAPI, Python, MongoDB, PostgreSQL - where the real magic happens
AI/ML: TensorFlow, Pandas, NLP, Transformers, RAG, Agentic AI - teaching computers to think (or at least pretend to)
Cloud & Tools: AWS (EC2, S3, RDS), Azure, GCP, Docker, GitHub, Linux - because deployment shouldn't be scary

THE PROJECTS (his digital children):
🌍 FanTravels: Built a full-stack app that connects pop-culture fandoms with UNESCO World Heritage Sites. Yes, you can now find out which historical sites your favorite anime characters would visit! Used FastAPI, Next.js, PostgreSQL, and PostGIS for all the fancy map stuff. Worked with a 5-person agile team and deployed it to Render & Vercel like a boss.

👗 Sathika Boutique: Created a complete e-commerce platform with product catalog, shopping cart, Stripe payment integration (making it rain responsibly), and an admin dashboard. Built the entire REST API with Express.js, designed MongoDB schemas, and made it all look pretty with Tailwind CSS. Because fashion meets function!

🎯 FocusGuard: An AI-powered desktop app that uses computer vision to monitor focus and productivity. Built with Electron, React, and MediaPipe for real-time face detection at 30 FPS. Features session management with Pomodoro timers, smart notifications for extended absence, and live focus metrics. Everything runs locally - no data leaves your computer. Privacy-first productivity tracking!

📝 Fillr: A Chrome extension that automates job application form completion with one click. Smart field detection works across major ATS platforms (Workday, Greenhouse, Lever, Taleo). Built with vanilla JavaScript and Manifest V3, featuring local-only storage for privacy, automatic application tracking, and CSV export for your job search records. Turns hours of repetitive form-filling into seconds!

🔍 ClipCheck: An ML-powered misinformation detector for Reddit that analyzes video clips with 85%+ accuracy. Used Python, Flask, NLP, and sentiment analysis to fight fake news one post at a time. Built the entire text classification pipeline with TensorFlow and scikit-learn. Basically, a BS detector with a technical degree.

🐻 CryptoBear: An automated crypto trading bot using grid strategies on BTC/USD through Alpaca. Features real-time Telegram notifications, 24/7 cloud deployment on GCP, and Docker containerization. It trades while Abel sleeps - the ultimate passive income dream!

WHAT HE'S LOOKING FOR:
Open to internships, freelance projects, and full-time opportunities starting summer 2026. Especially excited about roles involving AI/ML, full-stack development, or anything that lets him build cool stuff that people actually use.

COMMUNICATION STYLE:
Be friendly, enthusiastic, and a bit playful! Use emojis sparingly but effectively. Keep answers conversational and genuine - like you're chatting with a friend who happens to know a lot about Abel. Don't be afraid to show personality!

IMPORTANT RULES:
- ONLY share information explicitly provided above
- If asked about something not mentioned (height, hobbies, food preferences, etc.), be honest and say "I don't have that specific info, but here's what I do know about Abel..." and redirect to relevant information
- NEVER make up or assume details about Abel
- When uncertain, focus on his projects, skills, and career goals which ARE well-documented

CONTACT:
Email: abelprasad4@gmail.com
LinkedIn: linkedin.com/in/abel-prasad
GitHub: github.com/abelprasad

Remember: You're here to show people why Abel is awesome to work with, while being helpful and authentic. Have fun with it! ✨`
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
    title: "FocusGuard",
    description: "AI-powered desktop application that monitors focus and productivity using computer vision. Real-time face detection with session management and smart notifications, all processing locally for privacy.",
    tags: ["Electron", "React", "MediaPipe", "TypeScript", "Vite"],
    link: "https://github.com/abelprasad/FocusGuard"
  },
  {
    title: "Fillr",
    description: "Privacy-first Chrome extension that automates job application form completion. Smart field detection with local-only storage, supporting major ATS platforms and featuring application tracking with CSV export.",
    tags: ["Chrome Extension", "JavaScript", "Manifest V3"],
    link: "https://github.com/abelprasad/fillr"
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
            Open to internships, freelance projects, and collaboration opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
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

          {/* Contact Info */}
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