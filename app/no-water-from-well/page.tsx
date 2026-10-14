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

const path = "/no-water-from-well";
const title = "No Water From Your Well? Bitterroot Valley, MT Guide";
const description =
  "No water from your well? What to check first, what each symptom often points to, and what to tell the pro. Get connected with a Bitterroot Valley pump company.";

export const metadata = pageMetadata({ title, description, path });

// Brief §7 symptom list. Each section: what it often points to, and what to tell the pro.
// Observation only: no in-well, wiring or switch-cover instructions (brief §11).
const sections = [
  {
    id: "no-water-at-all",
    h: "No water at all",
    points: "No power reaching the pump, a failed pressure switch, or a failed pump or motor. Less often, a broken drop pipe or a low water level in the well.",
    tell: "Whether the breaker is tripped, what the pressure gauge reads (zero is common here), and whether you hear the pump running.",
  },
  {
    id: "pump-runs-no-water",
    h: "The pump runs, but no water comes",
    points: "A pump that's running but not moving water, a split or separated drop pipe, or a water level that has dropped below the pump.",
    tell: "How long it has been running, whether it stops on its own, and whether there's been a dry spell. A pump that runs without water can be damaged, so call sooner rather than later.",
  },
  {
    id: "low-or-surging-pressure",
    h: "Low or surging pressure",
    points: "A pressure tank that's lost its air charge, a pressure switch out of adjustment, a clogged filter or line, or a pump that's wearing out.",
    tell: "The gauge reading when the pump kicks on and when it shuts off, and whether it's every tap or just one part of the house.",
  },
  {
    id: "short-cycling",
    h: "The pump clicks on and off every few seconds",
    points: "Short cycling usually points to the pressure tank (waterlogged) or the pressure switch. It's often a cheaper fix than the pump, but it works the pump harder the longer it goes on.",
    tell: "How often it clicks, and what the gauge does each time.",
    link: { href: "/pressure-tank-repair", text: "Pressure tank and switch repair" },
  },
  {
    id: "breaker-trips",
    h: "The breaker keeps tripping",
    points: "A problem with the pump motor, its wiring, or the control box. This is an electrical fault, not a reset-and-forget.",
    tell: "That it has tripped more than once. Leave it off until a pro has looked; don't keep resetting it.",
  },
  {
    id: "air-or-sputtering",
    h: "Air or sputtering at the faucets",
    points: "Air getting into the system, often from a leak in the drop pipe, a falling water level, or a pressure tank problem.",
    tell: "Whether it's constant or only after heavy use, and whether the water is also cloudy.",
  },
  {
    id: "dirty-water",
    h: "Dirty or cloudy water after pump work",
    points: "Sediment stirred up when the pump was pulled or replaced, or a pump set too close to the bottom of the well.",
    tell: "When the work was done and whether it's clearing. Ask whether the well was disinfected afterward and whether you should test the water.",
    link: { href: "/well-water-testing", text: "Well water testing in Ravalli County" },
  },
  {
    id: "frozen-line",
    h: "The water stopped in a cold snap",
    points: "A frozen line, pressure tank, switch or hydrant, usually in an unheated well house, crawl space or garage. Never use an open flame to thaw a pipe.",
    tell: "When it stopped, where your tank and switch are, and whether the pump is running without stopping.",
    link: { href: "/frozen-well-line", text: "Frozen well lines and hydrants" },
  },
] as const;

const faqs: Faq[] = [
  {
    q: "Why is there no water coming from my well?",
    a: "The most common causes are no power to the pump (a tripped breaker), a failed pressure switch, a failed pump or motor, a broken drop pipe, a frozen line, or a low water level. Check whether the breaker is tripped and what the pressure gauge reads, then call a pump company. Don't open the well cap or touch wiring.",
  },
  {
    q: "Should I keep resetting the breaker for my well pump?",
    a: "No. A breaker that trips more than once points to an electrical fault in the pump, motor or wiring. Leave it off, note how many times it tripped, and call a pump company to find the cause.",
  },
  {
    q: "Can a dry spell make my well stop working?",
    a: "It can. Montana Bureau of Mines and Geology data shows water levels in Bitterroot Valley wells rise and fall with wet and dry years, and the 2020 to 2023 drought showed up in them. A pro can tell whether the water level has dropped below your pump.",
  },
];

