const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deltacomsecurity.com';
const pageUrl = `${siteUrl}/contact/`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Contact Deltacom Security | Request a Security Assessment',
  description:
    'Contact Deltacom Security for commercial access control, video surveillance, alarms, cybersecurity and network infrastructure. Request an assessment today.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Contact Deltacom Security | Request an Assessment',
    description:
      'Contact Deltacom Security for commercial security and IT solutions across Virginia, Maryland, Washington, DC, and nationwide where applicable.',
    siteName: 'Deltacom Security',
    images: [
      {
        url: `${siteUrl}/images/contact/conatct.jpg`,
        width: 1200,
        height: 630,
        alt: 'Contact Deltacom Security for a security assessment',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({ children }) {
  return children;
}
