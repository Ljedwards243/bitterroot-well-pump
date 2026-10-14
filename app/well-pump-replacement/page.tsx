import Link from "next/link";
import { Article, KeyAnswer, LastReviewed, Prose } from "@/components/Article";
import { CtaPair } from "@/components/CallButton";
import { ClosingForm } from "@/components/ClosingForm";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import { Source } from "@/components/Source";
import { pageMetadata } from "@/lib/metadata";
import { serviceSchema, webPageSchema, type Faq } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/well-pump-replacement";
const title = "Well Pump Replacement in Hamilton, MT | Bitterroot Valley";
const description =
  "Well pump replacement in Hamilton, MT: submersible vs. jet pumps, constant-pressure systems, what affects the job, and what to ask. Get a local pump company.";

export const metadata = pageMetadata({ title, description, path });

// Brief §7: no lifespans and no durations (brief §4 "Do NOT state").
const faqs: Faq[] = [
  {
    q: "How much does it cost to replace a well pump in Montana?",
    a: "This Old House puts typical well pump replacement at about $900 to $2,500 nationally, depending on pump type, well depth and how involved the installation is. Costs vary by well; a local pump company quotes after seeing your system.",
  },
  {
    q: "Should I replace the pressure tank when I replace the pump?",
    a: "Not always, but it should be checked. A waterlogged tank or worn switch makes a new pump cycle on and off and work harder, so a good pump company tests both before quoting a replacement.",
  },
  {
    q: "What's a constant-pressure system?",
    a: "A constant-pressure (variable-speed) system uses a controller that speeds the pump up and down to hold a steady pressure, usually with a smaller pressure tank. It costs more than a standard setup, and whether it suits your well and household is a question for the pump company.",
  },
];

