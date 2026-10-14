// Single source of truth for brand, domain, and every {{PLACEHOLDER}} Luke supplies.
// Placeholders stay in place until real values exist. Anything that would render a
// placeholder to users checks isConfigured() first. See README.md for the full list.

export const site = {
  // Approved by Luke 2026-10-14 (brief §1, §16 item 1). "Valley" and "Help" keep clear of a
  // local company with a similar name; never shorten to "Bitterroot Pump".
  name: "Bitterroot Valley Well Pump Help",
  shortName: "BV Well Pump Help",
  tagline: "Connecting Bitterroot Valley homeowners with established local well & pump companies",
  url: "https://bitterrootwellpump.com",
  // Twilio tracking line (brief §16 item 4, supplied 2026-10-14). Display, tel: and schema
  // formats are kept together so they never drift.
  phone: "(406) 534-5191",
  phoneTel: "+14065345191",
  phoneSchema: "+1-406-534-5191",
  // Lead form POST target (standards §11): the URL submissions are sent to, e.g. a
  // Formspree form (https://formspree.io/f/xxxxxxxx) that emails each lead to Luke.
  formEndpoint: "{{FORM_ENDPOINT}}",
  ga4Id: "{{GA4_ID}}",
  gscVerification: "{{GSC_VERIFICATION}}",
  bingVerification: "{{BING_VERIFICATION}}",
  // Approved by Luke 2026-10-14 (brief §11, §16 item 2), including the non-affiliation line.
  disclosure:
    "Bitterroot Valley Well Pump Help connects Bitterroot Valley property owners with independent local well and pump companies. We are not a pump, plumbing, or drilling company and do not perform services ourselves. Not affiliated with any company of a similar name.",
  // Shown on every page and used as schema dateModified (brief §17).
  lastReviewed: "October 2026",
  lastReviewedIso: "2026-10-14",
} as const;

export function isConfigured(value: string): boolean {
  return !/^\{\{.+\}\}$/.test(value);
}

export const hasPhone = isConfigured(site.phone) && isConfigured(site.phoneTel);
export const phoneHref = hasPhone ? `tel:${site.phoneTel}` : "/get-help";
export const phoneDisplay = hasPhone ? site.phone : "";
