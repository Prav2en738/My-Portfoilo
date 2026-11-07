import { lazy, Suspense, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/layout/LoadingScreen';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import SkillsSection from '@/sections/SkillsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ContactSection from '@/sections/ContactSection';

const CanvasScene = lazy(() => import('@/scenes/CanvasScene'));

export default function HomePage() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-cyan focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-void"
      >
        Skip to content
      </a>

      <Suspense fallback={null}>
        <CanvasScene />
      </Suspense>

      <AnimatePresence>
        {!introDone && <LoadingScreen key="loading" onComplete={() => setIntroDone(true)} />}
      </AnimatePresence>

      <Navbar />

      <main id="main" className="relative">
        <HeroSection ready={introDone} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
