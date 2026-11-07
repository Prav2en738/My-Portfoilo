import { Sparkles } from '@react-three/drei';

export default function FloatingParticles({ count = 120, speed = 0.4 }) {
  return (
    <>
      <Sparkles
        count={Math.round(count * 0.6)}
        scale={[18, 10, 18]}
        position={[0, 4, -4]}
        size={3}
        speed={speed * 0.5}
        color="#00D9FF"
        opacity={0.8}
      />
      <Sparkles
        count={Math.round(count * 0.4)}
        scale={[22, 12, 22]}
        position={[0, 4, -4]}
        size={4}
        speed={speed * 0.3}
        color="#A8B5D1"
        opacity={0.6}
      />
    </>
  );
}
