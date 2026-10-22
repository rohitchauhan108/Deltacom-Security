const siteUrl = "https://deltacomsecurity.com";
const pageUrl = `${siteUrl}/privacy/`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Privacy Policy | Deltacom Security",
  description: "Read our comprehensive privacy policy to understand how we protect and manage your personal data at Deltacom Security.",
  
  // OpenGraph
  openGraph: {
    title: "Privacy Policy | Deltacom Security",
    description: "Our commitment to protecting your privacy and personal information.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/new-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Deltacom Security Privacy Policy",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Deltacom Security",
    description: "Our commitment to protecting your privacy and personal information.",
    creator: "@deltacomsecurity",
    site: "@deltacomsecurity",
  },

  // Additional
  alternates: {
    canonical: pageUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Legal",
};

export default function PrivacyLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: pageUrl,
            description:
              "Privacy policy for Deltacom Security describing how we handle and protect personal data.",
          }),
        }}
      />

      <main className="min-h-screen">{children}</main>
    </>
  );
}
