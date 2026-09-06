import React, { useState, useRef, useCallback, useEffect } from 'react';
import { menuData } from '../data';

export interface PageFlipAPI {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    turnToPage?: (page: number) => void;
    flip?: (page: number) => void;
    getCurrentPageIndex?: () => number;
  };
}

export interface UseFlipBookReturn {
  bookRef: React.RefObject<PageFlipAPI | null>;
  currentPage: number;
  isFlipping: boolean;
  isCoverCentered: boolean;
  isBackCoverCentered: boolean;
  showPrev: boolean;
  showNext: boolean;
  progressPercent: number;
  totalPages: number;
  onPageChange: (e: { data: number }) => void;
  onChangeState: (e: { data: string }) => void;
  nextButtonClick: () => void;
  prevButtonClick: () => void;
  handleProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onBookPointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
}

export function useFlipBook(usePortrait: boolean): UseFlipBookReturn {
  const [currentPage, setCurrentPage] = useState(0);
  const currentPageRef = useRef(0);
  const targetPageRef = useRef(0); // Lưu trang đích dự kiến để hỗ trợ bấm lật nhanh liên tiếp
  const isFromButtonRef = useRef(false); // Đánh dấu khi lật bằng nút/thanh scrubber để tránh double trigger
  const [isDraggingCover, setIsDraggingCover] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const bookRef = useRef<PageFlipAPI | null>(null);
  const swipeDirectionRef = useRef<'prev' | 'next' | null>(null);

  // Tính toán trực tiếp trạng thái căn giữa trang bìa trước và trang bìa sau (Landscape mode)
  const isCoverCentered = currentPage === 0 && !usePortrait && !isDraggingCover;
  const isBackCoverCentered =
    currentPage >= menuData.length - 1 && !usePortrait && !isDraggingCover;

  // Xử lý sự kiện khi TRANG ĐÃ LẬT XONG
  const onPageChange = useCallback((e: { data: number }) => {
    const direction = swipeDirectionRef.current;
    const target = targetPageRef.current;

    // Khi người dùng bấm nút lật nhanh liên tiếp:
    // Nếu trang vừa hoàn thành (e.data) chưa tới trang đích (target) thì không giật lùi UI về trang cũ
    if (direction === 'next' && e.data < target) {
      return;
    }
    if (direction === 'prev' && e.data > target) {
      return;
    }

    targetPageRef.current = e.data;
    currentPageRef.current = e.data; // Cập nhật ref đồng bộ để tránh stale closure
    setCurrentPage(e.data);
  }, []);

  // Xử lý sự kiện khi TRẠNG THÁI CUỐN SÁCH THAY ĐỔI (đang lật, đã dừng...)
  const onChangeState = useCallback(
    (e: { data: string }) => {
      const state = e.data; // 'read', 'flipping', 'fold_corner', 'user_fold'

      // Cập nhật trạng thái lật để làm mờ nút điều hướng
      setIsFlipping(state !== 'read');

      if (state === 'read') {
        setIsDraggingCover(false);
        isFromButtonRef.current = false;
        // Đồng bộ lại với vị trí chính xác từ thư viện
        const api = bookRef.current?.pageFlip();
        const actualPage =
          typeof api?.getCurrentPageIndex === 'function'
            ? api.getCurrentPageIndex()
            : currentPageRef.current;

        targetPageRef.current = actualPage;
        currentPageRef.current = actualPage;
        setCurrentPage(actualPage);
      } else if (state === 'flipping') {
        setIsDraggingCover(false);
        // Nếu thao tác lật bắt nguồn từ việc click/kéo trực tiếp trên quyển sách (không qua nút bấm)
        if (!isFromButtonRef.current) {
          const current = targetPageRef.current;
          if (swipeDirectionRef.current === 'next') {
            const nextPage = usePortrait
              ? Math.min(menuData.length - 1, current + 1)
              : current === 0
              ? 1
              : Math.min(menuData.length - 1, current + 2);
            targetPageRef.current = nextPage;
            currentPageRef.current = nextPage;
            setCurrentPage(nextPage);
          } else if (swipeDirectionRef.current === 'prev') {
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
      } else if (state === 'user_fold') {
        if (
          currentPageRef.current === 0 ||
          currentPageRef.current >= menuData.length - 1
        ) {
          // Bắt đầu kéo lật (drag) từ trang bìa trước hoặc bìa sau -> Trượt ngay lập tức để nhường chỗ
          setIsDraggingCover(true);
        }
      }
    },
    [usePortrait]
  );

  const nextButtonClick = useCallback(() => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      isFromButtonRef.current = true; // Đánh dấu thao tác từ nút bấm
      swipeDirectionRef.current = 'next';

      // Tính trang đích tiếp theo dựa trên targetPageRef hiện tại để hỗ trợ bấm nhanh liên tiếp
      const current = targetPageRef.current;
      if (current >= menuData.length - 1) return;

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

  const prevButtonClick = useCallback(() => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      isFromButtonRef.current = true; // Đánh dấu thao tác từ nút bấm
      swipeDirectionRef.current = 'prev';

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
  const handleProgressClick = useCallback(
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
        if (typeof api.turnToPage === 'function') {
          api.turnToPage(targetPage);
        } else if (typeof api.flip === 'function') {
          api.flip(targetPage);
        }
      }
    },
    [usePortrait]
  );

  // Điều hướng bằng bàn phím (Mũi tên Trái / Phải)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        nextButtonClick();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevButtonClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextButtonClick, prevButtonClick]);

  const onBookPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    // Nếu click/chạm vào nửa bên trái của sách -> Đang vuốt lật ngược
    if (clickX < rect.width / 2) {
      swipeDirectionRef.current = 'prev';
    } else {
      swipeDirectionRef.current = 'next';
    }
  }, []);

  // Trạng thái hiển thị nút prev / next
  const showPrev = currentPage > 0;
  const showNext = currentPage < menuData.length - 1;

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

  return {
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
  };
}
