import React from 'react';
import type { MenuCategory } from '@/types/menu.types';
import { formatPrice } from '@/lib/formatPrice';
import { CornerOrnament } from '../ui/CornerOrnament';

interface ServiceListPageProps {
  category: MenuCategory;
}

export const ServiceListPage: React.FC<ServiceListPageProps> = ({ category }) => {
  return (
    <div className="w-full h-full text-zen-charcoal flex flex-col p-6 sm:p-8 md:p-10 relative overflow-hidden bg-paper-inner select-none">
      {/* Background Effect: Ánh sáng trung tâm */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 25%, rgba(255,245,220,0.45) 0%, transparent 70%)'
        }}
      />

      {/* Hoa văn góc sang trọng */}
      <CornerOrnament position="top-left" size={52} className="absolute top-3 left-3 opacity-60" />
      <CornerOrnament position="top-right" size={52} className="absolute top-3 right-3 opacity-60" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-6 mt-1 sm:mt-2">
          {category.subtitle && (
            <p className="font-serif text-[10px] sm:text-xs uppercase tracking-[0.28em] text-zen-brown/85 font-semibold mb-1">
              {category.subtitle}
            </p>
          )}

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-zen-charcoal font-bold tracking-wider uppercase mb-1.5 drop-shadow-sm">
            {category.title}
          </h2>

          {category.tagline && (
            <p className="font-script text-base sm:text-lg md:text-xl text-zen-brown italic">
              {category.tagline}
            </p>
          )}
        </div>

        {/* Dải phân cách tinh tế */}
        <div className="flex items-center justify-center gap-3 my-2 opacity-75">
          <div className="h-px bg-zen-brown/30 flex-1 max-w-16 sm:max-w-24" />
          <span className="font-serif text-[10px] sm:text-xs text-zen-brown uppercase tracking-widest font-medium">
            Bảng Giá Dịch Vụ
          </span>
          <div className="h-px bg-zen-brown/30 flex-1 max-w-16 sm:max-w-24" />
        </div>

        {/* Danh sách dịch vụ dạng menu cổ điển với đường chấm dẫn */}
        <div className="flex-1 overflow-y-auto pr-1 no-scrollbar flex flex-col justify-center gap-2.5 sm:gap-3.5 my-2">
          {category.items.map((item) => (
            <div
              key={item.id}
              className="flex items-baseline justify-between gap-2 group py-0.5 hover:bg-zen-brown/5 rounded px-2 transition-colors duration-200"
            >
              <div className="flex flex-col">
                <span className="font-serif text-sm sm:text-base md:text-lg font-medium text-zen-charcoal tracking-wide">
                  {item.name}
                </span>
                {item.description && (
                  <span className="font-sans text-[11px] sm:text-xs text-zen-charcoal/70 italic">
                    {item.description}
                  </span>
                )}
              </div>

              {/* Đường kẻ chấm nối */}
              <div className="flex-1 border-b border-dotted border-zen-brown/35 mx-2 relative -top-1" />

              {/* Giá dịch vụ */}
              <span className="font-serif text-sm sm:text-base md:text-lg font-bold text-zen-brown whitespace-nowrap">
                {formatPrice(item.price, 'full')}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        {category.coverQuote && (
          <div className="mt-auto pt-3 text-center border-t border-zen-brown/20">
            <p className="font-script text-xs sm:text-sm md:text-base text-zen-brown italic opacity-85">
              “{category.coverQuote}”
            </p>
          </div>
        )}
      </div>

      {/* Bóng gáy sách (trang bên phải có bóng bên trái) */}
      <div 
        className="absolute top-0 bottom-0 left-0 w-8 md:w-10 pointer-events-none z-30"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 100%)"
        }}
      />
    </div>
  );
};
