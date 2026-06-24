import React from 'react';

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
          Full-stack developer with real shipped software — a defense flight intelligence platform, a nonprofit shelter network, an autonomous internship agent. I work in TypeScript, Python, and Java. I self-host everything. Expected December 2026.
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

export default Hero;
