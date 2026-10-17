import ServiceJsonLd from '@/components/ServiceJsonLd';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://deltacomsecurity.com";
const pageUrl = `${siteUrl}/services/networking-solutions/`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Structured Cabling & Network Infrastructure | DC | Deltacom',
  description:
    'Deltacom delivers structured cabling and network infrastructure for DC Metro offices and multi-site businesses. Request a network assessment for your facility.',
  keywords: [
    'networking solutions',
    'structured cabling',
    'WiFi 6',
    'network security',
    'SD-WAN',
    'cloud integration',
    'Deltacom Security',
  ],
  authors: [{ name: 'Deltacom Security' }],

  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Networking Solutions | DC Metro | Deltacom Security',
    description:
      'Complete network design, deployment, and maintenance for wired and wireless networks across offices, facilities, and remote sites.',
    siteName: 'Deltacom Security',
    images: [
      {
        url: `${siteUrl}/images/services/networking-background.png`,
        width: 1200,
        height: 630,
        alt: 'Deltacom Security Networking Solutions - Infrastructure & Connectivity',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Networking Solutions | DC Metro | Deltacom Security',
    description:
      'Complete network design, deployment, and maintenance for wired and wireless networks.',
    images: [`${siteUrl}/images/services/networking-background.png`],
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

  category: "Networking Services",
};

export default function NetworkingSolutionsLayout({ children }) {
  return (
    <>
      <ServiceJsonLd
        id="https://deltacomsecurity.com/services/networking-solutions/#service"
        name="Structured Cabling & Network Infrastructure"
        serviceType="Commercial Structured Cabling and Network Infrastructure"
        url={pageUrl}
        description={metadata.description}
      />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
