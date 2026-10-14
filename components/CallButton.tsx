import { hasPhone, phoneDisplay, phoneHref } from "@/lib/site";

const styles = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  light: "bg-white text-ink hover:bg-ground-alt",
} as const;

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

// Renders nothing until the tracking number is set (lib/site.ts), so no placeholder ever
// shows; the "Get connected" button beside it carries the page until then.
export function CallButton({
  variant = "primary",
  label = "Call",
  className = "",
}: {
  variant?: keyof typeof styles;
  label?: string;
  className?: string;
}) {
  if (!hasPhone) return null;
  return (
    <a
      href={phoneHref}
      className={`inline-flex min-h-13 items-center justify-center gap-2.5 rounded px-6 text-lg font-bold transition-colors sm:min-h-14 ${styles[variant]} ${className}`}
    >
      <PhoneIcon />
      {label} {phoneDisplay}
    </a>
  );
}

export function LinkButton({
  href,
  children,
  variant = "light",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "outline" | "primary";
  className?: string;
}) {
  const v = {
    light: "bg-white text-ink hover:bg-ground-alt",
    outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
    primary: "bg-accent text-white hover:bg-accent-dark",
  }[variant];
  return (
    <a
      href={href}
      className={`inline-flex min-h-13 items-center justify-center rounded px-6 text-lg font-bold transition-colors sm:min-h-14 ${v} ${className}`}
    >
      {children}
    </a>
  );
}

// The primary action pair used in heroes and after each no-water symptom: the call when a
// number exists, plus the form. Without a number the form button takes the accent.
export function CtaPair({ formHref = "#get-help", callLabel = "Call" }: { formHref?: string; callLabel?: string }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <CallButton label={callLabel} />
      <LinkButton href={formHref} variant={hasPhone ? "light" : "primary"}>
        Get connected
      </LinkButton>
    </div>
  );
}
