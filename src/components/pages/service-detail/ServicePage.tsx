import React from 'react';
import { Leaf } from 'lucide-react';
import type { ServiceItem } from '@/types/menu.types';
import { formatPrice } from '@/lib/formatPrice';
import { getServiceIcon } from '@/lib/icons';

interface ServicePageProps {
  service: ServiceItem;
}

export const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  return (
    <div
      className="w-full h-full text-zen-charcoal flex flex-col p-8 md:p-10 relative overflow-hidden bg-paper-inner"
    >
      {/* Background Effect: Haze sáng ở giữa trên */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(255,245,220,0.4) 0%, transparent 65%)'
        }}
      />

      {/* Hoa văn góc trang trí */}
      <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-zen-brown/20"></div>
      <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-zen-brown/20"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header Section */}
        <div className="text-center mb-6 mt-4">
          <h2 className="font-display text-3xl md:text-5xl text-zen-charcoal font-bold tracking-widest uppercase mb-3 drop-shadow-sm opacity-90">
            {service.name}
          </h2>
          
          {service.tagline && (
            <p className="font-script text-xl md:text-2xl text-zen-brown italic mb-5">
              “{service.tagline}”
            </p>
          )}

          <div className="flex justify-center items-center my-4">
            <span className="font-serif text-4xl md:text-5xl text-zen-charcoal font-bold italic drop-shadow-md">
              {formatPrice(service.price, 'short')}
            </span>
          </div>

          {service.description && (
            <p className="font-sans text-sm md:text-base text-zen-charcoal/80 max-w-sm mx-auto leading-relaxed mt-4 font-medium">
              {service.description}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-4 opacity-80">
          <div className="h-px bg-zen-brown/30 flex-1 max-w-16"></div>
          <span className="font-sans text-[10px] md:text-xs text-zen-brown uppercase tracking-widest font-semibold">
            Trải nghiệm bao gồm
          </span>
          <div className="h-px bg-zen-brown/30 flex-1 max-w-16"></div>
        </div>

        {/* Includes Grid */}
        <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 mt-4">
            {service.includes.map((item, index) => {
              const IconComponent = getServiceIcon(item.icon);

              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-zen-brown/20 flex items-center justify-center mb-2.5 bg-zen-brown/5 group-hover:bg-zen-brown/15 transition-colors duration-300 shadow-sm">
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-zen-brown opacity-85" strokeWidth={1.5} />
                  </div>
                  <span className="font-sans text-[10px] md:text-xs text-zen-charcoal/85 uppercase tracking-wide leading-tight font-medium px-1">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note Footer */}
        {service.note && (
          <div className="mt-auto pt-5 pb-2 text-center border-t border-zen-brown/20 relative">
            <Leaf className="w-4 h-4 text-zen-brown/50 absolute -top-2 left-1/2 -translate-x-1/2 px-1" style={{ backgroundColor: "#BF9855" }} />
            <p className="font-sans text-[11px] md:text-xs text-zen-brown italic">
              Lời nhắn nhỏ: {service.note}
            </p>
          </div>
        )}
      </div>
      
      {/* Binding shadow for page */}
      <div className="absolute top-0 bottom-0 left-0 w-10 bg-linear-to-r from-black/20 to-transparent pointer-events-none z-30"></div>
      
      {/* Vignette viền (rất nhẹ để tạo chiều sâu) */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 70%, rgba(60,40,10,0.08) 100%)" }} />
    </div>
  );
};
