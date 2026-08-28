import React from 'react';

export const IntroPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-zen-charcoal text-zen-cream flex flex-col items-center justify-center p-8 md:p-12 text-center relative overflow-hidden">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(92, 61, 30, 0.4))'
        }}
      />
      
      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-zen-gold/40"></div>
      <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-zen-gold/40"></div>
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-zen-gold/40"></div>
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-zen-gold/40"></div>

      <div className="relative z-10 flex flex-col items-center h-full max-h-full overflow-y-auto no-scrollbar py-4">
        <h2 className="font-serif text-3xl md:text-4xl text-zen-gold font-bold uppercase tracking-[0.2em] mb-10 drop-shadow-sm">
          Lời Ngỏ
        </h2>

        <div className="font-sans text-sm md:text-base text-zen-cream/90 leading-loose space-y-2 mb-10 text-center max-w-sm">
          <p>Có những ngày, ta chỉ muốn dừng lại một chút</p>
          <p>Dừng để thở</p>
          <p>Dừng để lắng nghe cơ thể</p>
          <p>Dừng để nhớ rằng</p>
          <p>mình cũng xứng đáng được chăm sóc.</p>
        </div>

        <div className="font-sans text-sm md:text-base text-zen-cream leading-relaxed mb-10 text-center max-w-md">
          <p className="mb-2">
            <span className="font-script text-3xl text-zen-gold mr-2">Ở đây,</span>
            chúng tôi mong muốn giúp bạn tìm
          </p>
          <p>lại cảm giác nhẹ nhàng trong từng chuyển động</p>
          <p>và sự bình yên sau mỗi nhịp thở.</p>
        </div>

        <div className="font-sans text-[13px] md:text-sm text-zen-stone italic leading-relaxed text-center max-w-md border-t border-b border-zen-gold/20 py-6 mb-10">
          Với 3 chương 3 hành trình : "Mái tóc, Cơ thể và Làn da" Xile rất hân hạnh đồng hành cùng bạn trong hành trình đánh thức năng lượng sống vì Xile tin rằng vẻ đẹp thật sự bắt đầu từ sự cân bằng bên trong Thân - Tâm - Trí
        </div>

        <div className="mt-auto flex flex-col items-center">
          <p className="font-script text-3xl md:text-4xl text-zen-gold mb-2">
            Chào mừng bạn đến với Xile
          </p>
          <p className="font-script text-2xl md:text-3xl text-zen-cream">
            Nơi bạn được là chính mình
          </p>
        </div>
      </div>
      
      {/* Binding shadow */}
      <div className="absolute top-0 bottom-0 left-0 w-8 bg-linear-to-r from-black/30 to-transparent pointer-events-none"></div>
    </div>
  );
};
