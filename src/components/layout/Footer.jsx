import { Hexagon } from 'lucide-react';
import { personalInfo } from '@/data/personalInfo';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-steel/10 bg-void/80 px-5 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <Hexagon className="h-5 w-5 text-cyan" strokeWidth={1.75} aria-hidden="true" />
          <span className="font-display text-sm font-bold tracking-[0.2em] text-ghost">{personalInfo.brand}</span>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-steel">{personalInfo.tagline}</p>
        <p className="text-xs text-steel/80">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
