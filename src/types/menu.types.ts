// =============================================================
// Xile Spa Menu — TypeScript Type Definitions
// Trích xuất từ hình ảnh menu gốc (17 trang)
// =============================================================

/** Một bước dịch vụ nhỏ bên trong một gói */
export interface ServiceInclusion {
  icon?: string     // Tên icon từ Lucide React (tùy chọn)
  label: string     // VD: "Gội 2 lần với dầu thảo dược"
}

/** Một gói dịch vụ (VD: Tĩnh Dưỡng 179k) */
export interface ServiceItem {
  id: string
  name: string                   // VD: "TĨNH DƯỠNG"
  tagline?: string               // VD: "Một dòng nước chảy chậm..."
  price: number                  // Đơn vị: VND (VD: 179000)
  duration?: number              // Thời gian (phút)
  description?: string           // Mô tả ngắn
  includes: ServiceInclusion[]   // Danh sách trải nghiệm bao gồm
  note?: string                  // Lời nhắn nhỏ ở cuối
  isHighlight?: boolean          // Nổi bật (hiển thị khác biệt)
}

/** Danh mục dịch vụ (VD: Chương 1 — Mái Tóc) */
export interface MenuCategory {
  id: string
  chapter: number                // Số chương: 1, 2, 3
  title: string                  // VD: "MÁI TÓC" hoặc "GỘI DƯỠNG SINH"
  subtitle?: string              // VD: "Gội Đầu Dưỡng Sinh"
  tagline?: string               // VD: "“Sạch tóc - Nhẹ đầu - Nuôi dưỡng từ gốc”"
  philosophy?: string            // Đoạn văn triết lý chữa lành
  theme?: 'hair' | 'skin' | 'body' | 'general' // Chủ đề để áp dụng ảnh nền/phong cách phù hợp
  coverQuote: string             // Câu trích dẫn ở trang cover danh mục
  items: ServiceItem[]
}

/** Gói Combo Da (hiển thị dạng 3 cột) */
export interface ComboItem {
  id: string
  name: string                   // VD: "COMBO DETOX DA"
  price: number                  // VD: 599000
  imageDescription: string       // Mô tả ảnh minh họa
  includes: ServiceInclusion[]
  description: string            // Tóm tắt công dụng
}

/** Gói Thẻ Thành Viên */
export interface MembershipTier {
  id: string
  name: string                   // VD: "Thẻ Bạc"
  minSpend: number               // Ngưỡng tích lũy tối thiểu
  discount: number               // % giảm giá
  benefits: string[]
  color: 'silver' | 'gold' | 'platinum'
}

/** Loại của mỗi trang trong quyển sách */
export type PageType =
  | 'cover'           // Trang bìa chính
  | 'intro'           // Lời ngỏ
  | 'category-cover'  // Trang bìa của từng chương
  | 'service'         // Trang dịch vụ đơn
  | 'service-list'    // Trang danh sách dịch vụ lẻ
  | 'combo'           // Bảng giá Combo
  | 'membership'      // Trang thẻ thành viên
  | 'back-cover'      // Bìa sau

/** Một trang trong quyển sách */
export interface BookPage {
  id: string
  type: PageType
  // Data payload — chỉ một trong các field sau được dùng tùy type
  category?: MenuCategory
  serviceItem?: ServiceItem
  combos?: ComboItem[]
  membershipTiers?: MembershipTier[]
}
