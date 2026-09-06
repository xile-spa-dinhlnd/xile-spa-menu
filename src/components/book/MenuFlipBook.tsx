import React from "react";
// @ts-ignore - react-pageflip không có types chính thức hoàn chỉnh
import HTMLFlipBook from "react-pageflip";
import { useBookDimensions } from "../../hooks/useBookDimensions";
import { useFlipBook } from "../../hooks/useFlipBook";
import { FlipBookDock } from "../dock";
import { PageWrapper } from "./PageWrapper";
import { BookHint } from "./BookHint";
import {
  CoverPage,
  IntroPage,
  CategoryCoverPage,
  ServicePage,
  ServiceListPage,
  BackCoverPage,
} from "../pages";
import { menuData } from "../../data";

export const MenuFlipBook: React.FC = () => {
  const { width, height, usePortrait, showCover } = useBookDimensions();
  const {
    bookRef,
    currentPage,
    isFlipping,
    isCoverCentered,
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

  return (
    <>
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
        className="flex justify-center items-center w-full h-full p-4 transition-transform duration-700 ease-out relative"
        style={{
          transform: isCoverCentered
            ? `translateX(-${usePortrait ? 0 : width / 2}px)`
            : "translateX(0)",
        }}
      >
        <div
          className="relative"
          style={{
            width: usePortrait ? width : width * 2,
            height,
            filter:
              "drop-shadow(0 25px 50px rgba(0,0,0,0.65)) drop-shadow(0 8px 20px rgba(0,0,0,0.45)) drop-shadow(0 2px 5px rgba(0,0,0,0.3))",
          }}
          onPointerDown={onBookPointerDown}
        >
          <HTMLFlipBook
            ref={bookRef}
            onFlip={onPageChange}
            onChangeState={onChangeState}
            width={width}
            height={height}
            size="fixed"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.35}
            drawShadow={true}
            showCover={showCover}
            mobileScrollSupport={true}
            usePortrait={usePortrait}
            className=""
            style={{ margin: "0 auto" }}
          >
            {menuData.map((page, index) => {
              // Trang bìa
              if (page.type === "cover") {
                return (
                  <PageWrapper key={page.id} isCover={true}>
                    <CoverPage />
                  </PageWrapper>
                );
              }

              // Trang bìa sau
              if (page.type === "back-cover") {
                return (
                  <PageWrapper key={page.id} isCover={true}>
                    <BackCoverPage />
                  </PageWrapper>
                );
              }

              // Các trang ruột
              return (
                <PageWrapper
                  key={page.id}
                  number={index + 1}
                  hideNumber={page.type === "intro" || page.type === "category-cover"}
                >
                  {page.type === "service" && page.serviceItem ? (
                    <ServicePage service={page.serviceItem} />
                  ) : page.type === "intro" ? (
                    <IntroPage />
                  ) : page.type === "category-cover" && page.category ? (
                    <CategoryCoverPage category={page.category} />
                  ) : page.type === "service-list" && page.category ? (
                    <ServiceListPage category={page.category} />
                  ) : page.type === "combo" ? (
                    <CategoryCoverPage title="Bảng giá Combo" />
                  ) : null}
                </PageWrapper>
              );
            })}
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
        </div>
      </div>
    </>
  );
};
