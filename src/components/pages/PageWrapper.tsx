import { forwardRef, type PropsWithChildren } from "react";

interface PageWrapperProps {
  number?: number;
  isCover?: boolean;
}

/**
 * Wrapper bắt buộc cho từng trang của react-pageflip.
 * Phải dùng forwardRef để thư viện có thể tương tác với DOM node.
 */
export const PageWrapper = forwardRef<
  HTMLDivElement,
  PropsWithChildren<PageWrapperProps>
>(({ children, number, isCover }, ref) => {
  return (
    <div
      ref={ref}
      className={`bg-zen-cream shadow-page h-full w-full relative overflow-hidden rounded-[5px] border border-zen-brown/15`}
      // Cover thì dùng bìa cứng (hard)
      data-density={isCover ? "hard" : "soft"}
    >
      {/* Lớp nhiễu vân giấy (Paper texture overlay) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply rounded-sm"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {children}

      {/* Đánh số trang (không hiển thị ở bìa) */}
      {!isCover && number !== undefined && (
        <div className="absolute bottom-4 left-0 right-0 text-center text-xs font-sans text-zen-stone/50">
          {number}
        </div>
      )}
    </div>
  );
});

PageWrapper.displayName = "PageWrapper";
