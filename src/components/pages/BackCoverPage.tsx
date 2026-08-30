import React from 'react';

export const BackCoverPage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden text-zen-charcoal bg-paper-inner">
      {/* Vignette viền */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(100,60,10,0.1) 100%)" }} 
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <p className="font-script text-4xl text-zen-brown opacity-90 drop-shadow-sm">
          Hẹn gặp lại
        </p>
        <div className="w-12 h-px bg-zen-brown/30 my-4"></div>
        <p className="font-sans text-xs tracking-widest text-zen-charcoal uppercase font-semibold">
          Xile Spa
        </p>
      </div>
    </div>
  );
};
