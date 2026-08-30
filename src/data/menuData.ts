import type { BookPage } from '../types/menu.types';

export const menuData: BookPage[] = [
  {
    id: 'page-1-cover',
    type: 'cover',
  },
  {
    id: 'page-2-intro',
    type: 'intro',
  },
  {
    id: 'page-3-hair-category',
    type: 'category-cover',
    category: {
      id: 'cat-hair',
      chapter: 1,
      title: 'MÁI TÓC',
      subtitle: 'Gội Đầu Dưỡng Sinh',
      coverQuote: '"Tóc là góc con người"',
      items: [] // Không dùng ở page này
    }
  },
  {
    id: 'page-4-service-69k',
    type: 'service',
    serviceItem: {
      id: 'srv-69k',
      name: 'AN NHIÊN',
      tagline: 'Mọi sự chăm sóc đều bắt đầu bằng việc làm sạch',
      price: 69000,
      description: 'Làm sạch những mệt mỏi. Buông nhẹ tâm trí. Điều mình cần không phải là đi đâu xa. Chỉ cần mái tóc được gội sạch',
      includes: [
        { label: 'Làm sạch da mặt', icon: 'droplet' },
        { label: 'Tẩy tế bào chết', icon: 'sparkles' },
        { label: 'Đắp mặt nạ dưỡng ẩm', icon: 'mask' },
        { label: 'Gội 2 lần với dầu thảo dược', icon: 'leaf' },
        { label: 'Ủ tóc mềm mượt', icon: 'wind' }
      ],
      note: 'Đừng quên uống thêm một ly nước sau khi cơ thể vừa được thả lỏng'
    }
  },
  {
    id: 'page-5-service-179k',
    type: 'service',
    serviceItem: {
      id: 'srv-179k',
      name: 'TĨNH DƯỠNG',
      tagline: 'Một dòng nước chảy chậm sẽ đi được rất xa',
      price: 179000,
      description: 'Có những cái mỏi không nằm ở vai, cũng không nằm ở cổ. Mà nằm ở những điều mình giữ trong lòng quá lâu. Đôi khi, chỉ cần một đôi bàn tay đủ chạm, mọi thứ sẽ dần buông xuống',
      includes: [
        { label: 'Làm sạch', icon: 'droplet' },
        { label: 'Tẩy tế bào chết da mặt', icon: 'sparkles' },
        { label: 'Đắp mặt nạ dưỡng ẩm', icon: 'mask' },
        { label: 'Massage mặt nâng cơ', icon: 'hand' },
        { label: 'Massage cổ vai gáy', icon: 'hand' },
        { label: 'Gội 2 lần với dầu thảo dược', icon: 'leaf' },
        { label: 'Ủ tóc mềm mượt', icon: 'wind' },
        { label: 'Thư giãn vòm tuần hoàn', icon: 'circle-dashed' },
        { label: 'Kéo khăn nóng', icon: 'thermometer' }
      ],
      note: 'Mái tóc cũng giống như lòng mình, dịu đi thì mới mềm lại'
    }
  },
  {
    id: 'page-6-service-289k',
    type: 'service',
    serviceItem: {
      id: 'srv-289k',
      name: 'PHỤC HỒI',
      tagline: 'Nước không mạnh nhưng đủ kiên nhẫn để làm mềm cả đá',
      price: 289000,
      description: 'Cơ thể luôn biết cách nói với chúng ta. Chỉ là mình ít khi chịu ngồi xuống để lắng nghe. Ở đây, bạn có thể nghỉ một chút. Giữa những ngày vội',
      includes: [
        { label: 'Làm sạch da', icon: 'droplet' },
        { label: 'Đắp mặt nạ dưỡng ẩm', icon: 'mask' },
        { label: 'Tẩy tế bào chết da đầu', icon: 'sparkles' },
        { label: 'Massage mặt nâng cơ', icon: 'hand' },
        { label: 'Massage đầu khai thông huyệt đạo', icon: 'brain' },
        { label: 'Massage đá ngọc', icon: 'gem' },
        { label: 'Massage cổ vai gáy', icon: 'hand' },
        { label: 'Massage đá nóng', icon: 'flame' },
        { label: 'Gội 2 lần với dầu thảo dược', icon: 'leaf' },
        { label: 'Ủ tóc mềm mượt', icon: 'wind' },
        { label: 'Thư giãn vòm tuần hoàn', icon: 'circle-dashed' },
        { label: 'Kéo khăn nóng', icon: 'thermometer' }
      ],
      note: 'Có những ngày, nghỉ ngơi là cách để đi tiếp'
    }
  },
  {
    id: 'page-7-service-450k',
    type: 'service',
    serviceItem: {
      id: 'srv-450k',
      name: 'SIGNATURE XILE',
      tagline: 'Khi cơ thể không còn chống lại chính mình',
      price: 450000,
      description: 'Một mái tóc sạch không chỉ mang lại vẻ đẹp. Một cơ thể được thư giãn đúng cách sẽ mang lại năng lượng để bạn sống trọn vẹn hơn mỗi ngày',
      includes: [
        { label: 'Chăm sóc da nhẹ nhàng', icon: 'droplet' },
        { label: 'Massage mặt nâng cơ', icon: 'hand' },
        { label: 'Hút bã nhờn', icon: 'wind' },
        { label: 'Xông hơi mặt', icon: 'cloud' },
        { label: 'Cấy tinh chất trắng da', icon: 'sparkles' },
        { label: 'Massage đầu khai thông huyệt đạo', icon: 'brain' },
        { label: 'Massage đá ngọc', icon: 'gem' },
        { label: 'Massage cổ vai gáy', icon: 'hand' },
        { label: 'Massage đá nóng', icon: 'flame' },
        { label: 'Massage tay', icon: 'hand' },
        { label: 'Ráy tai thư giãn', icon: 'ear' },
        { label: 'Gội 2 lần với dầu thảo dược', icon: 'leaf' },
        { label: 'Ủ tóc mềm mượt', icon: 'wind' },
        { label: 'Xông tai nến', icon: 'flame' },
        { label: 'Thư giãn vòm tuần hoàn', icon: 'circle-dashed' },
        { label: 'Kéo khăn nóng', icon: 'thermometer' }
      ],
      note: 'Hy vọng khi rời Xile, bạn mang theo một chút bình yên về nhà'
    }
  },
  {
    id: 'page-8-skin-category',
    type: 'category-cover',
    category: {
      id: 'cat-skin',
      chapter: 2,
      title: 'LÀN DA',
      subtitle: 'Làm Sạch & Chăm Sóc',
      coverQuote: '"Làn da khỏe là làn da đẹp nhất"',
      items: []
    }
  },
  {
    id: 'page-9-skin-services',
    type: 'category-cover', // Đổi sang category-cover để mượn tạm giao diện vàng
    category: { // Tạm thời dùng category để chứa list dịch vụ lẻ
       id: 'cat-skin-list',
       chapter: 2,
       title: 'LÀM SẠCH & CHĂM SÓC',
       coverQuote: 'Gạt đi lớp bụi ngày dài, Giữ lại sự dịu dàng trên da',
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
  },
  {
    id: 'page-11-back-cover',
    type: 'back-cover'
  }
];
