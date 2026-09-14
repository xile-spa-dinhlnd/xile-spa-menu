import React, { useState } from 'react';
import { X } from 'lucide-react';

interface OrientationNoticeProps {
  show: boolean;
}

export const OrientationNotice: React.FC<OrientationNoticeProps> = ({ show }) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [prevShow, setPrevShow] = useState(show);

  // Khi xoay sang ngang (show chuyển sang false), tự động reset trạng thái dismissed
  // theo chuẩn React pattern (Storing information from previous renders)
  if (prevShow !== show) {
    setPrevShow(show);
    if (!show) {
      setIsDismissed(false);
    }
  }

  const isVisible = show && !isDismissed;

  return (
    <aside
      aria-label="Gợi ý xoay ngang màn hình"
      className={`fixed top-3 sm:top-4.5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1e1107]/92 border border-zen-gold/45 shadow-[0_8px_24px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-500 select-none max-w-[92vw] ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      {/* Icon xoay màn hình tự động quay 90 độ nhịp nhàng */}
      <div className="shrink-0 flex items-center justify-center w-6 h-6 text-zen-gold">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4.5 h-4.5 animate-rotate-device"
        >
          {/* Khung điện thoại */}
          <rect x="6" y="2" width="12" height="20" rx="3" />
          <line x1="10" y1="18" x2="14" y2="18" />
        </svg>
      </div>

      {/* Dòng thông báo thanh lịch */}
      <p className="font-sans text-[11px] sm:text-xs text-[#FFF6E5] font-medium tracking-wide drop-shadow-sm whitespace-nowrap">
        <span className="inline sm:hidden">Xoay ngang màn hình để xem rõ nhất</span>
        <span className="hidden sm:inline">Để có trải nghiệm tốt nhất, bạn hãy xoay ngang màn hình nhé</span>
      </p>

      {/* Nút đóng nếu người dùng vẫn muốn đọc ở chế độ dọc */}
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        aria-label="Đóng thông báo"
        className="shrink-0 ml-0.5 sm:ml-1 p-1 rounded-full text-zen-cream/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
