import type { BookPage } from '../types/menu.types';
import { hairChapterPages } from './chapter-hair.data';
import { rehabChapterPages } from './chapter-rehab.data';
import { skinChapterPages } from './chapter-skin.data';
import { membershipPages } from './chapter-membership.data';

export const coverPage: BookPage = {
  id: 'page-1-cover',
  type: 'cover',
};

export const introPage: BookPage = {
  id: 'page-2-intro',
  type: 'intro',
  side: 'left',
};

export const backCoverPage: BookPage = {
  id: 'page-20-back-cover',
  type: 'back-cover',
};

export const menuData: BookPage[] = [
  coverPage,              // Trang 1: Bìa trước
  introPage,              // Trang 2: Lời ngỏ
  ...hairChapterPages,    // Trang 3 - 7: Chương 1 Mái Tóc (Bìa gội, 69k, 179k, 289k, 450k)
  ...rehabChapterPages,   // Trang 8 - 9: Chương 2 Giãn Cơ (Bìa giãn cơ, Sport Therapy RBK)
  ...skinChapterPages,    // Trang 10 - 15: Chương 3 Làn Da (Bìa da, Làm sạch, Peel, Phục hồi, Bìa combo, Bảng combo)
  ...membershipPages,     // Trang 16 - 19: Thẻ thành viên (Gội, Giãn cơ, Da) & Cám ơn
  backCoverPage,          // Trang 20: Bìa sau đóng lại
];

export * from './chapter-hair.data';
export * from './chapter-rehab.data';
export * from './chapter-skin.data';
export * from './chapter-membership.data';
