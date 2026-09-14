declare module 'react-pageflip' {
  import React from 'react';

  interface HTMLFlipBookProps {
    width: number;
    height: number;
    size?: 'fixed' | 'stretch';
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    maxShadowOpacity?: number;
    drawShadow?: boolean;
    showCover?: boolean;
    mobileScrollSupport?: boolean;
    usePortrait?: boolean;
    renderOnlyPageLengthChange?: boolean;
    startZIndex?: number;
    autoSize?: boolean;
    flippingTime?: number;
    className?: string;
    style?: React.CSSProperties;
    onFlip?: (e: { data: number }) => void;
    onChangeState?: (e: { data: string }) => void;
    children?: React.ReactNode;
  }

  const HTMLFlipBook: React.ForwardRefExoticComponent<
    HTMLFlipBookProps & React.RefAttributes<any>
  >;

  export default HTMLFlipBook;
}
