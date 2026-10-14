import Link from "next/link";
import { services } from "@/lib/nav";
import { hasPhone, phoneDisplay, phoneHref, site } from "@/lib/site";
import { PhoneIcon } from "./CallButton";

const linkClass = "whitespace-nowrap rounded px-2.5 py-2 text-[0.95rem] font-medium text-ink hover:text-accent";

const Chevron = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
    <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
  </svg>
);

const secondary = [
  { href: "/well-pump-cost", label: "Cost" },
  { href: "/montana-well-contractor-license", label: "Montana Rules" },
  { href: "/service-area", label: "Service Area" },
  { href: "/faq", label: "FAQ" },
  { href: "/get-help", label: "Get Help" },
] as const;

// Utility bar is a compliance element (design system: Header). Dropdown and mobile menu
// are CSS / native <details>, so the header ships zero JavaScript.
export function Header() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="bg-ink font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-on-ink-muted sm:text-xs">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-x-6 gap-y-1 px-4 py-2 sm:px-6">
          <span className="hidden sm:inline">Hamilton &amp; the Bitterroot Valley, Montana</span>
          <span>A connection service · We are not a pump company</span>
        </div>
      </div>
      <header className="sticky top-0 z-30 border-b border-rule bg-ground/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex min-w-0 flex-col leading-tight text-ink">
            <span className="text-[1.2rem] font-extrabold tracking-[-0.03em] sm:text-[1.6rem]">{site.name}</span>
            <span className="text-xs text-muted sm:text-sm">{site.tagline}</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
            <div className="group relative">
              <button type="button" className={`${linkClass} inline-flex items-center gap-1`} aria-haspopup="true">
                Services
                <Chevron />
              </button>
              <div className="invisible absolute left-0 top-full z-40 min-w-72 pt-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <ul className="border-t-2 border-ink bg-white p-2 shadow-lg">
                  {services.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="block px-3 py-2.5 text-[0.95rem] text-ink hover:bg-ground-alt hover:text-accent">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {secondary.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>{l.label}</Link>
            ))}
            {hasPhone && (
              <a
                href={phoneHref}
                className="ml-2 inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded bg-accent px-4 font-bold text-white hover:bg-accent-dark"
              >
                <PhoneIcon />
                {phoneDisplay}
              </a>
            )}
          </nav>

          {/* Phones and tablets: the sticky call bar carries the call; the menu is native <details>. */}
          <details className="group relative shrink-0 xl:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded border border-ink [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Menu</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 8h16M4 16h16" />
              </svg>
            </summary>
            <nav aria-label="Mobile" className="absolute right-0 top-full z-40 mt-2 max-h-[75vh] w-72 overflow-y-auto border-t-2 border-ink bg-white p-3 shadow-xl">
              <p className="px-3 pt-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">Services</p>
              <ul>
                <li><Link href="/" className="block px-3 py-3 font-semibold hover:bg-ground-alt">Well Pump Repair</Link></li>
                {services.map((s) => (
                  <li key={s.href}><Link href={s.href} className="block px-3 py-3 hover:bg-ground-alt">{s.label}</Link></li>
                ))}
              </ul>
              <ul className="mt-2 border-t border-rule pt-2">
                {secondary
                  .filter((l) => l.href !== "/well-pump-cost")
                  .map((l) => (
                    <li key={l.href}><Link href={l.href} className="block px-3 py-3 font-semibold hover:bg-ground-alt">{l.label}</Link></li>
                  ))}
              </ul>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
