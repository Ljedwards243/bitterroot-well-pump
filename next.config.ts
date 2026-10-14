import type { NextConfig } from "next";

// Canonical host is https://bitterrootwellpump.com (non-www). Vercel serves HTTPS only.
// The www host 301s to the apex; it must also be added to the Vercel project for the
// rule to receive traffic (standards §10).
const canonical = "https://bitterrootwellpump.com";
const alternateHosts = ["www.bitterrootwellpump.com"];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Inline the small Tailwind stylesheet so phones don't wait on a render-blocking
  // CSS request (standards §2, §3; brief §17).
  experimental: { inlineCss: true },
  images: {
    // Self-hosted photos in /public/images are served as AVIF/WebP at the size each
    // screen needs (brief §17: hero under ~100 KB on phones).
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
  },
  async redirects() {
    return alternateHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `${canonical}/:path*`,
      statusCode: 301 as const,
    }));
  },
};

export default nextConfig;
