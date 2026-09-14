import React from "react";
import logoImage from "@/assets/xile_spa_logo.png";

export const BackCoverPage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden text-zen-charcoal bg-paper-inner select-none">
      {/* Vignette viền ấm áp */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(100,60,10,0.15) 100%)",
        }}
      />

      {/* Rãnh gáy sách (Spine Crease) - Nằm bên PHẢI vì bìa sau ở nửa trái của cuốn sách */}
      <div
        className="absolute top-0 bottom-0 right-0 w-8 md:w-12 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.06) 45%, transparent 100%)",
        }}
      />

      {/* Bóng viền mặt ngoài (Outer Edge Shadow - Trái) */}
      <div
        className="absolute top-0 bottom-0 left-0 w-3 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.1) 0%, transparent 100%)",
        }}
      />

      {/* Logo Xile Spa nổi bật, sang trọng ở trung tâm */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <img
          src={logoImage}
          alt="Xile Spa Logo"
          className="w-64 sm:w-80 md:w-96 lg:w-95 max-w-[72%] max-h-[70%] object-contain opacity-95 drop-shadow-md mix-blend-multiply transition-all duration-300"
        />
      </div>

      {/* Screen reader & SEO */}
      <div className="sr-only">
        <h2>Xile Beauty & Spa</h2>
      </div>
    </div>
  );
};
