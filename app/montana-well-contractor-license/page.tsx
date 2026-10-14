import Link from "next/link";
import { Article, KeyAnswer, LastReviewed, Prose } from "@/components/Article";
import { ClosingForm } from "@/components/ClosingForm";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import { Source } from "@/components/Source";
import { pageMetadata } from "@/lib/metadata";
import { webPageSchema, type Faq } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/montana-well-contractor-license";
const title = "Montana Well Contractor License: How to Check a Pro";
const description =
  "Montana well contractor licenses explained: who needs a Board license, why pump installers aren't licensed, and how to check a pump company before you hire.";

export const metadata = pageMetadata({ title, description, path });

// Trust page (brief §7): we can't claim credentials, so we teach visitors to check them.
// "Licensed" describes only Board of Water Well Contractors licensees (brief §11).
const faqs: Faq[] = [
  {
    q: "Does Montana license well pump installers?",
    a: "No. Montana's Board of Water Well Contractors licenses water well contractors, water well drillers and monitoring well constructors. HB 707 (2007) would have added licenses for pump installers and pump installation contractors, but it was tabled in the House Business and Labor Committee and died.",
  },
  {
    q: "How do I check that a contractor is registered in Montana?",
    a: "Construction contractors with employees must hold a Construction Contractor Registration with the Montana Department of Labor & Industry. Ask the company for proof, and verify it on the DLI website or by calling (406) 444-7734.",
  },
  {
    q: "Who needs a license to drill a well in Montana?",
    a: "Under MCA 37-43-302, a water well contractor, water well driller or monitoring well constructor needs a Board of Water Well Contractors license to construct, drill, alter, abandon, decommission or rehabilitate a water well. Owners working on a well on their own farm, ranch or residential land can do so under a permit from the Board.",
  },
];

export default function Licensing() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, description, path })} />
      <PageHero
        eyebrow="Montana rules · Licensing"
        title="How Montana Licenses Well Drillers (and Why Pump Installers Aren't)"
        crumbs={[{ name: "Montana Well Licensing", path }]}
      >
        <p>
          What Montana licenses, what it doesn&apos;t, and the three things to check before you let anyone work on your
          well. General information, not legal advice.
        </p>
      </PageHero>

      <Article>
        <Prose>
          <p>
            Search for a <strong>Montana well contractor license</strong> and you&apos;ll find that the state licenses
            some well work closely and leaves other work unlicensed. That surprises a lot of homeowners, and it matters
            when you&apos;re choosing who to call. We&apos;re a connection service, not a contractor, so we don&apos;t
            hold any license ourselves. What we can do is explain the rules plainly and show you how to check a company
            yourself.
          </p>
        </Prose>

        <KeyAnswer>
          Montana licenses water well contractors, drillers and monitoring well constructors, but not pump installers.
          For drilling or well repair, check the Board of Water Well Contractors&apos; license list. For pump work, check
          Department of Labor &amp; Industry registration, insurance and experience.
        </KeyAnswer>

        <Prose>
          <h2>Who needs a Board of Water Well Contractors license</h2>
          <p>
            Under <Source id="mca302">Montana Code Annotated 37-43-302</Source>, it is unlawful for a water well
            contractor, water well driller or monitoring well constructor to construct, drill, alter, abandon,
            decommission or rehabilitate a water well without a license from the Board of Water Well Contractors. The law
            makes an exception for owners working on a well on their own farm, ranch or residential land, under a permit
            from the Board.
          </p>
          <p>So a Board license applies to work on the well itself:</p>
          <ul>
            <li>Drilling a new well</li>
            <li>Deepening or otherwise altering a well</li>
            <li>Rehabilitating a well</li>
            <li>Abandoning or decommissioning a well</li>
          </ul>

          <h2 id="pump-installers">Why pump installers aren&apos;t licensed</h2>
          <p>
            Montana has no state license for well pump installers. In 2007,{" "}
            <Source id="hb707">HB 707</Source> would have expanded the Board to cover pump installation contractors and
            pump installers and set license requirements for them. According to the{" "}
            <Source id="hb707Minutes">House Business and Labor Committee minutes</Source> of February 22, 2007, the bill
            was tabled in committee, and it died. Pump installation has stayed unlicensed since.
          </p>
          <p>
            That&apos;s why this site never promises a &ldquo;licensed pump installer&rdquo;: there&apos;s no such
            license to hold. It doesn&apos;t mean pump work is unregulated, though. Contractor registration, electrical
            licensing and insurance all still apply.
          </p>

          <h2 id="check">How to check a pump or well company</h2>
          <h3>1. Contractor registration (Department of Labor &amp; Industry)</h3>
          <p>
            All construction contractors with employees must hold a Construction Contractor Registration with the{" "}
            <Source id="dli">Montana Department of Labor &amp; Industry</Source>. DLI advises asking for proof and
            verifying it on its website or by calling (406) 444-7734. A one-person business without employees may not need
            a registration; ask how they&apos;re set up.
          </p>
          <h3>2. The Board&apos;s license list, for drilling and well work</h3>
          <p>
            The <Source id="dnrcBoard">Montana DNRC&apos;s Board of Water Well Contractors page</Source> publishes a list
            of licensed drillers and contractors by company or location. If the job involves drilling, deepening,
            rehabilitating or abandoning a well, the company doing it should be on that list.
          </p>
          <h3>3. Insurance and electrical work</h3>
          <p>
            Ask for proof of insurance. Montana also requires a license to work as an electrical contractor or
            electrician (<Source id="mca68">MCA 37-68-301</Source>), so ask who will do the electrical side of your job.
          </p>

          <h2>Questions to ask any pump company</h2>
          <ol>
            <li>Are you registered with the Montana Department of Labor &amp; Industry? Can I see proof?</li>
            <li>Are you insured?</li>
            <li>Who does the electrical work?</li>
            <li>If the job touches the well itself, who holds the Board of Water Well Contractors license?</li>
            <li>What warranty covers the parts and the labor? Is it in writing?</li>
            <li>Will you disinfect the well and recommend a water test after the job?</li>
          </ol>

          <h2>How we choose who to connect you with</h2>
          <p>
            Before we route requests to any company, we check its Department of Labor &amp; Industry registration (if it
            has employees) and proof of insurance, and, for any drilling or well rehabilitation work, a current Board of
            Water Well Contractors license. You should still check for yourself; it takes a few minutes. See{" "}
            <Link href="/about">how this site works</Link>.
          </p>
        </Prose>

        <section aria-labelledby="lic-faq" className="mt-16 max-w-3xl">
          <h2 id="lic-faq" className="mb-6 text-[2rem] font-extrabold leading-none tracking-[-0.035em]">Licensing questions</h2>
          <FaqList faqs={faqs} />
        </section>

        <LastReviewed date={site.lastReviewed} />
      </Article>

      <ClosingForm source="montana-well-contractor-license" eyebrow="Get connected" />
      <RelatedServices current={path} />
    </>
  );
}
