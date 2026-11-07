import { useMemo } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { detectWebGL } from '@/utils/webgl';

export function useDeviceProfile() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const webgl = useMemo(() => detectWebGL(), []);

  return {
    isMobile,
    isTablet,
    reducedMotion,
    webgl,
    // Lower particle counts and disable DPR scaling on phones and tablets.
    particleCount: isMobile ? 40 : isTablet ? 90 : 180,
    dpr: isMobile ? [1, 1.25] : [1, 1.5],
  };
}
