import { forwardRef, type PropsWithChildren } from 'react';

interface PageWrapperProps {
  number?: number;
  isCover?: boolean;
}

/**
 * Wrapper bắt buộc cho từng trang của react-pageflip.
 * Phải dùng forwardRef để thư viện có thể tương tác với DOM node.
 */
export const PageWrapper = forwardRef<HTMLDivElement, PropsWithChildren<PageWrapperProps>>(
  ({ children, number, isCover }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`bg-zen-cream h-full w-full shadow-page relative ${isCover ? 'overflow-hidden' : 'overflow-hidden'}`}
        // Cover thì dùng bìa cứng (hard)
        data-density={isCover ? 'hard' : 'soft'}
      >
        {children}
        
        {/* Đánh số trang (không hiển thị ở bìa) */}
        {!isCover && number !== undefined && (
          <div className="absolute bottom-4 left-0 right-0 text-center text-xs font-sans text-zen-stone/50">
            {number}
          </div>
        )}
      </div>
    );
  }
);

PageWrapper.displayName = 'PageWrapper';
