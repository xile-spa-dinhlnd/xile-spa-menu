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
    height: 990,
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

      if (screenWidth < 768) {
        // Mobile: Chế độ 1 trang (Portrait)
        usePortrait = true;
        showCover = true; // Mobile lật từng trang, có hiện bìa
        
        // Tính kích thước 1 trang sao cho vừa màn hình
        width = availableWidth;
        // Giữ tỷ lệ A4 (1:1.414)
        height = Math.min(width * 1.414, availableHeight);
        
        // Nếu height vượt quá màn hình, tính lại width theo height
        if (height === availableHeight) {
          width = height / 1.414;
        }
      } else {
        // Tablet/Desktop: Chế độ 2 trang (Landscape)
        usePortrait = false;
        showCover = true; // Sách mở ra 2 bên, trang đầu là bìa
        
        // Cần không gian cho 2 trang cạnh nhau
        const maxWidthForTwoPages = availableWidth;
        const maxHeight = availableHeight;

        // Tính width 1 trang (bằng 1/2 tổng width), tăng max lên 700px để full màn hình PC
        width = Math.min(700, maxWidthForTwoPages / 2);
        height = Math.min(width * 1.414, maxHeight);

        if (height === maxHeight) {
          width = height / 1.414;
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
