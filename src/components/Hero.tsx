import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden bg-grid">
      {/* radar sweep */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] max-w-none pointer-events-none">
        <div className="radar-sweep w-full h-full rounded-full"></div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-brand-purple/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-28 pb-16">
        <p className="font-mono text-brand-purple text-xs md:text-sm tracking-[0.35em] mb-6 flex items-center gap-3">
          <span className="status-dot inline-block w-2 h-2 rounded-full bg-brand-purple text-brand-purple"></span>
          ABEL PRASAD // SOFTWARE ENGINEER
        </p>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[1.02] mb-8">
          I build systems<br />
          that <span className="text-gradient">ship.</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-4">
          Associate Software Engineer at <span className="text-white font-semibold">Ascensus</span>.
          Defense flight intelligence, autonomous agents, nonprofit platforms \u2014
          designed, deployed, and self-hosted.
        </p>
        <p className="font-mono text-sm text-brand-purple tracking-[0.2em] mb-12">
          VECTOR: DEFENSE + AEROSPACE
        </p>

        <div className="flex gap-4 flex-wrap mb-16">
          <a href="#projects" className="px-8 py-4 bg-brand-purple hover:bg-brand-darkPurple text-white font-mono text-sm tracking-[0.15em] font-bold transition-all hover:-translate-y-0.5">
            VIEW PROJECTS
          </a>
          <a href="/resume.pdf" download className="px-8 py-4 bg-transparent border border-white/20 hover:border-brand-purple text-white font-mono text-sm tracking-[0.15em] font-bold transition-all flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            RESUME
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 hover:border-brand-purple text-white font-mono text-sm tracking-[0.15em] font-bold transition-all">
            CONTACT
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 max-w-4xl">
          {[
            ["BASE", "PHILADELPHIA, PA"],
            ["ROLE", "ASSOC. SWE @ ASCENSUS"],
            ["EDUCATION", "PENN STATE CS \u2014 DEC 2026"],
            ["FOCUS", "DEFENSE / AEROSPACE"],
          ].map(([k, v]) => (
            <div key={k} className="bg-brand-black px-5 py-4">
              <p className="font-mono text-[10px] tracking-[0.3em] text-gray-600 mb-1">{k}</p>
              <p className="font-mono text-xs md:text-sm text-gray-200">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
