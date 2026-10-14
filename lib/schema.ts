import { towns } from "./nav";
import { hasPhone, site } from "./site";

const orgId = `${site.url}/#organization`;

// Every town name here also exists in other states (brief §2), so the state is always
// explicit, plus Ravalli County as the administrative area (brief §10).
function areaServed() {
  return [
    ...towns.map((town) => ({
      "@type": "City",
      name: `${town}, Montana`,
      containedInPlace: { "@type": "State", name: "Montana" },
    })),
    {
      "@type": "AdministrativeArea",
      name: "Ravalli County, Montana",
      containedInPlace: { "@type": "State", name: "Montana" },
    },
  ];
}

// Organization only: no address and no LocalBusiness type (standards §9). No credential
// or license properties: we are a connection service, and Montana has no pump installer
// license to claim anyway (brief §10, §11).
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    ...(hasPhone ? { telephone: site.phoneSchema } : {}),
    description: site.disclosure,
    areaServed: areaServed(),
  };
}

export function serviceSchema({
  name,
  serviceType,
  description,
  path,
}: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: `${site.url}${path}`,
    provider: { "@id": orgId },
    areaServed: areaServed(),
  };
}

export function webPageSchema({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${site.url}${path}`,
    dateModified: site.lastReviewedIso,
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    publisher: { "@id": orgId },
  };
}

export type Faq = { q: string; a: string };

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
