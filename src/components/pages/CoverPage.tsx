import React from 'react';

export const CoverPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-zen-charcoal text-zen-cream flex flex-col items-center justify-center p-8 text-center relative overflow-hidden shadow-book">
      {/* Background Pattern / Texture (optional) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(201, 162, 39, 0.2) 10px, rgba(201, 162, 39, 0.2) 11px)`
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center border border-zen-gold/30 p-12 rounded-sm w-full h-full max-h-[80%] max-w-[80%] justify-center">
        <p className="font-script text-5xl md:text-6xl text-zen-gold mb-6 tracking-wider">
          Xile Spa
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-zen-cream mb-4 uppercase tracking-[0.2em]">
          Menu Dịch Vụ
        </h1>
        <div className="w-16 h-px bg-zen-gold/50 my-6"></div>
        <p className="font-sans text-sm md:text-base text-zen-stone uppercase tracking-widest">
          Nơi bạn được là chính mình
        </p>
      </div>
      
      {/* Binding shadow left */}
      <div className="absolute top-0 bottom-0 left-0 w-8 bg-linear-to-r from-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
};
