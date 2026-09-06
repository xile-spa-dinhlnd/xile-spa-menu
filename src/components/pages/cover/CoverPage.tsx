import React from 'react';
import { WillowBranch } from './WillowBranch';
import { WaterDrop } from './WaterDrop';
import { ContactInfo } from './ContactInfo';

export const CoverPage: React.FC = () => {
  return (
    <div className="w-full h-full text-zen-charcoal flex flex-col items-center justify-center text-center relative overflow-hidden bg-paper-cover">
      {/* Rãnh gáy sách (Spine Crease) */}
      <div
        className="absolute top-0 bottom-0 left-[1%] w-[3%] pointer-events-none z-20"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.01) 0%, rgba(92,61,30,0.05) 30%, rgba(92,61,30,0.08) 50%, rgba(255,255,255,0.05) 70%, transparent 100%)',
          borderLeft: '1px solid rgba(0,0,0,0.03)',
        }}
      />

      {/* === Bóng đổ viền trái === */}
      <div
        className="absolute top-0 bottom-0 left-0 pointer-events-none z-30"
        style={{
          width: '30px',
          background:
            'linear-gradient(to right, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 50%, transparent 100%)',
        }}
      />

      {/* === Lớp mờ sương (atmospheric haze) === */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 35% 40%, rgba(255,245,220,0.45) 0%, transparent 65%)',
        }}
      />

      {/* === Cành lá liễu trang trí === */}
      <WillowBranch />

      {/* === Giọt nước và vòng sóng lan tỏa === */}
      <WaterDrop />

      {/* === Nội dung chính === */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Tên thương hiệu */}
        <h1
          className="font-display uppercase"
          style={{
            fontSize: 'clamp(2.8rem, 7.5vw, 5.5rem)',
            letterSpacing: '0.35em',
            color: '#3D2B1F',
            textShadow: '0 2px 8px rgba(100,60,20,0.25)',
            lineHeight: 1,
            marginBottom: '0.5em',
          }}
        >
          XILE
        </h1>

        {/* Divider trang trí với icon lá */}
        <div
          className="flex items-center gap-2 my-1 md:my-2"
          style={{ width: 'clamp(100px, 20%, 180px)' }}
        >
          <div
            className="flex-1 h-px"
            style={{
              background:
                'linear-gradient(to right, transparent, rgba(140,90,30,0.6))',
            }}
          />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1 C7 1, 2 5, 2 8 C2 10.8 4.2 13 7 13 C9.8 13 12 10.8 12 8 C12 5 7 1 7 1Z"
              fill="rgba(100,130,60,0.8)"
            />
          </svg>
          <div
            className="flex-1 h-px"
            style={{
              background:
                'linear-gradient(to left, transparent, rgba(140,90,30,0.6))',
            }}
          />
        </div>

        {/* Tagline chính (script) */}
        <p
          className="font-script"
          style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)',
            color: '#3D2B1F',
            opacity: 0.85,
            lineHeight: 1.4,
          }}
        >
          Một giọt nước cũng biết
        </p>
        <p
          className="font-script"
          style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)',
            color: '#3D2B1F',
            opacity: 0.85,
            lineHeight: 1.4,
            marginBottom: '0.5em',
          }}
        >
          tìm về nơi bình yên
        </p>

        {/* Sub-title */}
        <p
          className="font-sans uppercase"
          style={{
            fontSize: 'clamp(0.5rem, 1.1vw, 0.7rem)',
            letterSpacing: '0.22em',
            color: 'rgba(80,50,20,0.7)',
          }}
        >
          Menu Dịch Vụ
        </p>
      </div>

      {/* === Thông tin liên hệ ở góc dưới === */}
      <ContactInfo />

      {/* Vignette nhẹ viền ngoài */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(100,60,10,0.2) 100%)',
        }}
      />
    </div>
  );
};
