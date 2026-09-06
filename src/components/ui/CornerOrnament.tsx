import React, { useId } from 'react';

interface CornerOrnamentProps {
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
}

export const CornerOrnament: React.FC<CornerOrnamentProps> = ({
  className = '',
  position = 'top-left',
  size = 64,
}) => {
  // Tạo ID duy nhất cho mỗi instance để tránh xung đột SVG filter/gradient ID
  const rawId = useId().replace(/:/g, '_');
  const gradId = `cornerGoldGrad_${rawId}`;
  const filterId = `cornerGoldGlow_${rawId}`;

  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'scaleX(-1)';
      case 'bottom-left':
        return 'scaleY(-1)';
      case 'bottom-right':
        return 'scale(-1, -1)';
      default:
        return 'none';
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      style={{ transform: getTransform() }}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9E8B2" />
          <stop offset="40%" stopColor="#D4AF37" />
          <stop offset="75%" stopColor="#B38728" />
          <stop offset="100%" stopColor="#8C6517" />
        </linearGradient>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>

      <g filter={`url(#${filterId})`}>
        {/* Đường viền góc chính */}
        <path
          d="M 6 6 L 85 6 C 65 6 35 15 25 35 C 15 55 10 70 6 92 Z"
          stroke={`url(#${gradId})`}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.85"
        />

        {/* Nét uốn lượn bên trong (inner scroll) */}
        <path
          d="M 14 14 L 65 14 C 45 16 28 28 20 50 C 16 65 14 75 14 80"
          stroke={`url(#${gradId})`}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />

        {/* Hoa văn xoắn ốc đỉnh (spiral scroll) */}
        <path
          d="M 22 22 Q 40 18 50 32 Q 32 50 18 40 Q 14 30 22 22 Z"
          fill={`url(#${gradId})`}
          fillOpacity="0.65"
        />

        {/* Cụm lá trang trí góc */}
        <path
          d="M 24 24 C 36 36 42 52 32 68 C 28 56 22 44 24 24 Z"
          fill={`url(#${gradId})`}
          fillOpacity="0.5"
        />
        <path
          d="M 24 24 C 36 36 52 42 68 32 C 56 28 44 22 24 24 Z"
          fill={`url(#${gradId})`}
          fillOpacity="0.5"
        />

        {/* Hạt ngọc vàng điểm xuyết */}
        <circle cx="10" cy="10" r="2.8" fill={`url(#${gradId})`} />
        <circle cx="85" cy="6" r="1.8" fill={`url(#${gradId})`} />
        <circle cx="6" cy="92" r="1.8" fill={`url(#${gradId})`} />
        <circle cx="58" cy="14" r="1.5" fill={`url(#${gradId})`} />
        <circle cx="14" cy="58" r="1.5" fill={`url(#${gradId})`} />
      </g>
    </svg>
  );
};
