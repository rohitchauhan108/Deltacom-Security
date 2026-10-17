// TEMPORARILY HIDDEN - Cybersecurity page disabled
// import ServiceJsonLd from '@/components/ServiceJsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deltacomsecurity.com';
const pageUrl = `${siteUrl}/services/cyber-security/`;
const description = 'Deltacom Security helps DC Metro businesses reduce cyber risk with network security, endpoint protection and compliance support. Request a cybersecurity assessment.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Commercial Cybersecurity | DC Metro | Deltacom Security',
  description: 'Deltacom helps DC Metro businesses reduce cyber risk with network security, endpoint protection and compliance support. Request a cybersecurity assessment.',
  alternates: { canonical: pageUrl },
  // TEMPORARILY HIDDEN - Cybersecurity page disabled
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Commercial Cybersecurity Services | DC Metro | Deltacom Security',
    description,
    siteName: 'Deltacom Security',
    images: [{ url: `${siteUrl}/images/cyber/banner.jpg`, width: 1200, height: 630, alt: 'Deltacom Security cybersecurity services' }],
  },
};

export default function CyberSecurityLayout({ children }) {
  return (
    <>
      {/* TEMPORARILY HIDDEN - Cybersecurity page disabled */}
      {/* <ServiceJsonLd
        id="https://deltacomsecurity.com/services/cyber-security/#service"
        name="Commercial Cybersecurity Services"
        serviceType="Commercial Cybersecurity and IT Services"
        url={pageUrl}
        description={description}
      /> */}
      <main className="min-h-screen">{children}</main>
    </>
  );
}
