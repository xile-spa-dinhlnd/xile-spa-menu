import { forwardRef, type PropsWithChildren } from "react";
import logoWatermark from "@/assets/xile_spa_logo.png";

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
      {children}

      {/* Lớp nhiễu vân giấy (Paper texture overlay) - Đặt sau children để không bị che */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply rounded-sm z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Hiệu ứng Watermark Logo chìm dưới nền (Chỉ áp dụng cho trang ruột) */}
      {!isCover && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden pt-0.5">
          <img
            src={logoWatermark}
            alt=""
            className="w-[120%] sm:w-full md:w-[90%] h-auto opacity-[0.07] mix-blend-color-burn transform translate-y-12"
            style={{ minWidth: "300px", maxWidth: "600px" }}
          />
        </div>
      )}

      {/* Đánh số trang (không hiển thị ở bìa) */}
      {!isCover && number !== undefined && (
        <div className="absolute bottom-4 left-0 right-0 text-center text-xs font-sans text-zen-stone/50 z-20">
          {number}
        </div>
      )}
    </div>
  );
});

PageWrapper.displayName = "PageWrapper";
