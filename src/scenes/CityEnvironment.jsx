import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';

const EDGE_COLORS = ['#00D9FF', '#672EFF', '#A8B5D1'];

function seeded(seed) {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

function createBuildings(rows) {
  const buildings = [];
  const rowZ = [-16, -25, -34, -43, -52, -61];
  let index = 0;

  for (let r = 0; r < rows; r++) {
    const z = rowZ[r];
    for (let x = -54; x <= 54; x += 4.6) {
      index += 1;
      const jitterX = (seeded(index) - 0.5) * 2.2;
      const width = 2.4 + seeded(index + 3) * 2.6;
      const depth = 2.6 + seeded(index + 5) * 2.4;
      const depthFactor = 1 - r * 0.1;
      const height = (5 + seeded(index + 7) * 16) * depthFactor + (seeded(index + 9) > 0.86 ? 14 : 0);
      buildings.push({
        key: index,
        position: [x + jitterX, height / 2, z - seeded(index + 13) * 2],
        size: [width, height, depth],
        edge: EDGE_COLORS[index % EDGE_COLORS.length],
        bands: height > 12 ? [height * 0.35, height * 0.7] : [height * 0.5],
      });
    }
  }
  return buildings;
}

function Building({ position, size, edge, bands }) {
  const [width, height, depth] = size;
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={size} />
        <meshStandardMaterial color="#0C1024" roughness={0.85} metalness={0.25} />
        <Edges threshold={15} color={edge} />
      </mesh>
      {bands.map((y, i) => (
        <mesh key={i} position={[0, y - height / 2, depth / 2 + 0.02]}>
          <planeGeometry args={[width * 0.72, 0.14]} />
          <meshBasicMaterial color={i % 2 ? '#672EFF' : '#00D9FF'} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

function Rooftop() {
  return (
    <group>
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[16, 0.8, 16]} />
        <meshStandardMaterial color="#0B0E1E" roughness={0.9} metalness={0.15} />
        <Edges threshold={15} color="#00D9FF" />
      </mesh>
      <mesh position={[0, 0.03, 7.9]}>
        <boxGeometry args={[16, 0.06, 0.12]} />
        <meshBasicMaterial color="#00D9FF" toneMapped={false} />
      </mesh>
      <mesh position={[-6, 0.5, -4]}>
        <cylinderGeometry args={[0.9, 0.9, 1.6, 20]} />
        <meshStandardMaterial color="#14162A" roughness={0.7} metalness={0.4} />
      </mesh>
      <mesh position={[5.5, 0.35, -5]}>
        <boxGeometry args={[1.6, 0.7, 1.2]} />
        <meshStandardMaterial color="#14162A" roughness={0.8} />
      </mesh>
      <mesh position={[-6, 4.2, -4]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 6]} />
        <meshBasicMaterial color="#00D9FF" toneMapped={false} />
      </mesh>
    </group>
  );
}

function NeonSigns() {
  const signs = [
    { position: [-9, 5, -14], color: '#00D9FF', height: 4.2 },
    { position: [10, 7, -20], color: '#672EFF', height: 5.4 },
    { position: [-18, 6, -26], color: '#00D9FF', height: 3.6 },
    { position: [15, 4, -13], color: '#672EFF', height: 3 },
  ];
  return signs.map((sign, i) => (
    <mesh key={i} position={sign.position}>
      <boxGeometry args={[0.22, sign.height, 0.12]} />
      <meshBasicMaterial color={sign.color} toneMapped={false} />
    </mesh>
  ));
}

function Moon() {
  return (
    <mesh position={[18, 34, -78]}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshBasicMaterial color="#C9D4EE" toneMapped={false} />
    </mesh>
  );
}

export default function CityEnvironment({ rows = 6 }) {
  const buildings = useRef(null);
  if (buildings.current === null) buildings.current = createBuildings(rows);

  return (
    <group>
      <Rooftop />
      <NeonSigns />
      <Moon />
      {buildings.current.map((building) => (
        <Building key={building.key} {...building} />
      ))}
    </group>
  );
}
