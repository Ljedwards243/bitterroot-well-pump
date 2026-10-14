import Link from "next/link";
import { Article, LastReviewed, Prose } from "@/components/Article";
import { ClosingForm } from "@/components/ClosingForm";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { webPageSchema, type Faq } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/faq";
const title = "Well Pump FAQ for Bitterroot Valley Homeowners";
const description =
  "Well pump FAQ for Montana: no water, short cycling, frozen pumps, costs, pressure tanks, well logs, water testing, arsenic, licensing and home sale inspections.";

export const metadata = pageMetadata({ title, description, path });

// Questions from brief §7, answered from brief §4 facts only.
const faqs: Faq[] = [
  {
    q: "Why is there no water coming from my well?",
    a: "The most common causes are no power to the pump (a tripped breaker), a failed pressure switch, a failed pump or motor, a broken drop pipe, a frozen line, or a low water level. Check whether the breaker is tripped and what the pressure gauge reads, then call a pump company. Don't open the well cap or touch wiring.",
  },
  {
    q: "Why does my well pump keep turning on and off?",
    a: "Rapid on-off cycling, called short cycling, usually points to the pressure tank or the pressure switch rather than the pump. A waterlogged tank holds very little water, so the pump starts and stops with every small use. Note how often it clicks and what the gauge reads, and tell the pro.",
  },
  {
    q: "Can a well pump freeze?",
    a: "A submersible pump sits deep in the well, below the water, so it's rarely the part that freezes. What usually freezes is exposed pipe, a pressure tank or switch in an unheated space, a buried line set too shallow, or a frost-free hydrant that isn't draining. An above-ground jet pump in an unheated space can freeze too. Never use an open flame to thaw a pipe.",
  },
  {
    q: "How much does it cost to replace a well pump in Montana?",
    a: "This Old House puts typical well pump replacement at about $900 to $2,500 nationally, depending on pump type, well depth and installation complexity. For repairs, Angi lists an average in Hamilton, MT of about $950, with most between $100 and $2,900. Both are general benchmarks; get a quote from a local pro.",
  },
  {
    q: "Should I replace the pressure tank when I replace the pump?",
    a: "Not always, but it should be checked. A waterlogged tank or worn switch makes a new pump cycle on and off and work harder, so a good pump company tests both before quoting.",
  },
  {
    q: "How do I find my well log?",
    a: "Most Montana wells have a log in the Montana Bureau of Mines and Geology's Ground Water Information Center (GWIC), which shows the well's depth, water level and the geology around it. You need a free GWIC account to browse well data, and MSU Extension publishes a step-by-step guide to finding a well.",
  },
  {
    q: "How often should I test my well water?",
    a: "MSU Extension recommends testing a private well every year for bacteria and nitrate, and a more complete panel the first time you test. Testing a private well is the owner's responsibility.",
  },
  {
    q: "Is arsenic a problem in Bitterroot Valley wells?",
    a: "Montana Bureau of Mines and Geology data shows water quality in valley wells is generally good, with nitrate almost all under the drinking water standard, but a cluster of wells in the foothills of the Willow Creek drainage has high naturally occurring arsenic. Only a lab test of your own well tells you its level.",
  },
  {
    q: "Does Montana license well pump installers?",
    a: "No. Montana's Board of Water Well Contractors licenses water well contractors, water well drillers and monitoring well constructors. A 2007 bill to license pump installers, HB 707, was tabled in committee and died. For pump work, check contractor registration, insurance and experience.",
  },
  {
    q: "How do I check that a contractor is registered in Montana?",
    a: "Construction contractors with employees must hold a Construction Contractor Registration with the Montana Department of Labor & Industry. Ask for proof and verify it on the DLI website or by calling (406) 444-7734.",
  },
  {
    q: "Do I need a well inspection to buy a house?",
    a: "Whether one is required depends on your purchase contract and your lender, so ask your agent and lender. Many buyers of a home with a well ask for a flow test and a water test from a Montana-certified lab during the inspection period.",
  },
  {
    q: "Are you a pump company?",
    a: "No. Bitterroot Valley Well Pump Help is a connection service. We connect you with established, independent local well and pump companies. We don't repair, install, diagnose, drill or test anything ourselves, and we're not affiliated with any company of a similar name.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, description, path })} />
      <PageHero
        eyebrow="Questions · Bitterroot Valley, MT"
        title="Well Pump Questions from Bitterroot Valley Homeowners"
        crumbs={[{ name: "FAQ", path }]}
      >
        <p>Straight answers about well pumps, tanks, testing and Montana&apos;s rules, with the sources behind every number.</p>
      </PageHero>

      <Article>
        <div className="max-w-3xl">
          <FaqList faqs={faqs} />
        </div>
        <Prose className="mt-12">
          <h2>Go deeper</h2>
          <ul>
            <li><Link href="/no-water-from-well">No water from your well: what to check</Link></li>
            <li><Link href="/frozen-well-line">Frozen well lines and hydrants</Link></li>
            <li><Link href="/pressure-tank-repair">Pressure tank and switch repair</Link></li>
            <li><Link href="/well-pump-replacement">Well pump replacement</Link></li>
            <li><Link href="/well-pump-cost">Well pump cost guide</Link></li>
            <li><Link href="/well-inspection-home-sale">Well inspections for home sales</Link></li>
            <li><Link href="/well-water-testing">Well water testing in Ravalli County</Link></li>
            <li><Link href="/montana-well-contractor-license">How Montana licenses well drillers</Link></li>
          </ul>
          <p>
            Sources: Montana Bureau of Mines and Geology via the Bitterroot Star (well counts, water levels, water
            quality), MSU Extension (water testing, well logs), Montana Code Annotated 37-43-302 and the 2007 legislative
            record (licensing), the Montana Department of Labor &amp; Industry (registration), Angi and This Old House
            (cost benchmarks).
          </p>
        </Prose>
        <LastReviewed date={site.lastReviewed} />
      </Article>

      <ClosingForm source="faq" eyebrow="Get connected" />
    </>
  );
}
