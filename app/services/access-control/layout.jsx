import ServiceJsonLd from '@/components/ServiceJsonLd';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://deltacomsecurity.com";
const pageUrl = `${siteUrl}/services/access-control/`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Commercial Access Control Systems | VA, DC & MD | Deltacom",
  description:
    "Deltacom installs commercial access control systems across Virginia, DC and Maryland - integrating access control, video and intercom. Call 703-345-1012.",
  keywords: [
    'commercial access control systems',
    'commercial access control installation',
    'access control installer',
    'access control company',
    'cloud access control',
    'enterprise access control',
    'Deltacom Security',
  ],
  authors: [{ name: "Deltacom Security" }],

  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Commercial Access Control Systems | VA, DC & MD | Deltacom",
    description:
      "Deltacom installs commercial access control systems across Virginia, DC and Maryland - integrating access control, video and intercom. Call 703-345-1012.",
    siteName: "Deltacom Security",
    images: [
      {
        url: `${siteUrl}/images/serv.webp`,
        width: 1200,
        height: 630,
        alt: "Deltacom Security - Commercial Access Control Systems",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial Access Control Systems | VA, DC & MD | Deltacom",
    description:
      "Deltacom installs commercial access control systems across Virginia, DC and Maryland - integrating access control, video and intercom. Call 703-345-1012.",
    images: [`${siteUrl}/images/serv.webp`],
    creator: "@deltacomsecurity",
    site: "@deltacomsecurity",
  },

  alternates: {
    canonical: pageUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Access Control Services",
};

export default function AccessControlLayout({ children }) {
  return (
    <>
      <ServiceJsonLd
        id="https://deltacomsecurity.com/services/access-control/#service"
        name="Commercial Access Control Systems"
        serviceType="Commercial Access Control Installation"
        url={pageUrl}
        description={metadata.description}
        areaServed={[
          { "@type": "State", name: "Virginia" },
          { "@type": "AdministrativeArea", name: "Washington, DC" },
          { "@type": "State", name: "Maryland" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
              { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services/` },
              { "@type": "ListItem", position: 3, name: "Access Control", item: pageUrl },
            ],
          }),
        }}
      />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
