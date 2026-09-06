import React from 'react';
import { Hand } from 'lucide-react';

interface BookHintProps {
  show: boolean;
}

export const BookHint: React.FC<BookHintProps> = ({ show }) => {
  return (
    <div
      className={`fixed bottom-14 sm:bottom-16 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 transition-all duration-500 pointer-events-none ${
        show ? 'opacity-85 animate-pulse' : 'opacity-0'
      }`}
    >
      <Hand className="w-3.5 h-3.5 text-zen-cream" />
      <span className="font-sans text-[10px] sm:text-[11px] text-zen-cream/80 tracking-widest uppercase drop-shadow-md whitespace-nowrap">
        Chạm bìa hoặc bấm nút để mở sách
      </span>
    </div>
  );
};
