const siteUrl = "https://deltacomsecurity.com";
const pageUrl = `${siteUrl}/terms/`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Terms of Service | Deltacom Security",
  description: "Read our terms of service to understand the terms and conditions for using Deltacom Security's website and services.",
  
  // OpenGraph
  openGraph: {
    title: "Terms of Service | Deltacom Security",
    description: "Terms and conditions for using Deltacom Security services.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "Deltacom Security Terms of Service",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Deltacom Security",
    description: "Terms and conditions for using Deltacom Security services.",
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

export default function TermsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Service",
            url: pageUrl,
            description:
              "Terms of service for Deltacom Security describing the terms and conditions of use.",
          }),
        }}
      />

      <main className="min-h-screen">{children}</main>
    </>
  );
}
