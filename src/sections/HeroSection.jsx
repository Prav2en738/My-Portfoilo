import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/animations/gsap';
import { fadeUp, staggerContainer } from '@/animations/variants';
import ActionLink from '@/components/common/ActionLink';
import { personalInfo } from '@/data/personalInfo';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function HeroSection({ ready }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !contentRef.current) return undefined;
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom 45%',
          scrub: true,
        },
      });
    }, sectionRef);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [reducedMotion]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative z-10 flex min-h-[100svh] items-center overflow-hidden px-5 pb-24 pt-28 md:px-12"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void via-void/70 to-void/10 md:via-void/50"
        aria-hidden="true"
      />

      <motion.div
        ref={contentRef}
        variants={staggerContainer(0.2, 0.14)}
        initial="hidden"
        animate={ready ? 'show' : 'hidden'}
        className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-6"
      >
        <motion.div variants={fadeUp} className="inline-flex items-center gap-3 rounded-full border border-cyan/30 bg-void/60 px-4 py-2 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">WELCOME TO MY UNIVERSE</span>
        </motion.div>

        <motion.h1 id="hero-title" variants={fadeUp} className="flex flex-col font-display font-black leading-[1.05]">
          <span className="glitch text-4xl text-ghost sm:text-5xl md:text-6xl lg:text-7xl" data-text={personalInfo.name}>
            {personalInfo.name.toUpperCase()}
          </span>
          <span className="mt-3 font-mono text-sm font-medium uppercase tracking-[0.4em] text-cyan sm:text-base">
            {personalInfo.role}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="bg-gradient-to-r from-neon via-cyan to-cyan bg-clip-text font-display text-2xl font-bold tracking-[0.15em] text-transparent sm:text-3xl md:text-4xl"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.p variants={fadeUp} className="max-w-xl text-base leading-relaxed text-steel md:text-lg">
          {personalInfo.heroSubtitle}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <button
            type="button"
            onClick={scrollToAbout}
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan px-6 font-mono text-xs font-semibold uppercase tracking-widest text-void shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-ghost active:scale-[0.98] sm:w-auto"
          >
            Explore my universe
          </button>
          <button
            type="button"
            onClick={scrollToContact}
            aria-label="Contact me"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-cyan/70 bg-cyan/10 px-5 font-mono text-xs font-semibold uppercase tracking-widest text-cyan transition duration-300 hover:bg-cyan hover:text-void hover:shadow-glow active:scale-[0.98] sm:w-auto"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
            Contact Us
          </button>
          <ActionLink
            href={`mailto:${personalInfo.contact.email}`}
            icon={Mail}
            variant="secondary"
            className="sm:w-auto"
          >
            Mail
          </ActionLink>
          <ActionLink
            href={personalInfo.contact.linkedin}
            icon={Linkedin}
            variant="secondary"
            className="sm:w-auto"
          >
            LinkedIn
          </ActionLink>
          <ActionLink
            href={personalInfo.contact.github}
            icon={Github}
            variant="secondary"
            className="sm:w-auto"
          >
            GitHub
          </ActionLink>
          <ActionLink
            href={personalInfo.resumeUrl}
            icon={Download}
            variant="secondary"
            download
            pendingLabel="Resume coming soon"
            className="sm:w-auto"
          >
            Download resume
          </ActionLink>
        </motion.div>
      </motion.div>

      <button
        type="button"
        onClick={scrollToAbout}
        aria-label="Scroll to profile"
        className="absolute bottom-6  left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-steel/25 text-steel transition hover:border-cyan hover:text-cyan"
      >
        <ChevronDown className="h-5 w-5 animate-float" aria-hidden="true" />
      </button>
    </section>
  );
}
