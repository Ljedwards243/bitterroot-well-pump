import Link from "next/link";
import { Article, KeyAnswer, LastReviewed, Prose } from "@/components/Article";
import { ClosingForm } from "@/components/ClosingForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import { Source } from "@/components/Source";
import { pageMetadata } from "@/lib/metadata";
import { serviceSchema, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/service-area";
const title = "Well Pump Service: Stevensville to Darby, MT";
const description =
  "Well pump service across the Bitterroot Valley, MT: Hamilton, Stevensville, Corvallis, Victor, Darby, Florence and Pinesdale. Get a local pump company.";

export const metadata = pageMetadata({ title, description, path });

// Brief §7: one section per town, verified geography only. No town-specific water or well
// claims (standards §6). TODO: Luke to add local knowledge (housing types, acreage,
// well houses) before any town gets its own page.
const sections = [
  {
    id: "hamilton",
    name: "Hamilton, MT",
    body: "Hamilton is the Ravalli County seat and the county's only incorporated city, with about 5,400 residents in 2024. Well pump repair in Hamilton covers homes in town on private wells and the rural properties around it, in the middle of the valley.",
    cite: true,
  },
  {
    id: "stevensville",
    name: "Stevensville, MT",
    body: "Stevensville sits in the north part of the valley along the Bitterroot River, between Florence and Corvallis. Rural homes around it depend on private wells like most of the valley.",
  },
  {
    id: "corvallis",
    name: "Corvallis, MT",
    body: "Corvallis is between Stevensville and Hamilton on the east side of the river. Requests from Corvallis go to companies that serve the east side and the central valley.",
  },
  {
    id: "victor",
    name: "Victor, MT",
    body: "Victor is on the west side of the valley between Stevensville and Hamilton. Requests from Victor go to companies that serve the west side and the central valley.",
  },
  {
    id: "darby",
    name: "Darby, MT",
    body: "Darby is at the south end of the valley, upriver from Hamilton. Distance and winter roads can matter for a pump call this far south, so mention your location when you call.",
  },
  {
    id: "florence",
    name: "Florence, MT",
    body: "Florence is at the north end of the Ravalli County part of the valley, toward Missoula. Requests from Florence and the Lolo area at the valley's north end are welcome.",
  },
  {
    id: "pinesdale",
    name: "Pinesdale, MT",
    body: "Pinesdale is on the west side of the valley near Hamilton. Well pump requests from Pinesdale go to companies serving the central valley.",
  },
] as const;

export default function ServiceArea() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "Well pump service across the Bitterroot Valley, Montana",
            serviceType: "Well pump repair",
            description:
              "Connection to established, independent local well and pump companies serving Hamilton, Stevensville, Corvallis, Victor, Darby, Florence and Pinesdale, Montana.",
            path,
          }),
        ]}
      />
      <PageHero
        eyebrow="Service area · Ravalli County, MT"
        title="Well Pump Help Across the Bitterroot Valley"
        crumbs={[{ name: "Service Area", path }]}
      >
        <p>
          From Florence to Darby, we connect valley homeowners with established local well and pump companies. Find your
          town below.
        </p>
      </PageHero>

      <Article>
        <Prose>
          <p>
            Our <strong>well pump service in the Bitterroot Valley</strong> covers Ravalli County, Montana, from Florence
            in the north to Darby in the south. The valley runs south to north along the Bitterroot River, and most of its
            rural homes run on private wells: the{" "}
            <Source id="groundwater">Montana Bureau of Mines and Geology</Source> counted 25,375 water wells in the valley
            in 2023. Ravalli County had about 48,600 residents in 2025, making it Montana&apos;s seventh-most populous
            county (<Source id="usafacts">USAFacts, Census estimates</Source>).
          </p>
        </Prose>

        <KeyAnswer>
          We connect homeowners in Hamilton, Stevensville, Corvallis, Victor, Darby, Florence and Pinesdale, Montana, with
          established local well and pump companies. Tell us your town when you call or send the form.
        </KeyAnswer>

        <nav aria-label="Towns on this page" className="my-8 flex max-w-3xl flex-wrap gap-2">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="border border-rule bg-ground-alt px-3 py-2 font-mono text-sm text-ink hover:border-accent hover:text-accent">
              {s.name}
            </a>
          ))}
        </nav>

        <div className="max-w-3xl">
          {sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-24 border-t-2 border-ink py-8">
              <h2 id={`${s.id}-h`} className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-[2rem]">
                Well pump repair in {s.name}
              </h2>
              <p className="prose-wl mt-3">
                {s.body}
                {"cite" in s && (
                  <>
                    {" "}(<Source id="usafacts">USAFacts</Source>)
                  </>
                )}
              </p>
              <p className="mt-3 text-[1.0625rem]">
                No water in {s.name.replace(", MT", "")}? Start with the{" "}
                <Link href="/no-water-from-well" className="font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
                  no-water checklist
                </Link>
                , or{" "}
                <a href="#get-help" className="font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
                  get connected
                </a>
                .
              </p>
            </section>
          ))}
        </div>

        <Prose className="mt-6">
          <h2>Services in every town</h2>
          <ul>
            <li><Link href="/no-water-from-well">No water from your well</Link></li>
            <li><Link href="/frozen-well-line">Frozen well lines and hydrants</Link></li>
            <li><Link href="/pressure-tank-repair">Pressure tank and switch repair</Link></li>
            <li><Link href="/well-pump-replacement">Well pump replacement</Link></li>
            <li><Link href="/well-inspection-home-sale">Well inspections for home sales</Link></li>
            <li><Link href="/well-water-testing">Well water testing</Link></li>
          </ul>
        </Prose>

        <LastReviewed date={site.lastReviewed} />
      </Article>

      <ClosingForm source="service-area" eyebrow="Get connected" title="Get connected with a pump company near you" />
      <RelatedServices current={path} />
    </>
  );
}
