// Single source of truth for brand, domain, and every {{PLACEHOLDER}} Luke supplies.
// Placeholders stay in place until real values exist. Anything that would render a
// placeholder to users checks isConfigured() first. See README.md for the full list.

export const site = {
  // TODO: Luke to approve the brand (brief §1, §16 item 1). Working name per the brief's
  // recommendation: "Valley" and "Help" keep clear of a local company with a similar name.
  name: "Bitterroot Valley Well Pump Help",
  shortName: "BV Well Pump Help",
  tagline: "Connecting Bitterroot Valley homeowners with established local well & pump companies",
  url: "https://bitterrootwellpump.com",
  // TODO: Luke to buy a 406 Twilio number (brief §16 item 4). Display, tel: and schema
  // formats are kept together so they never drift. Until set, every call button is hidden
  // and the site sends visitors to the form instead (no placeholder is ever shown).
  phone: "{{TRACKING_PHONE}}", // e.g. "(406) 555-0123"
  phoneTel: "{{TRACKING_PHONE_TEL}}", // e.g. "+14065550123"
  phoneSchema: "{{TRACKING_PHONE_SCHEMA}}", // e.g. "+1-406-555-0123"
  // Lead form POST target (standards §11).
  formEndpoint: "{{FORM_ENDPOINT}}",
  ga4Id: "{{GA4_ID}}",
  gscVerification: "{{GSC_VERIFICATION}}",
  bingVerification: "{{BING_VERIFICATION}}",
  // TODO: Luke to approve disclosure wording (brief §11, §16 item 2).
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
