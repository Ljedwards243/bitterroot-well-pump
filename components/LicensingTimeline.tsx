import Link from "next/link";

// Design system: Timeline. Facts from brief §4 only.
const items = [
  {
    date: "MCA 37-43-302",
    title: "Drilling and well work need a Board license",
    body: "Building, drilling, altering, rehabilitating or abandoning a water well requires a Board of Water Well Contractors license.",
    href: "/montana-well-contractor-license",
    link: "Who needs a Montana well license",
  },
  {
    date: "FEB 22, 2007",
    title: "Pump installer licensing was tabled",
    body: "HB 707 would have licensed pump installers. It was tabled in committee and died, so Montana has no pump installer license.",
    href: "/montana-well-contractor-license#pump-installers",
    link: "Why pump installers aren't licensed",
  },
  {
    date: "BEFORE YOU HIRE",
    title: "Check registration and the license list",
    body: "Construction contractors with employees must register with the Department of Labor & Industry. Ask for proof, or call (406) 444-7734.",
    href: "/montana-well-contractor-license#check",
    link: "How to check a pump or well company",
    current: true,
  },
];

export function LicensingTimeline() {
  return (
    <ol className="ml-2 flex flex-col border-l-2 border-ink md:ml-0 md:flex-row md:border-l-0 md:border-t-2">
      {items.map((it) => (
        <li key={it.date} className="relative flex flex-1 flex-col gap-2.5 pb-10 pl-7 md:pb-8 md:pl-0 md:pr-7 md:pt-7">
          <span
            aria-hidden="true"
            className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full md:-top-[9px] md:left-0 ${it.current ? "bg-accent" : "bg-ink"}`}
          />
          <span className={`font-mono text-[0.9375rem] tracking-[0.06em] ${it.current ? "text-accent" : "text-muted"}`}>
            {it.date}
          </span>
          <h3 className="text-[1.5rem] font-bold leading-tight tracking-[-0.02em] sm:text-[1.625rem]">{it.title}</h3>
          <p className="text-[1.0625rem] leading-relaxed text-body">{it.body}</p>
          <Link href={it.href} className="font-bold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
            {it.link} →
          </Link>
        </li>
      ))}
    </ol>
  );
}
