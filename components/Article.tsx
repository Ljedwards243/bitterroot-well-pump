import type { ReactNode } from "react";

// Inner-page body: a readable column with an optional aside on wide screens.
export function Article({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-20">{children}</div>;
}

export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`prose-wl max-w-3xl ${className}`}>{children}</div>;
}

// Answer-first box: the direct answer with its key number (brief §17).
export function KeyAnswer({ label = "Short answer", children }: { label?: string; children: ReactNode }) {
  return (
    <aside className="my-8 max-w-3xl border-l-[3px] border-accent bg-ground-alt px-5 py-4 sm:px-6">
      <p className="eyebrow text-accent">{label}</p>
      <div className="mt-2 text-lg leading-relaxed text-ink">{children}</div>
    </aside>
  );
}

export function LastReviewed({ date }: { date: string }) {
  return <p className="mt-10 max-w-3xl font-mono text-xs text-muted">Last reviewed {date}. General information, not legal or medical advice.</p>;
}
