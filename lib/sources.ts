// Every outside source behind a fact on this site (brief §4, §12). Pages cite these by
// name and link them, because Google and AI assistants both weigh attributed,
// verifiable claims (brief §17).
// TODO: Luke to confirm the DNRC licensee list and DLI lookup are current before launch
// (brief §7, Licensing).
export const sources = {
  groundwater: {
    href: "https://bitterrootstar.com/2024/04/a-look-at-groundwater-in-the-bitterroot/",
    label: "Montana Bureau of Mines and Geology, reported by the Bitterroot Star (April 2024)",
  },
  gwic: {
    href: "https://mbmggwic.mtech.edu/",
    label: "MBMG Ground Water Information Center (GWIC)",
  },
  gwicGuide: {
    href: "https://waterquality.montana.edu/well-ed/testing/gwic_guide.html",
    label: "MSU Extension: Find your well log in GWIC",
  },
  msuTesting: {
    href: "https://apps.msuextension.org/magazine/print.html?id=5568",
    label: "MSU Extension: Testing Private Well Water Quality",
  },
  wellEducated: {
    href: "https://waterquality.montana.edu/well-ed/testing/",
    label: "MSU Extension Well Educated program",
  },
  mca302: {
    href: "https://mca.legmt.gov/bills/mca/title_0370/chapter_0430/part_0030/section_0020/0370-0430-0030-0020.html",
    label: "Montana Code Annotated 37-43-302",
  },
  hb707: {
    href: "https://archive.legmt.gov/bills/2007/billhtml/HB0707.htm",
    label: "HB 707 (2007 Montana Legislature)",
  },
  hb707Minutes: {
    href: "https://archive.legmt.gov/bills/2007/Minutes/House/070222BUH_Hm1.pdf",
    label: "House Business and Labor Committee minutes, Feb 22, 2007",
  },
  dnrcBoard: {
    href: "https://dnrc.mt.gov/water-resources/Well-Contractors-Drillers/Well-Contractors-and-Drillers",
    label: "Montana DNRC, Board of Water Well Contractors",
  },
  dli: {
    href: "https://erd.dli.mt.gov/work-comp-regulations/montana-contractor/construction-contractor-registration",
    label: "Montana Department of Labor & Industry, Construction Contractor Registration",
  },
  mca68: {
    href: "https://archive.legmt.gov/bills/1999/mca/37/68/37-68-301.htm",
    label: "Montana Code Annotated 37-68-301",
  },
  angi: {
    href: "https://www.angi.com/companylist/us/mt/hamilton/wells-and-pumps.htm",
    label: "Angi, Hamilton MT wells and pumps",
  },
  thisOldHouse: {
    href: "https://www.thisoldhouse.com/plumbing/well-pump-cost",
    label: "This Old House, Well Pump Cost Guide (updated March 2026)",
  },
  usafacts: {
    href: "https://usafacts.org/answers/how-many-people-live-in-the-us/county/ravalli-county-mt/",
    label: "USAFacts (Census estimates)",
  },
} as const;

export type SourceKey = keyof typeof sources;
