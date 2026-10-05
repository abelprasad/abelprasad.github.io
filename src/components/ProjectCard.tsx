import React from 'react';
import { Project } from '../data/projects';

interface Props {
  project: Project;
  index: string;
}

const ProjectCard = ({ project, index }: Props) => {
  if (project.flagship) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer"
        className="card-hover group relative block bg-brand-panel border border-brand-purple/30 p-8 md:p-12 mb-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-purple via-brand-purple/40 to-transparent"></div>
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none"></div>
        <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="font-mono text-brand-purple text-xs tracking-[0.35em] mb-4">
              <span className="text-gray-600">{index}</span> // FLAGSHIP SYSTEM
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 group-hover:text-brand-purple transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-2xl mb-7">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 border border-white/10 text-gray-300 text-xs font-mono">{tag}</span>
              ))}
            </div>
          </div>
          <div className="hidden md:flex w-16 h-16 border border-brand-purple/40 items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer"
      className="card-hover group relative flex flex-col bg-brand-panel border border-white/10 p-7 overflow-hidden h-full">
      <div className="flex justify-between items-start mb-6">
        <span className="font-mono text-gray-600 text-xs tracking-[0.3em]">{index}</span>
        <svg className="w-5 h-5 text-gray-600 group-hover:text-brand-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-purple transition-colors tracking-tight">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 bg-white/5 text-gray-500 text-[11px] font-mono">{tag}</span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
