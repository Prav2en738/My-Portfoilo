import { clamp } from '@/utils/math';

export function getScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? clamp(window.scrollY / max) : 0;
}
