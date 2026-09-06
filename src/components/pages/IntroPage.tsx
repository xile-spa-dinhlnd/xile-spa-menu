import React from "react";
import introOriginal from "@/assets/images/intro-original.webp";

export const IntroPage: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden select-none bg-[#24160C]">
      {/* === Thiết kế Lời Ngỏ chuẩn 100% theo bản gốc (WebP Retina 167KB, tối ưu tải nhanh) === */}
      <img
        src={introOriginal}
        alt="Lời ngỏ - Xile Spa"
        className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
        loading="eager"
      />

      {/* === BÓNG GÁY SÁCH (Book Spine Crease Shadow) - Nằm bên PHẢI vì đây là trang bên TRÁI === */}
      <div
        className="absolute top-0 bottom-0 right-0 w-8 md:w-12 pointer-events-none z-30"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.08) 45%, transparent 100%)",
        }}
      />

      {/* === BÓNG VIỀN MẶT NGOÀI TRANG SÁCH (Outer Edge Shadow - Trái) === */}
      <div
        className="absolute top-0 bottom-0 left-0 w-3 pointer-events-none z-30"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 100%)",
        }}
      />

      {/* === Hỗ trợ SEO & Accessibility (Screen readers) === */}
      <div className="sr-only">
        <h2>LỜI NGỎ</h2>
        <p>Có những ngày, ta chỉ muốn dừng lại một chút</p>
        <p>Dừng để thở</p>
        <p>Dừng để lắng nghe cơ thể</p>
        <p>Dừng để nhớ rằng mình cũng xứng đáng được chăm sóc.</p>
        <p>Ở đây, chúng tôi mong muốn giúp bạn tìm lại cảm giác nhẹ nhàng trong từng chuyển động và sự bình yên sau mỗi nhịp thở.</p>
        <p>Với 3 chương 3 hành trình : “Mái tóc, Cơ thể và Làn da” Xile rất hân hạnh đồng hành cùng bạn trong hành trình đánh thức năng lượng sống vì Xile tin rằng vẻ đẹp thật sự bắt đầu từ sự cân bằng bên trong Thân - Tâm - Trí</p>
        <p>Chào mừng bạn đến với Xile - Nơi bạn được là chính mình</p>
      </div>
    </div>
  );
};
