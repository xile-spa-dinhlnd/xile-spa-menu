import type { BookPage } from '../types/menu.types';
import categoryHairCover from '@/assets/images/category-hair-cover.webp';
import serviceHair69k from '@/assets/images/service-hair-69k.webp';
import serviceHair179k from '@/assets/images/service-hair-179k.webp';
import serviceHair289k from '@/assets/images/service-hair-289k.webp';
import serviceHair450k from '@/assets/images/service-hair-450k.webp';

export const hairChapterPages: BookPage[] = [
  {
    id: 'page-3-hair-category',
    type: 'category-cover',
    side: 'right',
    imageUrl: categoryHairCover,
    category: {
      id: 'cat-hair',
      chapter: 1,
      title: 'GỘI DƯỠNG SINH',
      subtitle: 'CHƯƠNG 1: MÁI TÓC',
      tagline: '“Sạch tóc - Nhẹ đầu - Nuôi dưỡng từ gốc”',
      coverQuote: '"Tóc là góc con người"',
      theme: 'hair',
      philosophy: 'Không chỉ là một buổi gội đầu.\nĐó là khoảng thời gian để cơ thể chậm lại, tâm trí được nghỉ ngơi,\ntừng giác quan được chữa lành bằng hương thảo dược, hơi ấm và\nđôi bàn tay giàu kinh nghiệm.',
      items: [] // Không dùng ở page này
    }
  },
  {
    id: 'page-4-service-69k',
    type: 'service',
    side: 'left',
    imageUrl: serviceHair69k,
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
    side: 'right',
    imageUrl: serviceHair179k,
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
    side: 'left',
    imageUrl: serviceHair289k,
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
    side: 'right',
    imageUrl: serviceHair450k,
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
  }
];
