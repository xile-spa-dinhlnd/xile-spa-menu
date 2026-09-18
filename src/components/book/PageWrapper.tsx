import { forwardRef, type PropsWithChildren } from "react";


interface PageWrapperProps {
  number?: number;
  isCover?: boolean;
  hideNumber?: boolean;
  density?: "hard" | "soft";
}

/**
 * Wrapper bắt buộc cho từng trang của react-pageflip.
 * Phải dùng forwardRef để thư viện có thể tương tác với DOM node.
 */
export const PageWrapper = forwardRef<
  HTMLDivElement,
  PropsWithChildren<PageWrapperProps>
>(({ children, number, isCover, hideNumber, density }, ref) => {
  return (
    <div
      ref={ref}
      className={`bg-zen-cream h-full w-full relative overflow-hidden rounded-[5px] border border-zen-brown/15`}
      // Mặc định cover dùng bìa cứng (hard), trừ khi được chỉ định rõ qua prop density (ví dụ: soft ở mobile portrait)
      data-density={density ?? (isCover ? "hard" : "soft")}
    >
      {children}




      {/* Đánh số trang (không hiển thị ở bìa hoặc khi có hideNumber) */}
      {!isCover && !hideNumber && number !== undefined && (
        <div className="absolute bottom-3 left-0 right-0 text-center text-xs font-sans text-zen-stone/60 z-20 pointer-events-none">
          {number}
        </div>
      )}
    </div>
  );
});

PageWrapper.displayName = "PageWrapper";
