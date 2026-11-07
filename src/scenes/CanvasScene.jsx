import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import IntroScene from '@/scenes/IntroScene';
import SceneErrorBoundary from '@/components/common/SceneErrorBoundary';
import { useDeviceProfile } from '@/hooks/useDeviceProfile';

export default function CanvasScene() {
  const { webgl, dpr, isMobile, particleCount, reducedMotion } = useDeviceProfile();

  if (!webgl) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <SceneErrorBoundary>
        <Canvas
          dpr={dpr}
          camera={{ fov: isMobile ? 52 : 42, position: [4.2, 2.1, 7.5], near: 0.1, far: 200 }}
          gl={{ antialias: !isMobile, powerPreference: 'high-performance' }}
          onCreated={({ gl }) => gl.setClearColor('#080B16')}
        >
          <Suspense fallback={null}>
            <IntroScene isMobile={isMobile} particleCount={particleCount} reducedMotion={reducedMotion} />
          </Suspense>
        </Canvas>
      </SceneErrorBoundary>
    </div>
  );
}
