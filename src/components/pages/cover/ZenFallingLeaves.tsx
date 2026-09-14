import React from 'react';

interface LeafItem {
  id: number;
  className: string;
  top: string;
  left: string;
  width: number;
  height: number;
  color: string;
  spineColor: string;
}

const FALLING_LEAVES: LeafItem[] = [
  {
    id: 1,
    className: 'leaf-fall-1',
    top: '8%',
    left: '14%',
    width: 26,
    height: 11,
    color: '#4F652C',
    spineColor: '#8CA654',
  },
  {
    id: 2,
    className: 'leaf-fall-2',
    top: '14%',
    left: '22%',
    width: 24,
    height: 10,
    color: '#5C7435',
    spineColor: '#9BB462',
  },
  {
    id: 3,
    className: 'leaf-fall-3',
    top: '6%',
    left: '18%',
    width: 28,
    height: 12,
    color: '#435624',
    spineColor: '#7D9649',
  },
  {
    id: 4,
    className: 'leaf-fall-4',
    top: '18%',
    left: '28%',
    width: 22,
    height: 9,
    color: '#637D3A',
    spineColor: '#A4BC6B',
  },
  {
    id: 5,
    className: 'leaf-fall-5',
    top: '11%',
    left: '25%',
    width: 25,
    height: 11,
    color: '#50662D',
    spineColor: '#8EA856',
  },
];

export const ZenFallingLeaves: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-15">
      {/* === 5 CHIẾC LÁ LIỄU RƠI THIỀN TỊNH RÕ NÉT (Zen Falling Leaves) === */}
      {FALLING_LEAVES.map((leaf) => (
        <div
          key={leaf.id}
          className={`absolute ${leaf.className} pointer-events-none`}
          style={{
            top: leaf.top,
            left: leaf.left,
            width: `${leaf.width}px`,
            height: `${leaf.height}px`,
            filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.55))',
          }}
        >
          <svg
            viewBox="0 0 28 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Thân lá liễu mềm mại */}
            <path
              d="M1 6 C6 0.8, 22 0.8, 27 6 C22 11.2, 6 11.2, 1 6 Z"
              fill={leaf.color}
            />
            {/* Gân lá sáng màu tăng độ tương phản */}
            <path
              d="M1 6 L27 6"
              stroke={leaf.spineColor}
              strokeWidth="0.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
