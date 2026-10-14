import { sources, type SourceKey } from "@/lib/sources";

// Inline attributed link to a source (brief §12, §17).
export function Source({ id, children }: { id: SourceKey; children?: React.ReactNode }) {
  const { href, label } = sources[id];
  return (
    <a href={href} target="_blank" rel="noopener">
      {children ?? label}
    </a>
  );
}

// Mono caption under a figure or number (design system: caption).
export function SourceLine({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "ink" }) {
  return (
    <p className={`font-mono text-xs leading-relaxed ${tone === "ink" ? "text-on-ink-faint" : "text-muted"}`}>
      {children}
    </p>
  );
}
