import React, { useState, useRef } from "react";
// @ts-ignore - react-pageflip không có types chính thức hoàn chỉnh
import HTMLFlipBook from "react-pageflip";
import * as LucideIcons from "lucide-react";
import { useBookDimensions } from "../hooks/useBookDimensions";
import { PageWrapper } from "./pages/PageWrapper";
import { CoverPage } from "./pages/CoverPage";
import { ServicePage } from "./pages/ServicePage";
import { IntroPage } from "./pages/IntroPage";
import { BackCoverPage } from "./pages/BackCoverPage";
import { CategoryCoverPage } from "./pages/CategoryCoverPage";
import { menuData } from "../data/menuData";

interface PageFlipAPI {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
  };
}

export const MenuFlipBook: React.FC = () => {
  const { width, height, usePortrait, showCover } = useBookDimensions();
  const [currentPage, setCurrentPage] = useState(0);
  const currentPageRef = useRef(0);
  const [isCoverCentered, setIsCoverCentered] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const bookRef = useRef<PageFlipAPI>(null);
  const swipeDirectionRef = useRef<"prev" | "next" | null>(null);

  // Đồng bộ trạng thái căn giữa khi xoay màn hình (portrait/landscape)
  React.useEffect(() => {
    if (currentPage === 0) {
      setIsCoverCentered(!usePortrait);
    } else {
      setIsCoverCentered(false);
    }
  }, [usePortrait, currentPage]);

  // Xử lý sự kiện khi TRANG ĐÃ LẬT XONG
  const onPageChange = React.useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
    currentPageRef.current = e.data; // Cập nhật ref đồng bộ để tránh stale closure
  }, []);

  // Xử lý sự kiện khi TRẠNG THÁI CUỐN SÁCH THAY ĐỔI (đang lật, đã dừng...)
  const onChangeState = React.useCallback((e: { data: string }) => {
    const state = e.data; // 'read', 'flipping', 'fold_corner', 'user_fold'

    // Cập nhật trạng thái lật để làm mờ nút điều hướng
    setIsFlipping(state !== "read");

    if (state === "read") {
      // Khi sách dừng hẳn, đồng bộ lại vị trí theo trang hiện tại (dùng ref để luôn lấy đúng giá trị mới nhất)
      setIsCoverCentered(!usePortrait && currentPageRef.current === 0);
    } else if (state === "flipping") {
      // Kiểm tra nếu đang ở trang bìa/trang 1 và hướng vuốt là lật ngược (prev) -> đang đóng sách
      if (currentPageRef.current <= 2 && swipeDirectionRef.current === "prev") {
        setIsCoverCentered(!usePortrait); // Trượt về giữa ngay khi hoạt ảnh đóng sách bắt đầu
      } else {
        setIsCoverCentered(false);
      }
    } else if (state === "user_fold") {
      if (currentPageRef.current === 0) {
        // Bắt đầu kéo lật (drag) từ trang bìa -> Trượt ngay lập tức sang phải để nhường chỗ
        setIsCoverCentered(false);
      }
    }
  }, [usePortrait]);

  const nextButtonClick = React.useCallback(() => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      swipeDirectionRef.current = "next";
      setIsCoverCentered(false);
      bookRef.current.pageFlip().flipNext();
    }
  }, []);

  const prevButtonClick = React.useCallback(() => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      swipeDirectionRef.current = "prev";
      if (currentPageRef.current <= 2) {
        setIsCoverCentered(!usePortrait); // Trượt về giữa ngay khi bấm nút đóng
      }
      bookRef.current.pageFlip().flipPrev();
    }
  }, [usePortrait]);

  // Xác định lúc nào cần hiện nút Next/Prev
  const showPrev = currentPage > 0 && !isFlipping;
  const showNext =
    currentPage < menuData.length - (usePortrait ? 1 : 2) && !isFlipping;

  return (
    <>
      {/* UX Hint CỐ ĐỊNH Ở NGOÀI CÙNG (không bị trượt theo sách) */}
      <div
        className={`fixed z-50 flex flex-col items-center transition-all duration-500 ${
          currentPage === 0 && !isFlipping
            ? "opacity-80 animate-pulse"
            : "opacity-0 pointer-events-none"
        } bottom-2 md:bottom-4 left-1/2 -translate-x-1/2`}
      >
        <LucideIcons.Hand className="w-5 h-5 md:w-6 md:h-6 text-zen-cream mb-1 md:mb-2" />
        <p className="font-sans text-[10px] md:text-xs text-zen-cream/80 tracking-widest uppercase drop-shadow-md text-center w-50">
          Chạm hoặc vuốt bìa để mở sách
        </p>
      </div>

      <div
        className="flex justify-center items-center w-full h-full p-4 transition-transform duration-700 ease-out relative"
        style={{
          transform: isCoverCentered
            ? `translateX(-${usePortrait ? 0 : width / 2}px)`
            : "translateX(0)",
        }}
      >
        {/* Nút Prev */}
        <button
          onClick={prevButtonClick}
          className={`fixed left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-zen-charcoal/80 text-zen-gold border border-zen-gold/40 hover:bg-black/50 hover:text-zen-gold hover:border-zen-gold/60 hover:scale-110 backdrop-blur-sm transition-all duration-300 shadow-lg ${
            showPrev ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <LucideIcons.ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Nút Next */}
        <button
          onClick={nextButtonClick}
          className={`fixed right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-zen-charcoal/80 text-zen-gold border border-zen-gold/40 hover:bg-black/50 hover:text-zen-gold hover:border-zen-gold/60 hover:scale-110 backdrop-blur-sm transition-all duration-300 shadow-lg ${
            showNext ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <LucideIcons.ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div
          className="relative"
          style={{
            width: usePortrait ? width : width * 2,
            height,
            filter:
              "drop-shadow(0 25px 50px rgba(0,0,0,0.65)) drop-shadow(0 8px 20px rgba(0,0,0,0.45)) drop-shadow(0 2px 5px rgba(0,0,0,0.3))",
          }}
          onPointerDown={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            // Nếu click/chạm vào nửa bên trái của sách -> Đang vuốt lật ngược
            if (clickX < rect.width / 2) {
              swipeDirectionRef.current = "prev";
            } else {
              swipeDirectionRef.current = "next";
            }
          }}
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
                <PageWrapper key={page.id} number={index + 1}>
                  {page.type === "service" && page.serviceItem ? (
                    <ServicePage service={page.serviceItem} />
                  ) : page.type === "intro" ? (
                    <IntroPage />
                  ) : page.type === "category-cover" && page.category ? (
                    <CategoryCoverPage title={page.category.title} />
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
