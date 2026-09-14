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
  VisualPage,
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
          transform: usePortrait
            ? "translateX(0)"
            : isCoverCentered
            ? `translateX(-${width / 2}px)`
            : isBackCoverCentered
            ? `translateX(${width / 2}px)`
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
              // Trang bìa trước
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