export default function Replacement() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "Well pump replacement in Hamilton and the Bitterroot Valley, Montana",
            serviceType: "Well pump replacement",
            description:
              "Connection to established, independent local well and pump companies for submersible, jet and constant-pressure well pump replacement in Hamilton and the Bitterroot Valley, Montana.",
            path,
          }),
        ]}
      />
      <PageHero
        eyebrow="Replacement · Hamilton, MT"
        title="Well Pump Replacement in the Bitterroot Valley"
        crumbs={[{ name: "Well Pump Replacement", path }]}
      >
        <p>
          Submersible or jet, standard or constant-pressure: what goes into replacing a well pump, and what to ask before
          you say yes to a quote.
        </p>
      </PageHero>

      <Article>
        <Prose>
          <p>
            <strong>Well pump replacement in Hamilton, MT</strong> and the rest of the Bitterroot Valley is one of the
            bigger repair bills a rural homeowner faces, and it usually comes at a bad time. The valley had 25,375 water
            wells in 2023, up from about 3,100 in 1970, according to the{" "}
            <Source id="groundwater">Montana Bureau of Mines and Geology</Source>, so a lot of homes here depend on a
            pump. This page explains the main pump types, what affects the job, and what to ask, so you can compare
            quotes with confidence.
          </p>
        </Prose>

        <KeyAnswer>
          Most valley homes use a submersible pump deep in the well; some use an above-ground jet pump. Replacement cost
          depends on pump type, well depth, pump size, and the condition of the wire, drop pipe, tank and switch. This Old
          House puts typical replacement at about $900 to $2,500 nationally.
        </KeyAnswer>

        <Prose>
          <h2>Is it really the pump?</h2>
          <p>
            Before replacing a pump, a good pump company rules out the cheaper causes: a tripped breaker or wiring fault,
            a worn pressure switch, a waterlogged pressure tank, a frozen line, or a water level that has dropped in a dry
            spell. If you haven&apos;t been through those yet, start with{" "}
            <Link href="/no-water-from-well">no water from your well</Link> or{" "}
            <Link href="/pressure-tank-repair">pressure tank and switch repair</Link>.
          </p>

          <h2>Submersible vs. jet pumps</h2>
          <h3>Submersible pumps</h3>
          <p>
            A submersible pump is a long, narrow pump and motor that sits down inside the well casing, below the water. It
            pushes water up a drop pipe to the house, and a wire runs down beside the pipe to power it. Replacing one means
            pulling the pump, pipe and wire up out of the well, so access to the wellhead and the depth of the pump both
            matter.
          </p>
          <h3>Jet pumps</h3>
          <p>
            A jet pump sits above ground, in a well house, basement or utility room, and draws water up from the well.
            Because it&apos;s above ground it&apos;s easier to reach, but it has to be protected from freezing (see{" "}
            <Link href="/frozen-well-line">frozen well lines</Link>), and it suits some wells better than others. The
            pump company will say which type fits your well.
          </p>

          <h2>Constant-pressure systems</h2>
          <p>
            A constant-pressure, or variable-speed, system adds a controller that speeds the pump up and down to hold a
            steadier pressure at the taps, usually with a smaller pressure tank. Some homeowners choose one when
            replacing a pump; others stay with a standard pump and switch. It changes the parts and the price, so ask for
            both options if you&apos;re curious.
          </p>
        </Prose>

        <div className="my-8 max-w-3xl">
          <CtaPair />
        </div>

        <Prose>
          <h2>What affects a well pump replacement</h2>
          <ul>
            <li><strong>Well depth and where the pump sits.</strong> Deeper settings mean more pipe and wire to pull and replace.</li>
            <li><strong>Pump size.</strong> The pump has to match the well and the household&apos;s demand.</li>
            <li><strong>Wire and drop pipe condition.</strong> Old or damaged wire and pipe are often replaced at the same time.</li>
            <li><strong>Pressure tank and switch.</strong> Worth checking, and sometimes replacing, along with the pump.</li>
            <li><strong>Access.</strong> A well house, deep snow, a long drive or a tight spot around the wellhead all add work.</li>
            <li><strong>Timing.</strong> Evening, weekend and holiday calls may cost more. Ask when you call.</li>
          </ul>
          <p>
            Your <Source id="gwicGuide">well log</Source> in the state&apos;s Ground Water Information Center shows your
            well&apos;s depth and water level, which helps the pump company plan the job. For published cost benchmarks,
            see the <Link href="/well-pump-cost">well pump cost guide</Link>.
          </p>

          <h2>Why the tank and switch get checked too</h2>
          <p>
            A new pump on a waterlogged tank or a worn switch will short cycle, starting and stopping far more often than
            it should, just like the old one. That&apos;s why pump companies test the tank&apos;s air charge and the
            switch whenever they replace a pump. It&apos;s also why two quotes for &ldquo;a new pump&rdquo; can look very
            different: one may include the tank and switch, the other may not. Ask.
          </p>

          <h2>After the job: disinfect and test</h2>
          <p>
            Pulling and setting a pump opens the well. Ask whether the company disinfects the well afterward and whether
            you should test the water. <Source id="msuTesting">MSU Extension</Source> recommends testing a private well
            every year for bacteria and nitrate anyway, and after work on the well is a natural time. See{" "}
            <Link href="/well-water-testing">well water testing in Ravalli County</Link>.
          </p>

          <h2>Questions to ask before you hire</h2>
          <ol>
            <li>
              <strong>Are you registered and insured?</strong> Construction contractors with employees must hold a
              Montana Department of Labor &amp; Industry registration. Montana doesn&apos;t license pump installers, so
              registration, insurance and experience are what to check. See{" "}
              <Link href="/montana-well-contractor-license">Montana well licensing</Link>.
            </li>
            <li><strong>Who does the electrical work?</strong></li>
            <li><strong>What&apos;s included?</strong> Pump, wire, drop pipe, tank, switch, controls and disposal of the old pump.</li>
            <li><strong>What warranty covers the parts and the labor?</strong> Get it in writing.</li>
            <li><strong>Will you disinfect the well and recommend a water test?</strong></li>
          </ol>
        </Prose>

        <section aria-labelledby="rep-faq" className="mt-16 max-w-3xl">
          <h2 id="rep-faq" className="mb-6 text-[2rem] font-extrabold leading-none tracking-[-0.035em]">Replacement questions</h2>
          <FaqList faqs={faqs} />
        </section>

        <LastReviewed date={site.lastReviewed} />
      </Article>

      <ClosingForm source="well-pump-replacement" eyebrow="Get a quote" title="Get a well pump replacement quote" defaultNeed="Planned replacement" />
      <RelatedServices current={path} />
    </>
  );
}
