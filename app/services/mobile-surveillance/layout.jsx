import ServiceJsonLd from '@/components/ServiceJsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deltacomsecurity.com';
const pageUrl = `${siteUrl}/services/mobile-surveillance/`;
const description = 'Deltacom deploys mobile surveillance trailers for construction sites, infrastructure projects and remote commercial properties. Request a deployment plan today.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Mobile Surveillance Trailers | DC Metro | Deltacom Security',
  description,
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Mobile Surveillance Trailers | Construction Security | Deltacom Security',
    description,
    siteName: 'Deltacom Security',
    images: [{ url: `${siteUrl}/images/services/mobile-surveillance-background.webp`, width: 1200, height: 630, alt: 'Deltacom Security mobile surveillance trailers' }],
  },
};

export default function MobileSurveillanceLayout({ children }) {
  return (
    <>
      <ServiceJsonLd
        id="https://deltacomsecurity.com/services/mobile-surveillance/#service"
        name="Mobile Surveillance Trailers"
        serviceType="Commercial Mobile Surveillance and Construction Site Security"
        url={pageUrl}
        description={description}
      />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
