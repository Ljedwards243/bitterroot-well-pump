import Link from "next/link";
import { Article, KeyAnswer, LastReviewed, Prose } from "@/components/Article";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const path = "/about";

export const metadata = pageMetadata({
  title: "About Bitterroot Valley Well Pump Help",
  description:
    "About Bitterroot Valley Well Pump Help: a connection service linking Bitterroot Valley, MT property owners with independent local well and pump companies.",
  path,
});

// TODO: Luke to decide whether to name the operating entity on this page (standards §1, §8).
export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title="About Bitterroot Valley Well Pump Help" crumbs={[{ name: "About", path }]} formHref="/get-help">
        <p>Who we are, what we do, and what we don&apos;t.</p>
      </PageHero>

      <Article>
        <KeyAnswer label="Disclosure">{site.disclosure}</KeyAnswer>
        <Prose>
          <h2>What we do</h2>
          <p>
            Bitterroot Valley Well Pump Help is a connection website for Hamilton, Montana and the rest of the Bitterroot
            Valley in Ravalli County. When you call or send a request through this site, we pass it to an established,
            independent local well and pump company serving your area. That company follows up with you directly,
            diagnoses the problem, agrees on scope and price with you, and does the work.
          </p>

          <h2>What we don&apos;t do</h2>
          <ul>
            <li>We don&apos;t repair, install, diagnose, drill or test anything. We are not a pump, plumbing or drilling company.</li>
            <li>We don&apos;t hold a well contractor license or contractor registration; the companies we connect you with are responsible for theirs.</li>
            <li>We don&apos;t set the prices the independent companies charge.</li>
            <li>We don&apos;t have an office or storefront address for customer visits.</li>
          </ul>

          <h2>Not affiliated with similarly named companies</h2>
          <p>
            Many local businesses use &ldquo;Bitterroot&rdquo; in their names. This site is not affiliated with any pump,
            plumbing or drilling company of a similar name. If you&apos;re trying to reach a specific company, please
            contact it directly.
          </p>

          <h2>Why this site exists</h2>
          <p>
            The Bitterroot Valley had 25,375 water wells in 2023, up from about 3,100 in 1970, according to the Montana
            Bureau of Mines and Geology. When a well pump fails, a household can be without water in minutes, and
            Montana&apos;s licensing rules for well work are easy to misunderstand. This site explains well systems
            plainly, with the sources behind every number, and makes it easy to reach a local pump company.
          </p>

          <h2>How we choose who to connect you with</h2>
          <p>
            Before routing requests to a company, we check its Montana Department of Labor &amp; Industry contractor
            registration (if it has employees) and proof of insurance, and, for any drilling or well rehabilitation work,
            a current Board of Water Well Contractors license. Montana doesn&apos;t license pump installers, so we
            don&apos;t claim anyone is a &ldquo;licensed pump installer.&rdquo; You can check any company yourself; see{" "}
            <Link href="/montana-well-contractor-license">how Montana licenses well drillers</Link>.
          </p>

          <h2>Photos on this site</h2>
          <p>
            Photos show western Montana places and settings, licensed from Unsplash. They are not photos of our work, our
            customers or any company&apos;s crew.
          </p>

          <h2>Your information</h2>
          <p>
            Read our <Link href="/privacy">privacy policy</Link> to see how we handle what you share by form or phone.
            Ready? <Link href="/get-help">Get connected</Link>.
          </p>
        </Prose>
        <LastReviewed date={site.lastReviewed} />
      </Article>
    </>
  );
}
