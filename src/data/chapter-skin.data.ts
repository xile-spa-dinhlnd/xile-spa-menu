import type { BookPage } from '../types/menu.types';

export const skinChapterPages: BookPage[] = [
  {
    id: 'page-8-skin-category',
    type: 'category-cover',
    category: {
      id: 'cat-skin',
      chapter: 2,
      title: 'LÀN DA',
      subtitle: 'Làm Sạch & Chăm Sóc',
      theme: 'skin',
      coverQuote: '"Làn da khỏe là làn da đẹp nhất"',
      items: []
    }
  },
  {
    id: 'page-9-skin-services',
    type: 'service-list',
    category: {
      id: 'cat-skin-list',
      chapter: 2,
      title: 'LÀM SẠCH & CHĂM SÓC',
      subtitle: 'CHƯƠNG 2: LÀN DA',
      tagline: '“Gạt đi lớp bụi ngày dài, giữ lại sự dịu dàng trên da”',
      coverQuote: 'Gạt đi lớp bụi ngày dài, Giữ lại sự dịu dàng trên da',
      theme: 'skin',
      items: [
        { id: 'sk-1', name: 'Chăm sóc da cơ bản', price: 250000, includes: [] },
        { id: 'sk-2', name: 'Chăm sóc da chuyên sâu', price: 550000, includes: [] },
        { id: 'sk-3', name: 'Lấy nhân mụn lưng', price: 500000, includes: [] },
        { id: 'sk-4', name: 'Detox CO2 đa tầng', price: 450000, includes: [] },
        { id: 'sk-5', name: 'Detox mask cleaner', price: 400000, includes: [] },
        { id: 'sk-6', name: 'Detox tảo lạnh', price: 450000, includes: [] },
        { id: 'sk-7', name: 'Cấy HA cấp ẩm', price: 650000, includes: [] },
      ]
    }
  },
  {
    id: 'page-10-skin-combos',
    type: 'combo',
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
