import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deltacomsecurity.com';
const pageUrl = `${siteUrl}/services/commercial-security/`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Commercial Security Solutions | DC Metro | Deltacom Security',
  description: 'Deltacom designs integrated commercial security systems for DC Metro businesses, including alarms, access control, CCTV and monitoring. Request an assessment.',
  keywords: [
    'commercial security solutions',
    'business security systems',
    'commercial surveillance',
    'access control',
    'security cameras',
    'commercial CCTV',
    'Deltacom Security',
  ],
  authors: [{ name: 'Deltacom Security' }],
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Commercial Security Solutions | DC Metro | Deltacom Security',
    description: 'Integrated security systems for DC Metro businesses, including surveillance, access control, alarms, and technology to protect property and employees.',
    siteName: 'Deltacom Security',
    images: [
      {
        url: `${siteUrl}/images/commercial/HeroSectionIMage.webp`,
        width: 1200,
        height: 630,
        alt: 'Deltacom Security Commercial Security Solutions - Business Protection Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Security Solutions | DC Metro | Deltacom Security',
    description: 'Integrated security systems for DC Metro businesses, including surveillance, access control, alarms, and technology to protect property and employees.',
    images: [`${siteUrl}/images/commercial/HeroSectionIMage.webp`],
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
  category: 'Security Services',
};

export default function CommercialSecurityLayout({ children }) {
  return (
    <>
      {/* Structured Data - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial Security Solutions",
            "description": "Comprehensive commercial security solutions for businesses including surveillance systems, access control, and integrated security technology.",
            "provider": {
              "@type": "Organization",
              "name": "Deltacom Security",
              "url": siteUrl
            },
            "serviceType": "Commercial Security Services",
            "areaServed": {
              "@type": "Place",
              "name": "Washington, DC, Virginia and Maryland"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Commercial Security Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CCTV Surveillance Systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Access Control Systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Alarm Systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Integrated Security Solutions"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": `${siteUrl}/services`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Commercial Security Solutions",
                "item": pageUrl
              }
            ]
          })
        }}
      />

      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SecurityService",
            "name": "Deltacom Security - Commercial Security Solutions",
            "description": "Professional commercial security solutions provider specializing in CCTV surveillance, access control, and integrated security systems for businesses.",
            "url": pageUrl,
            "telephone": "+1-703-345-1012",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4000 Legato Road, Suite 1100",
              "addressLocality": "Fairfax",
              "addressRegion": "VA",
              "postalCode": "22033",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "38.8462",
              "longitude": "-77.3064"
            },
            "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "Place",
              "name": "Washington, DC, Virginia and Maryland"
            }
          })
        }}
      />

      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}
