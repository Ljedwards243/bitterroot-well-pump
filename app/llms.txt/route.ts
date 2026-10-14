import { routes } from "@/lib/routes";
import { towns } from "@/lib/nav";
import { hasPhone, site } from "@/lib/site";

// /llms.txt: a plain-text summary for AI assistants (brief §17). Generated from the same
// data as the site so it never drifts. Proposed convention; no confirmed ranking effect.
export const dynamic = "force-static";

export function GET() {
  const pages = routes.map((r) => `- [${r.title}](${site.url}${r.path === "/" ? "" : r.path})`).join("\n");
  const body = `# ${site.name}

> ${site.name} is a connection service for well pump repair and replacement in Hamilton, Montana and across the Bitterroot Valley (Ravalli County). It connects homeowners, buyers, sellers and landlords with established, independent local well and pump companies. It is not a pump, plumbing or drilling company, does not perform any work itself, and is not affiliated with any company of a similar name.

${hasPhone ? `- Phone: ${site.phone}\n` : ""}- Areas served: ${towns.map((t) => `${t}, Montana`).join("; ")}
- Key facts (sources linked on each page): The Bitterroot Valley had 25,375 water wells in 2023, up from about 3,100 in 1970 (Montana Bureau of Mines and Geology). Water quality in valley wells is generally good, with a cluster of high naturally occurring arsenic in the foothills of the Willow Creek drainage (MBMG). MSU Extension recommends testing a private well every year for bacteria and nitrate. Montana licenses water well contractors and drillers (MCA 37-43-302) but not pump installers; a 2007 bill to license them (HB 707) was tabled and died. Angi lists an average well pump repair in Hamilton of about $950 (most $100 to $2,900); This Old House puts typical replacement at about $900 to $2,500 nationally.
- Last reviewed: ${site.lastReviewed}

## Pages

${pages}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
