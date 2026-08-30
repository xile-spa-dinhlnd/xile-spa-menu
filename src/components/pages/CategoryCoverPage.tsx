import React from 'react';

interface CategoryCoverPageProps {
  title: string;
}

export const CategoryCoverPage: React.FC<CategoryCoverPageProps> = ({ title }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-paper-inner">
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,245,220,0.35) 0%, transparent 65%)" }} 
      />
      <div className="relative z-10 p-8 text-center border-y border-zen-brown/20 py-8 mx-8">
        <p className="font-serif text-zen-charcoal text-2xl md:text-3xl font-bold uppercase tracking-widest drop-shadow-sm opacity-90">
          {title}
        </p>
      </div>
    </div>
  );
};
