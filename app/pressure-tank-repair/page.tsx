import Link from "next/link";
import { Article, KeyAnswer, LastReviewed, Prose } from "@/components/Article";
import { CtaPair } from "@/components/CallButton";
import { ClosingForm } from "@/components/ClosingForm";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import { pageMetadata } from "@/lib/metadata";
import { serviceSchema, webPageSchema, type Faq } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/pressure-tank-repair";
const title = "Pressure Tank & Switch Replacement in Hamilton, MT";
const description =
  "Pressure tank replacement in Hamilton, MT: why a well pump short cycles, signs of a waterlogged tank or worn switch, and how to get a local pro to look.";

export const metadata = pageMetadata({ title, description, path });

const faqs: Faq[] = [
  {
    q: "Why does my well pump keep turning on and off?",
    a: "Rapid on-off cycling, called short cycling, usually points to the pressure tank or the pressure switch rather than the pump. A tank that has lost its air charge holds very little water, so the pump starts and stops with every small use. Note how often it clicks and what the gauge reads, and tell the pro.",
  },
  {
    q: "Should I replace the pressure tank when I replace the pump?",
    a: "Not always, but a good pump company checks the tank and switch whenever it replaces a pump. A waterlogged tank or a worn switch makes a new pump cycle more and work harder, so it's worth knowing their condition before the job is quoted.",
  },
  {
    q: "Is a pressure tank or switch cheaper to fix than a pump?",
    a: "Often, yes. A tank or switch is above ground and doesn't require pulling the pump out of the well. Costs vary by system; see the well pump cost guide for published benchmarks, and get a quote from a local pro.",
  },
];

export default function PressureTank() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "Pressure tank and pressure switch replacement in Hamilton, Montana",
            serviceType: "Well pressure tank replacement",
            description:
              "Connection to established, independent local well and pump companies for pressure tank and pressure switch repair and replacement in Hamilton and the Bitterroot Valley, Montana.",
            path,
          }),
        ]}
      />
      <PageHero
        eyebrow="Tank & switch · Hamilton, MT"
        title="Pressure Tank and Pressure Switch Repair in the Bitterroot"
        crumbs={[{ name: "Pressure Tank & Switch", path }]}
      >
        <p>
          A pump that clicks on and off every few seconds usually has a tank or switch problem, not a pump problem. Here
          is what each part does and what to tell the pro.
        </p>
      </PageHero>

      <Article>
        <Prose>
          <p>
            If you&apos;re searching for <strong>pressure tank replacement in Hamilton, MT</strong>, you&apos;ve probably
            heard the pump starting and stopping more than it should, or watched the pressure jump around at the tap.
            The pressure tank and the pressure switch are the parts of a well system you can actually see, and they&apos;re
            often the first place a pump company looks. A problem here is frequently a cheaper fix than the pump itself,
            but leaving it alone makes the pump work harder every day.
          </p>
        </Prose>

        <KeyAnswer>
          Short cycling (the pump clicking on and off every few seconds) usually means a waterlogged pressure tank or a
          worn pressure switch. Write down how often it clicks and what the gauge reads at each click, and call a local
          well and pump company.
        </KeyAnswer>

        <Prose>
          <h2>What a pressure tank does</h2>
          <p>
            A pressure tank holds a reserve of water under pressure, usually with a cushion of air above a bladder or
            diaphragm. When you open a tap, the tank pushes water out first, so the pump doesn&apos;t have to start for
            every glass of water. When the pressure drops far enough, the switch starts the pump, the pump refills the
            tank, and the switch shuts it off again.
          </p>
          <p>
            That cycle is what lets a pump run in longer, steadier stretches. When the tank can&apos;t do its job, the pump
            starts and stops far more often, which is harder on the motor and the switch.
          </p>

          <h2>Signs of a waterlogged pressure tank</h2>
          <ul>
            <li>The pump clicks on and off every few seconds while water is running.</li>
            <li>The pressure gauge swings quickly between high and low.</li>
            <li>Pressure at the taps pulses or surges.</li>
            <li>The tank sounds or feels full of water all the way up, rather than having an air cushion at the top.</li>
          </ul>
          <p>
            A tank becomes waterlogged when it loses its air charge or its bladder fails. Some tanks can be recharged;
            others need replacement. A pro can tell which, so leave the tank&apos;s valves and fittings alone.
          </p>

          <h2>Pressure switch basics</h2>
          <p>
            The pressure switch is the small box, usually on a short pipe near the tank, that turns the pump on at one
            pressure and off at another. Its contacts carry the pump&apos;s power, so it&apos;s an electrical part:
            don&apos;t open the cover. Signs it may be the problem:
          </p>
          <ul>
            <li>The pump won&apos;t start even though the gauge reads low.</li>
            <li>The pump won&apos;t stop, or keeps running after the gauge reads high.</li>
            <li>You hear chattering or buzzing from the switch.</li>
            <li>The small tube or fitting under the switch is clogged or has frozen (see <Link href="/frozen-well-line">frozen well lines</Link>).</li>
          </ul>

          <h2>The gauge reading is what to report</h2>
          <p>
            The round pressure gauge near the tank is the single most useful thing to look at. Before you call, note the
            reading when the pump starts and when it stops, if you can hear it, and how long it runs. Those numbers tell a
            pump company a lot about whether the tank, the switch or the pump is at fault.
          </p>
        </Prose>

        <div className="my-8 max-w-3xl">
          <CtaPair />
        </div>

        <Prose>
          <h2>Tank and switch problems vs. pump problems</h2>
          <p>
            Tank and switch problems are often cheaper than pump problems because the parts are above ground: nobody
            has to pull the pump, the drop pipe and the wire out of the well. That&apos;s also why a good pump company
            checks the tank and switch first, and why it checks them again when a pump does need replacing. A new pump
            on a waterlogged tank will short cycle just like the old one.
          </p>
          <p>
            If the house has no water at all, start with the{" "}
            <Link href="/no-water-from-well">no-water guide</Link>. If the pump itself is failing, see{" "}
            <Link href="/well-pump-replacement">well pump replacement</Link>. For typical cost ranges, see the{" "}
            <Link href="/well-pump-cost">well pump cost guide</Link>.
          </p>

          <h2>Constant-pressure systems</h2>
          <p>
            Some homes replace the standard switch with a constant-pressure (variable-speed) controller, which speeds the
            pump up and down to hold a steadier pressure, usually with a smaller tank. Whether it suits your well is a
            question for the pump company; it changes the cost and the parts involved.
          </p>

          <h2>Questions to ask the pump company</h2>
          <ul>
            <li>Is the tank waterlogged, and can it be recharged or does it need replacing?</li>
            <li>Is the switch worn, set wrong, or clogged underneath?</li>
            <li>Is the tank the right size for the pump and the house?</li>
            <li>Who does the electrical work, and are you registered with the Montana Department of Labor &amp; Industry?</li>
            <li>What warranty covers the parts and the labor?</li>
          </ul>
        </Prose>

        <section aria-labelledby="pt-faq" className="mt-16 max-w-3xl">
          <h2 id="pt-faq" className="mb-6 text-[2rem] font-extrabold leading-none tracking-[-0.035em]">Pressure tank questions</h2>
          <FaqList faqs={faqs} />
        </section>

        <LastReviewed date={site.lastReviewed} />
      </Article>

      <ClosingForm source="pressure-tank-repair" eyebrow="Get a quote" title="Get a pressure tank or switch looked at" defaultNeed="Pressure tank or switch" />
      <RelatedServices current={path} />
    </>
  );
}
