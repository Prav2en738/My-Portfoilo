import { motion } from 'framer-motion';
import { viewportOnce, fadeUp } from '@/animations/variants';

export default function SectionHeading({ id, eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex flex-col gap-4 ${alignment}`}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={id} className="font-display text-3xl font-bold leading-tight tracking-wide text-ghost neon-text sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="max-w-2xl text-base leading-relaxed text-steel md:text-lg">{subtitle}</p>}
    </motion.header>
  );
}
