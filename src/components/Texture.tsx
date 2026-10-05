import React from 'react';

/** Small corner brackets for panels/cards. Parent must be relative. */
export const CornerTicks = () => (
  <>
    <span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-3.5 w-3.5 border-l-2 border-t-2 border-brand-green/70" />
    <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-3.5 w-3.5 border-r-2 border-t-2 border-brand-green/70" />
    <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-3.5 w-3.5 border-b-2 border-l-2 border-brand-green/70" />
    <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-3.5 w-3.5 border-b-2 border-r-2 border-brand-green/70" />
  </>
);

/** macOS-style traffic lights for terminal chrome. */
export const TrafficLights = () => (
  <span aria-hidden="true" className="flex shrink-0 items-center gap-1.5">
    <span className="h-2.5 w-2.5 rounded-full bg-[#df6b5f]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#e3b23c]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#35c26e]" />
  </span>
);

interface TerminalPanelProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

/** White panel with a terminal-style title bar. */
export const TerminalPanel = ({ title, children, className = '', bodyClassName = '' }: TerminalPanelProps) => (
  <div className={`border border-brand-line bg-white shadow-[0_18px_40px_-24px_rgba(20,83,45,0.28)] ${className}`}>
    <div className="flex items-center gap-3 border-b border-brand-line bg-brand-black/70 px-4 py-2.5">
      <TrafficLights />
      <span className="truncate font-mono text-[11px] tracking-[0.2em] text-brand-muted">{title}</span>
    </div>
    <div className={bodyClassName}>{children}</div>
  </div>
);

const TICKER_ITEMS = [
  'AGENTIC AI SYSTEMS',
  'AUTONOMOUS AGENTS',
  'LLM ORCHESTRATION',
  'RAG PIPELINES',
  'LOCAL LLMS · OLLAMA',
  'GROQ',
  'AI-NATIVE WORKFLOW',
  'SHIPPED TO PRODUCTION',
];

/** Infinite marquee strip. Decorative: hidden from assistive tech. */
export const Ticker = () => {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {TICKER_ITEMS.map((item) => (
        <span key={`${key}-${item}`} className="flex items-center font-mono text-[11px] tracking-[0.25em] text-brand-muted">
          <span className="px-6">{item}</span>
          <span className="text-brand-green">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div aria-hidden="true" className="ticker overflow-hidden border-y border-brand-line bg-white/70 py-3">
      <div className="ticker-track flex w-max">
        {row('a')}
        {row('b')}
      </div>
    </div>
  );
};
