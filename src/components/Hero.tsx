import React, { useEffect, useState } from 'react';

const BOOT_LINES = [
  'indra v2.1.0 — secure shell session established',
  '> loading profile: abel_prasad ............ OK',
  '> mounting /dev/projects ................. OK',
  '> whoami',
];

const Hero = () => {
  const [linesDone, setLinesDone] = useState(0);
  const [skipped, setSkipped] = useState(false);
  const reduced = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduced || skipped) {
      setLinesDone(BOOT_LINES.length);
      return;
    }
    if (linesDone >= BOOT_LINES.length) return;
    const t = setTimeout(() => setLinesDone(d => d + 1), 300);
    return () => clearTimeout(t);
  }, [linesDone, skipped, reduced]);

  const done = linesDone >= BOOT_LINES.length;

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden bg-grid"
      onClick={() => setSkipped(true)}
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-28 pb-16">
        {/* boot sequence */}
        <div className="font-mono text-xs md:text-sm mb-8 min-h-[6.5rem]" aria-hidden={!done}>
          {BOOT_LINES.slice(0, linesDone).map((line, i) => (
            <p key={i} className={line.startsWith('>') ? 'text-brand-darkGreen' : 'text-gray-600'}>
              {line}
            </p>
          ))}
          {!done && <span className="blink text-brand-green">█</span>}
        </div>

        <div style={{ opacity: done ? 1 : 0.25, transition: 'opacity 0.4s' }}>
          <p className="font-mono text-brand-darkGreen text-xs md:text-sm tracking-[0.35em] mb-6 flex items-center gap-3">
            <span className="status-dot inline-block w-2 h-2 rounded-full bg-brand-green text-brand-green"></span>
            ABEL PRASAD // SOFTWARE ENGINEER
          </p>
          <h1 className="font-mono text-5xl md:text-8xl font-extrabold tracking-tighter leading-[1.02] mb-8">
            I build systems<br />
            that <span className="text-brand-green">ship.</span>
            <span className="blink text-brand-green">█</span>
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            Associate Software Engineer at <span className="text-brand-darkGreen font-semibold">Ascensus</span>.
            Flight intelligence, autonomous agents, nonprofit platforms —
            designed, deployed, and self-hosted.
          </p>

          <div className="flex gap-4 flex-wrap mb-16">
            <a href="#projects" className="px-8 py-4 bg-brand-darkGreen hover:bg-green-800 text-white font-mono text-sm tracking-[0.15em] font-bold transition-all hover:-translate-y-0.5">
              ./view_projects
            </a>
            <a href="/resume.pdf" download className="px-8 py-4 bg-transparent border border-brand-green/40 hover:border-brand-green text-brand-darkGreen font-mono text-sm tracking-[0.15em] font-bold transition-all flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              ./download_resume
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border border-brand-green/40 hover:border-brand-green text-brand-darkGreen font-mono text-sm tracking-[0.15em] font-bold transition-all">
              ./contact
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-line border border-brand-line max-w-4xl">
            {[
              ["BASE", "PHILADELPHIA, PA"],
              ["ROLE", "ASSOC. SWE @ ASCENSUS"],
              ["EDUCATION", "PENN STATE CS — DEC 2026"],
              ["FOCUS", "SHIPPED SYSTEMS"],
            ].map(([k, v]) => (
              <div key={k} className="bg-white px-5 py-4">
                <p className="font-mono text-[10px] tracking-[0.3em] text-gray-600 mb-1">{k}</p>
                <p className="font-mono text-xs md:text-sm text-brand-ink">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
