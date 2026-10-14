# WL BUILD STANDARDS (v1.0): applies to every Website Landlord site

Read this file first, then the site-specific brief (WL-BRIEF-[ID].md). If the two conflict, the site brief wins on content and this file wins on technical, SEO, and compliance rules.

## 1. Purpose

Each site is a lead-generation asset owned by Peak2Peak Automations (Website Landlord initiative). Goal: rank on page 1 of Google organic for the target service + towns, and convert visitors into phone calls and form leads. The site is NOT a business listing and must never pretend to be a specific licensed company.

## 2. Stack (Luke's standard pipeline)

- Next.js (App Router), TypeScript, Tailwind CSS
- Static generation for every page (no runtime data needed); deploy on Vercel from GitHub
- `next/image` for all images (WebP/AVIF, explicit width/height, lazy below the fold)
- `next/font` for fonts (max 2 families, `display: swap`)
- No client-side-only rendering of content. All page copy must be in the server-rendered HTML.
- No heavy JS libraries, carousels, or animation frameworks. The site must be fast on a mid-range phone on mountain cellular.

## 3. Performance targets (must pass before launch)

- Lighthouse mobile: Performance ≥ 90, SEO = 100, Accessibility ≥ 95, Best Practices ≥ 95
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Total JS shipped per page: as small as practical (target < 100 KB gzipped)

## 4. On-page SEO rules (every page)

- One target keyword (primary) + 2–5 secondary keywords per page, as given in the brief's keyword map. Do not target the same primary keyword on two pages.
- `<title>`: primary keyword first, location included, under ~60 characters, unique per page.
- Meta description: 140–160 characters, includes primary keyword + a call to action, unique per page.
- Exactly one `<h1>` per page containing the primary keyword naturally. Logical `<h2>`/`<h3>` structure.
- URL slugs: short, lowercase, hyphenated, keyword-based (as given in the brief).
- Primary keyword in the first 100 words of body copy.
- Write for humans first: natural language, no keyword stuffing. Use secondary keywords and close variants naturally.
- Content depth: service pages 900–1,500 words; town pages 600–1,000 words of genuinely town-specific content; home page 1,000–1,500 words.
- Every page answers the searcher's real questions (cost, timing, process, what to expect, warning signs). Use the FAQ topics in the brief.
- Images: descriptive file names and alt text (no stuffing). Use only images Luke supplies or properly licensed stock. Never use photos taken from competitor sites or Google listings.
- Self-referencing canonical tag on every page. One canonical domain (https, non-www or www; pick one and redirect the other).

## 5. Site structure and internal linking

- Header nav: Home, Services (dropdown), Areas We Serve (dropdown), Cost Guide, FAQ, Get Help / Contact.
- Every service page links to every relevant town page, and vice versa, with descriptive anchor text (e.g., "ice dam removal in Frisco"), not "click here".
- Breadcrumbs on all inner pages (with BreadcrumbList schema).
- Footer: service list, town list, phone, disclosure line, privacy policy link.
- No orphan pages. Every page reachable within 2 clicks from home.

## 6. Doorway-page guardrail (critical)

Google penalizes near-duplicate location pages. Each town page MUST contain content that is genuinely specific to that town (geography, housing types, neighborhoods, access issues, local conditions) using ONLY the verified facts in the brief, plus general service information written fresh for that page. If there isn't enough distinct material for a town, do not create the page. Mention the town on the parent pages instead. Never generate town pages by find-and-replace on a template.

## 7. Factual accuracy rule

- Use only the facts provided in the brief. Do not invent statistics, prices, years in business, crew sizes, certifications, guarantees, response times, or review counts.
- Cost information must be presented as typical ranges with "costs vary by property" language, using the figures given in the brief.
- Where the brief marks a fact as `[TODO: Luke to confirm]`, leave a visible placeholder comment in code and do not publish invented content.

## 8. Compliance and trust (non-negotiable)

- NO fake business address. NO fake reviews or testimonials. NO license numbers, certifications, insurance claims, or "years of experience" claims.
- Do not claim to be a specific company. The brand (e.g., "Summit Roof Snow Removal") is our own brand name for a service-connection site.
- Include a clear disclosure on the About page and in the footer. Default text (Luke to approve): "[Brand] connects property owners with independent, local service professionals. We are not a contractor ourselves."
- Privacy policy page covering form data and call recording (if call recording is enabled).
- Forms: only collect what's needed (name, phone, email, town, short description, optional photos). Include consent text for contact.

## 9. Schema (JSON-LD)

- Use: `Organization` (name, url, logo, telephone; NO address), `Service` (serviceType, areaServed listing the towns, provider = the Organization), `FAQPage` on pages with FAQ sections, `BreadcrumbList`.
- Do NOT use `LocalBusiness` or any subtype with a street address. We do not operate from an address.
- Validate with Google's Rich Results Test before launch.

## 10. Technical files

- `app/sitemap.ts` generating an XML sitemap of all indexable pages
- `app/robots.ts` allowing all crawlers and pointing to the sitemap
- 404 page with links to services and contact
- Open Graph and Twitter card metadata on every page
- Favicon and web app manifest
- HTTPS only; 301 redirect the alternate host (www/non-www) and any secondary domains

## 11. Conversion

- Phone number: use the placeholder `{{TRACKING_PHONE}}` everywhere (header, sticky mobile call bar, every page's CTA). Luke will provision a tracking number. Click-to-call `tel:` links on mobile.
- Sticky "Call now" bar on mobile; primary CTA above the fold on every page.
- Short form (5–6 fields) on home, every service page, and the contact page. Submit to `{{FORM_ENDPOINT}}` (Luke to supply), with a success message and no page reload if possible.
- No pop-ups or interstitials.

## 12. Measurement

- GA4 via `{{GA4_ID}}`, with events for: phone link click, form submit, form start.
- Google Search Console verification via meta tag `{{GSC_VERIFICATION}}`.
- Bing Webmaster Tools verification via `{{BING_VERIFICATION}}`.
- These feed the WL Performance tab: rankings, impressions, clicks, calls, qualified calls, form leads.

## 13. Launch checklist (Claude Code confirms each)

- [ ] All pages statically generated, content in HTML source
- [ ] Lighthouse targets met on mobile for home, one service page, one town page
- [ ] Unique title, meta description, H1 on every page
- [ ] Sitemap and robots live; schema validates
- [ ] No placeholder text visible to users (code comments only)
- [ ] All `{{PLACEHOLDERS}}` listed for Luke in a README
- [ ] Disclosure + privacy policy present
- [ ] No invented facts (spot-check against the brief)

## 14. Post-launch (Luke)

1. Point domain DNS to Vercel; confirm https + redirects.
2. Submit sitemap in Google Search Console and Bing Webmaster Tools; request indexing of home + service pages.
3. Set up call tracking and form routing.
4. Work through the brief's verified link/citation opportunities.
5. Log monthly metrics in the WL Performance tab.
