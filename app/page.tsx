import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { preload } from "react-dom";
import { CallButton, CtaPair } from "@/components/CallButton";
import { ClosingForm } from "@/components/ClosingForm";
import { CostRanges } from "@/components/CostRanges";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { LicensingTimeline } from "@/components/LicensingTimeline";
import { SectionHead } from "@/components/SectionHead";
import { SituationIndex } from "@/components/SituationIndex";
import { Source, SourceLine } from "@/components/Source";
import { SymptomTable } from "@/components/SymptomTable";
import { WellFigure } from "@/components/WellFigure";
import { pageMetadata } from "@/lib/metadata";
import { towns } from "@/lib/nav";
import { serviceSchema, webPageSchema, type Faq } from "@/lib/schema";
import heroDesktop from "@/public/images/bitterroot-valley-hay-field-barn-montana.jpg";
import heroPhone from "@/public/images/bitterroot-valley-hay-field-barn-montana-phone.jpg";
import winterPhoto from "@/public/images/bitterroot-valley-barn-winter-snow.jpg";

const path = "/";
const title = "Well Pump Repair in Hamilton, MT & the Bitterroot Valley";
const description =
  "Well pump repair in Hamilton, MT and the Bitterroot Valley. No water? See what to check first, then get connected with an established local pump company.";

export const metadata = pageMetadata({ title, description, path });

const faqs: Faq[] = [
  {
    q: "Why does my well pump keep turning on and off?",
    a: "Rapid on-off cycling usually points to the pressure tank or the pressure switch rather than the pump itself, and those are often cheaper fixes. Note how often it clicks and what the pressure gauge reads, and tell the pro.",
  },
  {
    q: "Does Montana license well pump installers?",
    a: "No. Montana's Board of Water Well Contractors licenses well contractors, well drillers and monitoring well constructors. A 2007 bill to license pump installers, HB 707, was tabled in committee and died. For pump work, ask about experience and Montana contractor registration instead.",
  },
  {
    q: "How do I find my well log?",
    a: "Most Montana wells have a log in the Montana Bureau of Mines and Geology's Ground Water Information Center (GWIC). It shows the well's depth, water level and the geology around it. MSU Extension publishes a step-by-step guide to finding yours.",
  },
  {
    q: "Is arsenic a problem in Bitterroot Valley wells?",
    a: "Montana Bureau of Mines and Geology data shows water quality in valley wells is generally good, but a cluster of wells in the foothills of the Willow Creek drainage has high naturally occurring arsenic. Only a lab test of your own well tells you what's in your water.",
  },
  {
    q: "Are you a pump company?",
    a: "No. Bitterroot Valley Well Pump Help is a connection service. We connect you with established, independent local well and pump companies. We don't repair, install, drill or test anything ourselves.",
  },
];

const checks = [
  ["The breaker", "Is the well pump breaker tripped? Note it. If it has tripped more than once, leave it off and call."],
  ["The pressure gauge", "Read the number on the gauge by the pressure tank. Zero, low, or falling fast?"],
  ["The pump and switch", "Listen. Is the pump silent, humming, or clicking on and off?"],
] as const;

const parts = [
  ["Submersible pump.", " Sits deep in the well casing, below the water. Some homes use an above-ground jet pump instead."],
  ["Drop pipe and wire.", " Carry water up and power down. Their condition matters when a pump is replaced."],
  ["Pitless adapter.", " Turns the water toward the house below the frost line, so the line doesn't freeze."],
  ["Pressure tank.", " Holds water under pressure so the pump doesn't start every time a tap opens."],
  ["Pressure switch and gauge.", " Turn the pump on and off by pressure. The gauge reading is the first thing a pro asks for."],
] as const;

// Art direction: a portrait crop for phones, landscape for wider screens (brief §17).
function HeroPhoto() {
  const common = {
    alt: "Round hay bales and an old barn in a western Montana valley below the mountains",
    sizes: "100vw",
    quality: 60,
  };
  const {
    props: { srcSet: desktop, src: desktopSrc },
  } = getImageProps({ ...common, src: heroDesktop });
  const {
    props: { srcSet: phone, ...rest },
  } = getImageProps({ ...common, src: heroPhone, fetchPriority: "high", loading: "eager" });
  // Hoisted into <head> so the LCP photo starts downloading before the scripts, one
  // preload per breakpoint so each screen fetches only its own crop.
  preload(rest.src, { as: "image", imageSrcSet: phone, imageSizes: "100vw", media: "(max-width: 767px)", fetchPriority: "high" });
  preload(desktopSrc, { as: "image", imageSrcSet: desktop, imageSizes: "100vw", media: "(min-width: 768px)", fetchPriority: "high" });
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} />
      <source srcSet={phone} />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
      <img {...rest} className="absolute inset-0 h-full w-full object-cover object-[40%_70%]" />
    </picture>
  );
}

