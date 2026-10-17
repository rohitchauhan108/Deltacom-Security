import { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://deltacomsecurity.com";
const pageUrl = `${siteUrl}/about/`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "About Deltacom Security | Smart Security & IT Solutions",
  description:
    "Learn how Deltacom Security has protected commercial, government and multi-site organizations since 2017. Meet our team and request a consultation today online.",
  keywords:
    "about us, deltacom security, security solutions, IT solutions, comprehensive security, cutting-edge technology, local expertise, mission, vision, security technology provider",
  authors: [{ name: "Deltacom Security" }],

  // Open Graph
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "About Deltacom Security | Smart Security & IT Solutions",
    description:
      "Learn how Deltacom Security protects people, property, and operations with smart security and IT solutions.",
    siteName: "Deltacom Security",
    images: [
      {
        url: `${siteUrl}/images/about/HeroImage.jpg`,
        width: 1200,
        height: 630,
        alt: "About Deltacom Security - Mission and Vision for Security & IT Solutions",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "About Deltacom Security | Smart Security & IT Solutions",
    description:
      "Learn how Deltacom Security protects people, property, and operations with smart security and IT solutions.",
    images: [`${siteUrl}/images/about/HeroImage.jpg`],
    creator: "@deltacomsecurity",
    site: "@deltacomsecurity",
  },

 

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: pageUrl,
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Deltacom Security",
            description:
              "Discover our mission to deliver comprehensive security and IT solutions.",
            url: pageUrl,
            mainEntity: {
              "@type": "Organization",
              name: "Deltacom Security",
              description:
                "Smart, end-to-end security and IT solutions provider",
            },
          }),
        }}
      />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
