import { ArrowUpRight } from 'lucide-react';

const VARIANTS = {
  primary:
    'border-cyan/70 bg-cyan/10 text-cyan hover:bg-cyan hover:text-void hover:shadow-glow',
  secondary:
    'border-steel/25 text-ghost hover:border-neon hover:text-ghost hover:shadow-glow-neon',
};

export default function ActionLink({
  href,
  children,
  icon: Icon,
  variant = 'primary',
  download = false,
  pendingLabel = 'Coming soon',
  className = '',
}) {
  const base = `group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-5 font-mono text-xs font-medium uppercase tracking-widest transition duration-300 active:scale-[0.98] ${VARIANTS[variant]} ${className}`;

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`${base} cursor-not-allowed border-steel/15 text-steel/70 hover:bg-transparent hover:text-steel/70 hover:shadow-none`}
      >
        {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
        {pendingLabel}
      </span>
    );
  }

  const isExternal = !href.startsWith('/') && !href.startsWith('#');

  return (
    <a
      href={href}
      download={download || undefined}
      target={isExternal && !download ? '_blank' : undefined}
      rel={isExternal && !download ? 'noreferrer noopener' : undefined}
      className={base}
    >
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {children}
      {isExternal && !download && (
        <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </a>
  );
}