const inlineLink = "font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent";

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "Well pump repair in Hamilton and the Bitterroot Valley, Montana",
            serviceType: "Well pump repair",
            description:
              "Connection to established, independent local well and pump companies for well pump repair and replacement in Hamilton, Montana and across the Bitterroot Valley.",
            path,
          }),
        ]}
      />

      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-[#3b5266] text-white">
        <HeroPhoto />
        {/* Deeper than the default overlay: this hero's sky is bright, and white text must
            hold 4.5:1 over it (design system: Hero). */}
        <div aria-hidden="true" className="absolute inset-0 bg-[rgba(10,24,40,0.45)]" />
        <div className="relative mx-auto flex min-h-[640px] max-w-[1280px] flex-col justify-between gap-10 px-4 pb-6 pt-10 sm:px-6 md:min-h-[780px] md:pb-14 md:pt-20">
          <div className="flex max-w-4xl flex-col gap-5 md:gap-6">
            <p className="eyebrow text-white">Well pump repair &amp; replacement · Hamilton, Montana</p>
            <h1 className="text-[2.75rem] font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem] lg:leading-[0.94]">
              Well Pump Repair in Hamilton and the Bitterroot Valley, Montana
            </h1>
            <p className="max-w-[40rem] text-lg leading-relaxed sm:text-[1.3rem]">
              For well pump repair or well pump replacement in Hamilton, MT and across the Bitterroot Valley, tell us
              what&apos;s happening and we&apos;ll connect you with an established local well and pump company.
            </p>
            <CtaPair callLabel="No water? Call" />
          </div>
          <div className="flex justify-end">
            <div
              role="group"
              aria-label="The Bitterroot Valley had 25,375 water wells in 2023, up from about 3,100 in 1970, according to the Montana Bureau of Mines and Geology"
              className="flex w-full flex-col gap-1.5 rounded-md bg-ink px-5 py-4 font-mono sm:w-auto sm:min-w-80 sm:px-6 sm:py-5"
            >
              <span className="text-[0.6875rem] uppercase tracking-[0.12em] text-on-ink-muted sm:text-xs">
                Water wells in the Bitterroot Valley
              </span>
              <span className="text-5xl font-semibold leading-none tracking-[-0.03em] text-readout sm:text-[4rem]">25,375</span>
              <span className="text-sm text-white">in 2023, up from about 3,100 in 1970</span>
              <span className="text-[0.6875rem] text-on-ink-faint">
                Source:{" "}
                <a href="https://bitterrootstar.com/2024/04/a-look-at-groundwater-in-the-bitterroot/" target="_blank" rel="noopener" className="underline">
                  Montana Bureau of Mines &amp; Geology, via Bitterroot Star
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 01 NO WATER ========== */}
      <section id="no-water" aria-labelledby="no-water-h" className="scroll-mt-20 bg-ink text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:flex-row lg:gap-20">
          <div className="flex min-w-0 flex-col gap-6 lg:flex-1 lg:max-w-[540px]">
            <SectionHead id="no-water-h" tone="ink" eyebrow="01 · No water?" title="No water from your well? Start here">
              <p>
                If the house has no water, start with the breaker and the pressure gauge. Look and listen; you don&apos;t
                need to open anything. What you notice is exactly what a pump company will ask on the phone.
              </p>
            </SectionHead>
            <ol className="flex flex-col border-t border-[#2a3943]">
              {checks.map(([head, body], i) => (
                <li key={head} className="flex gap-4 border-b border-[#2a3943] py-4">
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-readout font-mono text-sm font-semibold text-ink">
                    {i + 1}
                  </span>
                  <span className="flex flex-col gap-1">
                    <strong className="text-xl">{head}</strong>
                    <span className="text-[1.0625rem] leading-relaxed text-on-ink-muted">{body}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="rounded border border-gold px-4 py-3.5 text-base leading-relaxed">
              <strong>Don&apos;t open the well cap, the switch cover, or any wiring.</strong> If you&apos;re unsure,
              don&apos;t touch it. Call a pro.
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-6 lg:flex-1">
            <SymptomTable />
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <CallButton />
              <Link href="/no-water-from-well" className="font-bold text-white underline decoration-gold decoration-2 underline-offset-4">
                The full no-water guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 02 HOW IT WORKS ========== */}
      <section aria-labelledby="system-h">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:flex-row lg:items-start lg:gap-16">
          <div className="min-w-0 lg:flex-1 lg:max-w-[580px]">
            <WellFigure />
          </div>
          <div className="flex min-w-0 flex-col gap-6 lg:flex-1">
            <SectionHead id="system-h" eyebrow="02 · How it works" title="How a Bitterroot Valley well system works">
              <p>
                Most rural homes in the valley run on a private well, and the pump is the part that works hardest.
                Domestic groundwater use in the valley rose from 2.14 to 2.48 million gallons a day between 2000 and
                2015.
              </p>
            </SectionHead>
            <SourceLine>
              Source:{" "}
              <span className="underline"><Source id="groundwater">Montana Bureau of Mines and Geology, via Bitterroot Star (April 2024)</Source></span>
            </SourceLine>
            <ol className="flex flex-col border-t-2 border-ink">
              {parts.map(([strong, rest], i) => (
                <li key={strong} className="flex gap-5 border-b border-rule py-3.5 text-[1.0625rem] leading-relaxed text-body sm:text-lg">
                  <span className="min-w-6 font-mono font-semibold text-ink">{i + 1}</span>
                  <span><strong className="text-ink">{strong}</strong>{rest}</span>
                </li>
              ))}
            </ol>
            <div className="flex flex-col gap-4 text-[1.0625rem] leading-relaxed text-body sm:text-lg">
              <p>
                When something goes wrong, it&apos;s often not the pump at all. A waterlogged pressure tank or a worn
                pressure switch can make a healthy pump cycle on and off, and a frozen line can look like a dead pump in a
                cold snap. That&apos;s why a good <strong className="text-ink">well pump repair in Hamilton</strong>{" "}
                starts with the tank, switch and gauge before anyone pulls the pump. See{" "}
                <Link href="/pressure-tank-repair" className={inlineLink}>pressure tank and switch repair</Link> and{" "}
                <Link href="/frozen-well-line" className={inlineLink}>frozen well lines</Link>.
              </p>
              <p>
                The valley has many more wells than it used to. The Montana Bureau of Mines and Geology counted about
                3,100 in 1970 and 25,375 in 2023, mostly for homes. Your own well&apos;s depth and water level are on its
                well log in the state&apos;s{" "}
                <span className={inlineLink}><Source id="gwic">Ground Water Information Center</Source></span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 03 SERVICES ========== */}
      <section id="services" aria-labelledby="services-h" className="scroll-mt-20 border-y border-rule bg-ground-alt">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:flex-row lg:gap-20">
          <SectionHead
            id="services-h"
            eyebrow="03 · What's happening?"
            title="Well pump services in Hamilton and the Bitterroot Valley"
            className="lg:max-w-sm lg:flex-[1_1_300px]"
          >
            <p>
              Pick what sounds like your situation. Each page explains it in plain terms; when you&apos;re ready, we
              connect you with an established local well and pump company.
            </p>
          </SectionHead>
          <div className="min-w-0 lg:flex-[999_1_560px]">
            <SituationIndex />
          </div>
        </div>
      </section>

      {/* ========== 04 LICENSING ========== */}
      <section id="licensing" aria-labelledby="licensing-h">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 py-20 sm:px-6 sm:py-28">
          <SectionHead id="licensing-h" eyebrow="04 · Who's licensed" title="Montana well licensing: what's licensed and what isn't">
            <p>
              Montana licenses well drillers and well contractors, not pump installers. So for pump work, ask about
              experience and contractor registration; for drilling or well repair, check the state&apos;s license list.
            </p>
          </SectionHead>
          <LicensingTimeline />
          <SourceLine>
            Sources: <span className="underline"><Source id="mca302">Montana Code Annotated 37-43-302 (2025)</Source></span>;{" "}
            <span className="underline"><Source id="hb707Minutes">2007 House Business and Labor Committee minutes</Source></span>;{" "}
            <span className="underline"><Source id="dli">Montana Department of Labor &amp; Industry</Source></span>. General information, not legal advice.
          </SourceLine>
        </div>
      </section>

      {/* ========== 05 SEASONS ========== */}
      <section aria-labelledby="seasons-h" className="relative overflow-hidden bg-[#46596a]">
        <Image
          src={winterPhoto}
          alt="Old red barn and corral fence in falling snow, Bitterroot Valley, Montana"
          fill
          sizes="100vw"
          quality={60}
          className="object-cover object-[70%_55%]"
        />
        <div className="relative mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex max-w-[600px] flex-col gap-5 rounded bg-ground p-6 sm:p-10">
            <p className="eyebrow text-accent">05 · Seasons</p>
            <h2 id="seasons-h" className="text-[2rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[2.6rem]">
              Cold snaps and dry years: when Bitterroot wells act up
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-body">
              Water levels in valley wells rise and fall with wet and dry years; the 2020–2023 drought showed up in
              them. The Montana Bureau of Mines and Geology tracks 38 wells in Ravalli County. In winter, tell the pro if
              the trouble started in a cold snap: a frozen line, tank or hydrant is a different fix from a failed pump.
            </p>
            <Link href="/frozen-well-line" className="font-bold text-accent underline decoration-2 underline-offset-4 hover:text-accent-dark">
              Frozen well lines and hydrants →
            </Link>
            <SourceLine>
              Source: <span className="underline"><Source id="groundwater">Montana Bureau of Mines and Geology, via Bitterroot Star (April 2024)</Source></span>
            </SourceLine>
          </div>
        </div>
      </section>

      {/* ========== 06 COST ========== */}
      <section id="cost" aria-labelledby="cost-h" className="scroll-mt-20">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:flex-row lg:gap-20">
          <div className="flex min-w-0 flex-col gap-5 lg:flex-1">
            <SectionHead id="cost-h" eyebrow="06 · Cost" title="How much a well pump costs in Montana">
              <p>
                Angi lists an average well pump repair in Hamilton of about $950, with most between $100 and $2,900.
                This Old House puts a typical replacement at about $900 to $2,500. Costs vary; a local pro quotes after
                seeing your system.
              </p>
            </SectionHead>
            <Link href="/well-pump-cost" className="font-bold text-accent underline decoration-2 underline-offset-4 hover:text-accent-dark">
              Read the full well pump cost guide →
            </Link>
          </div>
          <div className="flex min-w-0 flex-col gap-8 lg:flex-1">
            <CostRanges />
            <ul className="border-t-2 border-ink text-[1.0625rem] text-ink">
              {[
                "Pump type: submersible or jet",
                "Well depth and pump horsepower",
                "Condition of the wire and drop pipe",
                "Pressure tank and switch at the same time",
                "A constant-pressure upgrade",
                "Access: well house, snow, distance, after-hours",
              ].map((f, i) => (
                <li key={f} className="flex gap-4 border-b border-rule py-3">
                  <span className="font-mono text-muted">{"abcdef"[i]}</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========== 07 WHERE ========== */}
      <section id="area" aria-labelledby="area-h" className="bg-ink text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-baseline lg:gap-12">
          <p className="eyebrow shrink-0 whitespace-nowrap text-gold">07 · Where</p>
          <h2 id="area-h" className="text-[1.75rem] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-4xl lg:flex-[1_1_360px]">
            Well pump help from Florence to Darby, Montana
          </h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2.5 font-mono text-[0.9375rem] tracking-[0.06em] lg:flex-[2_1_520px]">
            {towns.map((t) => (
              <li key={t}>
                <Link href={`/service-area#${t.toLowerCase()}`} className="text-readout hover:text-white">
                  {t.toUpperCase()}, MT
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/service-area" className="font-bold text-white underline decoration-gold decoration-2 underline-offset-4">
            The Bitterroot Valley service area →
          </Link>
        </div>
      </section>

      {/* ========== 08 FAQ ========== */}
      <section id="faq" aria-labelledby="faq-h" className="bg-ground-alt">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-4 lg:max-w-sm lg:flex-[1_1_300px]">
            <p className="eyebrow text-accent">08 · Questions</p>
            <h2 id="faq-h" className="h-section">Well pump FAQ for Bitterroot Valley homeowners</h2>
            <Link href="/faq" className="font-bold text-accent underline decoration-2 underline-offset-4 hover:text-accent-dark">
              All well pump questions →
            </Link>
          </div>
          <div className="min-w-0 lg:flex-[999_1_560px]">
            <FaqList faqs={faqs} />
            <p className="mt-5 font-mono text-xs text-muted">General information, not medical or legal advice.</p>
          </div>
        </div>
      </section>

      <ClosingForm source="home" eyebrow="09 · Get connected" />
    </>
  );
}
