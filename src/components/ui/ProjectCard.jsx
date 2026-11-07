import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import ActionLink from '@/components/common/ActionLink';
import { fadeUp } from '@/animations/variants';

export default function ProjectCard({ project, onOpen }) {
  const Icon = project.icon;

  return (
    <motion.article variants={fadeUp} className="holo-card group flex h-full flex-col">
      <div
        className="relative flex h-52 items-center justify-center overflow-hidden border-b border-steel/10"
        style={{ backgroundImage: `linear-gradient(140deg, ${project.visual.from}, ${project.visual.to})` }}
      >
        <div
          className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(0,217,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.25)_1px,transparent_1px)] [background-size:28px_28px] transition-transform duration-700 group-hover:scale-110"
          aria-hidden="true"
        />
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl" style={{ backgroundColor: project.visual.accent, opacity: 0.25 }} aria-hidden="true" />
        <span
          className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-ghost/20 bg-void/50 backdrop-blur-md transition duration-500 group-hover:scale-105 group-hover:shadow-glow"
          style={{ color: project.visual.accent }}
        >
          <Icon className="h-9 w-9" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <span className="absolute left-4 top-4 rounded-md bg-void/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
        <h3 className="font-display text-xl font-bold leading-snug tracking-wide text-ghost">{project.title}</h3>
        <p className="text-sm leading-relaxed text-steel md:text-base">{project.description}</p>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="rounded-md border border-neon/35 bg-neon/10 px-2.5 py-1 font-mono text-[11px] text-ghost">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-cyan px-5 font-mono text-xs font-semibold uppercase tracking-widest text-void transition duration-300 hover:bg-ghost active:scale-[0.98]"
          >
            View details
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </button>
          {project.github && (
            <ActionLink href={project.github} icon={Github} variant="secondary" className="flex-1">
              GitHub
            </ActionLink>
          )}
          {project.liveDemo && (
            <ActionLink href={project.liveDemo} variant="secondary" className="flex-1">
              Live demo
            </ActionLink>
          )}
        </div>
      </div>
    </motion.article>
  );
}
