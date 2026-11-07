import CityEnvironment from '@/scenes/CityEnvironment';
import CharacterModel from '@/scenes/CharacterModel';
import FloatingParticles from '@/scenes/FloatingParticles';
import PortalScene from '@/scenes/PortalScene';
import CameraController from '@/scenes/CameraController';

export default function IntroScene({ isMobile, particleCount, reducedMotion }) {
  return (
    <>
      <fog attach="fog" args={['#080B16', 22, 75]} />
      <ambientLight intensity={0.35} color="#4B4F86" />
      <directionalLight position={[12, 26, 14]} intensity={0.7} color="#A8B5D1" />
      <pointLight position={[3, 2.5, 4]} intensity={8} distance={12} color="#00D9FF" />
      <pointLight position={[-7, 4, -6]} intensity={14} distance={22} color="#672EFF" />

      <CityEnvironment rows={isMobile ? 3 : 6} />
      <CharacterModel animate={!reducedMotion} />
      <FloatingParticles count={particleCount} speed={reducedMotion ? 0 : 0.4} />
      <PortalScene animate={!reducedMotion} />
      <CameraController reducedMotion={reducedMotion} />
    </>
  );
}
