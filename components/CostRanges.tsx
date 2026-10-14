import { Source, SourceLine } from "./Source";

// Design system: RangeBar, twice. Only the two benchmarks the brief verifies (§4), each
// labeled as a general benchmark. Axis is $0 to $3,000.
const pct = (v: number) => `${(v / 3000) * 100}%`;

function Bar({ from, to, avg, label }: { from: number; to: number; avg?: number; label: string }) {
  return (
    <div role="img" aria-label={label} className="flex flex-col gap-2">
      <div className="relative h-11 rounded-[3px] bg-rule-soft">
        <div
          className="absolute inset-y-0 flex items-center rounded-[3px] bg-accent pl-3.5 font-mono text-[0.9375rem] font-semibold text-white"
          style={{ left: pct(from), width: pct(to - from) }}
        >
          ${from.toLocaleString("en-US")} – ${to.toLocaleString("en-US")}
        </div>
        {avg && <div aria-hidden="true" className="absolute -inset-y-1.5 w-[3px] bg-ink" style={{ left: pct(avg) }} />}
      </div>
      <div aria-hidden="true" className="relative flex justify-between font-mono text-xs text-muted">
        <span>$0</span>
        {avg && (
          <span className="absolute -translate-x-1/2 font-semibold text-ink" style={{ left: pct(avg) }}>
            avg ≈ ${avg.toLocaleString("en-US")}
          </span>
        )}
        <span>$3,000</span>
      </div>
    </div>
  );
}

export function CostRanges() {
  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col gap-2.5">
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">Repair · Hamilton, MT benchmark</p>
        <Bar from={100} to={2900} avg={950} label="Well pump repair in Hamilton, MT: most between $100 and $2,900, average about $950" />
        <SourceLine>
          General benchmark ·{" "}
          <span className="underline"><Source id="angi">Angi, Hamilton MT wells and pumps</Source></span>
        </SourceLine>
      </div>
      <div className="flex flex-col gap-2.5">
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">Replacement · national benchmark</p>
        <Bar from={900} to={2500} label="Well pump replacement nationally: typically about $900 to $2,500" />
        <SourceLine>
          National benchmark ·{" "}
          <span className="underline"><Source id="thisOldHouse">This Old House, updated March 2026</Source></span>
        </SourceLine>
      </div>
    </div>
  );
}
