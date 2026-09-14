import { useState, useEffect, useCallback } from 'react';

export interface BookDimensions {
  width: number;
  height: number;
  showCover: boolean;
  usePortrait: boolean;
  isPortraitOrientation: boolean;
  coverShift: number;
}

const ASPECT_RATIO = 1.414; // Tỷ lệ chuẩn A4 ngang của tờ rơi Xile Spa (1600 x 1131 = 1.4146)

function calculateDimensions(): BookDimensions {
  if (typeof window === 'undefined') {
    return {
      width: 600,
      height: 424,
      showCover: true,
      usePortrait: false,
      isPortraitOrientation: false,
      coverShift: 0,
    };
  }

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Xác định thiết bị hoặc cửa sổ đang ở hướng DỌC (Portrait)
  const isPortraitOrientation = screenHeight > screenWidth;

  let width = 340;
  let height = 240;
  let usePortrait = false;
  // Chỉ bật showCover trong chế độ 2 trang (Landscape).
  // Khi ở màn hình dọc (Portrait), tất cả các trang đều là trang đơn độc lập,
  // do đó tắt showCover để page-flip không gán density HARD gây giật hình khi lật bìa.
  const showCover = !isPortraitOrientation;

  if (isPortraitOrientation) {
    // ============================================================
    // 1. MÀN HÌNH DỌC (Portrait - Điện thoại hoặc iPad dọc)
    // -> Hiển thị 1 trang duy nhất (Single Page Mode)
    // ============================================================
    usePortrait = true;

    // Khoảng lề an toàn 2 bên (ít nhất 16px mỗi bên, iPad thì rộng hơn)
    const paddingX = screenWidth < 480 ? 24 : 48;
    const maxW = Math.min(screenWidth - paddingX, 650);

    // Chừa khoảng trống phía trên cho thanh gợi ý xoay (~48px)
    // và phía dưới cho bottom dock + hint (~95px), cùng lề đệm an toàn (~25px)
    const verticalReserve = screenWidth < 480 ? 155 : 180;
    const maxH = Math.max(120, screenHeight - verticalReserve);

    // Ưu tiên chiều ngang tối đa nhưng tuyệt đối tuân thủ tỷ lệ A4 ngang 1.414
    width = maxW;
    height = Math.round(width / ASPECT_RATIO);

    // Nếu chiều cao vượt quá vùng hiển thị an toàn, co lại theo chiều cao
    if (height > maxH) {
      height = maxH;
      width = Math.round(height * ASPECT_RATIO);
    }

    // Giới hạn an toàn tối thiểu và tối đa
    width = Math.max(160, Math.min(width, 700));
    height = Math.max(110, Math.round(width / ASPECT_RATIO));
  } else {
    // ============================================================
    // 2. MÀN HÌNH NGANG (Landscape - Xoay ngang điện thoại/tablet/desktop)
    // -> Hiển thị 2 trang trải rộng (2-Page Spread)
    // ============================================================
    usePortrait = false;

    // Chừa khoảng trống cho thanh dock điều khiển ở đáy màn hình
    const dockSpace = screenHeight < 500 ? 65 : 85;
    const maxH = Math.max(110, screenHeight - dockSpace);

    // Chiều rộng khả dụng cho cả 2 trang sách (chừa lề an toàn 2 bên)
    const paddingX = screenWidth < 768 ? 28 : 64;
    const maxWTwoPages = Math.max(220, screenWidth - paddingX);

    // Bắt đầu tính toán từ chiều cao màn hình để sách to rõ nhất
    height = maxH;
    width = Math.round(height * ASPECT_RATIO);

    // Nếu tổng bề ngang 2 trang (width * 2) vượt quá chiều rộng màn hình, co lại theo chiều rộng
    if (width * 2 > maxWTwoPages) {
      width = Math.floor(maxWTwoPages / 2);
      height = Math.round(width / ASPECT_RATIO);
    }

    // Giới hạn kích thước tối đa trên màn hình Desktop lớn / 4K
    if (width > 800) {
      width = 800;
      height = Math.round(width / ASPECT_RATIO);
    }

    width = Math.max(160, width);
    height = Math.max(110, height);
  }

  // Khoảng dịch chuyển căn giữa cho trang bìa trong chế độ 2 trang (dịch 1 nửa trang để trang bìa nằm chính giữa màn hình)
  const coverShift = usePortrait ? 0 : Math.round(width / 2);

  return {
    width,
    height,
    showCover,
    usePortrait,
    isPortraitOrientation,
    coverShift,
  };
}

export function useBookDimensions(): BookDimensions {
  // Khởi tạo state ĐỒNG BỘ với kích thước màn hình hiện tại (tránh lỗi flash kích thước sai)
  const [dimensions, setDimensions] = useState<BookDimensions>(calculateDimensions);

  const handleResize = useCallback(() => {
    setDimensions(calculateDimensions());
  }, []);

  useEffect(() => {
    // Hỗ trợ resize mượt mà và sự kiện xoay màn hình điện thoại
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [handleResize]);

  return dimensions;
}

