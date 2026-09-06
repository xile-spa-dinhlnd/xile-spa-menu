import React from 'react';

export const WaterDrop: React.FC = () => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: '82%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        width: '60px',
        height: '60px',
      }}
    >
      {/* Các vòng sóng nước */}
      <div className="absolute inset-0">
        <div
          className="ripple-ring"
          style={{ width: '100%', height: '100%', top: '0', left: '0' }}
        />
        <div
          className="ripple-ring"
          style={{ width: '100%', height: '100%', top: '0', left: '0' }}
        />
        <div
          className="ripple-ring"
          style={{ width: '100%', height: '100%', top: '0', left: '0' }}
        />
        <div
          className="ripple-ring"
          style={{ width: '100%', height: '100%', top: '0', left: '0' }}
        />
      </div>

      {/* Giọt nước */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="18"
          height="28"
          viewBox="0 0 24 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 2px 6px rgba(140,100,40,0.4))',
            marginTop: '-4px', // Nhích nhẹ lên để phần bầu dưới của giọt nước nằm ngay tâm sóng
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
  );
};
