import { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://deltacomsecurity.com";
const pageUrl = `${siteUrl}/services/fire-protection/`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Commercial Fire Protection Systems | DC Metro | Deltacom',
  description:
    'Deltacom Security designs commercial fire alarm, detection, and suppression systems for DC Metro businesses. Request a fire protection assessment.',
  keywords: [
    'fire protection systems',
    'fire alarm systems',
    'sprinkler systems',
    'fire detection',
    'fire suppression',
    'commercial fire protection',
    'Deltacom Security',
  ],
  authors: [{ name: 'Deltacom Security' }],
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Commercial Fire Protection Systems | DC Metro | Deltacom Security',
    description: 'Commercial fire alarms, detection, suppression, and emergency response systems for DC Metro businesses from Deltacom Security.',
    siteName: 'Deltacom Security',
    images: [
      {
        url: `${siteUrl}/images/fire/2.webp`,
        width: 1200,
        height: 630,
        alt: 'Deltacom Security fire protection systems - complete fire safety solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Fire Protection Systems | DC Metro | Deltacom Security',
    description: 'Commercial fire alarms, detection, suppression, and emergency response systems for DC Metro businesses from Deltacom Security.',
    images: [`${siteUrl}/images/fire/2.webp`],
    creator: '@deltacomsecurity',
    site: '@deltacomsecurity',
  },
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'Fire Safety Services',
};

export default function FireProtectionLayout({ children }) {
  return (
    <>
      {/* Structured Data - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Fire Protection Systems",
            description:
              "Comprehensive fire protection systems including fire alarms, sprinkler systems, detection, suppression, and emergency response solutions for commercial and industrial buildings.",
            provider: {
              "@type": "Organization",
              name: "Deltacom Security",
              url: siteUrl,
            },
            serviceType: "Fire Protection Services",
            areaServed: {
              "@type": "Place",
              name: "Washington, DC, Virginia and Maryland",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Fire Protection Systems",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fire Alarm Systems",
                    description:
                      "Advanced fire detection and notification systems with smoke detectors, heat detectors, and manual pull stations",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Sprinkler Systems",
                    description:
                      "Automatic sprinkler systems including wet pipe, dry pipe, and pre-action systems",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fire Suppression Systems",
                    description:
                      "Specialized fire suppression systems using foam, chemicals, and clean agents",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Emergency Lighting Systems",
                    description:
                      "Emergency lighting and exit signs for safe evacuation during power outages",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fire Extinguisher Systems",
                    description:
                      "Portable fire extinguishers and fire hydrant systems for immediate fire response",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: `${siteUrl}/services`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Fire Protection Systems",
                item: pageUrl,
              },
            ],
          }),
        }}
      />

      {/* Structured Data - LocalBusiness with Fire Safety Focus */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Deltacom Security - Fire Protection Systems",
            description:
              "Professional fire protection systems provider specializing in fire alarms, sprinkler systems, detection, suppression, and emergency response solutions.",
            url: pageUrl,
            telephone: "+1-703-345-1012",
            email: "support@deltacomsecurity.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4000 Legato Road, Suite 1100",
              addressLocality: "Fairfax",
              addressRegion: "VA",
              postalCode: "22033",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "38.8462",
              longitude: "-77.3064",
            },
            openingHours: ["Mo-Fr 09:00-17:00"],
            priceRange: "$$",
            serviceArea: {
              "@type": "Place",
              name: "Washington, DC, Virginia and Maryland",
            },
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              name: "Fire Protection System Certification",
            },
          }),
        }}
      />

      {/* Structured Data - Product/Service Features */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Fire Protection Systems",
            description:
              "Complete fire protection solutions including detection, suppression, and emergency response systems",
            brand: {
              "@type": "Brand",
              name: "Deltacom Security",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "USD",
              seller: {
                "@type": "Organization",
                name: "Deltacom Security",
              },
            },
          }),
        }}
      />

      <main className="min-h-screen">{children}</main>
    </>
  );
}
