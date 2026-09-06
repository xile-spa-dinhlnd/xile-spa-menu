import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DockNavButtonProps {
  direction: 'prev' | 'next';
  show: boolean;
  onClick: () => void;
  ariaLabel: string;
}

export const DockNavButton: React.FC<DockNavButtonProps> = ({
  direction,
  show,
  onClick,
  ariaLabel,
}) => {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      disabled={!show}
      aria-label={ariaLabel}
      className={`w-7 h-7 sm:w-7.5 sm:h-7.5 flex items-center justify-center rounded-full text-[#FDF5E6] hover:text-zen-gold hover:bg-white/10 active:scale-95 transition-all duration-150 ${
        show
          ? 'opacity-95 cursor-pointer'
          : 'opacity-20 cursor-not-allowed pointer-events-none'
      }`}
    >
      <Icon className="w-4 h-4" strokeWidth={2.4} />
    </button>
  );
};
