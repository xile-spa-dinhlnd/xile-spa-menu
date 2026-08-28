import { useState, useEffect } from 'react';

interface BookDimensions {
  width: number;
  height: number;
  showCover: boolean;
  usePortrait: boolean;
}

export function useBookDimensions(): BookDimensions {
  const [dimensions, setDimensions] = useState<BookDimensions>({
    width: 700,
    height: 495, // 700 / 1.414
    showCover: true,
    usePortrait: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      // Padding an toàn quanh quyển sách
      const padding = screenWidth < 768 ? 20 : 60;
      const availableWidth = screenWidth - padding * 2;
      const availableHeight = screenHeight - padding * 2;

      let width = 450;
      let height = 650;
      let usePortrait = false;
      let showCover = true;

      // Tỷ lệ A4 ngang (Width > Height)
      const ASPECT_RATIO = 1.414;

      if (screenWidth < 768) {
        // Mobile: Chế độ 1 trang
        usePortrait = true;
        showCover = true; 
        
        width = availableWidth;
        height = width / ASPECT_RATIO;
        
        if (height > availableHeight) {
          height = availableHeight;
          width = height * ASPECT_RATIO;
        }
      } else {
        // Tablet/Desktop: Chế độ 2 trang (Landscape)
        usePortrait = false;
        showCover = true; 
        
        const maxWidthForTwoPages = availableWidth;
        const maxHeight = availableHeight;

        // Với sách ngang, chiều rộng tổng (2 trang) rất lớn, thường sẽ bị giới hạn bởi width màn hình trước
        height = maxHeight;
        width = height * ASPECT_RATIO;

        if (width * 2 > maxWidthForTwoPages) {
          width = maxWidthForTwoPages / 2;
          height = width / ASPECT_RATIO;
        }

        // Đặt giới hạn max width để sách không quá to trên màn hình 4K
        if (width > 800) {
          width = 800;
          height = width / ASPECT_RATIO;
        }
      }

      setDimensions({
        width: Math.floor(width),
        height: Math.floor(height),
        showCover,
        usePortrait,
      });
    };

    // Khởi tạo lần đầu
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
}
