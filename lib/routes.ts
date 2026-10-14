// Every indexable page. Drives the sitemap and llms.txt; keep in sync when pages are added.
export const routes = [
  { path: "/", priority: 1, title: "Well pump repair in Hamilton, MT and the Bitterroot Valley" },
  { path: "/no-water-from-well", priority: 0.9, title: "No water from your well? What to check and who to call" },
  { path: "/frozen-well-line", priority: 0.9, title: "Frozen well lines and hydrants in the Bitterroot Valley" },
  { path: "/pressure-tank-repair", priority: 0.9, title: "Pressure tank and pressure switch repair in Hamilton, MT" },
  { path: "/well-pump-replacement", priority: 0.9, title: "Well pump replacement in the Bitterroot Valley" },
  { path: "/well-pump-cost", priority: 0.9, title: "Well pump repair and replacement cost in Montana" },
  { path: "/well-inspection-home-sale", priority: 0.8, title: "Well inspections for home sales in Ravalli County" },
  { path: "/well-water-testing", priority: 0.8, title: "Well water testing in Ravalli County, Montana" },
  { path: "/montana-well-contractor-license", priority: 0.7, title: "How Montana licenses well drillers (and why pump installers aren't)" },
  { path: "/service-area", priority: 0.8, title: "Well pump help across the Bitterroot Valley" },
  { path: "/faq", priority: 0.7, title: "Well pump FAQ for Bitterroot Valley homeowners" },
  { path: "/get-help", priority: 0.7, title: "Get connected with a local well and pump company" },
  { path: "/about", priority: 0.4, title: "About Bitterroot Valley Well Pump Help" },
  { path: "/privacy", priority: 0.2, title: "Privacy policy" },
] as const;
