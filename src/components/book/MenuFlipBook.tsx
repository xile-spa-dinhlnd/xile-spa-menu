import React, { useEffect, useMemo } from "react";
// @ts-ignore - react-pageflip không có types chính thức hoàn chỉnh
import HTMLFlipBook from "react-pageflip";
import { useBookDimensions } from "../../hooks/useBookDimensions";
import { useFlipBook } from "../../hooks/useFlipBook";
import { FlipBookDock } from "../dock";
import { PageWrapper } from "./PageWrapper";
import { BookHint } from "./BookHint";
import { OrientationNotice } from "./OrientationNotice";
import {
  CoverPage,
  IntroPage,
  CategoryCoverPage,
  ServicePage,
  ServiceListPage,
  VisualPage,
  BackCoverPage,
} from "../pages";
import { menuData } from "../../data";

export const MenuFlipBook: React.FC = () => {
  const {
    width,
    height,
    usePortrait,
    showCover,
    isPortraitOrientation,
    coverShift,
  } = useBookDimensions();
  const {
    bookRef,
    currentPage,
    isFlipping,
    isCoverCentered,
    isBackCoverCentered,
    showPrev,
    showNext,
    progressPercent,
    totalPages,
    onPageChange,
    onChangeState,
    nextButtonClick,
    prevButtonClick,
    handleProgressClick,
    onBookPointerDown,
  } = useFlipBook(usePortrait);

  // Dọn dẹp an toàn instance của PageFlip khi unmount hoặc khi thay đổi kích thước/chế độ
  // để loại bỏ zombie event listener trên window (tránh lỗi "Invalid width or height")
  useEffect(() => {
    const currentRef = bookRef.current;
    return () => {
      try {
        const api = currentRef?.pageFlip?.();
        if (
          api &&
          typeof (api as unknown as { destroy?: () => void }).destroy ===
            "function"
        ) {
          (api as unknown as { destroy: () => void }).destroy();
        }
      } catch {
        // Bỏ qua nếu đã được dọn dẹp trước đó
      }
    };
  }, [width, height, usePortrait, bookRef]);

  // Tính toán khoảng trượt căn giữa an toàn (luôn kẹp trong lề an toàn để không bị tràn màn hình)
  const containerTransform = usePortrait
    ? "translateX(0)"
    : isCoverCentered
      ? `translateX(-${coverShift}px)`
      : isBackCoverCentered
        ? `translateX(${coverShift}px)`
        : "translateX(0)";

  // Memoize danh sách trang để giữ nguyên DOM reference khi MenuFlipBook re-render
  // Trong chế độ portrait (mobile), các trang bìa chuyển sang density "soft" để hiệu ứng cuộn trang mượt mà không chớp giật
  const renderedPages = useMemo(() => {
    return menuData.map((page, index) => {
      // Trang bìa trước
      if (page.type === "cover") {
        return (
          <PageWrapper
            key={page.id}
            isCover={true}
            density={usePortrait ? "soft" : "hard"}
          >
            <CoverPage />
          </PageWrapper>
        );
      }

      // Trang bìa sau
      if (page.type === "back-cover") {
        return (
          <PageWrapper
            key={page.id}
            isCover={true}
            density={usePortrait ? "soft" : "hard"}
          >
            <BackCoverPage />
          </PageWrapper>
        );
      }

      // Trang Lời Ngỏ (Trang 2)
      if (page.type === "intro") {
        return (
          <PageWrapper key={page.id} number={index + 1} hideNumber={true}>
            <IntroPage />
          </PageWrapper>
        );
      }

      // Các trang hình ảnh chất lượng cao chuẩn theo tờ rơi Canva gốc (Trang 3 - 19)
      if (page.imageUrl) {
        const altText =
          page.title ||
          page.serviceItem?.name ||
          page.category?.title ||
          page.srContent?.title ||
          `Trang ${index + 1}`;

        return (
          <PageWrapper key={page.id} number={index + 1} hideNumber={true}>
            <VisualPage
              imageSrc={page.imageUrl}
              alt={altText}
              side={page.side || (index % 2 === 1 ? "left" : "right")}
              srTitle={altText}
              srSubtitles={
                page.category?.subtitle
                  ? [page.category.subtitle]
                  : page.srContent?.subtitles
              }
              srParagraphs={
                page.category?.philosophy
                  ? page.category.philosophy.split("\n")
                  : page.serviceItem?.description
                    ? [page.serviceItem.description]
                    : page.srContent?.paragraphs
              }
              srList={
                page.serviceItem?.includes?.map((inc) => inc.label) ||
                page.category?.items?.map((it) => `${it.name}: ${it.price}đ`)
              }
              srNote={page.serviceItem?.note || page.srContent?.notes}
            />
          </PageWrapper>
        );
      }

      // Fallback cho các loại trang khác nếu không có imageUrl
      return (
        <PageWrapper
          key={page.id}
          number={index + 1}
          hideNumber={page.type === "category-cover"}
        >
          {page.type === "service" && page.serviceItem ? (
            <ServicePage service={page.serviceItem} />
          ) : page.type === "category-cover" && page.category ? (
            <CategoryCoverPage category={page.category} />
          ) : page.type === "service-list" && page.category ? (
            <ServiceListPage category={page.category} />
          ) : null}
        </PageWrapper>
      );
    });
  }, [usePortrait]);

  return (
    <>
      {/* Thông báo gợi ý xoay ngang màn hình khi ở hướng dọc */}
      <OrientationNotice show={isPortraitOrientation} />

      {/* UX Hint khi ở trang bìa */}
      <BookHint show={currentPage === 0 && !isFlipping} />

      {/* Thanh điều khiển nổi tinh tế ở đáy màn hình (Bottom Dock với Progress Bar) */}
      <FlipBookDock
        currentPage={currentPage}
        totalPages={totalPages}
        usePortrait={usePortrait}
        showPrev={showPrev}
        showNext={showNext}
        progressPercent={progressPercent}
        onPrevClick={prevButtonClick}
        onNextClick={nextButtonClick}
        onProgressClick={handleProgressClick}
      />

      <div
        className={`flex justify-center items-center w-full flex-1 relative overflow-visible px-2 transition-all duration-300 ${
          usePortrait ? "pt-8 pb-16" : "pt-2 pb-14 sm:pb-16"
        }`}
      >
        <div
          className={`relative transition-transform duration-700 ease-out ${
            currentPage > 0 ? "book-inner-active" : ""
          }`}
          style={{
            width: usePortrait ? width : width * 2,
            height,
            transform: containerTransform,
          }}
          onPointerDown={onBookPointerDown}
        >
          {/* Lớp bóng đổ chiều sâu tăng tốc phần cứng (GPU-accelerated ambient shadow) */}
          <div
            className="absolute inset-0 pointer-events-none rounded-md"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0,0,0,0.7), 0 12px 24px -8px rgba(0,0,0,0.5), 0 4px 10px rgba(0,0,0,0.35)",
              transform: "translateZ(0)",
            }}
          />

          <HTMLFlipBook
            key={`${usePortrait ? "portrait" : "landscape"}-${width}x${height}`}
            ref={bookRef}
            onFlip={onPageChange}
            onChangeState={onChangeState}
            width={width}
            height={height}
            size="fixed"
            minWidth={100}
            maxWidth={1600}
            minHeight={80}
            maxHeight={1600}
            maxShadowOpacity={0.35}
            drawShadow={true}
            showCover={showCover}
            mobileScrollSupport={true}
            usePortrait={usePortrait}
            className=""
            style={{ margin: "0 auto" }}
          >
            {renderedPages}
          </HTMLFlipBook>

          {/* Lớp overlay vô hình chặn click vào khoảng trống bên trái trang bìa */}
          {currentPage === 0 && !usePortrait && (
            <div
              className="absolute top-0 left-0 w-1/2 h-full z-100 cursor-default"
              onPointerDown={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {/* Lớp overlay vô hình chặn click vào khoảng trống bên phải trang bìa sau */}
          {isBackCoverCentered && !usePortrait && (
            <div
              className="absolute top-0 right-0 w-1/2 h-full z-100 cursor-default"
              onPointerDown={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      </div>
    </>
  );
};
