import { useEffect, useState } from 'react';
import { Hexagon, Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { personalInfo } from '@/data/personalInfo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'border-b border-steel/10 bg-void/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-12" aria-label="Primary">
        <button
          type="button"
          onClick={() => goTo('home')}
          className="flex min-h-11 items-center gap-2 rounded-md"
          aria-label={`${personalInfo.brand} home`}
        >
          <Hexagon className="h-7 w-7 text-cyan" strokeWidth={1.75} aria-hidden="true" />
          <span className="font-display text-lg font-bold tracking-[0.2em] text-ghost">{personalInfo.brand}</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => goTo(link.id)}
                className="group relative min-h-11 px-4 font-mono text-xs uppercase tracking-widest text-steel transition hover:text-cyan"
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-2 h-px origin-left scale-x-0 bg-cyan shadow-glow transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-steel/20 text-ghost lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-steel/10 bg-void/95 px-5 py-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => goTo(link.id)}
                className="flex min-h-12 w-full items-center border-b border-steel/10 font-mono text-sm uppercase tracking-widest text-ghost transition hover:text-cyan"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
