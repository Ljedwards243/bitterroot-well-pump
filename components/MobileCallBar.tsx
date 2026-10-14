import Link from "next/link";
import { hasPhone, phoneDisplay, phoneHref } from "@/lib/site";
import { PhoneIcon } from "./CallButton";

// Design system: StickyCallBar. Phones only, CSS fixed, no JavaScript. Until the tracking
// number is set it points to the request form instead of a phone line.
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-ink pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="flex items-center gap-3 px-3 py-2.5">
        <span className="flex-1 font-mono text-xs uppercase tracking-[0.06em] text-white">No water?</span>
        {hasPhone ? (
          <a href={phoneHref} className="inline-flex min-h-12 items-center gap-2 rounded bg-accent px-4 font-bold text-white">
            <PhoneIcon />
            Call {phoneDisplay}
          </a>
        ) : (
          <Link href="/get-help" className="inline-flex min-h-12 items-center rounded bg-accent px-4 font-bold text-white">
            Get connected
          </Link>
        )}
      </div>
    </div>
  );
}
