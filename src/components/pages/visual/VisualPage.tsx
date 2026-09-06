import React from 'react';

export interface VisualPageProps {
  imageSrc: string;
  alt: string;
  side: 'left' | 'right';
  srTitle?: string;
  srSubtitles?: string[];
  srParagraphs?: string[];
  srList?: string[];
  srNote?: string;
}

export const VisualPage: React.FC<VisualPageProps> = ({
  imageSrc,
  alt,
  side,
  srTitle,
  srSubtitles,
  srParagraphs,
  srList,
  srNote,
}) => {
  const isLeft = side === 'left';

  return (
    <div className="w-full h-full relative overflow-hidden select-none bg-[#F7EFE1]">
      {/* Thiết kế ảnh chuẩn gốc tối ưu Retina WebP */}
      <img
        src={imageSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
        loading="eager"
      />

      {/* Bóng gáy sách (Book Spine Crease Shadow):
          - Trang TRÁI: Gáy sách nằm ở mép PHẢI (bóng tối dần về mép phải nối sang trang đối diện)
          - Trang PHẢI: Gáy sách nằm ở mép TRÁI (bóng tối dần về mép trái)
      */}
      {isLeft ? (
        <div
          className="absolute top-0 bottom-0 right-0 w-8 md:w-12 pointer-events-none z-30"
          style={{
            background:
              'linear-gradient(to left, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.08) 45%, transparent 100%)',
          }}
        />
      ) : (
        <div
          className="absolute top-0 bottom-0 left-0 w-8 md:w-12 pointer-events-none z-30"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.06) 45%, transparent 100%)',
          }}
        />
      )}

      {/* Bóng viền ngoài trang sách (Outer Edge Shadow) */}
      {isLeft ? (
        <div
          className="absolute top-0 bottom-0 left-0 w-3 pointer-events-none z-30"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.12) 0%, transparent 100%)',
          }}
        />
      ) : (
        <div
          className="absolute top-0 bottom-0 right-0 w-3 pointer-events-none z-30"
          style={{
            background:
              'linear-gradient(to left, rgba(0,0,0,0.12) 0%, transparent 100%)',
          }}
        />
      )}

      {/* Hỗ trợ SEO & Accessibility (Screen readers) */}
      {(srTitle || srParagraphs || srList || srNote) && (
        <div className="sr-only">
          {srTitle && <h2>{srTitle}</h2>}
          {srSubtitles?.map((sub, i) => (
            <h3 key={i}>{sub}</h3>
          ))}
          {srParagraphs?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {srList && srList.length > 0 && (
            <ul>
              {srList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {srNote && <p>Lời nhắn: {srNote}</p>}
        </div>
      )}
    </div>
  );
};
