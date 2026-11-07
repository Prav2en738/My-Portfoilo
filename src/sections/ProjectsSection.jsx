import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import ProjectModal from '@/components/ui/ProjectModal';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative z-10 px-5 py-24 md:px-12 md:py-32" aria-labelledby="projects-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="projects-title"
          eyebrow="03 // Work"
          title="PROJECT DIMENSION"
          subtitle="A selection of applications spanning movie discovery, e-commerce, enterprise operations, and immersive 3D experiences."
        />

        <motion.div
          variants={staggerContainer(0, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
