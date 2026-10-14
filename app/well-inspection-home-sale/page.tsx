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

const path = "/well-inspection-home-sale";
const title = "Well Inspections for Home Sales in Ravalli County, MT";
const description =
  "Buying a house with a well in Montana? What a well inspection and flow test cover, how to find the well log, and water testing for Ravalli County home sales.";

export const metadata = pageMetadata({ title, description, path });

const faqs: Faq[] = [
  {
    q: "Do I need a well inspection to buy a house?",
    a: "Whether one is required depends on your purchase contract and your lender, so ask your real estate agent and lender. Many buyers of a home with a well ask for a well flow test and a water test during the inspection period, because the well is the home's only water supply.",
  },
  {
    q: "How do I find the well log for a property?",
    a: "Most Montana wells have a log in the Montana Bureau of Mines and Geology's Ground Water Information Center (GWIC). It shows the well's depth, water level and the geology around it. MSU Extension publishes a step-by-step guide to finding a well in GWIC.",
  },
  {
    q: "Can I use an MSU Well Educated test kit for a home sale?",
    a: "No. MSU Extension says the Well Educated program is not intended for real estate or legal purposes. For a home sale, work directly with a Montana-certified lab.",
  },
  {
    q: "Who do I ask about water rights for a well?",
    a: "The Montana Department of Natural Resources and Conservation (DNRC) handles water rights. Ask your agent or attorney how water rights affect your purchase. This page is general information, not legal advice.",
  },
];

export default function HomeSale() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          serviceSchema({
            name: "Well inspections and flow tests for home sales in Ravalli County, Montana",
            serviceType: "Water well inspection",
            description:
              "Connection to established, independent local well and pump companies for well inspections and flow tests during home sales in Ravalli County and the Bitterroot Valley, Montana.",
            path,
          }),
        ]}
      />
      <PageHero
        eyebrow="Home sales · Ravalli County, MT"
        title="Buying or Selling a Home With a Well in the Bitterroot"
        crumbs={[{ name: "Home Sale Inspections", path }]}
      >
        <p>
          A well is the home&apos;s whole water supply. Here&apos;s what buyers usually ask for, where to find the well
          log, and how water testing fits a closing timeline.
        </p>
      </PageHero>

      <Article>
        <Prose>
          <p>
            A <strong>well inspection when buying a house in Montana</strong> answers two questions a city buyer never
            has to ask: will the well deliver enough water, and is the water safe to drink? In the Bitterroot Valley,
            where 25,375 water wells were counted in 2023 according to the{" "}
            <Source id="groundwater">Montana Bureau of Mines and Geology</Source>, most rural sales involve one. This
            page covers the usual checks and where to find the paperwork. It&apos;s general information, not legal
            advice: your agent, lender or attorney can say what your contract requires.
          </p>
        </Prose>

        <KeyAnswer>
          Buyers commonly ask for a well flow test, a look at the pump, tank and switch, and a water test from a
          Montana-certified lab. Pull the well log from the state&apos;s Ground Water Information Center first. Book
          early: inspection windows are short.
        </KeyAnswer>

        <Prose>
          <h2>What a well inspection usually covers</h2>
          <ul>
            <li>
              <strong>A flow test.</strong> Runs water for a set period to see whether the well and pump keep up with
              household use.
            </li>
            <li>
              <strong>The equipment.</strong> The pump&apos;s operation, the pressure tank&apos;s condition and air
              charge, the pressure switch, the gauge, and visible wiring and plumbing.
            </li>
            <li>
              <strong>The wellhead.</strong> Whether the well cap is intact and the casing is above ground and
              protected.
            </li>
            <li>
              <strong>A water sample</strong> sent to a certified lab, if the buyer asks for one.
            </li>
          </ul>
          <p>
            Ask the company exactly what its inspection includes and what the report will say, so you can share it with
            your agent and lender.
          </p>

          <h2>Find the well log first</h2>
          <p>
            Most Montana wells have a well log in the Montana Bureau of Mines and Geology&apos;s{" "}
            <Source id="gwic">Ground Water Information Center (GWIC)</Source>. The log shows the well&apos;s depth, its
            water level when it was drilled, and the geology around it, which helps a buyer and a pump company know what
            to expect. You&apos;ll need a free GWIC account to browse well data online, and{" "}
            <Source id="gwicGuide">MSU Extension&apos;s step-by-step guide</Source> shows how to find a specific well.
            Sellers: pulling the log before listing saves time later.
          </p>
        </Prose>

        <div className="my-8 max-w-3xl">
          <CtaPair />
        </div>

        <Prose>
          <h2>Water testing for a home sale</h2>
          <p>
            Testing a private well is the owner&apos;s responsibility, and{" "}
            <Source id="msuTesting">MSU Extension</Source> recommends testing every year for bacteria and nitrate. For a
            sale, though, don&apos;t use the Well Educated program&apos;s kits: MSU Extension says the program is not
            intended for real estate or legal purposes. Work directly with a Montana-certified lab instead; the{" "}
            <Source id="wellEducated">Well Educated program&apos;s testing page</Source> lists certified labs around the
            state.
          </p>
          <p>
            What to test for depends on the property. Montana Bureau of Mines and Geology data shows water quality in
            valley wells is generally good, but a cluster of wells in the foothills of the Willow Creek drainage has high
            naturally occurring arsenic. See <Link href="/well-water-testing">well water testing in Ravalli County</Link>{" "}
            for the details.
          </p>

          <h2>If the inspection finds a problem</h2>
          <p>
            A weak flow test, a waterlogged tank, a failing pump or a lab result above a health standard doesn&apos;t
            have to end a sale. Buyers and sellers often negotiate a repair, a credit or treatment before closing. Get a
            written quote from a pump company so both sides are working from the same numbers, and talk to your agent or
            attorney about how to handle it in your contract. For typical cost ranges, see the{" "}
            <Link href="/well-pump-cost">well pump cost guide</Link>.
          </p>

          <h2>Water rights</h2>
          <p>
            Questions about water rights attached to a well go to the Montana Department of Natural Resources and
            Conservation (DNRC) and to your agent or attorney. We can&apos;t give legal advice on water rights.
          </p>

          <h2>Timing</h2>
          <p>
            Inspection windows are short, and spring and summer are the busy selling season. Call or send the form as soon
            as you have an accepted offer, mention your deadline, and we&apos;ll connect you with an established local
            well and pump company serving that part of the valley.
          </p>
        </Prose>

        <section aria-labelledby="hs-faq" className="mt-16 max-w-3xl">
          <h2 id="hs-faq" className="mb-6 text-[2rem] font-extrabold leading-none tracking-[-0.035em]">Home sale well questions</h2>
          <FaqList faqs={faqs} />
        </section>

        <LastReviewed date={site.lastReviewed} />
      </Article>

      <ClosingForm source="well-inspection-home-sale" eyebrow="On a deadline?" title="Get a well inspection booked" defaultNeed="Home sale inspection" />
      <RelatedServices current={path} />
    </>
  );
}
