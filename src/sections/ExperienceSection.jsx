import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/animations/gsap';
import { fadeUp, viewportOnce } from '@/animations/variants';
import SectionHeading from '@/components/common/SectionHeading';
import { experience } from '@/data/experience';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const MISSION_ICONS = [Rocket, Briefcase];

export default function ExperienceSection() {
  const trackRef = useRef(null);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    if (reducedMotion || !trackRef.current) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-timeline-line]',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: { trigger: trackRef.current, start: 'top 75%', end: 'bottom 60%', scrub: true },
        }
      );
    }, trackRef);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [reducedMotion]);

  return (
    <section id="experience" className="relative z-10 px-5 py-24 md:px-12 md:py-32" aria-labelledby="experience-title">
      <div className="mx-auto max-w-5xl">
        <SectionHeading id="experience-title" eyebrow="04 // Timeline" title="MISSION LOG" />

        <div ref={trackRef} className="relative mt-16">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-steel/15 md:left-1/2 md:-translate-x-1/2" aria-hidden="true">
            <div data-timeline-line className="h-full w-full bg-gradient-to-b from-cyan via-neon to-cyan shadow-glow" />
          </div>

          <ol className="flex flex-col gap-12">
            {experience.map((entry, index) => {
              const Icon = MISSION_ICONS[index % MISSION_ICONS.length];
              const isRight = index % 2 === 1;
              return (
                <motion.li
                  key={entry.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="relative pl-14 md:grid md:grid-cols-2 md:gap-12 md:pl-0"
                >
                  <span
                    className="absolute left-0 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-cyan/50 bg-void text-cyan shadow-glow md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  <div className={`holo-card p-6 md:p-7 ${isRight ? 'md:col-start-2' : ''}`}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan">
                      Mission {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ghost">{entry.company}</h3>
                    <p className="mt-2 text-sm font-semibold text-steel">
                      {entry.role}
                      {entry.focus && <span className="text-steel/70"> / {entry.focus}</span>}
                    </p>
                    {entry.summary && <p className="mt-4 text-sm leading-relaxed text-steel">{entry.summary}</p>}
                    <ul className="mt-5 space-y-2.5">
                      {entry.responsibilities.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ghost/90">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan shadow-glow" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
