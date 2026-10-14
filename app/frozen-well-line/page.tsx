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

const path = "/frozen-well-line";
const title = "Frozen Well Line or Hydrant? Bitterroot Valley, MT Guide";
const description =
  "Frozen well line, pressure tank or frost-free hydrant in the Bitterroot Valley? Where wells freeze, what to check safely, and how to get a local pro out.";

export const metadata = pageMetadata({ title, description, path });

// Added 2026-10-14 (brief §5–§7). General how-it-works content only: no temperatures,
// frost depths, durations or prices (brief §4 "Do NOT state").
const faqs: Faq[] = [
  {
    q: "Can a well pump freeze?",
    a: "A submersible pump sits deep in the well, below the water, so it's rarely the part that freezes. What usually freezes is exposed pipe, a pressure tank or switch in an unheated space, a buried line that was set too shallow, or a frost-free hydrant that isn't draining. An above-ground jet pump in an unheated well house can freeze too.",
  },
  {
    q: "How do I thaw a frozen well line?",
    a: "Leave thawing to a pump company or plumber. Never use an open flame, which can start a fire or damage pipe and wiring, and don't open the well cap or the switch cover. If the pump is running without stopping, tell the pro right away.",
  },
  {
    q: "Why does my frost-free hydrant freeze?",
    a: "A frost-free hydrant is built to drain the water in its standpipe back into the ground below the frost line after each use. If the drain is clogged or the ground around it can't take the water, or a hose is left attached, water can stay in the standpipe and freeze. A pro can tell whether it needs repair or replacement.",
  },
  {
    q: "How do I keep my well from freezing next winter?",
    a: "Ask a pump company to look at the weak points: heat or insulation for the well house, pump house or crawl space where the tank sits, exposed pipe, whether your hydrants drain properly, and whether the buried line is deep enough. Your well log may show how the well was built.",
  },
];

