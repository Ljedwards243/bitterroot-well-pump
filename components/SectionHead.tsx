import type { ReactNode } from "react";

// Design system: SectionHead. Eyebrow carries the voice, H2 carries the keyword, the
// paragraph answers the H2 directly (brief §17).
export function SectionHead({
  id,
  eyebrow,
  title,
  children,
  tone = "light",
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
  tone?: "light" | "ink";
  className?: string;
}) {
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${className}`}>
      <p className={`eyebrow ${tone === "ink" ? "text-gold" : "text-accent"}`}>{eyebrow}</p>
      <h2 id={id} className="h-section">{title}</h2>
      {children && (
        <div className={`text-lg leading-relaxed ${tone === "ink" ? "text-on-ink-muted" : "text-body"}`}>{children}</div>
      )}
    </div>
  );
}
