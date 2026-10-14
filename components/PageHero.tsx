import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CtaPair } from "./CallButton";

// Inner-page hero: an ink band, no photo, so the H1 text is the LCP element and paints
// immediately (brief §17).
export function PageHero({
  eyebrow,
  title,
  children,
  crumbs,
  formHref = "#get-help",
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  crumbs: Crumb[];
  formHref?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
        <Breadcrumbs items={crumbs} />
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-lg leading-relaxed text-on-ink-body sm:text-xl">{children}</div>
        <div className="mt-8">
          <CtaPair formHref={formHref} />
        </div>
      </div>
    </section>
  );
}
