import Link from "next/link";
import { services } from "@/lib/nav";

// Design system: SituationIndex. Each row is one link whose text includes the service
// keyword, so it doubles as the internal-linking hub (standards §5).
export function SituationIndex({ exclude, label = "Well pump services" }: { exclude?: string; label?: string }) {
  const rows = services.filter((s) => s.href !== exclude);
  return (
    <nav aria-label={label} className="flex flex-col border-t-2 border-ink">
      {rows.map((s, i) => (
        <Link
          key={s.href}
          href={s.href}
          className="group flex min-h-16 items-center gap-x-4 border-b border-rule px-1 py-5 text-ink hover:bg-rule-soft sm:flex-wrap sm:items-baseline sm:gap-x-7 sm:gap-y-1.5 sm:px-3 sm:py-6"
        >
          <span className="w-7 shrink-0 font-mono text-sm text-muted sm:w-8">{String(i + 1).padStart(2, "0")}</span>
          <span className="min-w-0 flex-1 text-[1.3rem] font-bold leading-tight tracking-[-0.02em] sm:flex-[1_1_240px] sm:text-[1.875rem]">
            {s.situation}
          </span>
          <span className="hidden flex-[1_1_300px] text-[1.0625rem] text-body sm:block">{s.blurb}</span>
          <span aria-hidden="true" className="text-2xl transition-transform group-hover:translate-x-1">→</span>
        </Link>
      ))}
    </nav>
  );
}
