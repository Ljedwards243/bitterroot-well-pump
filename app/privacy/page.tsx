import Link from "next/link";
import { Article, Prose } from "@/components/Article";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { hasPhone, phoneDisplay, phoneHref, site } from "@/lib/site";

const path = "/privacy";

export const metadata = pageMetadata({
  title: "Privacy Policy | Bitterroot Valley Well Pump Help",
  description:
    "Privacy policy for Bitterroot Valley Well Pump Help: what we collect by form and phone, how it's shared with local pump companies, and your choices.",
  path,
});

// TODO: Luke to review before launch. Assumes a voicemail-only line until a tenant is signed
// (brief §11); update the "Calls" section if call forwarding or call recording changes.
export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy Policy" crumbs={[{ name: "Privacy Policy", path }]} formHref="/get-help">
        <p>Last updated {site.lastReviewed}.</p>
      </PageHero>

      <Article>
        <Prose>
          <p>
            This policy explains what information {site.name} collects when you use this website, call our phone number
            or submit a request, and how that information is used. {site.disclosure}
          </p>

          <h2>Information you give us</h2>
          <p>When you submit a request through our form, we collect:</p>
          <ul>
            <li>Your name and phone number, and your email address if you give it</li>
            <li>Your town</li>
            <li>What&apos;s happening (for example no water or a planned replacement) and whether anyone is without water</li>
            <li>Anything else you choose to tell us</li>
          </ul>
          <p>We only ask for what&apos;s needed to respond to your request.</p>

          <h2>Calls</h2>
          <p>
            When you call the number on this site, our phone provider records call details such as your phone number and
            the time and length of the call. If you leave a voicemail, it is recorded and stored so we can respond to it.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To pass your request to an independent local well and pump company so it can contact you</li>
            <li>To follow up on your request if needed</li>
            <li>To understand which pages and services people find useful, so we can improve the site</li>
          </ul>
          <p>We don&apos;t sell your personal information.</p>

          <h2>Who we share it with</h2>
          <ul>
            <li>
              <strong>Independent well and pump companies.</strong> Your request and contact details are shared with the
              company we connect you with so it can respond. These are independent businesses, and their own privacy
              practices apply to information they hold.
            </li>
            <li>
              <strong>Service providers that help us run the site,</strong> such as website hosting, form processing,
              phone service and analytics providers.
            </li>
            <li>
              <strong>When required by law,</strong> or to protect the rights and safety of others.
            </li>
          </ul>

          <h2>Analytics and cookies</h2>
          <p>
            We may use Google Analytics to understand how visitors use the site, such as which pages are viewed and
            whether the call button or form is used. Google Analytics uses cookies. You can block cookies in your browser
            or use Google&apos;s opt-out browser add-on.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to delete the information you submitted, or to stop contacting you,{" "}
            {hasPhone ? (
              <>
                by calling <a href={phoneHref}>{phoneDisplay}</a>
              </>
            ) : (
              <>
                by sending a request through our <Link href="/get-help">contact form</Link>
              </>
            )}
            . We&apos;ll also ask the company we connected you with to stop contacting you.
          </p>

          <h2>Children</h2>
          <p>This site is for adults arranging well and pump services and isn&apos;t directed at children under 13.</p>

          <h2>Changes</h2>
          <p>
            We may update this policy. The date at the top shows when it last changed. Questions?{" "}
            {hasPhone ? <>Call {phoneDisplay} or </> : null}
            <Link href="/get-help">send a request</Link>.
          </p>
        </Prose>
      </Article>
    </>
  );
}
