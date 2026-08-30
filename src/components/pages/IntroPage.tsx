import React from 'react';

export const IntroPage: React.FC = () => {
  return (
    <div
      className="w-full h-full text-zen-charcoal flex flex-col items-center justify-center p-8 md:p-12 text-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #D4B483 0%, #C8A46A 25%, #BF9855 50%, #C4A060 75%, #D0AC78 100%)",
      }}
    >
      {/* === Lớp mờ sương (atmospheric haze) === */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 35% 40%, rgba(255,245,220,0.45) 0%, transparent 65%)",
        }}
      />

      {/* === Lá liễu trang trí (tinh tế, mờ hơn trang bìa) === */}
      <div
        className="absolute top-0 right-0 pointer-events-none leaf-sway"
        style={{ width: "25%", height: "45%", opacity: 0.35, transformOrigin: "top right" }}
      >
        <svg viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ transform: "scaleX(-1)" }}>
          <path d="M50 0 Q55 50 40 110" stroke="#5A7040" strokeWidth="1.2" fill="none" opacity="0.6" />
          <ellipse cx="28" cy="40" rx="16" ry="6" fill="#6B7A40" opacity="0.6" transform="rotate(-35 28 40)" />
          <ellipse cx="20" cy="70" rx="14" ry="5" fill="#5A6E35" opacity="0.55" transform="rotate(-42 20 70)" />
          <ellipse cx="30" cy="100" rx="12" ry="4.5" fill="#6B7A40" opacity="0.5" transform="rotate(-28 30 100)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center h-full max-h-full overflow-y-auto no-scrollbar py-4">
        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl text-zen-charcoal font-bold uppercase tracking-[0.2em] mb-8 drop-shadow-sm opacity-90">
          Lời Ngỏ
        </h2>

        {/* Nội dung 1 */}
        <div className="font-sans text-sm md:text-base text-zen-charcoal/80 leading-loose space-y-2 mb-8 text-center max-w-sm font-medium">
          <p>Có những ngày, ta chỉ muốn dừng lại một chút</p>
          <p>Dừng để thở</p>
          <p>Dừng để lắng nghe cơ thể</p>
          <p>Dừng để nhớ rằng</p>
          <p>mình cũng xứng đáng được chăm sóc.</p>
        </div>

        {/* Nội dung 2 */}
        <div className="font-sans text-sm md:text-base text-zen-charcoal leading-relaxed mb-8 text-center max-w-md font-medium">
          <p className="mb-2">
            <span className="font-script text-3xl text-zen-brown mr-2">Ở đây,</span>
            chúng tôi mong muốn giúp bạn tìm
          </p>
          <p>lại cảm giác nhẹ nhàng trong từng chuyển động</p>
          <p>và sự bình yên sau mỗi nhịp thở.</p>
        </div>

        {/* Divider & Text */}
        <div className="font-sans text-[13px] md:text-sm text-zen-charcoal/70 italic leading-relaxed text-center max-w-md border-t border-b border-zen-brown/20 py-6 mb-8 font-medium">
          Với 3 chương 3 hành trình : "Mái tóc, Cơ thể và Làn da" Xile rất hân hạnh đồng hành cùng bạn trong hành trình đánh thức năng lượng sống vì Xile tin rằng vẻ đẹp thật sự bắt đầu từ sự cân bằng bên trong Thân - Tâm - Trí
        </div>

        {/* Chào mừng */}
        <div className="mt-auto flex flex-col items-center">
          <p className="font-script text-3xl md:text-4xl text-zen-brown mb-2 opacity-90">
            Chào mừng bạn đến với Xile
          </p>
          <p className="font-script text-2xl md:text-3xl text-zen-charcoal/80">
            Nơi bạn được là chính mình
          </p>
        </div>
      </div>
      
      {/* Binding shadow (Bóng gáy sách) */}
      <div className="absolute top-0 bottom-0 left-0 w-10 pointer-events-none z-30" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.03) 60%, transparent 100%)" }}></div>
      
      {/* Vignette viền */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(100,60,10,0.1) 100%)" }} />
    </div>
  );
};
