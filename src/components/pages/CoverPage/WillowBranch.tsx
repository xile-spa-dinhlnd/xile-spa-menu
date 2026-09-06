import React from 'react';

export const WillowBranch: React.FC = () => {
  return (
    <>
      {/* === Lá liễu góc trái (SVG vẽ tay) === */}
      <div
        className="absolute top-0 left-0 pointer-events-none leaf-sway"
        style={{ width: '30%', height: '55%', transformOrigin: 'top left' }}
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
          width: '18%',
          height: '30%',
          opacity: 0.5,
          transform: 'scaleX(-1)',
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
    </>
  );
};
