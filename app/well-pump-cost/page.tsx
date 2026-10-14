import Link from "next/link";
import { Article, KeyAnswer, LastReviewed, Prose } from "@/components/Article";
import { ClosingForm } from "@/components/ClosingForm";
import { CostRanges } from "@/components/CostRanges";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import { Source } from "@/components/Source";
import { pageMetadata } from "@/lib/metadata";
import { serviceSchema, webPageSchema, type Faq } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/well-pump-cost";
const title = "Well Pump Replacement Cost in Montana (2026 Guide)";
const description =
  "Well pump replacement cost in Montana: published repair and replacement benchmarks, what moves the price, and how to compare quotes from valley pump companies.";

export const metadata = pageMetadata({ title, description, path });

// Brief §4 benchmarks only, each labeled as general. No invented local prices.
const faqs: Faq[] = [
  {
    q: "How much does it cost to replace a well pump in Montana?",
    a: "This Old House puts typical well pump replacement at about $900 to $2,500 nationally, depending on pump type, well depth and installation complexity. It's a general benchmark; a local pump company quotes after seeing your well.",
  },
  {
    q: "How much does well pump repair cost in Hamilton, MT?",
    a: "Angi's Hamilton, Montana listing for wells and pumps gives an average well pump repair cost of about $950, with most repairs between $100 and $2,900. It's a general benchmark, not a quote.",
  },
  {
    q: "Is a pressure tank cheaper to fix than a pump?",
    a: "Often, because the tank and switch are above ground and nobody has to pull the pump from the well. Costs vary by system, so get a quote.",
  },
  {
    q: "Do pump companies charge more for emergency calls?",
    a: "Many charge more for evening, weekend or holiday calls. Policies vary, so ask when you call.",
  },
];

export default function Cost() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "Well pump repair and replacement cost guide for the Bitterroot Valley, Montana",
            serviceType: "Well pump replacement",
            description:
              "Published well pump repair and replacement cost benchmarks, with connection to established local well and pump companies in the Bitterroot Valley, Montana for quotes.",
            path,
          }),
        ]}
      />
      <PageHero
        eyebrow="Cost guide · Montana"
        title="How Much Does a Well Pump Cost in the Bitterroot Valley?"
        crumbs={[{ name: "Cost Guide", path }]}
      >
        <p>
          Two published benchmarks, what moves a quote up or down, and how to compare quotes. No made-up local prices.
        </p>
      </PageHero>

      <Article>
        <Prose>
          <p>
            <strong>Well pump replacement cost in Montana</strong> depends on the well, the pump and the setup, which is
            why every pump company says &ldquo;call for a quote.&rdquo; That&apos;s fair, but it helps to know the
            ballpark before you call. Below are two published benchmarks, clearly labeled, followed by the factors that
            decide where your job lands.
          </p>
        </Prose>

        <div className="my-10 max-w-3xl">
          <CostRanges />
        </div>

        <KeyAnswer>
          Angi lists an average well pump repair in Hamilton, MT of about $950, with most between $100 and $2,900. This
          Old House puts typical replacement at about $900 to $2,500 nationally. Both are general benchmarks; costs vary
          by well.
        </KeyAnswer>

        <Prose>
          <h2>Repair vs. replacement</h2>
          <p>
            Many no-water calls end with a repair rather than a new pump: a pressure switch, a pressure tank, a control
            box, a wiring fault or a frozen line. That&apos;s why the repair range is so wide. The{" "}
            <Source id="angi">Angi Hamilton, MT benchmark</Source> covers everything from a small part to a major repair.
            A full replacement, covered by the <Source id="thisOldHouse">This Old House benchmark</Source>, means pulling
            the old pump and setting a new one.
          </p>

          <h2>What affects the cost of a well pump</h2>
          <h3>Pump type</h3>
          <p>
            Submersible pumps sit deep in the well and have to be pulled up to be replaced, which usually costs more in
            labor than an above-ground jet pump. See <Link href="/well-pump-replacement">well pump replacement</Link> for
            the difference.
          </p>
          <h3>Well depth and horsepower</h3>
          <p>
            A deeper pump setting means more pipe and wire, and often a larger pump. Your{" "}
            <Source id="gwicGuide">well log</Source> shows your well&apos;s depth and water level.
          </p>
          <h3>Wire and drop pipe</h3>
          <p>Old or damaged wire and pipe are often replaced along with the pump, adding material and time.</p>
          <h3>Pressure tank and switch</h3>
          <p>
            Replacing a waterlogged tank or worn switch at the same time adds cost but protects the new pump. See{" "}
            <Link href="/pressure-tank-repair">pressure tank and switch repair</Link>.
          </p>
          <h3>A constant-pressure upgrade</h3>
          <p>A variable-speed controller costs more than a standard switch but gives steadier pressure.</p>
          <h3>Access and timing</h3>
          <p>
            A well house, deep snow, a long drive up a valley road or a tight spot around the wellhead all add work.
            Evening, weekend and holiday calls may cost more.
          </p>

          <h2>How to compare quotes</h2>
          <ol>
            <li><strong>What&apos;s included?</strong> Pump, wire, drop pipe, tank, switch, controls, disposal and cleanup.</li>
            <li><strong>Was the cheaper cause ruled out?</strong> Ask whether the tank, switch and wiring were tested.</li>
            <li><strong>What warranty applies?</strong> Parts and labor, in writing.</li>
            <li><strong>Is the company registered and insured?</strong> See <Link href="/montana-well-contractor-license">Montana well licensing</Link>.</li>
            <li><strong>Will they disinfect the well and suggest a water test afterward?</strong></li>
          </ol>

          <h2>Other well costs to know</h2>
          <ul>
            <li>
              <strong>Water testing:</strong> the MSU Extension Well Educated program offers test kits through
              participating county offices, and certified labs test directly. See{" "}
              <Link href="/well-water-testing">well water testing in Ravalli County</Link>.
            </li>
            <li>
              <strong>Home sale inspections:</strong> flow tests and water tests are priced by the company or lab. See{" "}
              <Link href="/well-inspection-home-sale">well inspections for home sales</Link>.
            </li>
            <li>
              <strong>Drilling or deepening a well:</strong> licensed well contractor work, quoted separately.
            </li>
          </ul>
        </Prose>

        <section aria-labelledby="cost-faq" className="mt-16 max-w-3xl">
          <h2 id="cost-faq" className="mb-6 text-[2rem] font-extrabold leading-none tracking-[-0.035em]">Well pump cost questions</h2>
          <FaqList faqs={faqs} />
        </section>

        <LastReviewed date={site.lastReviewed} />
      </Article>

      <ClosingForm source="well-pump-cost" eyebrow="Get a quote" title="Get a well pump quote from a local pro" />
      <RelatedServices current={path} />
    </>
  );
}
