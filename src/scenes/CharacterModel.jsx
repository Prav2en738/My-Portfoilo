import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const JACKET = '#0A0B12';
const PANTS = '#07080D';
const SKIN = '#E7C3A6';
const HAIR = '#0B0D18';
const NEON = '#00D9FF';

export default function CharacterModel({ animate = true }) {
  const root = useRef(null);
  const head = useRef(null);

  useFrame(({ clock }) => {
    if (!animate || !root.current || !head.current) return;
    const t = clock.elapsedTime;
    root.current.position.y = Math.sin(t * 1.4) * 0.012;
    head.current.rotation.y = Math.sin(t * 0.5) * 0.12;
    head.current.rotation.x = Math.sin(t * 0.7) * 0.03;
  });

  return (
    <group ref={root} rotation={[0, 0.3, 0]}>
      <mesh position={[-0.14, 0.45, 0]}>
        <capsuleGeometry args={[0.1, 0.5, 4, 10]} />
        <meshStandardMaterial color={PANTS} roughness={0.7} />
      </mesh>
      <mesh position={[0.14, 0.45, 0]}>
        <capsuleGeometry args={[0.1, 0.5, 4, 10]} />
        <meshStandardMaterial color={PANTS} roughness={0.7} />
      </mesh>
      <mesh position={[-0.14, 0.06, 0.03]}>
        <boxGeometry args={[0.26, 0.12, 0.36]} />
        <meshStandardMaterial color="#050608" roughness={0.6} />
      </mesh>
      <mesh position={[0.14, 0.06, 0.03]}>
        <boxGeometry args={[0.26, 0.12, 0.36]} />
        <meshStandardMaterial color="#050608" roughness={0.6} />
      </mesh>

      <mesh position={[0, 0.98, 0]}>
        <boxGeometry args={[0.5, 0.25, 0.3]} />
        <meshStandardMaterial color={PANTS} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.95, -0.18]} rotation={[0.08, 0, 0]}>
        <boxGeometry args={[0.52, 0.85, 0.1]} />
        <meshStandardMaterial color={JACKET} roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[0, 1.3, 0]}>
        <boxGeometry args={[0.56, 0.72, 0.32]} />
        <meshStandardMaterial color={JACKET} roughness={0.45} metalness={0.35} />
      </mesh>
      <mesh position={[0, 1.32, 0.17]}>
        <boxGeometry args={[0.12, 0.5, 0.02]} />
        <meshStandardMaterial color="#11131F" roughness={0.5} />
      </mesh>
      <mesh position={[0, 1.32, 0.178]}>
        <boxGeometry args={[0.02, 0.5, 0.01]} />
        <meshBasicMaterial color={NEON} toneMapped={false} />
      </mesh>
      <mesh position={[-0.1, 1.64, 0.14]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[0.2, 0.035, 0.03]} />
        <meshBasicMaterial color={NEON} toneMapped={false} />
      </mesh>
      <mesh position={[0.1, 1.64, 0.14]} rotation={[0, 0, -0.5]}>
        <boxGeometry args={[0.2, 0.035, 0.03]} />
        <meshBasicMaterial color={NEON} toneMapped={false} />
      </mesh>

      <mesh position={[-0.34, 1.62, 0]} scale={[1, 0.7, 0.9]}>
        <sphereGeometry args={[0.16, 16, 12]} />
        <meshStandardMaterial color={JACKET} roughness={0.45} metalness={0.35} />
      </mesh>
      <mesh position={[0.34, 1.62, 0]} scale={[1, 0.7, 0.9]}>
        <sphereGeometry args={[0.16, 16, 12]} />
        <meshStandardMaterial color={JACKET} roughness={0.45} metalness={0.35} />
      </mesh>
      <mesh position={[-0.4, 1.2, 0.02]} rotation={[0, 0, 0.12]}>
        <capsuleGeometry args={[0.09, 0.5, 4, 10]} />
        <meshStandardMaterial color={JACKET} roughness={0.45} metalness={0.35} />
      </mesh>
      <mesh position={[0.4, 1.2, 0.02]} rotation={[0, 0, -0.12]}>
        <capsuleGeometry args={[0.09, 0.5, 4, 10]} />
        <meshStandardMaterial color={JACKET} roughness={0.45} metalness={0.35} />
      </mesh>
      <mesh position={[-0.44, 0.78, 0.05]}>
        <sphereGeometry args={[0.07, 12, 10]} />
        <meshStandardMaterial color={SKIN} roughness={0.6} />
      </mesh>
      <mesh position={[0.44, 0.78, 0.05]}>
        <sphereGeometry args={[0.07, 12, 10]} />
        <meshStandardMaterial color={SKIN} roughness={0.6} />
      </mesh>

      <mesh position={[0, 1.7, 0]}>
        <cylinderGeometry args={[0.08, 0.09, 0.14, 12]} />
        <meshStandardMaterial color={SKIN} roughness={0.6} />
      </mesh>

      <group ref={head} position={[0, 1.88, 0]}>
        <mesh scale={[0.95, 1.08, 0.95]}>
          <sphereGeometry args={[0.2, 28, 22]} />
          <meshStandardMaterial color={SKIN} roughness={0.55} />
        </mesh>
        <mesh position={[0, 0.03, -0.03]} scale={[1.08, 1.0, 1.08]}>
          <sphereGeometry args={[0.23, 28, 18, 0, Math.PI * 2, 0, 1.95]} />
          <meshStandardMaterial color={HAIR} roughness={0.35} metalness={0.2} />
        </mesh>
        <mesh position={[-0.03, 0.13, 0.19]} rotation={[0.35, 0, 0.12]}>
          <boxGeometry args={[0.36, 0.09, 0.1]} />
          <meshStandardMaterial color={HAIR} roughness={0.35} metalness={0.2} />
        </mesh>
        <mesh position={[-0.12, 0.02, 0.18]}>
          <boxGeometry args={[0.06, 0.03, 0.02]} />
          <meshBasicMaterial color={NEON} toneMapped={false} />
        </mesh>
        <mesh position={[0.07, 0.02, 0.18]}>
          <boxGeometry args={[0.06, 0.03, 0.02]} />
          <meshBasicMaterial color={NEON} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}
