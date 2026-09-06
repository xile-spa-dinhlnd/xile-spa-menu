import type { BookPage } from '../types/menu.types';
import categoryRehabCover from '@/assets/images/category-rehab-cover.webp';
import serviceRehabSport from '@/assets/images/service-rehab-sport.webp';

export const rehabChapterPages: BookPage[] = [
  {
    id: 'page-8-rehab-category',
    type: 'category-cover',
    side: 'left',
    imageUrl: categoryRehabCover,
    category: {
      id: 'cat-rehab',
      chapter: 2,
      title: 'GIÃN CƠ PHỤC HỒI',
      subtitle: 'CHƯƠNG 2: CƠ THỂ',
      tagline: '“Hồi sinh - Cân bằng - Khơi dòng động lực”',
      coverQuote: 'Mỗi chuyển động đều cần một khoảng trống để cơ thể được cân bằng',
      theme: 'body',
      philosophy:
        'Cơ thể chưa từng phản bội bạn nó chỉ đang nhớ mọi điều bạn đã bỏ quên.\nCó những cơn đau không nằm ở nơi bạn cảm thấy đau.\nChúng tôi cùng bạn lắng nghe và nhìn cơ thể như một thể thống nhất.\nMỗi chuyển động đều cần một khoảng trống, để từng khớp, từng bó cơ, từng nhịp thở được trở về đúng vị trí của mình.',
      items: []
    }
  },
  {
    id: 'page-9-rehab-sport-therapy',
    type: 'service-list',
    side: 'right',
    imageUrl: serviceRehabSport,
    category: {
      id: 'cat-rehab-sport',
      chapter: 2,
      title: 'SPORT THERAPY',
      subtitle: 'RBK Rehab By Khanh Pham (Revive . Balance . Kinetic)',
      tagline: '“Không phải mạnh hơn, chỉ là cân bằng hơn”',
      coverQuote: 'Công cụ và kỹ thuật sẽ được cá nhân hóa tùy theo tình trạng cơ thể',
      theme: 'body',
      items: [
        {
          id: 'rh-1',
          name: 'Cổ vai gáy (60 phút)',
          price: 350000,
          duration: 60,
          includes: [
            { label: 'Cupping Therapy' },
            { label: 'Myofascial Release' },
            { label: 'Trigger Point' },
            { label: 'Deep Tissue Massage' },
            { label: 'Stretching' },
            { label: 'Mobilization' }
          ]
        },
        {
          id: 'rh-2',
          name: 'Half Body (80 phút)',
          price: 450000,
          duration: 80,
          includes: [
            { label: 'Cupping Therapy' },
            { label: 'Myofascial Release' },
            { label: 'Trigger Point' },
            { label: 'Deep Tissue Massage' },
            { label: 'Stretching' },
            { label: 'Mobilization' }
          ]
        },
        {
          id: 'rh-3',
          name: 'Full Body (120 phút)',
          price: 750000,
          duration: 120,
          includes: [
            { label: 'Cupping Therapy' },
            { label: 'Myofascial Release' },
            { label: 'Trigger Point' },
            { label: 'Deep Tissue Massage' },
            { label: 'Stretching' },
            { label: 'Mobilization' }
          ]
        }
      ]
    }
  }
];
