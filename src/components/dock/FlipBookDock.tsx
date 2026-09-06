import React from 'react';
import { DockNavButton } from './DockNavButton';
import { ProgressBar } from './ProgressBar';

interface FlipBookDockProps {
  currentPage: number;
  totalPages: number;
  usePortrait: boolean;
  showPrev: boolean;
  showNext: boolean;
  progressPercent: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  onProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const FlipBookDock: React.FC<FlipBookDockProps> = ({
  currentPage,
  totalPages,
  usePortrait,
  showPrev,
  showNext,
  progressPercent,
  onPrevClick,
  onNextClick,
  onProgressClick,
}) => {
  const pageLabel =
    currentPage === 0
      ? 'Trang Bìa'
      : currentPage >= totalPages - 1
      ? 'Bìa Sau'
      : usePortrait
      ? `Trang ${currentPage + 1} / ${totalPages}`
      : `Trang ${currentPage + 1}-${Math.min(currentPage + 2, totalPages)} / ${totalPages}`;

  return (
    <nav
      aria-label="Điều hướng sách"
      className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#1e1107]/90 border border-zen-gold/35 shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 select-none hover:border-zen-gold/55"
    >
      <DockNavButton
        direction="prev"
        show={showPrev}
        onClick={onPrevClick}
        ariaLabel="Trang trước"
      />

      <div className="flex flex-col items-center px-1.5 sm:px-2 py-0.5 min-w-26.25 sm:min-w-31.25 gap-1 select-none">
        <span className="font-serif text-[11px] sm:text-xs tracking-[0.16em] text-[#FFF6E5] uppercase font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
          {pageLabel}
        </span>
        <ProgressBar
          progressPercent={progressPercent}
          onProgressClick={onProgressClick}
        />
      </div>

      <DockNavButton
        direction="next"
        show={showNext}
        onClick={onNextClick}
        ariaLabel="Trang sau"
      />
    </nav>
  );
};
