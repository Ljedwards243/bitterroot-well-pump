import type { Metadata } from "next";
import { site } from "./site";

// Page-level openGraph replaces the root object, so the generated share image is
// referenced explicitly to keep it on every page.
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Bitterroot Valley Well Pump Help: well pump repair help in Hamilton, MT and the Bitterroot Valley",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [shareImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [shareImage] },
  };
}
