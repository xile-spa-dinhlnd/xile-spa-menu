import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { ServiceItem } from '../../types/menu.types';

interface ServicePageProps {
  service: ServiceItem;
}

export const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  return (
    <div className="w-full h-full bg-zen-charcoal text-zen-cream flex flex-col p-8 relative overflow-hidden">
      {/* Background Effect */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(201, 162, 39, 0.4) 0%, transparent 60%)'
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header Section */}
        <div className="text-center mb-6 mt-4">
          <h2 className="font-display text-4xl md:text-5xl text-zen-gold font-bold tracking-widest uppercase mb-4 drop-shadow-md">
            {service.name}
          </h2>
          
          {service.tagline && (
            <p className="font-script text-xl md:text-2xl text-zen-cream/90 italic mb-6">
              "{service.tagline}"
            </p>
          )}

          <div className="flex justify-center items-center my-4">
            <span className="font-serif text-5xl md:text-6xl text-zen-gold font-bold italic drop-shadow-lg">
              {Math.floor(service.price / 1000)}k
            </span>
          </div>

          {service.description && (
            <p className="font-sans text-sm md:text-base text-zen-cream/80 max-w-sm mx-auto leading-relaxed mt-4">
              {service.description}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-6 opacity-80">
          <div className="h-px bg-zen-gold flex-1 max-w-20"></div>
          <span className="font-serif text-lg text-zen-gold uppercase tracking-widest">
            Trải nghiệm bao gồm
          </span>
          <div className="h-px bg-zen-gold flex-1 max-w-20"></div>
        </div>

        {/* Includes Grid */}
        <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
            {service.includes.map((item, index) => {
              // Lấy icon động từ chuỗi, mặc định là Spa nếu không có
              // @ts-ignore - LucideIcons type index access
              const IconComponent = item.icon && LucideIcons[item.icon.charAt(0).toUpperCase() + item.icon.slice(1)] 
                ? (LucideIcons as any)[item.icon.charAt(0).toUpperCase() + item.icon.slice(1)] 
                : LucideIcons.Flower2;

              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full border border-zen-gold/30 flex items-center justify-center mb-3 bg-zen-gold/5 group-hover:bg-zen-gold/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-zen-gold opacity-80" strokeWidth={1.5} />
                  </div>
                  <span className="font-sans text-[11px] md:text-xs text-zen-cream/90 uppercase tracking-wide leading-tight">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note Footer */}
        {service.note && (
          <div className="mt-auto pt-6 pb-2 text-center border-t border-zen-gold/20 relative">
            <LucideIcons.Leaf className="w-4 h-4 text-zen-gold/50 absolute -top-2 left-1/2 -translate-x-1/2 bg-zen-charcoal px-1" />
            <p className="font-sans text-xs text-zen-stone italic">
              Lời nhắn nhỏ: {service.note}
            </p>
          </div>
        )}
      </div>
      
      {/* Binding shadow for right page (optional logic later) */}
      <div className="absolute top-0 bottom-0 left-0 w-8 bg-linear-to-r from-black/30 to-transparent pointer-events-none"></div>
    </div>
  );
};
