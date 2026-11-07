import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import ActionLink from '@/components/common/ActionLink';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  useLockBodyScroll(Boolean(project));

  useEffect(() => {
    if (!project) return undefined;
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-[60] flex items-end justify-center bg-void/80 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 48, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 48 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-dusk/95 p-6 shadow-glow sm:rounded-2xl md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p className="section-eyebrow">{project.category}</p>
                <h3 id="project-modal-title" className="font-display text-2xl font-bold leading-snug text-ghost">
                  {project.title}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-steel/25 text-ghost transition hover:border-cyan hover:text-cyan"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-6 text-base leading-relaxed text-steel">{project.details}</p>

            <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-cyan">Key highlights</h4>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ghost/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-cyan">Technology stack</h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="rounded-md border border-neon/35 bg-neon/10 px-2.5 py-1 font-mono text-[11px] text-ghost">
                  {tech}
                </li>
              ))}
            </ul>

            {(project.github || project.liveDemo) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {project.github && (
                  <ActionLink href={project.github} variant="secondary" className="flex-1">
                    View on GitHub
                  </ActionLink>
                )}
                {project.liveDemo && (
                  <ActionLink href={project.liveDemo} className="flex-1">
                    Open live demo
                  </ActionLink>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
