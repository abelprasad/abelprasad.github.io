import React from 'react';
import { Project } from '../data/projects';
import { CornerTicks, TrafficLights } from './Texture';

interface Props {
  project: Project;
  index: string;
}

const ArrowIcon = ({ cls }: { cls: string }) => (
  <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
);

const ProjectCard = ({ project, index }: Props) => {
  const wrap = (children: React.ReactNode, className: string) =>
    project.link ? (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
    ) : (
      <div className={className}>{children}</div>
    );

  if (project.flagship) {
    return wrap(
      <>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-green via-brand-green/40 to-transparent"></div>
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none"></div>
        <div className="relative z-10 flex items-center gap-3 border-b border-brand-line bg-brand-black/70 px-6 py-2.5 md:px-12">
          <TrafficLights />
          <span className="truncate font-mono text-[11px] tracking-[0.25em] text-brand-muted">
            {project.title.toLowerCase()} — flagship // live system
          </span>
          <span className="status-dot ml-auto inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green text-brand-green"></span>
        </div>
        <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center p-8 md:p-12">
          <div>
            <p className="font-mono text-brand-darkGreen text-xs tracking-[0.35em] mb-4">
              <span className="text-gray-600">{index}</span> // FLAGSHIP SYSTEM
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 group-hover:text-brand-green transition-colors">
              {project.title}
            </h3>
            <p className="text-brand-muted leading-relaxed max-w-2xl mb-7">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 border border-brand-line text-brand-ink text-xs font-mono">{tag}</span>
              ))}
            </div>
          </div>
          {project.link && (
            <div className="hidden md:flex w-16 h-16 border border-brand-green/40 items-center justify-center text-brand-darkGreen group-hover:bg-brand-darkGreen group-hover:text-white transition-all">
              <ArrowIcon cls="w-6 h-6" />
            </div>
          )}
        </div>
      </>,
      "card-hover group relative block bg-brand-panel border border-brand-green/30 mb-8 overflow-hidden"
    );
  }

  return wrap(
    <>
      <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <CornerTicks />
      </span>
      <div className="flex justify-between items-start mb-6">
        <span className="font-mono text-gray-600 text-xs tracking-[0.3em]">{index}</span>
        {project.link && <ArrowIcon cls="w-5 h-5 text-gray-600 group-hover:text-brand-green transition-colors" />}
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-green transition-colors tracking-tight">{project.title}</h3>
      <p className="text-brand-muted text-sm mb-6 leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 bg-brand-dim text-brand-muted text-[11px] font-mono">{tag}</span>
        ))}
      </div>
    </>,
    "card-hover group relative flex flex-col bg-brand-panel border border-brand-line p-7 overflow-hidden h-full"
  );
};

export default ProjectCard;
