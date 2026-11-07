import { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CopyEmailButton({ email }) {
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (status === 'idle') return undefined;
    const timer = setTimeout(() => setStatus('idle'), 2200);
    return () => clearTimeout(timer);
  }, [status]);

  if (!email) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-steel/15 px-5 font-mono text-xs uppercase tracking-widest text-steel/70 sm:w-auto"
      >
        Email coming soon
      </span>
    );
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus('copied');
    } catch {
      setStatus('error');
    }
  };

  const label = status === 'copied' ? 'Copied to clipboard' : status === 'error' ? 'Copy failed' : 'Copy email';
  const Icon = status === 'copied' ? Check : Copy;

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-cyan/70 bg-cyan/10 px-5 font-mono text-xs font-medium uppercase tracking-widest text-cyan transition duration-300 hover:bg-cyan hover:text-void hover:shadow-glow active:scale-[0.98] sm:w-auto"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      <span aria-live="polite">{label}</span>
    </button>
  );
}
