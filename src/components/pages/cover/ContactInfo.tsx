import React from 'react';

export const ContactInfo: React.FC = () => {
  return (
    <div
      className="absolute bottom-4 right-5 z-10 text-right"
      style={{
        color: 'rgba(40,25,10,0.85)', // Tối hơn và đặc hơn để dễ đọc
        fontSize: 'clamp(0.5rem, 0.9vw, 0.65rem)',
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
  );
};
