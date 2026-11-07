import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';
import { gsap } from '@/animations/gsap';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const STATUS_LINES = [
  'INITIALIZING NEURAL INTERFACE',
  'LOADING CITY GRID',
  'CALIBRATING CHARACTER RIG',
  'SYNCHRONIZING NEON ARRAYS',
  'SYSTEM READY',
];

export default function LoadingScreen({ onComplete }) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [progress, setProgress] = useState(0);
  const finishedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      onCompleteRef.current();
    };

    const counter = { value: 0 };
    const tween = gsap.to(counter, {
      value: 100,
      duration: reducedMotion ? 0.4 : 2.4,
      ease: 'power2.inOut',
      onUpdate: () => setProgress(Math.round(counter.value)),
      onComplete: () => setTimeout(finish, reducedMotion ? 0 : 350),
    });

    const onKey = (event) => {
      if (event.key === 'Escape') {
        tween.kill();
        setProgress(100);
        finish();
      }
    };
    window.addEventListener('keydown', onKey);

    return () => {
      tween.kill();
      window.removeEventListener('keydown', onKey);
    };
  }, [reducedMotion]);

  const skip = () => {
    if (finishedRef.current) return;
    setProgress(100);
    finishedRef.current = true;
    onCompleteRef.current();
  };

  const statusIndex = Math.min(STATUS_LINES.length - 1, Math.floor((progress / 100) * STATUS_LINES.length));

  return (
    <motion.div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 scanlines opacity-40" aria-hidden="true" />
      <div className="relative flex w-full max-w-md flex-col items-center gap-10">
        <div className="flex items-center gap-4">
          <Hexagon
            className={`h-12 w-12 text-cyan drop-shadow-[0_0_12px_rgba(0,217,255,0.8)] ${reducedMotion ? '' : 'animate-[spin_6s_linear_infinite]'}`}
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <h1 className="font-display text-4xl font-black tracking-[0.25em] text-ghost neon-text">NEXUS</h1>
        </div>

        <div className="w-full space-y-4">
          <div className="h-px w-full overflow-hidden bg-steel/15">
            <div
              className="h-full bg-gradient-to-r from-neon via-cyan to-cyan shadow-glow transition-[width] duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between font-mono text-xs tracking-widest text-steel">
            <span key={statusIndex} className="animate-flicker">
              {STATUS_LINES[statusIndex]}
            </span>
            <span className="tabular-nums text-cyan">{String(progress).padStart(3, '0')}%</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={skip}
        className="absolute bottom-8 right-6 min-h-11 rounded-md border border-steel/25 px-4 font-mono text-xs uppercase tracking-widest text-steel transition hover:border-cyan hover:text-cyan md:right-10"
      >
        Skip intro
      </button>
    </motion.div>
  );
}
