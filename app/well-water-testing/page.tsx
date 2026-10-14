import Link from "next/link";
import { Article, KeyAnswer, LastReviewed, Prose } from "@/components/Article";
import { ClosingForm } from "@/components/ClosingForm";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import { Source, SourceLine } from "@/components/Source";
import { pageMetadata } from "@/lib/metadata";
import { serviceSchema, webPageSchema, type Faq } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/well-water-testing";
const title = "Well Water Testing in Ravalli County, Montana";
const description =
  "Well water testing in Ravalli County, MT: how often to test, what MSU Extension's program has found, arsenic near Willow Creek, and kits vs. certified labs.";

export const metadata = pageMetadata({ title, description, path });

// Health content only from brief §4: statewide program figures stay statewide; the Willow
// Creek drainage foothills is the only location-specific water quality claim allowed.
const faqs: Faq[] = [
  {
    q: "How often should I test my well water?",
    a: "MSU Extension recommends testing a private well every year for bacteria and nitrate, and testing for a more complete list the first time you test. Testing a private well is the owner's responsibility.",
  },
  {
    q: "Is arsenic a problem in Bitterroot Valley wells?",
    a: "Montana Bureau of Mines and Geology data shows water quality in valley wells is generally good, with nitrate almost all under the drinking water standard, but a cluster of wells in the foothills of the Willow Creek drainage has high naturally occurring arsenic. Only a lab test of your own well tells you its level.",
  },
  {
    q: "Where do I get a well water test kit in Ravalli County?",
    a: "MSU Extension's Well Educated program offers test kits through participating county offices; check the program's website for current Ravalli County availability. You can also order bottles directly from a Montana-certified lab.",
  },
];

export default function WaterTesting() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "Well water testing referrals in Ravalli County, Montana",
            serviceType: "Well water testing",
            description:
              "Information on private well water testing in Ravalli County, Montana, with connection to established local well and pump companies, many of which also handle testing and treatment.",
            path,
          }),
        ]}
      />
      <PageHero
        eyebrow="Water testing · Ravalli County, MT"
        title="Testing Your Well Water in Ravalli County"
        crumbs={[{ name: "Well Water Testing", path }]}
      >
        <p>
          How often to test, what to test for, what testing has found in Montana and in the valley, and where to get a
          kit or a certified lab.
        </p>
      </PageHero>

      <Article>
        <Prose>
          <p>
            <strong>Well water testing in Ravalli County</strong> is up to you. Public water systems are tested by
            professionals; a private well is the owner&apos;s responsibility, as{" "}
            <Source id="msuTesting">MSU Extension</Source> puts it. The good news is that water in Bitterroot Valley wells
            is generally good. The catch is that you can&apos;t tell by taste or look whether yours is one of the
            exceptions. This page covers what to test and where, using only published figures. It&apos;s general
            information, not medical advice.
          </p>
        </Prose>

        <KeyAnswer>
          MSU Extension recommends testing a private well every year for bacteria and nitrate. Valley water is generally
          good, but a cluster of wells in the foothills of the Willow Creek drainage has high naturally occurring arsenic.
          Use a Montana-certified lab for a home sale.
        </KeyAnswer>

        <Prose>
          <h2>How often to test your well water</h2>
          <p>
            MSU Extension recommends testing every year for <strong>bacteria</strong> (total coliform) and{" "}
            <strong>nitrate</strong>. The first time you test a well, it recommends a more complete panel, so you have a
            baseline. Test again after work on the well, such as a pump replacement, and whenever the water changes in
            taste, color or smell.
          </p>

          <h2>What testing has found in Montana</h2>
          <p>
            MSU Extension&apos;s Well Educated program helps private well owners test their water across the state.
            Statewide, it has found:
          </p>
          <ul>
            <li>Total coliform bacteria in about 25% of private well samples.</li>
            <li>Arsenic and manganese above health-based thresholds in about 10% of wells tested.</li>
          </ul>
          <p>
            Those are statewide figures, not Ravalli County numbers. Coliform bacteria can indicate surface influence on
            the groundwater or contamination through the well or plumbing, which is one reason a well cap in good
            condition matters.
          </p>
        </Prose>

        <div className="my-8 max-w-3xl">
          <SourceLine>
            Source: <span className="underline"><Source id="msuTesting">MSU Extension, Testing Private Well Water Quality</Source></span>.
            General information, not medical advice.
          </SourceLine>
        </div>

        <Prose>
          <h2>What&apos;s known about Bitterroot Valley water</h2>
          <p>
            In a 2024 presentation to the Ravalli County Commissioners, reported by the Bitterroot Star, the{" "}
            <Source id="groundwater">Montana Bureau of Mines and Geology</Source> described valley well water as generally
            good:
          </p>
          <ul>
            <li>Nitrate almost all under the 10 mg/L drinking water standard.</li>
            <li>Total dissolved solids mostly under the 500 mg/L recommended level.</li>
            <li>
              One exception: a cluster of wells in the <strong>foothills of the Willow Creek drainage</strong> with high
              naturally occurring arsenic.
            </li>
          </ul>
          <p>
            If your property is in or near that area, ask the lab about arsenic. Anywhere in the valley, only a test of
            your own well tells you what&apos;s in your water.
          </p>

          <h2>Where to get a test</h2>
          <h3>MSU Extension Well Educated kits</h3>
          <p>
            The <Source id="wellEducated">Well Educated program</Source> offers test kits through participating county
            offices, with guidance on what to test for. Check the program&apos;s website for current Ravalli County kit
            availability. The program isn&apos;t intended for real estate or legal purposes.
          </p>
          <h3>Montana-certified labs</h3>
          <p>
            For a home sale, or if you&apos;re in a hurry, order bottles and instructions directly from a
            Montana-certified lab. The Well Educated testing page keeps a list of certified labs around the state.
          </p>

          <h2>Pumps and water quality go together</h2>
          <p>
            Many valley well and pump companies also handle water testing, filtration and treatment, and a pump job is a
            natural time to test. If you&apos;re having pump work done, ask whether they&apos;ll disinfect the well
            afterward and recommend a test. Buying or selling? See{" "}
            <Link href="/well-inspection-home-sale">well inspections for home sales</Link>. To learn more about your own
            well, find its log in the state&apos;s{" "}
            <Source id="gwicGuide">Ground Water Information Center</Source>.
          </p>
        </Prose>

        <section aria-labelledby="wt-faq" className="mt-16 max-w-3xl">
          <h2 id="wt-faq" className="mb-6 text-[2rem] font-extrabold leading-none tracking-[-0.035em]">Water testing questions</h2>
          <FaqList faqs={faqs} />
        </section>

        <LastReviewed date={site.lastReviewed} />
      </Article>

      <ClosingForm source="well-water-testing" eyebrow="Test or treat" title="Get connected about well water testing" defaultNeed="Water testing" />
      <RelatedServices current={path} />
    </>
  );
}