export default function NoWater() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "No water from well: emergency well pump repair in the Bitterroot Valley, Montana",
            serviceType: "Well pump repair",
            description:
              "Connection to established, independent local well and pump companies when a home in the Bitterroot Valley, Montana has no water from its well.",
            path,
          }),
        ]}
      />
      <PageHero
        eyebrow="No water · Bitterroot Valley, MT"
        title="No Water From Your Well? What to Check and Who to Call"
        crumbs={[{ name: "No Water From Well", path }]}
      >
        <p>
          If the house has no water, start with the breaker and the pressure gauge. Then find your symptom below, and
          tell the pro what you saw.
        </p>
      </PageHero>

      <Article>
        <Prose>
          <p>
            <strong>No water from your well</strong> is the call nobody wants to make, especially with a family, a barn or
            a cold snap waiting. The good news is that the cause is often something a pump company can find quickly, and
            the few minutes you spend looking first make that call faster. You don&apos;t need tools, and you shouldn&apos;t
            open anything. This guide covers what to check, what each symptom often points to, and what to tell the pro
            when you call. It&apos;s general information, not a diagnosis: only a pro on site can say for sure.
          </p>
        </Prose>

        <KeyAnswer>
          Check three things: whether the well pump breaker is tripped, what the pressure gauge by the tank reads, and
          whether you can hear the pump. Don&apos;t open the well cap, the switch cover or any wiring. Then call a local
          well and pump company with what you saw.
        </KeyAnswer>

        <Prose>
          <h2>First checks before you call</h2>
          <ol>
            <li>
              <strong>The breaker.</strong> Find the breaker labeled for the well pump. Is it tripped? Note it. If it has
              already tripped more than once, leave it off.
            </li>
            <li>
              <strong>The pressure gauge.</strong> There&apos;s usually a round gauge on or near the pressure tank, in a
              basement, utility room or well house. Write down the number. Zero, low, or falling fast all mean something
              different to a pro.
            </li>
            <li>
              <strong>The pump and switch.</strong> Listen near the tank. Is the pump silent, humming, running without
              stopping, or clicking on and off?
            </li>
          </ol>
          <p>
            <strong>Safety:</strong> well systems carry household voltage and water together. Don&apos;t open the well
            cap, the pressure switch cover or the control box, and don&apos;t touch wiring. If you&apos;re unsure,
            don&apos;t touch it. Call.
          </p>
        </Prose>

        <div className="my-8 max-w-3xl">
          <CtaPair />
        </div>

        <div className="max-w-3xl">
          <h2 className="mt-14 text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold leading-[1.12] tracking-[-0.03em]">
            Symptom by symptom: what it often points to
          </h2>
          <p className="prose-wl mt-3">
            The same &ldquo;no water&rdquo; can come from very different problems. Find the closest match:
          </p>
          <nav aria-label="Symptoms on this page" className="mt-5 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="border border-rule bg-ground-alt px-3 py-2 font-mono text-sm text-ink hover:border-accent hover:text-accent">
                {s.h}
              </a>
            ))}
          </nav>
          {sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="mt-12 scroll-mt-24 border-t-2 border-ink pt-6">
              <h3 id={`${s.id}-h`} className="text-[1.5rem] font-bold leading-tight tracking-[-0.02em] sm:text-[1.75rem]">{s.h}</h3>
              <dl className="mt-4 flex flex-col gap-4 text-[1.0625rem] leading-relaxed text-body sm:text-lg">
                <div>
                  <dt className="eyebrow text-accent">Often points to</dt>
                  <dd className="mt-1.5">{s.points}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-accent">Tell the pro</dt>
                  <dd className="mt-1.5">{s.tell}</dd>
                </div>
              </dl>
              {"link" in s && (
                <p className="mt-3 text-[1.0625rem]">
                  <Link href={s.link.href} className="font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
                    {s.link.text} →
                  </Link>
                </p>
              )}
              <div className="mt-5">
                <CtaPair />
              </div>
            </section>
          ))}
        </div>

        <Prose className="mt-14">
          <h2>When a dry spell is the problem</h2>
          <p>
            Not every no-water call is a broken part. The{" "}
            <Source id="groundwater">Montana Bureau of Mines and Geology</Source> reports that water levels in
            Bitterroot Valley wells generally follow precipitation, and its long-term records show the 2020 to 2023
            drought in valley well levels. It tracks 38 wells in Ravalli County. If the water level drops below your pump,
            the pump can run without delivering water. A pump company can check, and the answer may be lowering the pump
            rather than replacing it. Deepening or rehabilitating the well itself is licensed work in Montana; see{" "}
            <Link href="/montana-well-contractor-license">who needs a Montana well license</Link>.
          </p>

          <h2>What happens when you call</h2>
          <p>
            Call or send the form, and we connect you with an established local well and pump company serving your part
            of the valley. They ask about what you saw, come out to diagnose it, and quote the repair before doing the
            work. We don&apos;t diagnose anything ourselves, and we don&apos;t set prices. For a sense of typical costs,
            see the <Link href="/well-pump-cost">well pump cost guide</Link>.
          </p>

          <h2>Questions to ask the pump company</h2>
          <ul>
            <li>Are you registered with the Montana Department of Labor &amp; Industry, and are you insured?</li>
            <li>Who does the electrical work?</li>
            <li>Will you check the pressure tank and switch, not just the pump?</li>
            <li>What warranty comes with the parts and the labor?</li>
            <li>Will you disinfect the well and suggest a water test after the job?</li>
          </ul>
        </Prose>

        <section aria-labelledby="nw-faq" className="mt-16 max-w-3xl">
          <h2 id="nw-faq" className="mb-6 text-[2rem] font-extrabold leading-none tracking-[-0.035em]">No-water questions</h2>
          <FaqList faqs={faqs} />
        </section>

        <LastReviewed date={site.lastReviewed} />
      </Article>

      <ClosingForm source="no-water-from-well" eyebrow="No water?" title="Get connected with a pump company now" defaultNeed="No water" />
      <RelatedServices current={path} />
    </>
  );
}
