import type { BookPage } from '../types/menu.types';
import { hairChapterPages } from './chapter-hair.data';
import { skinChapterPages } from './chapter-skin.data';

export const coverPage: BookPage = {
  id: 'page-1-cover',
  type: 'cover',
};

export const introPage: BookPage = {
  id: 'page-2-intro',
  type: 'intro',
};

export const backCoverPage: BookPage = {
  id: 'page-11-back-cover',
  type: 'back-cover',
};

export const menuData: BookPage[] = [
  coverPage,
  introPage,
  ...hairChapterPages,
  ...skinChapterPages,
  backCoverPage,
];

export * from './chapter-hair.data';
export * from './chapter-skin.data';
