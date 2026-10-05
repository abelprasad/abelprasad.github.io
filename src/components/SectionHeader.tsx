import React from 'react';

interface Props {
  index: string;
  label: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ index, label, title, description }: Props) => {
  const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <div className="mb-14 md:mb-16">
      <p className="font-mono text-xs md:text-sm mb-5">
        <span className="text-gray-600">[</span>
        <span className="text-brand-green">{index}</span>
        <span className="text-gray-600">]</span>
        <span className="text-brand-green"> abel@indra</span>
        <span className="text-gray-600">:</span>
        <span className="text-gray-500">~/portfolio</span>
        <span className="text-gray-600">$ </span>
        <span className="text-gray-300">cat {slug}.log</span>
      </p>
      <h2 className="font-mono text-4xl md:text-5xl font-extrabold tracking-tight glow-dim">{title}</h2>
      {description && <p className="text-gray-400 mt-5 max-w-xl leading-relaxed">{description}</p>}
      <p className="font-mono text-gray-700 text-xs mt-6 select-none" aria-hidden="true">
        {'-'.repeat(48)}
      </p>
    </div>
  );
};

export default SectionHeader;
