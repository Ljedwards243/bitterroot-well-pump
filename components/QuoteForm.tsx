"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";
import { towns } from "@/lib/nav";
import { hasPhone, isConfigured, phoneDisplay, phoneHref, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

// Brief §9 field list. "What's happening?" and "without water" feed GA4 so tenants can see
// how many leads are urgent no-water jobs (brief §13).
export const needs = [
  "No water",
  "Low or surging pressure",
  "Pump keeps cycling",
  "Frozen line or hydrant",
  "Planned replacement",
  "Pressure tank or switch",
  "Home sale inspection",
  "Water testing",
  "Other",
] as const;

export type Need = (typeof needs)[number];

// Works as a plain POST without JavaScript (brief §17); the script adds no-reload submit
// and the form_start / form_submit events (standards §11, §12).
export function QuoteForm({
  id = "lead-form",
  source,
  tone = "ink",
  defaultNeed,
}: {
  id?: string;
  source: string;
  tone?: "ink" | "light";
  defaultNeed?: Need;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const started = useRef(false);
  const dark = tone === "ink";

  const label = `flex flex-col gap-1.5 font-mono text-xs uppercase tracking-[0.08em] ${dark ? "text-on-ink-muted" : "text-muted"}`;
  const field = `min-h-12 w-full rounded-[3px] border px-3.5 font-sans text-[1.0625rem] normal-case tracking-normal ${
    dark
      ? "border-muted bg-ink-raised text-white placeholder:text-on-ink-faint"
      : "border-rule bg-white text-ink"
  }`;

  function onStart() {
    if (started.current) return;
    started.current = true;
    track("form_start", { form_source: source });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const need = String(data.get("need") ?? "");
    const withoutWater = String(data.get("without_water") ?? "");
    setStatus("sending");
    try {
      if (!isConfigured(site.formEndpoint)) throw new Error("Form endpoint not configured");
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      track("form_submit", { form_source: source, need, without_water: withoutWater });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const callLine = hasPhone ? (
    <>
      To talk sooner, <a href={phoneHref} className="font-bold underline">call {phoneDisplay}</a>.
    </>
  ) : null;

  if (status === "sent") {
    return (
      <div role="status" className={`rounded border p-5 ${dark ? "border-gold text-white" : "border-ink text-ink"}`}>
        <p className="text-xl font-bold">Thanks, your request is in.</p>
        <p className={`mt-1 ${dark ? "text-on-ink-muted" : "text-body"}`}>
          An independent local well and pump company will follow up using the details you gave. {callLine}
        </p>
      </div>
    );
  }

  return (
    <form
      action={site.formEndpoint}
      method="post"
      onSubmit={onSubmit}
      onFocus={onStart}
      aria-label="Get connected with a local well and pump company"
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="source_page" value={source} />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label} htmlFor={`${id}-name`}>
          Name
          <input id={`${id}-name`} name="name" type="text" autoComplete="name" required className={field} />
        </label>
        <label className={label} htmlFor={`${id}-phone`}>
          Phone
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" required className={field} />
        </label>
        <label className={label} htmlFor={`${id}-email`}>
          Email
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" className={field} />
        </label>
        <label className={label} htmlFor={`${id}-town`}>
          Town
          <select id={`${id}-town`} name="town" defaultValue="" className={field}>
            <option value="" disabled>Choose one</option>
            {towns.map((t) => (
              <option key={t} value={`${t}, MT`}>{t}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>
        <label className={`${label} sm:col-span-2`} htmlFor={`${id}-need`}>
          What&apos;s happening?
          <select id={`${id}-need`} name="need" required defaultValue={defaultNeed ?? ""} className={field}>
            <option value="" disabled>Choose one</option>
            {needs.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
      </div>
      <fieldset className="flex flex-wrap items-center gap-x-6 gap-y-1">
        <legend className={`${label} mb-1`}>Is anyone without water right now?</legend>
        {["Yes", "No"].map((v) => (
          <label key={v} className={`inline-flex min-h-11 items-center gap-2.5 text-[1.0625rem] ${dark ? "text-white" : "text-ink"}`}>
            <input type="radio" name="without_water" value={v} className="h-5 w-5 accent-[#f2b33d]" />
            {v}
          </label>
        ))}
      </fieldset>
      <label className={label} htmlFor={`${id}-details`}>
        <span>
          Anything else? <span className="normal-case tracking-normal">(optional)</span>
        </span>
        <textarea id={`${id}-details`} name="description" rows={3} className={`${field} py-3`} />
      </label>
      {status === "error" && (
        <p role="alert" className={`rounded border p-4 ${dark ? "border-readout text-white" : "border-accent text-ink"}`}>
          Sorry, something went wrong sending your request. Please try again{hasPhone ? ", or " : "."}
          {hasPhone && <a href={phoneHref} className="font-bold underline">call {phoneDisplay}</a>}
          {hasPhone && "."}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-14 rounded bg-accent px-6 text-lg font-bold text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Connect me with a local pro"}
      </button>
      <p className={`text-[0.8125rem] leading-relaxed ${dark ? "text-on-ink-faint" : "text-muted"}`}>
        By submitting, you agree that {site.name} and an independent local well and pump company may contact you by
        phone, text or email about your request. See our{" "}
        <Link href="/privacy" className="underline">privacy policy</Link>.
      </p>
    </form>
  );
}
