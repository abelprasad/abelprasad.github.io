import React from 'react';
import { Experience, allExperience } from '../data/experience';

export const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <div className="group relative bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-brand-purple/50 transition-all duration-500 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="relative z-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <div>
          <h3 className="text-xl font-bold">{exp.role}</h3>
          <p className="text-brand-purple font-mono text-sm mt-1">{exp.company}</p>
        </div>
        <span className="text-gray-500 font-mono text-xs whitespace-nowrap">{exp.period}</span>
      </div>
      <ul className="space-y-3">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
            <span className="text-brand-purple mt-1 flex-shrink-0">▪</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const ExperienceSection = () => (
  <section id="experience" className="py-32 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold mb-6">Experience</h2>
        <p className="text-gray-400">Where I've shipped real software for real users.</p>
      </div>
      <div className="flex flex-col gap-8">
        {allExperience.map(exp => <ExperienceCard key={exp.company} exp={exp} />)}
      </div>
    </div>
  </section>
);

export default ExperienceCard;
