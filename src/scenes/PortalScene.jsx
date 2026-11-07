import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { DoubleSide } from 'three';
import { getScrollProgress } from '@/utils/scroll';
import { smoothstep } from '@/utils/math';

export default function PortalScene({ animate = true }) {
  const group = useRef(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const visible = Math.max(0.001, smoothstep(0.6, 1, getScrollProgress()));
    group.current.scale.setScalar(visible);
    if (animate) group.current.rotation.z = clock.elapsedTime * 0.2;
  });

  return (
    <group ref={group} position={[-5, 4.5, -10]} rotation={[0, 0.2, 0]} scale={0.001}>
      <mesh>
        <torusGeometry args={[3, 0.05, 16, 120]} />
        <meshBasicMaterial color="#00D9FF" toneMapped={false} />
      </mesh>
      <mesh>
        <torusGeometry args={[2.6, 0.12, 16, 120]} />
        <meshBasicMaterial color="#672EFF" transparent opacity={0.7} toneMapped={false} />
      </mesh>
      <mesh>
        <circleGeometry args={[2.5, 64]} />
        <meshBasicMaterial color="#672EFF" transparent opacity={0.12} side={DoubleSide} depthWrite={false} />
      </mesh>
      <Sparkles count={60} scale={[5, 5, 2]} size={4} speed={animate ? 0.6 : 0} color="#00D9FF" />
    </group>
  );
}
