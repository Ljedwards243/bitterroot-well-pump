import { faqSchema, type Faq } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

// Design system: FaqList. Native <details>, no JavaScript; answers stay in the HTML for
// crawlers whether open or closed.
export function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  return (
    <div className="border-t-2 border-ink">
      {withSchema && <JsonLd data={faqSchema(faqs)} />}
      {faqs.map(({ q, a }, i) => (
        <details key={q} open={i === 0} className="group border-b border-rule py-5 sm:py-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[1.3rem] font-bold leading-snug tracking-[-0.015em] sm:text-2xl [&::-webkit-details-marker]:hidden">
            <h3 className="m-0 text-[inherit] font-[inherit]">{q}</h3>
            <span aria-hidden="true" className="mt-1 font-mono text-lg text-accent group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p className="mt-3 max-w-3xl text-[1.0625rem] leading-relaxed text-body sm:text-lg">{a}</p>
        </details>
      ))}
    </div>
  );
}