export default function Frozen() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "Frozen well line and frost-free hydrant repair in the Bitterroot Valley, Montana",
            serviceType: "Well pump repair",
            description:
              "Connection to established, independent local well and pump companies for frozen well lines, pressure tanks and frost-free hydrants in the Bitterroot Valley, Montana.",
            path,
          }),
        ]}
      />
      <PageHero
        eyebrow="Frozen lines · Bitterroot Valley, MT"
        title="Frozen Well Line or Hydrant in the Bitterroot Valley"
        crumbs={[{ name: "Frozen Lines & Hydrants", path }]}
      >
        <p>
          If the water stopped in a cold snap, a frozen line, hydrant or pressure tank is a common cause, and a pump
          company can find which. Here&apos;s where wells freeze and what to check safely.
        </p>
      </PageHero>

      <Article>
        <Prose>
          <p>
            A <strong>frozen well line</strong> can look exactly like a dead pump: you open the tap and nothing comes.
            The difference matters, because thawing a line, fixing a hydrant or replacing a frozen pressure switch is a
            different job, and often a smaller one, than pulling a pump. Knowing where wells usually freeze, and what you
            can safely look at, helps the pump company you call get it right the first time.
          </p>
        </Prose>

        <KeyAnswer>
          Most well freezes happen above ground or close to the surface: exposed pipe, a tank or switch in an unheated
          space, a shallow buried line, or a frost-free hydrant that isn&apos;t draining. Never use an open flame. Tell the
          pro when it stopped and whether the pump is running nonstop.
        </KeyAnswer>

        <Prose>
          <h2>Why most of a well system doesn&apos;t freeze</h2>
          <p>
            A properly built well keeps water moving below the frost line. The submersible pump sits deep in the casing,
            under the water. A fitting called a pitless adapter turns the water out of the casing and toward the house
            below the frost line, so the buried line stays in ground that doesn&apos;t freeze. (Our{" "}
            <Link href="/#system-h">well system diagram</Link> shows how the parts fit together.) Freezes happen where
            water leaves that protected zone.
          </p>

          <h2>Where Bitterroot wells usually freeze</h2>
          <h3>Exposed pipe in a well house, pump house, crawl space or garage</h3>
          <p>
            Pipe that runs through an unheated or drafty space is the most common weak point, especially where it rises
            from the ground and before it reaches heated space.
          </p>
          <h3>The pressure tank, pressure switch and gauge</h3>
          <p>
            If the tank sits in an unheated well house, the small tube that feeds the pressure switch can freeze before
            anything else. When the switch can&apos;t sense pressure, the pump may not start, or may not stop.
          </p>
          <h3>A buried line set too shallow</h3>
          <p>
            A line between the well and the house that isn&apos;t deep enough, or that loses cover where a driveway, path
            or snow-cleared area exposes it, can freeze in a long cold spell.
          </p>
          <h3>Frost-free hydrants</h3>
          <p>
            Hydrants for barns, corrals and gardens are common on valley acreages. A frost-free hydrant drains its
            standpipe below ground after each use. If the drain is clogged or a hose is left attached, water stays in the
            standpipe and freezes.
          </p>
          <h3>Above-ground jet pumps</h3>
          <p>
            Some homes use a jet pump that sits above ground instead of a submersible pump. In an unheated space, the pump
            itself can freeze and crack.
          </p>
        </Prose>

        <div className="my-8 max-w-3xl">
          <CtaPair />
        </div>

        <Prose>
          <h2>What to check, safely</h2>
          <ul>
            <li>
              <strong>Is it every tap, or some?</strong> Water at some taps but not others points to a frozen section
              inside the house rather than at the well.
            </li>
            <li>
              <strong>Is the pump running nonstop?</strong> Listen near the tank. A pump that keeps running can be
              damaged; tell the pro right away.
            </li>
            <li>
              <strong>What does the pressure gauge read?</strong> Write down the number.
            </li>
            <li>
              <strong>Any puddles, ice or split fittings?</strong> Look at exposed pipe and around the tank. A frozen pipe
              can split and leak once it thaws.
            </li>
            <li>
              <strong>Is a hydrant stuck or leaking?</strong> Note which one and whether a hose was left on it.
            </li>
          </ul>
          <p>
            <strong>Safety:</strong> never use an open flame, such as a torch, on pipes, the tank or the switch. Don&apos;t
            open the well cap or the switch cover, and don&apos;t touch wiring. If you&apos;re unsure, don&apos;t touch it.
            Call.
          </p>

          <h2>Is it really a freeze?</h2>
          <p>
            Not every winter no-water call is a freeze. A pump, switch or wiring problem can happen in any season, and the{" "}
            <Source id="groundwater">Montana Bureau of Mines and Geology</Source> reports that water levels in Bitterroot
            Valley wells rise and fall with wet and dry years. If the water stopped during a cold snap, say so; if it
            didn&apos;t, see <Link href="/no-water-from-well">no water from your well</Link> for the other common causes.
          </p>

          <h2>Preventing the next freeze</h2>
          <p>Once the water is back, ask the pump company about the weak points they found:</p>
          <ol>
            <li>Does the well house, pump house or crawl space need heat or insulation?</li>
            <li>Is any pipe exposed that should be insulated, rerouted or buried deeper?</li>
            <li>Are the frost-free hydrants draining, or do any need repair or replacement?</li>
            <li>Is the buried line deep enough along its whole run?</li>
            <li>Should the pressure tank or switch move to a heated space?</li>
          </ol>
          <p>
            Your <Source id="gwicGuide">well log in the state&apos;s Ground Water Information Center</Source> shows how
            the well was built, which can help answer some of these. For a sense of what repairs cost, see the{" "}
            <Link href="/well-pump-cost">well pump cost guide</Link>.
          </p>
        </Prose>

        <section aria-labelledby="fz-faq" className="mt-16 max-w-3xl">
          <h2 id="fz-faq" className="mb-6 text-[2rem] font-extrabold leading-none tracking-[-0.035em]">Frozen well questions</h2>
          <FaqList faqs={faqs} />
        </section>

        <LastReviewed date={site.lastReviewed} />
      </Article>

      <ClosingForm source="frozen-well-line" eyebrow="Frozen?" title="Get a pump company out for a frozen well" defaultNeed="Frozen line or hydrant" />
      <RelatedServices current={path} />
    </>
  );
}
