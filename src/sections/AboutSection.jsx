import { motion } from 'framer-motion';
import { Download, Github, Mail, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import ActionLink from '@/components/common/ActionLink';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';
import { personalInfo } from '@/data/personalInfo';

const STATS = [
  { label: 'Experience', value: personalInfo.experience },
  { label: 'Focus', value: 'Frontend' },
  { label: 'Core Stack', value: 'React.js' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-5 py-24 md:px-12 md:py-32" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="holo-card mx-auto w-full max-w-sm p-8"
        >
          <div className="relative mx-auto flex aspect-square w-56 items-center justify-center">
            <div className="absolute inset-0 animate-[spin_12s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#00D9FF,#672EFF,#00D9FF)] opacity-70 blur-[1px]" />
            <div className="absolute inset-[6px] rounded-full bg-void" />
            <div className="absolute inset-[14px] flex items-center justify-center rounded-full bg-gradient-to-br from-dusk via-void to-dusk">
              <span className="font-display text-5xl font-black tracking-wider text-ghost neon-text" aria-hidden="true">
                {personalInfo.avatarInitials}
              </span>
            </div>
            <div className="scanlines pointer-events-none absolute inset-[14px] rounded-full" aria-hidden="true" />
          </div>
          <div className="mt-8 text-center">
            <p className="font-display text-lg font-bold tracking-wide text-ghost">{personalInfo.name}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-cyan">{personalInfo.role}</p>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-steel/10 pt-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-steel">{stat.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-ghost">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <div className="flex flex-col gap-8">
          <SectionHeading id="about-title" eyebrow="01 // Profile" title="CHARACTER PROFILE" />
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="glass rounded-2xl p-6 md:p-8">
            <p className="text-base leading-relaxed text-steel md:text-lg">{personalInfo.about}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            <motion.p variants={fadeUp} className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-steel">
              <Sparkles className="h-4 w-4 text-cyan" aria-hidden="true" />
              Currently learning
            </motion.p>
            <motion.ul variants={fadeUp} className="flex flex-wrap gap-3">
              {personalInfo.currentLearning.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-neon/50 bg-neon/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-ghost shadow-glow-neon"
                >
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-col gap-4 sm:flex-row">
            <ActionLink href={personalInfo.resumeUrl} icon={Download} download pendingLabel="Resume coming soon">
              Download resume
            </ActionLink>
            <ActionLink href={personalInfo.contact.github} icon={Github} variant="secondary" pendingLabel="GitHub coming soon">
              GitHub
            </ActionLink>
            <ActionLink href="#contact" icon={Mail} variant="secondary">
              Contact
            </ActionLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
