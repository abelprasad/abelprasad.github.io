import React from 'react';

interface Props {
  index: string;
  label: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ index, label, title, description }: Props) => (
  <div className="mb-14 md:mb-16">
    <p className="font-mono text-brand-purple text-xs md:text-sm tracking-[0.35em] mb-5">
      <span className="text-gray-600">{index}</span>
      <span className="text-gray-600"> // </span>
      {label}
    </p>
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
    {description && <p className="text-gray-400 mt-5 max-w-xl leading-relaxed">{description}</p>}
  </div>
);

export default SectionHeader;
