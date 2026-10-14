import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

export type Crumb = { name: string; path: string };

// Rendered inside the ink hero on inner pages.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-on-ink-muted">
          {trail.map((item, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="text-white">{item.name}</span>
                ) : (
                  <>
                    <Link href={item.path} className="underline-offset-4 hover:text-white hover:underline">{item.name}</Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
