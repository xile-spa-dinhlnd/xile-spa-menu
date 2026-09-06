/**
 * Định dạng giá tiền cho Xile Spa Menu
 * @param price Giá tiền (VNĐ)
 * @param format 'short' (vd: 69k) hoặc 'full' (vd: 69.000đ)
 */
export function formatPrice(price: number, format: 'short' | 'full' = 'short'): string {
  if (price <= 0) return 'Miễn phí';

  if (format === 'short') {
    return `${Math.floor(price / 1000)}k`;
  }

  return `${price.toLocaleString('vi-VN')}đ`;
}
