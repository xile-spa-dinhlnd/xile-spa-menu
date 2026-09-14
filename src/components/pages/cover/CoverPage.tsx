import React from 'react';
import coverFrontOriginal from '@/assets/images/cover-front-original.webp';
import { LivingWaterRipples } from './LivingWaterRipples';
import { ZenFallingLeaves } from './ZenFallingLeaves';

export const CoverPage: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden select-none bg-[#2A1B0E]">
      {/* === 1. NỀN ẢNH GỐC CANVA RETINA 1600PX SẮC NÉT 100% === */}
      <img
        src={coverFrontOriginal}
        alt="Trang bìa Xile Spa - Một giọt nước cũng biết tìm về nơi bình yên"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        loading="eager"
      />

      {/* === 2. ÁNH SÁNG NẮNG ẤM THỞ NHẸ QUA KHUNG CỬA SỔ TRÒN (Sunbeam Glow) === */}
      <div
        className="absolute pointer-events-none z-5 sunbeam-glow"
        style={{
          top: '12%',
          left: '20%',
          width: '50%',
          height: '55%',
          background:
            'radial-gradient(ellipse at center, rgba(255,245,210,0.22) 0%, rgba(240,210,140,0.08) 50%, transparent 75%)',
          filter: 'blur(8px)',
        }}
      />

      {/* === 3. HIỆU ỨNG LÁ LIỄU TIỀN CẢNH ĐUNG ĐƯA & LÁ RƠI THIỀN ZEN === */}
      <ZenFallingLeaves />

      {/* === 4. HIỆU ỨNG VÒNG SÓNG NƯỚC LOANG & CHẠM TƯƠNG TÁC (Living Water Ripples) === */}
      <LivingWaterRipples />

      {/* === 5. RÃNH GÁY SÁCH (Spine Crease) - Nằm bên TRÁI trang bìa === */}
      <div
        className="absolute top-0 bottom-0 left-0 w-8 md:w-12 pointer-events-none z-30"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.08) 40%, transparent 100%)',
        }}
      />

      {/* === 6. BÓNG ĐỔ VIỀN MẶT NGOÀI TRANG BÌA (Outer Edge Shadow - Phải) === */}
      <div
        className="absolute top-0 bottom-0 right-0 w-3 pointer-events-none z-30"
        style={{
          background:
            'linear-gradient(to left, rgba(0,0,0,0.12) 0%, transparent 100%)',
        }}
      />

      {/* === 7. HỖ TRỢ SEO & SCREEN READER (Ẩn thị giác, chuẩn tìm kiếm) === */}
      <div className="sr-only">
        <h1>XILE Beauty & Spa</h1>
        <p>Một giọt nước cũng biết tìm về nơi bình yên</p>
        <p>Menu Dịch Vụ Chăm Sóc Sức Khỏe & Trị Liệu</p>
        <p>Địa chỉ: 67 Hưng Phú, Quận 8</p>
        <p>Hotline: 0909 722 408 — 0908 899 250</p>
      </div>
    </div>
  );
};
