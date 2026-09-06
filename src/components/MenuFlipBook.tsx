import React, { useState, useRef } from "react";
// @ts-ignore - react-pageflip không có types chính thức hoàn chỉnh
import HTMLFlipBook from "react-pageflip";
import { Hand, ChevronLeft, ChevronRight } from "lucide-react";
import { useBookDimensions } from "../hooks/useBookDimensions";
import { PageWrapper } from "./pages/PageWrapper";
import { CoverPage } from "./pages/CoverPage";
import { ServicePage } from "./pages/ServicePage";
import { IntroPage } from "./pages/IntroPage";
import { BackCoverPage } from "./pages/BackCoverPage";
import { CategoryCoverPage } from "./pages/CategoryCoverPage";
import { ServiceListPage } from "./pages/ServiceListPage";
import { menuData } from "../data/menuData";

interface PageFlipAPI {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    turnToPage?: (page: number) => void;
    flip?: (page: number) => void;
    getCurrentPageIndex?: () => number;
  };
}

export const MenuFlipBook: React.FC = () => {
  const { width, height, usePortrait, showCover } = useBookDimensions();
  const [currentPage, setCurrentPage] = useState(0);
  const currentPageRef = useRef(0);
  const targetPageRef = useRef(0); // Lưu trang đích dự kiến để hỗ trợ bấm lật nhanh liên tiếp
  const isFromButtonRef = useRef(false); // Đánh dấu khi lật bằng nút/thanh scrubber để tránh double trigger
  const [isDraggingCover, setIsDraggingCover] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const bookRef = useRef<PageFlipAPI>(null);
  const swipeDirectionRef = useRef<"prev" | "next" | null>(null);

  // Tính toán trực tiếp trạng thái căn giữa trang bìa (Landscape mode)
  const isCoverCentered = currentPage === 0 && !usePortrait && !isDraggingCover;

  // Xử lý sự kiện khi TRANG ĐÃ LẬT XONG
  const onPageChange = React.useCallback((e: { data: number }) => {
    const direction = swipeDirectionRef.current;
    const target = targetPageRef.current;

    // Khi người dùng bấm nút lật nhanh liên tiếp:
    // Nếu trang vừa hoàn thành (e.data) chưa tới trang đích (target) thì không giật lùi UI về trang cũ
    if (direction === "next" && e.data < target) {
      return;
    }
    if (direction === "prev" && e.data > target) {
      return;
    }

    targetPageRef.current = e.data;
    currentPageRef.current = e.data; // Cập nhật ref đồng bộ để tránh stale closure
    setCurrentPage(e.data);
  }, []);

  // Xử lý sự kiện khi TRẠNG THÁI CUỐN SÁCH THAY ĐỔI (đang lật, đã dừng...)
  const onChangeState = React.useCallback((e: { data: string }) => {
    const state = e.data; // 'read', 'flipping', 'fold_corner', 'user_fold'

    // Cập nhật trạng thái lật để làm mờ nút điều hướng
    setIsFlipping(state !== "read");

    if (state === "read") {
      setIsDraggingCover(false);
      isFromButtonRef.current = false;
      // Đồng bộ lại với vị trí chính xác từ thư viện
      const api = bookRef.current?.pageFlip();
      const actualPage =
        typeof api?.getCurrentPageIndex === "function"
          ? api.getCurrentPageIndex()
          : currentPageRef.current;

      targetPageRef.current = actualPage;
      currentPageRef.current = actualPage;
      setCurrentPage(actualPage);
    } else if (state === "flipping") {
      setIsDraggingCover(false);
      // Nếu thao tác lật bắt nguồn từ việc click/kéo trực tiếp trên quyển sách (không qua nút bấm)
      if (!isFromButtonRef.current) {
        const current = targetPageRef.current;
        if (swipeDirectionRef.current === "next") {
          const nextPage = usePortrait
            ? Math.min(menuData.length - 1, current + 1)
            : current === 0
            ? 1
            : Math.min(menuData.length - 1, current + 2);
          targetPageRef.current = nextPage;
          currentPageRef.current = nextPage;
          setCurrentPage(nextPage);
        } else if (swipeDirectionRef.current === "prev") {
          const prevPage = usePortrait
            ? Math.max(0, current - 1)
            : current <= 2
            ? 0
            : Math.max(0, current - 2);
          targetPageRef.current = prevPage;
          currentPageRef.current = prevPage;
          setCurrentPage(prevPage);
        }
      }
      isFromButtonRef.current = false; // Reset sau khi nhận diện lượt lật này
    } else if (state === "user_fold") {
      if (currentPageRef.current === 0) {
        // Bắt đầu kéo lật (drag) từ trang bìa -> Trượt ngay lập tức sang phải để nhường chỗ
        setIsDraggingCover(true);
      }
    }
  }, [usePortrait]);

  const nextButtonClick = React.useCallback(() => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      isFromButtonRef.current = true; // Đánh dấu thao tác từ nút bấm
      swipeDirectionRef.current = "next";

      // Tính trang đích tiếp theo dựa trên targetPageRef hiện tại để hỗ trợ bấm nhanh liên tiếp
      const current = targetPageRef.current;
      if (current >= menuData.length - (usePortrait ? 1 : 2)) return;

      const nextPage = usePortrait
        ? Math.min(menuData.length - 1, current + 1)
        : current === 0
        ? 1
        : Math.min(menuData.length - 1, current + 2);

      targetPageRef.current = nextPage;
      currentPageRef.current = nextPage;
      setCurrentPage(nextPage);

      bookRef.current.pageFlip().flipNext();
    }
  }, [usePortrait]);

  const prevButtonClick = React.useCallback(() => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      isFromButtonRef.current = true; // Đánh dấu thao tác từ nút bấm
      swipeDirectionRef.current = "prev";

      const current = targetPageRef.current;
      if (current <= 0) return;

      const prevPage = usePortrait
        ? Math.max(0, current - 1)
        : current <= 2
        ? 0
        : Math.max(0, current - 2);

      targetPageRef.current = prevPage;
      currentPageRef.current = prevPage;
      setCurrentPage(prevPage);

      bookRef.current.pageFlip().flipPrev();
    }
  }, [usePortrait]);

  // Xử lý nhảy trang khi click trực tiếp vào thanh tiến trình
  const handleProgressClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      isFromButtonRef.current = true; // Đánh dấu thao tác từ thanh scrubber
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      let targetPage = Math.round(ratio * (menuData.length - 1));

      // Trong chế độ 2 trang, các trang ruột luôn bắt đầu bằng số lẻ (1, 3, 5, 7, 9)
      if (!usePortrait && targetPage > 0 && targetPage < menuData.length - 1) {
        if (targetPage % 2 === 0) {
          targetPage -= 1;
        }
      }

      // Cập nhật ngay lập tức UI để thanh tiến trình nhảy tức thì
      targetPageRef.current = targetPage;
      currentPageRef.current = targetPage;
      setCurrentPage(targetPage);

      if (bookRef.current && bookRef.current.pageFlip()) {
        const api = bookRef.current.pageFlip();
        if (typeof api.turnToPage === "function") {
          api.turnToPage(targetPage);
        } else if (typeof api.flip === "function") {
          api.flip(targetPage);
        }
      }
    },
    [usePortrait]
  );

  // Điều hướng bằng bàn phím (Mũi tên Trái / Phải)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        nextButtonClick();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        prevButtonClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextButtonClick, prevButtonClick]);

  // Không disable nút khi đang lật để người dùng có thể lật trang nhanh liên tục nếu muốn
  const showPrev = currentPage > 0;
  const showNext = currentPage < menuData.length - (usePortrait ? 1 : 2);

  // Tính tỷ lệ % hoàn thành cuốn sách (0 - 100%)
  const totalPages = menuData.length;
  const currentEffectivePage =
    currentPage === 0
      ? 0
      : usePortrait
      ? currentPage
      : Math.min(currentPage + 1, totalPages - 1);
  const progressPercent =
    currentPage === 0
      ? 5
      : Math.min(
          100,
          Math.max(
            8,
            Math.round((currentEffectivePage / (totalPages - 1)) * 100)
          )
        );

  return (
    <>
      {/* UX Hint khi ở trang bìa */}
      <div
        className={`fixed bottom-14 sm:bottom-16 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 transition-all duration-500 pointer-events-none ${
          currentPage === 0 && !isFlipping
            ? "opacity-85 animate-pulse"
            : "opacity-0"
        }`}
      >
        <Hand className="w-3.5 h-3.5 text-zen-cream" />
        <span className="font-sans text-[10px] sm:text-[11px] text-zen-cream/80 tracking-widest uppercase drop-shadow-md whitespace-nowrap">
          Chạm bìa hoặc bấm nút để mở sách
        </span>
      </div>

      {/* Thanh điều khiển nổi tinh tế ở đáy màn hình (Bottom Dock với Progress Bar) */}
      <nav
        aria-label="Điều hướng sách"
        className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#1e1107]/90 border border-zen-gold/35 shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 select-none hover:border-zen-gold/55"
      >
        {/* Nút Prev */}
        <button
          onClick={prevButtonClick}
          disabled={!showPrev}
          aria-label="Trang trước"
          className={`w-7 h-7 sm:w-7.5 sm:h-7.5 flex items-center justify-center rounded-full text-[#FDF5E6] hover:text-zen-gold hover:bg-white/10 active:scale-95 transition-all duration-150 ${
            showPrev
              ? "opacity-95 cursor-pointer"
              : "opacity-20 cursor-not-allowed pointer-events-none"
          }`}
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={2.4} />
        </button>

        {/* Cụm Số trang & Thanh tiến trình ánh kim */}
        <div className="flex flex-col items-center px-1.5 sm:px-2 py-0.5 min-w-26.25 sm:min-w-31.25 gap-1 select-none">
          <span className="font-serif text-[11px] sm:text-xs tracking-[0.16em] text-[#FFF6E5] uppercase font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
            {currentPage === 0
              ? "Trang Bìa"
              : currentPage >= menuData.length - 1
              ? "Bìa Sau"
              : usePortrait
              ? `Trang ${currentPage + 1} / ${menuData.length}`
              : `Trang ${currentPage + 1}-${Math.min(currentPage + 2, menuData.length)} / ${menuData.length}`}
          </span>

          {/* Thanh tiến trình ánh kim dạng interactive scrubber */}
          <div
            onClick={handleProgressClick}
            title="Nhấp vào bất kỳ đâu trên thanh để nhảy nhanh đến trang"
            className="w-full h-1 bg-black/60 rounded-full overflow-hidden cursor-pointer border border-zen-gold/30 hover:border-zen-gold/70 transition-all duration-200 group"
          >
            <div
              className="h-full rounded-full bg-linear-to-r from-[#946B1D] via-[#D4AF37] to-[#FFF0C7] shadow-[0_0_6px_rgba(212,175,55,0.7)] transition-all duration-300 ease-out group-hover:brightness-110"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Nút Next */}
        <button
          onClick={nextButtonClick}
          disabled={!showNext}
          aria-label="Trang sau"
          className={`w-7 h-7 sm:w-7.5 sm:h-7.5 flex items-center justify-center rounded-full text-[#FDF5E6] hover:text-zen-gold hover:bg-white/10 active:scale-95 transition-all duration-150 ${
            showNext
              ? "opacity-95 cursor-pointer"
              : "opacity-20 cursor-not-allowed pointer-events-none"
          }`}
        >
          <ChevronRight className="w-4 h-4" strokeWidth={2.4} />
        </button>
      </nav>

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
