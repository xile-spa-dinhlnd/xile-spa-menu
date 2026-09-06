import React from 'react';
import type { MenuCategory } from '@/types/menu.types';
import hairLotusBg from '@/assets/images/category-hair-bg.webp';

interface CategoryCoverPageProps {
  category?: MenuCategory;
  title?: string;
}

export const CategoryCoverPage: React.FC<CategoryCoverPageProps> = ({ category, title }) => {
  const displayTitle = category?.title || title || 'Dịch Vụ';
  // Xác định theme chuẩn qua property thay vì magic string
  const isHairCategory = category?.theme === 'hair' || category?.id === 'cat-hair';

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-[#F4ECD8] select-none pt-3.5 sm:pt-5 md:pt-6 px-4 sm:px-6 md:px-8 pb-4">
      {/* === Nền Tranh Màu Nước Đầm Sen & Cô Gái === */}
      {isHairCategory && (
        <img
          src={hairLotusBg}
          alt="Bức tranh đầm sen và cô gái nghỉ ngơi"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          loading="eager"
        />
      )}

      {/* Lớp vân sáng nhẹ nhàng trên phần text */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background:
            "linear-gradient(180deg, rgba(250,244,228,0.4) 0%, rgba(248,239,218,0.1) 50%, transparent 75%)",
        }}
      />

      {/* === NỘI DUNG TYPOGRAPHY NỬA TRÊN TRANG (Căn chỉnh vừa vặn, không bị quá sát mép) === */}
      <div className="relative z-10 flex flex-col items-center text-center pt-0 max-w-xl mx-auto w-full">
        {/* Số chương & Danh mục phụ */}
        {category?.subtitle && (
          <p className="font-serif text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.32em] text-[#7A5523] font-bold mb-1 sm:mb-1.5 opacity-90 drop-shadow-sm">
            {category.subtitle}
          </p>
        )}

        {/* Tiêu đề chính: GỘI DƯỠNG SINH */}
        <h1
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold uppercase tracking-[0.15em] leading-none mb-1.5 md:mb-2 drop-shadow-[0_1px_3px_rgba(255,255,255,0.7)]"
          style={{
            background:
              "linear-gradient(180deg, #3A230F 0%, #68451B 35%, #8C642B 65%, #422910 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {displayTitle}
        </h1>

        {/* Tagline thư pháp: “Sạch tóc - Nhẹ đầu - Nuôi dưỡng từ gốc” (Đảm bảo trên 1 dòng) */}
        {category?.tagline && (
          <p
            className="font-script text-xl sm:text-2xl md:text-[29px] lg:text-[32px] font-bold tracking-wide mb-2 sm:mb-2.5 md:mb-3 drop-shadow-sm whitespace-nowrap"
            style={{
              background:
                "linear-gradient(180deg, #4A3215 0%, #6D481C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {category.tagline}
          </p>
        )}

        {/* Đoạn văn triết lý chữa lành (Render động theo từng dòng từ dữ liệu) */}
        {category?.philosophy && (
          <div className="font-serif text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] text-[#1E1106] leading-snug max-w-xl mx-auto space-y-1 font-semibold drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] px-2">
            {category.philosophy.split('\n').map((line, idx, arr) => (
              <p
                key={idx}
                className={idx === arr.length - 1 ? "text-[#3A1F0B]" : undefined}
              >
                {line}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* === BÓNG GÁY SÁCH (Book Spine Crease Shadow) - Nằm bên TRÁI vì đây là trang bên PHẢI === */}
      <div
        className="absolute top-0 bottom-0 left-0 w-8 md:w-12 pointer-events-none z-30"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.06) 45%, transparent 100%)",
        }}
      />

      {/* === BÓNG VIỀN MẶT NGOÀI TRANG SÁCH (Outer Edge Shadow - Phải) === */}
      <div
        className="absolute top-0 bottom-0 right-0 w-3 pointer-events-none z-30"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.1) 0%, transparent 100%)",
        }}
      />
    </div>
  );
};
