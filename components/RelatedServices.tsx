import { SituationIndex } from "./SituationIndex";

// Inner pages: the situation index as "related", minus the current page (standards §5).
export function RelatedServices({ current }: { current: string }) {
  return (
    <section aria-labelledby="related-h" className="border-t border-rule bg-ground-alt">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:gap-20">
        <div className="flex max-w-sm flex-col gap-3 lg:flex-[1_1_300px]">
          <p className="eyebrow text-accent">More well and pump help</p>
          <h2 id="related-h" className="text-[2rem] font-extrabold leading-none tracking-[-0.035em] sm:text-[2.5rem]">
            Other well pump services in the Bitterroot Valley
          </h2>
        </div>
        <div className="min-w-0 lg:flex-[999_1_560px]">
          <SituationIndex exclude={current} label="Other well pump services" />
        </div>
      </div>
    </section>
  );
}
