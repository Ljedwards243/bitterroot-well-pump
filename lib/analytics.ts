import { services } from "./nav";

// GA4 events (standards §12): phone_click, form_start, form_submit.
// page_type and the form's "need" answer let the WL Performance tab see which intent
// (no water, replacement, home sale, testing) drives leads (brief §13).
// No-ops until {{GA4_ID}} is configured and gtag has loaded.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function pageType(path: string): string {
  if (path === "/") return "home";
  if (services.some((s) => s.href === path)) return "service";
  return path.replace(/^\//, "") || "other";
}

export function track(event: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  const path = window.location.pathname;
  window.gtag("event", event, {
    page_path: path,
    page_type: pageType(path),
    ...params,
  });
}
