// Service pages, written as the visitor's situation for the SituationIndex rows
// (design system) and as plain labels for nav, footer and cross-links (standards §5).
export const services = [
  {
    href: "/no-water-from-well",
    label: "No Water From Well",
    situation: "The house has no water",
    blurb: "No water from your well: symptom by symptom, and what to tell the pro.",
  },
  {
    href: "/frozen-well-line",
    label: "Frozen Lines & Hydrants",
    situation: "It stopped in a cold snap",
    blurb: "Frozen well lines, pressure tanks and frost-free hydrants in the Bitterroot.",
  },
  {
    href: "/pressure-tank-repair",
    label: "Pressure Tank & Switch",
    situation: "The pump keeps clicking on and off",
    blurb: "Pressure tank and pressure switch replacement in Hamilton, MT.",
  },
  {
    href: "/well-pump-replacement",
    label: "Well Pump Replacement",
    situation: "The pump is old or failing",
    blurb: "Well pump replacement: submersible, jet and constant-pressure systems.",
  },
  {
    href: "/well-inspection-home-sale",
    label: "Home Sale Inspections",
    situation: "We're buying or selling",
    blurb: "Well inspections, flow tests and well logs for Ravalli County home sales.",
  },
  {
    href: "/well-water-testing",
    label: "Well Water Testing",
    situation: "I want to test our water",
    blurb: "Well water testing in Ravalli County: kits, certified labs, what to test.",
  },
  {
    href: "/well-pump-cost",
    label: "Cost Guide",
    situation: "What will this cost?",
    blurb: "Well pump repair and replacement cost benchmarks for Montana.",
  },
] as const;

// No dedicated town pages at launch (brief §2, §5; standards §6 doorway guardrail).
// Towns are sections of /service-area and are named on the home page and in schema.
// Always paired with the state: every one of these names exists in other states (brief §2).
export const towns = ["Hamilton", "Stevensville", "Corvallis", "Victor", "Darby", "Florence", "Pinesdale"] as const;
