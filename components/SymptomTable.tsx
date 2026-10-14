// Design system: the niche's dark-band explainer (radon used LevelScale). Static: every
// row is real HTML text, so Google and AI assistants can read and quote it.
export const symptoms = [
  { notice: "No water at all", points: "Power, the pressure switch, or the pump" },
  { notice: "Pump runs, but no water", points: "The pump, the drop pipe, or a low water level" },
  { notice: "Clicks on and off every few seconds", points: "The pressure tank or pressure switch" },
  { notice: "Breaker keeps tripping", points: "The pump motor or its wiring" },
  { notice: "Stopped in a cold snap", points: "A frozen line, tank or hydrant" },
] as const;

export function SymptomTable() {
  return (
    <table className="w-full border-collapse text-left">
      <caption className="mb-3 text-left font-mono text-xs uppercase tracking-[0.12em] text-on-ink-muted">
        What it often points to
      </caption>
      <thead>
        <tr className="border-t-2 border-white">
          <th scope="col" className="py-3 pr-4 font-mono text-xs font-normal uppercase tracking-[0.1em] text-on-ink-faint">
            What you notice
          </th>
          <th scope="col" className="py-3 font-mono text-xs font-normal uppercase tracking-[0.1em] text-on-ink-faint">
            Often points to
          </th>
        </tr>
      </thead>
      <tbody>
        {symptoms.map((s) => (
          <tr key={s.notice} className="border-t border-[#2a3943] align-top">
            <th scope="row" className="py-4 pr-4 text-lg font-bold leading-snug sm:text-xl">{s.notice}</th>
            <td className="py-4 font-mono text-[0.9375rem] leading-snug text-readout">{s.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
