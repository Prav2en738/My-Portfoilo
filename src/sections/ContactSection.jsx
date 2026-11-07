import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import ActionLink from '@/components/common/ActionLink';
import CopyEmailButton from '@/components/ui/CopyEmailButton';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';
import { personalInfo } from '@/data/personalInfo';

const { email, linkedin, github } = personalInfo.contact;

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 px-5 py-24 md:px-12 md:py-32" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            id="contact-title"
            eyebrow="05 // Connect"
            title="ENTER THE CONTACT PORTAL"
            subtitle="Have a project, a role, or an idea worth building? Open a channel and reach out. I read every message."
          />
        </div>

        <motion.div
          variants={staggerContainer(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          <motion.div variants={fadeUp} className="holo-card flex flex-col gap-5 p-6 md:p-7">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-cyan" aria-hidden="true" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-steel">Email</p>
            </div>
            <p className="break-all font-body text-lg text-ghost">{email ?? 'Not published yet'}</p>
            <CopyEmailButton email={email} />
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
            <ActionLink href={linkedin} icon={Linkedin} variant="secondary" pendingLabel="LinkedIn soon">
              LinkedIn
            </ActionLink>
            <ActionLink href={github} icon={Github} variant="secondary" pendingLabel="GitHub soon">
              GitHub
            </ActionLink>
            <ActionLink href={personalInfo.resumeUrl} icon={Download} variant="secondary" download pendingLabel="Resume soon">
              Resume
            </ActionLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
