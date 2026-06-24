import React from 'react';
import { Project } from '../data/projects';

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
      <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
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

export default ProjectCard;
