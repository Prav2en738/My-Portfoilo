import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-6 bg-void px-6 text-center">
      <Hexagon className="h-14 w-14 text-cyan animate-flicker" strokeWidth={1.5} aria-hidden="true" />
      <h1 className="font-display text-4xl font-black tracking-wider text-ghost neon-text">SIGNAL LOST</h1>
      <p className="max-w-md text-steel">This sector of the city does not exist. Return to the rooftop to continue.</p>
      <Link
        to="/"
        className="inline-flex min-h-12 items-center rounded-md bg-cyan px-6 font-mono text-xs font-semibold uppercase tracking-widest text-void shadow-glow transition hover:bg-ghost"
      >
        Return home
      </Link>
    </main>
  );
}
