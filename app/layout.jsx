import './globals.css';
import { Poppins, Montserrat } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from "@/components/Footer";
import SmoothScroll from '@/components/SmoothScroll';
import { business, localBusinessSchema } from '@/lib/business';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata = {
  metadataBase: new URL('https://deltacomsecurity.com'),
  title: 'Commercial Security Systems in Washington, DC | Deltacom',
  description: 'Protect your business with Deltacom commercial security systems, CCTV, access control, fire protection and 24/7 monitoring. Request a quote today in DC Metro.',
  keywords: [
    'commercial security systems',
    'access control',
    'video surveillance',
    'fire protection',
    // TEMPORARILY HIDDEN - Cybersecurity page disabled
    // 'cybersecurity',
    'networking solutions',
    'Deltacom Security',
  ],
  authors: [{ name: 'Deltacom Security' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://deltacomsecurity.com/',
    title: 'Commercial Security Systems in Washington, DC | Deltacom',
    description: 'Protect your business with Deltacom commercial security systems, CCTV, access control, fire protection and 24/7 monitoring. Request a quote today in DC Metro.',
    siteName: 'Deltacom Security',
    images: [
      {
        url: 'https://deltacomsecurity.com/images/hero/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Deltacom Security commercial security systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Security Systems in Washington, DC | Deltacom',
    description: 'Protect your business with Deltacom commercial security systems, CCTV, access control, fire protection and 24/7 monitoring. Request a quote today in DC Metro.',
    images: ['https://deltacomsecurity.com/images/hero/1.jpg'],
  },
  alternates: {
    canonical: 'https://deltacomsecurity.com/',
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              ...localBusinessSchema('https://deltacomsecurity.com/'),
              name: business.name,
            }),
          }}
        />
        <SmoothScroll />
        <Navigation />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
