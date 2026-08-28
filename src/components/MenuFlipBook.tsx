import React, { useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState(0);
  const currentPageRef = React.useRef(0);
  const [isCoverCentered, setIsCoverCentered] = useState(true);

  // Đồng bộ trạng thái căn giữa khi xoay màn hình (portrait/landscape)
  React.useEffect(() => {
    if (currentPage === 0) {
      setIsCoverCentered(!usePortrait);
    } else {
      setIsCoverCentered(false);
    }
  }, [usePortrait, currentPage]);

  // Ép kiểu để vượt qua lỗi thiếu required props từ type definition lỏng lẻo của thư viện
  const FlipBook = HTMLFlipBook as any;

  // Xử lý sự kiện khi TRANG ĐÃ LẬT XONG
  const onPageChange = (e: { data: number }) => {
    setCurrentPage(e.data);
    currentPageRef.current = e.data; // Cập nhật ref đồng bộ để tránh stale closure
  };

  // Xử lý sự kiện khi TRẠNG THÁI CUỐN SÁCH THAY ĐỔI (đang lật, đã dừng...)
  const onChangeState = (e: { data: string }) => {
    const state = e.data; // 'read', 'flipping', 'fold_corner', 'user_fold'
    
    if (state === 'read') {
      // Khi sách dừng hẳn, đồng bộ lại vị trí theo trang hiện tại (dùng ref để luôn lấy đúng giá trị mới nhất)
      setIsCoverCentered(!usePortrait && currentPageRef.current === 0);
    } else if ((state === 'flipping' || state === 'user_fold') && currentPageRef.current === 0) {
      // Bắt đầu lật từ trang bìa -> Trượt ngay lập tức sang phải để nhường chỗ cho trang bên trái
      setIsCoverCentered(false);
    }
  };

  return (
    <div 
      className="flex justify-center items-center w-full h-full p-4 transition-transform duration-700 ease-out"
      style={{
        transform: isCoverCentered ? 'translateX(-25%)' : 'translateX(0)'
      }}
    >
      <FlipBook
        onFlip={onPageChange}
        onChangeState={onChangeState}
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
