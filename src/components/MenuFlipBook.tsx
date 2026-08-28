import React from 'react';
// @ts-ignore - react-pageflip không có types chính thức hoàn chỉnh
import HTMLFlipBook from 'react-pageflip';
import { useBookDimensions } from '../hooks/useBookDimensions';
import { PageWrapper } from './pages/PageWrapper';
import { CoverPage } from './pages/CoverPage';
import { ServicePage } from './pages/ServicePage';
import { IntroPage } from './pages/IntroPage';
import { menuData } from '../data/menuData';

export const MenuFlipBook: React.FC = () => {
  const { width, height, usePortrait, showCover } = useBookDimensions();

  // Ép kiểu để vượt qua lỗi thiếu required props từ type definition lỏng lẻo của thư viện
  const FlipBook = HTMLFlipBook as any;

  return (
    <div className="flex justify-center items-center w-full h-full p-4">
      <FlipBook
        width={width}
        height={height}
        size="fixed"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={showCover}
        mobileScrollSupport={true}
        usePortrait={usePortrait}
        className="book-shadow"
        style={{ margin: '0 auto' }}
      >
        {menuData.map((page, index) => {
          // Trang bìa
          if (page.type === 'cover') {
            return (
              <PageWrapper key={page.id} isCover={true}>
                <CoverPage />
              </PageWrapper>
            );
          }

          // Trang bìa sau
          if (page.type === 'back-cover') {
            return (
              <PageWrapper key={page.id} isCover={true}>
                <div className="w-full h-full bg-zen-charcoal flex flex-col items-center justify-center p-8">
                  <p className="font-script text-3xl text-zen-gold">Hẹn gặp lại</p>
                  <p className="font-sans text-xs mt-4 text-zen-stone uppercase">Xile Spa</p>
                </div>
              </PageWrapper>
            );
          }

          // Các trang ruột
          return (
            <PageWrapper key={page.id} number={index + 1}>
              {page.type === 'service' && page.serviceItem ? (
                <ServicePage service={page.serviceItem} />
              ) : page.type === 'intro' ? (
                <IntroPage />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-zen-cream">
                  <p className="font-serif text-zen-charcoal/50 text-xl">
                    {page.type === 'category-cover' && page.category?.title}
                    {page.type === 'combo' && 'Bảng giá Combo'}
                  </p>
                </div>
              )}
            </PageWrapper>
          );

        })}
      </FlipBook>
    </div>
  );
};
