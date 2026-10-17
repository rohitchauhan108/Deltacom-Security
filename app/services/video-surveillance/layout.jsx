import ServiceJsonLd from '@/components/ServiceJsonLd';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://deltacomsecurity.com";
const pageUrl = `${siteUrl}/services/video-surveillance/`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Commercial Video Surveillance | DC Metro | Deltacom Security",
  description:
    "Deltacom Security installs commercial video surveillance with cloud management, analytics and remote monitoring across the DC Metro area. Request an assessment.",
  keywords:
    "Video Surveillance, CCTV Systems, Security Cameras, AI Video Analytics, Cloud Surveillance, 4K Security Cameras, Remote Monitoring, Deltacom Security",
  authors: [{ name: "Deltacom Security" }],

  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Commercial Video Surveillance | DC Metro | Deltacom Security",
    description:
      "Advanced cloud and on-premise video surveillance solutions with smart analytics and triple redundancy. 24/7 monitoring with AI-powered analytics.",
    siteName: "Deltacom Security",
    images: [
      {
        url: `${siteUrl}/images/services/camers3.jpg`,
        width: 1200,
        height: 630,
        alt: "Deltacom Security Video Surveillance Solutions - CCTV Systems",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial Video Surveillance | DC Metro | Deltacom Security",
    description:
      "Advanced cloud and on-premise video surveillance solutions with smart analytics and triple redundancy.",
    images: [`${siteUrl}/images/services/camers3.jpg`],
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

  category: "Video Surveillance Services",
};

export default function VideoSurveillanceLayout({ children }) {
  return (
    <>
      <ServiceJsonLd
        id="https://deltacomsecurity.com/services/video-surveillance/#service"
        name="Commercial Video Surveillance"
        serviceType="Commercial Video Surveillance Design, Installation and Support"
        url={pageUrl}
        description={metadata.description}
      />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
