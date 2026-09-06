import React from 'react';

interface ProgressBarProps {
  progressPercent: number;
  onProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progressPercent,
  onProgressClick,
}) => {
  return (
    <div
      onClick={onProgressClick}
      title="Nhấp vào bất kỳ đâu trên thanh để nhảy nhanh đến trang"
      className="w-full h-1 bg-black/60 rounded-full overflow-hidden cursor-pointer border border-zen-gold/30 hover:border-zen-gold/70 transition-all duration-200 group"
    >
      <div
        className="h-full rounded-full bg-linear-to-r from-[#946B1D] via-[#D4AF37] to-[#FFF0C7] shadow-[0_0_6px_rgba(212,175,55,0.7)] transition-all duration-300 ease-out group-hover:brightness-110"
        style={{ width: `${progressPercent}%` }}
      />
    </div>
  );
};
