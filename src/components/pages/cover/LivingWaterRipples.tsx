import React, { useState, useCallback } from 'react';

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export const LivingWaterRipples: React.FC = () => {
  const [clickRipples, setClickRipples] = useState<ClickRipple[]>([]);

  // Bắt sự kiện click vào vùng mặt nước để sinh vòng sóng tương tác
  const handleWaterClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();

    setClickRipples((prev) => [...prev, { id, x, y }]);

    // Tự động dọn dẹp ripple sau khi animation kết thúc (1s)
    setTimeout(() => {
      setClickRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1000);
  }, []);

  return (
    <>
      {/* === VÙNG MẶT NƯỚC TƯƠNG TÁC (Chỉ chiếm 40% nửa dưới của bìa sách) === */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[42%] z-20 cursor-pointer overflow-hidden"
        onClick={handleWaterClick}
        title="Chạm vào mặt nước để tạo gợn sóng"
      >
        {/* Render các gợn sóng tương tác khi click */}
        {clickRipples.map((ripple) => (
          <div
            key={ripple.id}
            className="touch-ripple-effect"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              width: '80px',
              height: '40px',
            }}
          />
        ))}
      </div>

      {/* === TÂM ĐIỂM SÓNG NƯỚC CHÍNH (Khớp 100% với giọt nước trên ảnh gốc) === */}
      <div
        className="absolute pointer-events-none z-15"
        style={{
          left: '50.0%',
          top: '78.2%',
          width: '120px',
          height: '60px',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* 4 vòng sóng elip mở rộng liên tục */}
        <div className="living-ripple w-full h-full left-1/2 top-1/2" />
        <div className="living-ripple w-full h-full left-1/2 top-1/2" />
        <div className="living-ripple w-full h-full left-1/2 top-1/2" />
        <div className="living-ripple w-full h-full left-1/2 top-1/2" />

        {/* Điểm sáng vàng lấp lánh phản chiếu tại chân giọt nước */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-2 rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,250,220,0.85) 0%, rgba(240,200,120,0.4) 60%, transparent 100%)',
            filter: 'blur(0.5px)',
          }}
        />
      </div>
    </>
  );
};
