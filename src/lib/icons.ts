import type { LucideIcon } from 'lucide-react';
import {
  Droplet,
  Sparkles,
  Leaf,
  Wind,
  Hand,
  CircleDashed,
  Thermometer,
  Brain,
  Gem,
  Flame,
  Cloud,
  Ear,
  Flower2,
} from 'lucide-react';

/**
 * Bảng ánh xạ icon tên chuỗi sang LucideIcon component chuẩn Type-safe.
 * Giúp tree-shaking tối ưu và loại bỏ hoàn toàn việc dùng `any` hay `@ts-ignore`.
 */
export const SERVICE_ICONS: Record<string, LucideIcon> = {
  droplet: Droplet,
  sparkles: Sparkles,
  mask: Flower2, // Mask đại diện bằng biểu tượng hoa sen thảo dược
  leaf: Leaf,
  wind: Wind,
  hand: Hand,
  'circle-dashed': CircleDashed,
  thermometer: Thermometer,
  brain: Brain,
  gem: Gem,
  flame: Flame,
  cloud: Cloud,
  ear: Ear,
};

/**
 * Lấy Icon component từ tên icon chuỗi, có fallback an toàn
 */
export function getServiceIcon(iconName?: string): LucideIcon {
  if (!iconName) return Flower2;
  const normalized = iconName.trim().toLowerCase();
  return SERVICE_ICONS[normalized] ?? Flower2;
}
