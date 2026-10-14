// Design system: section drawing, shipped as one inline SVG (a few KB, sharp on any
// screen; brief §17). A typical private well system, simplified and not to scale: no
// depths are shown because the brief has no verified valley well depths (§4).
export function WellFigure() {
  const mono = "var(--font-mono), ui-monospace, monospace";
  const label = { fontFamily: mono, fontSize: 12, letterSpacing: 1.2, fill: "#111a21" } as const;
  const callouts = [
    { cx: 378, cy: 560, n: "1" },
    { cx: 378, cy: 320, n: "2" },
    { cx: 378, cy: 242, n: "3" },
    { cx: 93, cy: 152, n: "4" },
    { cx: 182, cy: 190, n: "5" },
  ];
  return (
    <figure className="m-0">
      <svg viewBox="0 0 560 640" role="img" aria-labelledby="well-fig-title well-fig-desc" className="h-auto w-full">
        <title id="well-fig-title">How a typical private well system works</title>
        <desc id="well-fig-desc">
          Cross-section of a well system: a submersible pump deep in the well casing below the water level, a drop pipe
          and wire running up to a pitless adapter below the frost line, and a buried line to the pressure tank,
          pressure switch and gauge in the house.
        </desc>
        <defs>
          <pattern id="well-dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.4" fill="#9c8a62" />
            <circle cx="10" cy="10" r="1.1" fill="#9c8a62" />
          </pattern>
        </defs>
        {/* Soil */}
        <rect x="0" y="130" width="560" height="510" fill="#cdbf9e" />
        <rect x="0" y="130" width="560" height="510" fill="url(#well-dots)" opacity="0.55" />
        <line x1="0" y1="130" x2="560" y2="130" stroke="#111a21" strokeWidth="2" />
        {/* House and basement */}
        <polygon points="28,54 135,10 242,54" fill="#f7f6f1" stroke="#111a21" strokeWidth="2" />
        <rect x="40" y="54" width="190" height="76" fill="#f7f6f1" stroke="#111a21" strokeWidth="2" />
        <rect x="40" y="130" width="190" height="140" fill="#f7f6f1" stroke="#111a21" strokeWidth="2" />
        {/* Frost line */}
        <line x1="0" y1="212" x2="560" y2="212" stroke="#111a21" strokeWidth="1.5" strokeDasharray="6 6" />
        <text x="548" y="204" textAnchor="end" {...label}>FROST LINE</text>
        {/* Pressure tank, switch, gauge */}
        <rect x="70" y="170" width="46" height="88" rx="20" fill="#dfe6ea" stroke="#111a21" strokeWidth="2" />
        <rect x="134" y="176" width="24" height="28" fill="#ffffff" stroke="#111a21" strokeWidth="2" />
        <circle cx="146" cy="226" r="11" fill="#ffffff" stroke="#111a21" strokeWidth="2" />
        <line x1="146" y1="226" x2="151" y2="219" stroke="#111a21" strokeWidth="2" />
        {/* Buried line to the house */}
        <polyline points="116,242 230,242 312,242" fill="none" stroke="#2b5d78" strokeWidth="5" />
        {/* Casing, cap, water */}
        <rect x="316" y="112" width="28" height="520" fill="#f7f6f1" stroke="#111a21" strokeWidth="2" />
        <rect x="308" y="104" width="44" height="10" fill="#111a21" />
        <text x="292" y="100" textAnchor="end" {...label}>WELL CAP</text>
        <rect x="318" y="392" width="24" height="238" fill="#b9cfe0" />
        <line x1="286" y1="392" x2="378" y2="392" stroke="#3e6e9e" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="384" y="396" {...label}>WATER LEVEL</text>
        {/* Drop pipe and wire */}
        <line x1="328" y1="250" x2="328" y2="522" stroke="#2b5d78" strokeWidth="4" />
        <line x1="337" y1="250" x2="337" y2="522" stroke="#111a21" strokeWidth="1.5" />
        {/* Pitless adapter */}
        <rect x="310" y="234" width="40" height="16" fill="#d8b26a" stroke="#111a21" strokeWidth="2" />
        {/* Submersible pump */}
        <rect x="320" y="522" width="20" height="74" rx="3" fill="#2b5d78" stroke="#111a21" strokeWidth="2" />
        <text x="384" y="612" {...label}>AQUIFER</text>
        {callouts.map((c) => (
          <g key={c.n}>
            <circle cx={c.cx} cy={c.cy} r="13" fill="#111a21" />
            <text x={c.cx} y={c.cy + 5} textAnchor="middle" fontFamily={mono} fontSize="13" fontWeight="600" fill="#ffffff">
              {c.n}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-2.5 font-mono text-xs text-muted">
        Fig. 1 · A typical private well system. Not to scale; depths vary by well. Your well log shows yours.
      </figcaption>
    </figure>
  );
}
