import React from "react";

export const CoverPage: React.FC = () => {
  return (
    <div
      className="w-full h-full text-zen-charcoal flex flex-col items-center justify-center text-center relative overflow-hidden bg-paper-cover"
    >
      {/* Rãnh gáy sách (Spine Crease) - Làm mờ nhạt đi rất nhiều so với bản cũ */}
      <div className="absolute top-0 bottom-0 left-[1%] w-[3%] pointer-events-none z-20" style={{
        background: "linear-gradient(to right, rgba(0,0,0,0.01) 0%, rgba(92,61,30,0.05) 30%, rgba(92,61,30,0.08) 50%, rgba(255,255,255,0.05) 70%, transparent 100%)",
        borderLeft: "1px solid rgba(0,0,0,0.03)"
      }}></div>

      {/* === Bóng đổ viền trái === */}
      <div
        className="absolute top-0 bottom-0 left-0 pointer-events-none z-30"
        style={{
          width: "30px",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 50%, transparent 100%)",
        }}
      />

      {/* === Lớp mờ sương (atmospheric haze) === */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 35% 40%, rgba(255,245,220,0.45) 0%, transparent 65%)",
        }}
      />

      {/* === Lá liễu góc trái (SVG vẽ tay) === */}
      <div
        className="absolute top-0 left-0 pointer-events-none leaf-sway"
        style={{ width: "30%", height: "55%", transformOrigin: "top left" }}
      >
        <svg
          viewBox="0 0 200 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Cành chính */}
          <path
            d="M80 0 Q85 80 60 160 Q40 230 50 290"
            stroke="#5A7040"
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M80 0 Q100 60 120 130 Q130 180 110 250"
            stroke="#5A7040"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />

          {/* Lá trái */}
          <ellipse
            cx="45"
            cy="55"
            rx="22"
            ry="8"
            fill="#6B7A40"
            opacity="0.75"
            transform="rotate(-35 45 55)"
          />
          <ellipse
            cx="30"
            cy="90"
            rx="20"
            ry="7"
            fill="#5A6E35"
            opacity="0.7"
            transform="rotate(-45 30 90)"
          />
          <ellipse
            cx="42"
            cy="125"
            rx="18"
            ry="6"
            fill="#6B7A40"
            opacity="0.65"
            transform="rotate(-30 42 125)"
          />
          <ellipse
            cx="28"
            cy="158"
            rx="16"
            ry="6"
            fill="#5A6E35"
            opacity="0.6"
            transform="rotate(-40 28 158)"
          />
          <ellipse
            cx="38"
            cy="195"
            rx="14"
            ry="5"
            fill="#6B7A40"
            opacity="0.55"
            transform="rotate(-25 38 195)"
          />

          {/* Lá phải */}
          <ellipse
            cx="112"
            cy="75"
            rx="20"
            ry="7"
            fill="#7A8A48"
            opacity="0.7"
            transform="rotate(25 112 75)"
          />
          <ellipse
            cx="128"
            cy="108"
            rx="18"
            ry="7"
            fill="#6B7A40"
            opacity="0.65"
            transform="rotate(30 128 108)"
          />
          <ellipse
            cx="118"
            cy="145"
            rx="16"
            ry="6"
            fill="#5A6E35"
            opacity="0.6"
            transform="rotate(20 118 145)"
          />
          <ellipse
            cx="122"
            cy="178"
            rx="14"
            ry="5"
            fill="#7A8A48"
            opacity="0.55"
            transform="rotate(35 122 178)"
          />

          {/* Gân lá */}
          <path
            d="M45 55 Q55 55 67 55"
            stroke="#4A5E2A"
            strokeWidth="0.5"
            opacity="0.5"
          />
          <path
            d="M30 90 Q40 92 52 88"
            stroke="#4A5E2A"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* === Lá phải góc trên (nhỏ hơn, bổ trợ) === */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "18%",
          height: "30%",
          opacity: 0.5,
          transform: "scaleX(-1)",
        }}
      >
        <svg
          viewBox="0 0 120 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M50 0 Q55 50 40 110"
            stroke="#5A7040"
            strokeWidth="1.2"
            fill="none"
            opacity="0.6"
          />
          <ellipse
            cx="28"
            cy="40"
            rx="16"
            ry="6"
            fill="#6B7A40"
            opacity="0.6"
            transform="rotate(-35 28 40)"
          />
          <ellipse
            cx="20"
            cy="70"
            rx="14"
            ry="5"
            fill="#5A6E35"
            opacity="0.55"
            transform="rotate(-42 20 70)"
          />
          <ellipse
            cx="30"
            cy="100"
            rx="12"
            ry="4.5"
            fill="#6B7A40"
            opacity="0.5"
            transform="rotate(-28 30 100)"
          />
        </svg>
      </div>

      {/* === Giọt nước + gợn sóng (giọt nước nằm trong tâm sóng) === */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "82%",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: "60px",
          height: "60px",
        }}
      >
        {/* Các vòng sóng nước */}
        <div className="absolute inset-0">
          <div
            className="ripple-ring"
            style={{ width: "100%", height: "100%", top: "0", left: "0" }}
          />
          <div
            className="ripple-ring"
            style={{ width: "100%", height: "100%", top: "0", left: "0" }}
          />
          <div
            className="ripple-ring"
            style={{ width: "100%", height: "100%", top: "0", left: "0" }}
          />
          <div
            className="ripple-ring"
            style={{ width: "100%", height: "100%", top: "0", left: "0" }}
          />
        </div>

        {/* Giọt nước */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width="18"
            height="28"
            viewBox="0 0 24 36"
            style={{
              filter: "drop-shadow(0 2px 6px rgba(140,100,40,0.4))",
              marginTop: "-4px", // Nhích nhẹ lên để phần bầu dưới của giọt nước nằm ngay tâm sóng
            }}
          >
            <path
              d="M12 2 C12 2, 2 16, 2 22 C2 28.6 6.5 33 12 33 C17.5 33 22 28.6 22 22 C22 16 12 2 12 2Z"
              fill="rgba(160,120,55,0.55)"
              stroke="rgba(140,100,40,0.65)"
              strokeWidth="0.5"
            />
            <ellipse
              cx="9"
              cy="16"
              rx="2.5"
              ry="4"
              fill="rgba(255,240,200,0.55)"
              transform="rotate(-20 9 16)"
            />
          </svg>
        </div>
      </div>
      {/* === Nội dung chính === */}
      <div
        className="relative z-10 flex flex-col items-center"
      >
        {/* Tên thương hiệu */}
        <h1
          className="font-display uppercase"
          style={{
            fontSize: "clamp(2.8rem, 7.5vw, 5.5rem)",
            letterSpacing: "0.35em",
            color: "#3D2B1F",
            textShadow: "0 2px 8px rgba(100,60,20,0.25)",
            lineHeight: 1,
            marginBottom: "0.5em",
          }}
        >
          XILE
        </h1>

        {/* Divider trang trí với icon lá */}
        <div
          className="flex items-center gap-2 my-1 md:my-2"
          style={{ width: "clamp(100px, 20%, 180px)" }}
        >
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(140,90,30,0.6))",
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
                "linear-gradient(to left, transparent, rgba(140,90,30,0.6))",
            }}
          />
        </div>

        {/* Tagline chính (script) */}
        <p
          className="font-script"
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1.5rem)",
            color: "#3D2B1F",
            opacity: 0.85,
            lineHeight: 1.4,
          }}
        >
          Một giọt nước cũng biết
        </p>
        <p
          className="font-script"
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1.5rem)",
            color: "#3D2B1F",
            opacity: 0.85,
            lineHeight: 1.4,
            marginBottom: "0.5em",
          }}
        >
          tìm về nơi bình yên
        </p>

        {/* Sub-title */}
        <p
          className="font-sans uppercase"
          style={{
            fontSize: "clamp(0.5rem, 1.1vw, 0.7rem)",
            letterSpacing: "0.22em",
            color: "rgba(80,50,20,0.7)",
          }}
        >
          Menu Dịch Vụ
        </p>
      </div>

      {/* === Thông tin liên hệ ở dưới === */}
      <div
        className="absolute bottom-4 right-5 z-10 text-right"
        style={{
          color: "rgba(40,25,10,0.85)", // Tối hơn và đặc hơn để dễ đọc
          fontSize: "clamp(0.5rem, 0.9vw, 0.65rem)",
          fontWeight: 500,
        }}
      >
        <div className="flex items-center justify-end gap-1.5 mb-1 font-sans">
          <svg
            width="9"
            height="9"
            viewBox="0 0 10 14"
            fill="rgba(40,25,10,0.85)"
          >
            <path d="M5 0C2.2 0 0 2.2 0 5c0 3.5 5 9 5 9s5-5.5 5-9c0-2.8-2.2-5-5-5zm0 7.5C3.6 7.5 2.5 6.4 2.5 5S3.6 2.5 5 2.5 7.5 3.6 7.5 5 6.4 7.5 5 7.5z" />
          </svg>
          <span className="font-sans tracking-wide">67 Hưng Phú, Quận 8</span>
        </div>
        <div className="flex items-center justify-end gap-1.5 font-sans">
          <svg
            width="9"
            height="9"
            viewBox="0 0 24 24"
            fill="rgba(40,25,10,0.85)"
          >
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.12-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
          <span className="font-sans tracking-wide">
            0909 722 408 — 0908 899 250
          </span>
        </div>
      </div>

      {/* Bỏ Bóng đổ gáy sách theo yêu cầu */}

      {/* Vignette nhẹ viền ngoài */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(100,60,10,0.2) 100%)",
        }}
      />
    </div>
  );
};
