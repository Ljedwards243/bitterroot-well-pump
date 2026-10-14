import Link from "next/link";
import { services, towns } from "@/lib/nav";
import { hasPhone, phoneDisplay, phoneHref, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink-deep text-[0.95rem] text-on-ink-muted">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 pb-8 pt-14 sm:px-6">
        <div className="flex flex-wrap gap-10">
          <div className="flex flex-[2_1_320px] flex-col gap-3">
            <p className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.03em] text-white">{site.name}</p>
            <p className="max-w-[32rem] leading-relaxed">
              <strong className="font-semibold text-white">Disclosure:</strong> {site.disclosure}{" "}
              <Link href="/about" className="underline hover:text-white">How this site works</Link>.
            </p>
            {hasPhone && <a href={phoneHref} className="font-mono font-semibold text-white">{phoneDisplay}</a>}
          </div>
          <nav aria-label="Services" className="flex flex-[1_1_170px] flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-white">Services</p>
            <Link href="/" className="hover:text-white">Well pump repair in Hamilton, MT</Link>
            {services
              .filter((s) => s.href !== "/well-pump-cost")
              .map((s) => (
                <Link key={s.href} href={s.href} className="hover:text-white">{s.label}</Link>
              ))}
          </nav>
          <div className="flex flex-[1_1_170px] flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-white">Areas served</p>
            {towns.map((t) => (
              <Link key={t} href={`/service-area#${t.toLowerCase()}`} className="hover:text-white">{t}, MT</Link>
            ))}
          </div>
          <nav aria-label="Resources" className="flex flex-[1_1_170px] flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-white">Resources</p>
            <Link href="/well-pump-cost" className="hover:text-white">Well pump cost guide</Link>
            <Link href="/montana-well-contractor-license" className="hover:text-white">Montana well licensing</Link>
            <Link href="/faq" className="hover:text-white">Well pump FAQ</Link>
            <Link href="/get-help" className="hover:text-white">Get connected</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
          </nav>
        </div>
        <p className="border-t border-[#22303a] pt-5 font-mono text-xs leading-relaxed">
          Last reviewed {site.lastReviewed}. Figures: Montana Bureau of Mines and Geology, MSU Extension, Montana DNRC,
          Montana DLI, Angi, This Old House. General information only, not medical or legal advice. ©{" "}
          {new Date().getFullYear()} {site.name}.
        </p>
      </div>
    </footer>
  );
}
