import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';
import { skillCategories } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 px-5 py-24 md:px-12 md:py-32" aria-labelledby="skills-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="skills-title" eyebrow="02 // Abilities" title="SKILL DIMENSION" />

        <motion.ul
          variants={staggerContainer(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.li key={category.id} variants={fadeUp} className="holo-card group p-6 md:p-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/5 text-cyan transition duration-500 group-hover:shadow-glow">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold tracking-wide text-ghost">{category.title}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-steel/15 bg-void/50 px-3 py-1.5 font-mono text-xs text-steel transition duration-300 hover:border-cyan hover:text-cyan hover:shadow-glow"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
