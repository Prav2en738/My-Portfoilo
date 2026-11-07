import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { getScrollProgress } from '@/utils/scroll';
import { lerp } from '@/utils/math';

const KEYFRAMES = [
  { p: 0, pos: [4.2, 2.1, 7.5], look: [-1.3, 1.3, 0] },
  { p: 0.35, pos: [-3.6, 2.5, 5.2], look: [-0.8, 1.4, 0] },
  { p: 0.7, pos: [0.4, 2.0, 3.4], look: [-0.4, 1.6, 0] },
  { p: 1, pos: [0.5, 3.3, 2.2], look: [-2, 3.2, -6] },
];

function sampleKeyframes(p) {
  for (let i = 0; i < KEYFRAMES.length - 1; i++) {
    const a = KEYFRAMES[i];
    const b = KEYFRAMES[i + 1];
    if (p <= b.p) {
      const t = (p - a.p) / (b.p - a.p);
      const eased = t * t * (3 - 2 * t);
      return {
        pos: a.pos.map((v, j) => lerp(v, b.pos[j], eased)),
        look: a.look.map((v, j) => lerp(v, b.look[j], eased)),
      };
    }
  }
  const last = KEYFRAMES[KEYFRAMES.length - 1];
  return { pos: last.pos, look: last.look };
}

export default function CameraController({ reducedMotion = false }) {
  const { camera } = useThree();
  const pointer = useRef({ x: 0, y: 0 });
  const current = useRef({
    pos: [...KEYFRAMES[0].pos],
    look: [...KEYFRAMES[0].look],
  });

  useEffect(() => {
    if (reducedMotion) return undefined;
    const onMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reducedMotion]);

  useFrame((_, delta) => {
    const target = sampleKeyframes(reducedMotion ? 0 : getScrollProgress());
    const parallaxX = reducedMotion ? 0 : pointer.current.x * 0.35;
    const parallaxY = reducedMotion ? 0 : -pointer.current.y * 0.2;
    const k = 1 - Math.exp(-delta * 2.5);

    const goal = [target.pos[0] + parallaxX, target.pos[1] + parallaxY, target.pos[2]];
    current.current.pos = current.current.pos.map((v, i) => lerp(v, goal[i], k));
    current.current.look = current.current.look.map((v, i) => lerp(v, target.look[i], k));

    camera.position.set(...current.current.pos);
    camera.lookAt(...current.current.look);
  });

  return null;
}
