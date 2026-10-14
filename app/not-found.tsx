import type { Metadata } from "next";
import Link from "next/link";
import { CtaPair } from "@/components/CallButton";
import { services } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p className="eyebrow text-accent">404</p>
      <h1 className="mt-3 text-5xl font-extrabold tracking-[-0.04em] text-ink">We couldn&apos;t find that page</h1>
      <p className="mt-4 text-lg leading-relaxed text-body">
        The page may have moved. Pick a well pump service below, or get connected with an established local well and
        pump company in the Bitterroot Valley.
      </p>
      <div className="mt-6">
        <CtaPair formHref="/get-help" />
      </div>
      <ul className="mt-12 border-t-2 border-ink">
        <li className="border-b border-rule">
          <Link href="/" className="block py-4 text-xl font-bold hover:text-accent">Well pump repair in Hamilton, MT →</Link>
        </li>
        {services.map((s) => (
          <li key={s.href} className="border-b border-rule">
            <Link href={s.href} className="block py-4 text-xl font-bold hover:text-accent">{s.label} →</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
