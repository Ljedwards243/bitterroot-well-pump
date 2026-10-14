"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

// One delegated listener covers every tel: link (header, sticky bar, CTAs, forms)
// so call buttons can stay server-rendered.
export function PhoneClickTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (link) track("phone_click", { link_text: link.textContent?.trim() ?? "" });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
