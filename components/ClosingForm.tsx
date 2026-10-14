import Image from "next/image";
import { hasPhone, phoneDisplay, phoneHref } from "@/lib/site";
import closingPhoto from "@/public/images/montana-winter-field-outbuilding-foothills.jpg";
import { QuoteForm, type Need } from "./QuoteForm";

// Design system: ClosingForm. The #get-help anchor every "Get connected" button targets.
export function ClosingForm({
  source,
  eyebrow,
  title = "Get connected with a local well and pump company",
  defaultNeed,
}: {
  source: string;
  eyebrow: string;
  title?: string;
  defaultNeed?: Need;
}) {
  return (
    <section id="get-help" aria-labelledby="get-help-h" className="flex scroll-mt-20 flex-col bg-ink text-white lg:flex-row">
      <div className="relative min-h-64 flex-1 lg:min-h-0">
        <Image
          src={closingPhoto}
          alt="Small wooden outbuilding in a dry winter field below cloud-covered foothills in Montana"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          quality={60}
          className="object-cover object-[28%_70%]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 px-4 py-14 sm:px-10 lg:px-16 lg:py-20">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h2 id="get-help-h" className="text-[2.1rem] font-extrabold leading-none tracking-[-0.035em] sm:text-5xl">
          {title}
        </h2>
        <p className="text-lg text-on-ink-muted">
          Send a request and an independent local well and pump company serving the Bitterroot Valley follows up.
          {hasPhone && (
            <>
              {" "}Out of water right now? Calling is fastest:{" "}
              <a href={phoneHref} className="font-bold text-white underline">{phoneDisplay}</a>.
            </>
          )}
        </p>
        <div className="mt-2">
          <QuoteForm source={source} defaultNeed={defaultNeed} />
        </div>
      </div>
    </section>
  );
}
