# Bitterroot Valley Well Pump Help

Website Landlord lead site for **well pump repair and replacement in Hamilton, MT and the Bitterroot Valley**: [bitterrootwellpump.com](https://bitterrootwellpump.com).

- Built to `WL-BUILD-STANDARDS.md` v1.0 and the build brief `WL-BRIEF-US-R1-2026W42-BITTERROOT-WELL-PUMP.md` (both in this repo; the brief also lives in the Website Landlord project, `briefs/`).
- Design: the **Website Landlord design system** (Claude Design), river-slate accent `#2b5d78`, Bricolage Grotesque + IBM Plex Mono, western Montana photos. Homepage approved in Claude Design 2026-10-14.
- Stack: Next.js 16 (App Router), TypeScript, Tailwind CSS 4. Every page is statically generated. Deploy on Vercel from this repo.

> **Compliance:** this site connects visitors with independent local well and pump companies. It must never claim to repair, install, diagnose, drill or test, hold a license, or have reviews or an address. **Montana does not license pump installers**, so the site never says "licensed pump pros." The brand must never read as "Bitterroot Pump" or "Bitterroot Pump Service" (a real Florence, MT company). See brief §1 and §11.

## Placeholders for Luke

All live in `lib/site.ts`. Anything that would render a placeholder checks `isConfigured()` first, so nothing shows to visitors.

| Placeholder | Where | Status |
|---|---|---|
| `{{TRACKING_PHONE}}` | `site.phone` / `phoneTel` / `phoneSchema` | **Done:** (406) 534-5191 (Twilio, voicemail-only until a tenant is signed) |
| `{{FORM_ENDPOINT}}` | `site.formEndpoint` | **Needed before launch.** Until set, the form shows an error on submit and a no-JavaScript submit has nowhere to go. Any endpoint that accepts a POST (Formspree, Basin, a Make/Zapier webhook) works. Fields: `name`, `phone`, `email`, `town`, `need`, `without_water`, `description`, `source_page`. |
| `{{GA4_ID}}` | `site.ga4Id` | Optional. GA4 loads lazily once set; events: `phone_click`, `form_start`, `form_submit` (with `need` and `without_water`, brief §13). |
| `{{GSC_VERIFICATION}}` | `site.gscVerification` | Or verify the domain by DNS in Search Console instead. |
| `{{BING_VERIFICATION}}` | `site.bingVerification` | Bing Webmaster Tools (also feeds ChatGPT/Copilot search). |

Other open items (code comments mark them):

- ~~Brand name and disclosure~~ Approved by Luke 2026-10-14 (brief §16 items 1-2).
- **Voicemail:** `public/twilio/voice.xml` (greeting, Polly.Joanna-Neural, records up to 2 minutes with transcription, includes the non-affiliation line from brief §1) and `public/twilio/goodbye.xml`. In Twilio, the number's "A call comes in" must be **Webhook → `https://bitterrootwellpump.com/twilio/voice.xml` → HTTP GET**. `/twilio/` is disallowed in robots.txt. Calls, recordings and transcripts show in Twilio under Monitor → Logs → Calls.
- **Service area** town sections (`app/service-area/page.tsx`) use basic orientation only (north/south end, east/west side). Review them, and add any local knowledge (housing types, acreage, well houses) before splitting a town into its own page (brief §7).
- **Source links:** confirm the DNRC licensee list and DLI registration lookup are current (`lib/sources.ts`, brief §7).
- **Privacy policy** "Calls" section assumes a voicemail-only line; update it if calls start forwarding or recording changes (`app/privacy/page.tsx`).
- **About page:** whether to name the operating entity (`app/about/page.tsx`).

## Pages

| URL | Primary keyword | Words (main content) |
|---|---|---|
| `/` | well pump repair Hamilton MT | ~1,600 |
| `/no-water-from-well` | no water from well | ~1,530 |
| `/frozen-well-line` | frozen well line (added 2026-10-14) | ~1,280 |
| `/pressure-tank-repair` | pressure tank replacement Hamilton MT | ~1,200 |
| `/well-pump-replacement` | well pump replacement Hamilton MT | ~1,200 |
| `/well-inspection-home-sale` | well inspection buying a house Montana | ~1,110 |
| `/montana-well-contractor-license` | Montana well contractor license | ~1,070 |
| `/well-water-testing` | well water testing Ravalli County | ~980 |
| `/well-pump-cost` | well pump replacement cost Montana | ~950 |
| `/faq` | well pump FAQ Montana (12 questions) | ~910 |
| `/service-area` | well pump service Bitterroot Valley | ~790 |
| `/get-help` | well pump repair quote Hamilton MT | |
| `/about`, `/privacy` | disclosure / policy | |

No separate town pages at launch: the brief has no verified town-specific well facts (standards §6 doorway guardrail). The seven towns are sections of `/service-area`, are linked from the home page and footer, and are in schema `areaServed` with "Montana" explicit, because every one of these town names also exists in other states (brief §2).

## SEO, AI search and speed (brief §17)

- One H1 per page with the primary keyword; keyword-bearing H2s under mono "eyebrow" labels; primary keyword in the first 100 words; unique titles (≤ 60 chars) and descriptions (148–160 chars).
- Every fact is from brief §4, with its source named and linked on the page (`lib/sources.ts`). Statewide water-testing figures are labeled statewide; the Willow Creek drainage foothills is the only location-specific water quality claim. No pump lifespans, well depths, response times, durations or local prices.
- Each page shows "Last reviewed October 2026", matching schema `dateModified` and sitemap `lastmod`.
- JSON-LD: `Organization` (no address, no license claims), `Service` with `areaServed` = seven Montana cities plus Ravalli County, `WebPage`, `FAQPage`, `BreadcrumbList`.
- `robots.txt` allows every crawler, AI crawlers included. `/llms.txt` summarizes the site for AI assistants. `scripts/indexnow.mjs` + `.github/workflows/indexnow.yml` ping IndexNow after each production deploy (key file in `public/`).
- No interactive widgets. The only client code is the form's no-reload submit and phone-click tracking. The FAQ uses native `<details>`; the sticky bar and mobile menu are CSS / `<details>`. The well cross-section is one inline SVG.
- Photos: self-hosted in `public/images`, served by `next/image` as AVIF/WebP. The phone hero is a separate portrait crop (≈28 KB as served). Fonts are self-hosted from `app/fonts` (OFL, latin subset).

## Launch checklist (standards §13), checked 2026-10-14

- [x] All pages statically generated, content in HTML source
- [x] Lighthouse mobile (local production build, simulated throttling): **home 89–96** (three runs: 89, 94, 96), **no-water 97, cost guide 98** performance; **accessibility 100, best practices 100, SEO 100** on all three; CLS 0. Re-check with PageSpeed Insights once live.
- [x] Unique title, meta description, H1 on every page
- [x] Sitemap (14 URLs) and robots live; JSON-LD parses on every page. **Luke:** run Google's Rich Results Test on the live URL.
- [x] No placeholder text visible to users (only `{{FORM_ENDPOINT}}` in the form's `action` attribute until set)
- [x] All `{{PLACEHOLDERS}}` listed above
- [x] Disclosure (header utility bar, footer, About, FAQ) and privacy policy present; non-affiliation line in footer and About
- [x] No invented facts: spot-checked against brief §4; compliance scan for "licensed pump", "24/7", lifespans, reviews and "Bitterroot Pump" is clean
- [x] No horizontal scroll at 320 px or 390 px; tap targets ≥ 44 px; inputs ≥ 16 px text

## Post-launch (Luke)

1. Add the project in Vercel from this repo; add `bitterrootwellpump.com` and `www.bitterrootwellpump.com` (www 301s to the apex in `next.config.ts`). Confirm Vercel Firewall isn't blocking AI bots.
2. Set `{{FORM_ENDPOINT}}`, plus the optional IDs, then redeploy.
3. Verify in Google Search Console and Bing Webmaster Tools; submit `https://bitterrootwellpump.com/sitemap.xml`; request indexing of home and service pages. The frozen-line page should be indexed before winter.
4. Before forwarding calls to a tenant, check DLI contractor registration (if they have employees), proof of insurance, and for drilling or well rehab work a current Board of Water Well Contractors license (brief §11).
5. Log monthly metrics in the WL Performance tab.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all static)
npm run lint
```

Photos (Unsplash, supplied by Luke): hay field and barn under the mountains, western Montana (soKh_WqNQ3k); old barn in snow, Bitterroot Valley (Nvnya0Me9x8); outbuilding in a winter field below the foothills, Montana (E0l5LzbPWHE). They set the scene only; never caption or present them as a crew, a job or a customer.
