import type { BookPage } from '../types/menu.types';
import membershipHair from '@/assets/images/membership-hair.webp';
import membershipRehab from '@/assets/images/membership-rehab.webp';
import membershipSkin from '@/assets/images/membership-skin.webp';
import thankYou from '@/assets/images/thank-you.webp';

export const membershipPages: BookPage[] = [
  {
    id: 'page-16-membership-hair',
    type: 'membership',
    side: 'left',
    imageUrl: membershipHair,
    srContent: {
      title: 'HÀNH TRÌNH TRỌN VẸN - Thẻ Thành Viên Gội Đầu',
      paragraphs: [
        'STANDARD 69k: Mua 10 buổi 690k tặng 2 buổi (Trị giá 138k)',
        'PREMIUM 179k: Mua 10 buổi 1790k tặng 2 buổi (Trị giá 358k)',
        'LUXURY 289k: Mua 5 buổi 1445k tặng 1 buổi, Mua 10 buổi 2890k tặng 3 buổi (Trị giá 867k)',
        'VIP EXPERIENCE 450k: Mua 5 buổi 2250k tặng 1 buổi, Mua 10 buổi 4500k tặng 3 buổi (Trị giá 1350k)'
      ]
    }
  },
  {
    id: 'page-17-membership-rehab',
    type: 'membership',
    side: 'right',
    imageUrl: membershipRehab,
    srContent: {
      title: 'CHĂM SÓC CHỦ ĐÍCH - Thẻ Thành Viên Giãn Cơ',
      paragraphs: [
        'Dành cho những người muốn biến việc chăm sóc cơ thể thành một phần trong lối sống',
        'CỔ VAI GÁY 350k: Mua 5 buổi giá gốc 1750k chỉ còn 1600k (Tiết kiệm 150k)',
        'HALF BODY 450k: Mua 5 buổi giá gốc 2250k chỉ còn 2050k (Tiết kiệm 200k)',
        'FULL BODY 750k: Mua 5 buổi giá gốc 3750k chỉ còn 3450k (Tiết kiệm 300k)'
      ]
    }
  },
  {
    id: 'page-18-membership-skin',
    type: 'membership',
    side: 'left',
    imageUrl: membershipSkin,
    srContent: {
      title: 'ĐỒNG HÀNH DÀI LÂU - Thẻ Thành Viên Chăm Sóc Da',
      paragraphs: [
        'Làn da khỏe mạnh bắt đầu bằng sự thấu hiểu. Có những điều đẹp lên không chỉ sau một lần chăm sóc.',
        'AN TOÀN - CHỌN LỌC - HIỆU QUẢ',
        'Mua 5 buổi: Tiết kiệm 5%',
        'Mua 10 buổi: Tiết kiệm 10 - 12% (Chỉ từ 2.XXX đ)',
        'Liên hệ Xile để được tư vấn và cá nhân hóa lộ trình tùy theo tình trạng làn da của bạn'
      ]
    }
  },
  {
    id: 'page-19-thank-you',
    type: 'thank-you',
    side: 'right',
    imageUrl: thankYou,
    srContent: {
      title: 'CÁM ƠN Vì đã chọn Xile',
      paragraphs: [
        'Hy vọng bạn đã có những trải nghiệm tuyệt vời và hẹn gặp lại bạn trong những lần ghé thăm tiếp theo.',
        'Chúc bạn luôn tràn đầy năng lượng, sức khỏe và những ngày thật nhẹ nhàng.',
        '“Cơ thể bạn xứng đáng được chăm sóc đúng cách. Hãy để Xile trở thành người bạn đồng hành tin cậy của bạn”',
        'See you soon!',
        'Địa chỉ: 67 Hưng Phú Quận 8 - Hotline: 0909722408 - 0908899250'
      ]
    }
  }
];
