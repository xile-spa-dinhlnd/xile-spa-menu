import type { BookPage } from '../types/menu.types';
import categorySkinCover from '@/assets/images/category-skin-cover.webp';
import serviceSkinClean from '@/assets/images/service-skin-clean.webp';
import serviceSkinPeel from '@/assets/images/service-skin-peel.webp';
import serviceSkinRecovery from '@/assets/images/service-skin-recovery.webp';
import comboCover from '@/assets/images/combo-cover.webp';
import comboPricing from '@/assets/images/combo-pricing.webp';

export const skinChapterPages: BookPage[] = [
  {
    id: 'page-10-skin-category',
    type: 'category-cover',
    side: 'left',
    imageUrl: categorySkinCover,
    category: {
      id: 'cat-skin',
      chapter: 3,
      title: 'CHĂM SÓC DA',
      subtitle: 'CHƯƠNG 3: LÀN DA',
      tagline: '“Da khỏe - Tâm lành - Trả lại thanh xuân”',
      coverQuote: 'Vẻ đẹp thật sự bắt đầu từ một làn da khỏe mạnh',
      theme: 'skin',
      philosophy:
        'Chúng ta vẫn thường cố che đi một vết mụn\nNhưng hiếm khi hỏi...\nĐiều gì đã khiến nó xuất hiện?\nCó những buổi sáng, mình soi gương và muốn thấy một làn da đẹp hơn\nNhưng rồi mình hiểu, điều đáng quý nhất không phải là một làn da không tì vết\nMà là một làn da khỏe mạnh, đủ bình yên để đồng hành cùng mình qua những ngày nhiều nắng, nhiều gió',
      items: []
    }
  },
  {
    id: 'page-11-skin-clean',
    type: 'service-list',
    side: 'right',
    imageUrl: serviceSkinClean,
    category: {
      id: 'cat-skin-clean',
      chapter: 3,
      title: 'LÀM SẠCH & CHĂM SÓC',
      subtitle: 'CHƯƠNG 3: LÀN DA',
      tagline: '“Gạt đi lớp bụi ngày dài\nGiữ lại sự dịu dàng trên da”',
      coverQuote: 'Một giấc ngủ ngon luôn là loại mỹ phẩm bền bỉ nhất',
      theme: 'skin',
      items: [
        { id: 'sk-1', name: 'Chăm sóc da cơ bản', price: 250000, includes: [] },
        { id: 'sk-2', name: 'Chăm sóc da chuyên sâu', price: 550000, includes: [] },
        { id: 'sk-3', name: 'Lấy nhân mụn lưng', price: 500000, includes: [] },
        { id: 'sk-4', name: 'Detox CO2 đa tầng', price: 450000, includes: [] },
        { id: 'sk-5', name: 'Detox mask cleaner', price: 400000, includes: [] },
        { id: 'sk-6', name: 'Detox tảo lạnh', price: 450000, includes: [] },
        { id: 'sk-7', name: 'Cấy HA cấp ẩm', price: 650000, includes: [] }
      ]
    }
  },
  {
    id: 'page-12-skin-peel',
    type: 'service-list',
    side: 'left',
    imageUrl: serviceSkinPeel,
    category: {
      id: 'cat-skin-peel',
      chapter: 3,
      title: 'PEEL TÁI TẠO',
      subtitle: 'CHƯƠNG 3: LÀN DA',
      tagline: '“Đừng so sánh làn da của mình với ai khác\nMỗi người đều có một hành trình riêng để trở nên khỏe mạnh”',
      coverQuote: 'Cảm ơn vì hôm nay bạn đã nhớ uống nước',
      theme: 'skin',
      items: [
        { id: 'pl-1', name: 'Peel mụn (500k - 1500k)', price: 500000, includes: [] },
        { id: 'pl-2', name: 'Peel Glass Skin (700k - 2000k)', price: 700000, includes: [] },
        { id: 'pl-3', name: 'Peel tảo nóng', price: 1100000, includes: [] },
        { id: 'pl-4', name: 'Peel phục hồi', price: 1700000, includes: [] },
        { id: 'pl-5', name: 'Peel nám', price: 3000000, includes: [] },
        { id: 'pl-6', name: 'Peel lưng (1500k - 3000k)', price: 1500000, includes: [] }
      ]
    }
  },
  {
    id: 'page-13-skin-recovery',
    type: 'service-list',
    side: 'right',
    imageUrl: serviceSkinRecovery,
    category: {
      id: 'cat-skin-recovery',
      chapter: 3,
      title: 'PHỤC HỒI CHUYÊN SÂU',
      subtitle: 'CHƯƠNG 3: LÀN DA',
      tagline: '“Nếu hôm nay làn da chưa đẹp như mong muốn, cũng đừng quá vội buồn\nDa cần thời gian, giống như cây cần thời gian để ra lá mới”',
      coverQuote: 'Đừng quên tẩy trang, kể cả những ngày bạn chỉ dùng kem chống nắng',
      theme: 'skin',
      items: [
        { id: 'rc-1', name: 'Vi kim tái tạo', price: 1000000, includes: [] },
        { id: 'rc-2', name: 'Cải thiện thâm sau mụn', price: 800000, includes: [] },
        { id: 'rc-3', name: 'Kiểm soát dầu', price: 850000, includes: [] },
        { id: 'rc-4', name: 'Thu nhỏ lỗ chân lông (500k - 900k)', price: 500000, includes: [] }
      ]
    }
  },
  {
    id: 'page-14-combo-category',
    type: 'category-cover',
    side: 'left',
    imageUrl: comboCover,
    category: {
      id: 'cat-combo',
      chapter: 3,
      title: 'COMBO CHĂM SÓC DA',
      subtitle: 'CHƯƠNG 3: LÀN DA',
      tagline: '“Làn da khỏe đẹp là hành trình của sự kiên nhẫn và lựa chọn đúng đắn”',
      coverQuote: 'Mỗi làn da đều có nhu cầu riêng',
      theme: 'skin',
      philosophy:
        'Mỗi làn da đều có nhu cầu riêng.\nNhững combo dưới đây được thiết kế để mang lại\nhiệu quả tối ưu giúp bạn tiết kiệm thời gian mà vẫn chăm sóc được toàn diện',
      items: []
    }
  },
  {
    id: 'page-15-skin-combos',
    type: 'combo',
    side: 'right',
    imageUrl: comboPricing,
    combos: [
      {
        id: 'cb-1',
        name: 'COMBO DETOX DA',
        price: 599000,
        imageDescription: 'Bọt detox',
        description: 'Thanh lọc da chuyên sâu, loại bỏ độc tố, dầu thừa và bụi bẩn, giúp da sạch sẽ thông thoáng.',
        includes: [
          { label: 'Lấy nhân mụn' },
          { label: 'Thải chì' },
          { label: 'Thải độc CO2 hoặc Detox Mask Cleaner' },
          { label: 'Điện di Vitamin C' }
        ]
      },
      {
        id: 'cb-2',
        name: 'COMBO CẤP ẨM CHUYÊN SÂU',
        price: 799000,
        imageDescription: 'Giọt nước HA',
        description: 'Bổ sung độ ẩm chuyên sâu, cân bằng và phục hồi da mềm mịn.',
        includes: [
          { label: 'Lấy nhân mụn' },
          { label: 'Thải chì' },
          { label: 'Cấy HA cấp ẩm' },
          { label: 'Điện di Collagen' }
        ]
      },
      {
        id: 'cb-3',
        name: 'COMBO GLOW SKIN',
        price: 699000,
        imageDescription: 'Da căng bóng',
        description: 'Làm sáng, đều màu và căng bóng lấy lại vẻ rạng rỡ và tươi trẻ cho làn da.',
        includes: [
          { label: 'Lấy nhân mụn' },
          { label: 'Thải chì' },
          { label: 'Peel tảo lạnh căng bóng' },
          { label: 'Điện di HA' }
        ]
      }
    ]
  }
];
