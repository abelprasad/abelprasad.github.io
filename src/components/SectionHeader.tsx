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
        <span className="text-brand-darkGreen">{index}</span>
        <span className="text-gray-600">]</span>
        <span className="text-brand-darkGreen"> abel@portfolio</span>
        <span className="text-gray-600">:</span>
        <span className="text-brand-muted">~/portfolio</span>
        <span className="text-gray-600">$ </span>
        <span className="text-brand-ink">cat {slug}.log</span>
      </p>
      <h2 className="font-mono text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
      {description && <p className="text-brand-muted mt-5 max-w-xl leading-relaxed">{description}</p>}
      <p className="font-mono text-brand-green/60 text-xs mt-6 select-none whitespace-nowrap overflow-hidden" aria-hidden="true">
        {'─'.repeat(64)}
      </p>
    </div>
  );
};

export default SectionHeader;
