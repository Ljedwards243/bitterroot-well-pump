import Link from "next/link";
import { Article, Prose } from "@/components/Article";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { pageMetadata } from "@/lib/metadata";
import { towns } from "@/lib/nav";
import { webPageSchema } from "@/lib/schema";
import { hasPhone } from "@/lib/site";

const path = "/get-help";
const title = "Well Pump Repair Quote in Hamilton, MT";
const description =
  "Request a well pump repair quote in Hamilton, MT or anywhere in the Bitterroot Valley. Tell us what's happening and a local pump company follows up.";

export const metadata = pageMetadata({ title, description, path });

export default function GetHelp() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, description, path })} />
      <PageHero
        eyebrow="Get connected · Bitterroot Valley, MT"
        title="Get a Well Pump Repair Quote in Hamilton and the Valley"
        crumbs={[{ name: "Get Help", path }]}
        formHref="#lead-form-name"
      >
        <p>
          Tell us what&apos;s happening. We&apos;ll pass your request to an established, independent local well and pump
          company, who follows up with you directly.
        </p>
      </PageHero>

      <Article>
        <div className="flex flex-col gap-14 lg:flex-row lg:gap-20">
          <div className="min-w-0 lg:flex-[3_1_0]">
            <Prose>
              <p>
                A <strong>well pump repair quote in Hamilton, MT</strong> starts with a few details: where the property
                is, what&apos;s happening, and whether anyone is without water right now. Send the form
                {hasPhone ? " or call" : ""}. The company you&apos;re connected with discusses the problem, timing and
                price with you directly.
              </p>
            </Prose>
            <div className="mt-8 rounded border border-rule bg-white p-5 sm:p-8">
              <QuoteForm source="get-help" tone="light" />
            </div>
          </div>
          <aside className="flex min-w-0 flex-col gap-6 lg:flex-[2_1_0]">
            {hasPhone && (
              <div className="border-t-2 border-ink pt-5">
                <p className="eyebrow text-accent">Out of water?</p>
                <p className="mt-3 text-lg text-body">Calling is the fastest way to get connected.</p>
                <CallButton className="mt-4 w-full sm:w-auto" />
              </div>
            )}
            <div className="border-t-2 border-ink pt-5">
              <p className="eyebrow text-accent">What helps</p>
              <ul className="mt-3 flex flex-col gap-2 text-[1.0625rem] text-body">
                <li><strong className="text-ink">Town:</strong> {towns.join(", ")} or nearby</li>
                <li><strong className="text-ink">What you noticed:</strong> breaker, gauge reading, and whether the pump is running</li>
                <li><strong className="text-ink">When it started:</strong> especially if it was during a cold snap</li>
                <li><strong className="text-ink">Deadlines:</strong> a closing or inspection date, if there is one</li>
              </ul>
            </div>
            <div className="border-t-2 border-ink pt-5">
              <p className="eyebrow text-accent">Not ready yet?</p>
              <ul className="mt-3 flex flex-col gap-2 text-[1.0625rem]">
                <li><Link href="/no-water-from-well" className="font-semibold underline decoration-accent decoration-2 underline-offset-4">No water? What to check first</Link></li>
                <li><Link href="/well-pump-cost" className="font-semibold underline decoration-accent decoration-2 underline-offset-4">Well pump cost guide</Link></li>
                <li><Link href="/faq" className="font-semibold underline decoration-accent decoration-2 underline-offset-4">Well pump FAQ</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </Article>
    </>
  );
}
