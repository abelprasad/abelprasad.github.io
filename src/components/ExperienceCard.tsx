import React from 'react';
import { Experience, allExperience } from '../data/experience';

const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <div className="relative pl-10 md:pl-14 pb-12 last:pb-0">
    <span className="absolute left-0 top-1.5 w-2.5 h-2.5 bg-brand-green"></span>
    <span className="absolute left-[4px] top-6 bottom-0 w-px bg-brand-dim"></span>
    <div className="card-hover bg-brand-panel border border-brand-line p-7 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-5">
        <div>
          <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
          <p className="font-mono text-brand-darkGreen text-sm mt-1.5">
            {exp.company}{exp.location ? <span className="text-gray-600"> // {exp.location}</span> : null}
          </p>
        </div>
        <span className="font-mono text-brand-muted text-xs tracking-[0.2em] whitespace-nowrap">{exp.period}</span>
      </div>
      <ul className="space-y-3">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-brand-muted text-sm leading-relaxed">
            <span className="text-brand-darkGreen font-mono flex-shrink-0">&gt;</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const ExperienceSection = () => (
  <section id="experience" className="py-24 md:py-32 px-6 border-t border-brand-line">
    <div className="max-w-7xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-brand-darkGreen text-xs md:text-sm tracking-[0.35em] mb-5">
          <span className="text-gray-600">01</span><span className="text-gray-600"> // </span>SERVICE RECORD
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Experience</h2>
      </div>
      <div className="max-w-4xl">
        {allExperience.map(exp => <ExperienceCard key={exp.company} exp={exp} />)}
      </div>
    </div>
  </section>
);

export default ExperienceCard;
