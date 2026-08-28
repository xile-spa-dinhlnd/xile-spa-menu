import React from "react";
import logoUrl from "../../assets/xile_spa_logo.png";

export const CoverPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-zen-charcoal text-zen-cream flex flex-col items-center justify-center p-8 text-center relative overflow-hidden shadow-book">
      {/* Background Pattern / Texture (optional) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(201, 162, 39, 0.2) 10px, rgba(201, 162, 39, 0.2) 11px)`,
        }}
      />

      {/* Nội dung */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[85%] w-[85%] border border-zen-gold/30 bg-zen-charcoal/40 backdrop-blur-sm mx-auto my-auto p-4 md:p-6">
        <img
          src={logoUrl}
          alt="Xile Beauty & Spa Logo"
          className="w-auto h-[55%] max-h-60 min-h-24 mb-2 md:mb-4 brightness-0 invert opacity-90 drop-shadow-lg object-contain"
        />
        <h1 className="font-serif text-sm md:text-xl lg:text-2xl text-zen-cream mb-1 md:mb-2 uppercase tracking-[0.15em] md:tracking-[0.2em] drop-shadow-sm text-center">
          Menu Dịch Vụ
        </h1>
        <div className="w-10 md:w-16 h-px bg-zen-gold/50 my-2 md:my-4 shrink-0"></div>
        <p className="font-sans text-[8px] md:text-[11px] lg:text-xs text-zen-stone uppercase tracking-widest text-center">
          Nơi bạn được là chính mình
        </p>
      </div>

      {/* Binding shadow left */}
      <div className="absolute top-0 bottom-0 left-0 w-8 bg-linear-to-r from-black/40 to-transparent pointer-events-none z-30"></div>
    </div>
  );
};
