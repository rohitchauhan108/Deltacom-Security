import { notFound } from 'next/navigation';
import LocationTemplate from '@/components/LocationTemplate';
import locationsData from '@/public/data/locations.json';

export async function generateStaticParams() {
  return locationsData.locations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const location = locationsData.locations.find((loc) => loc.slug === slug);

  if (!location) {
    return {};
  }

  const canonicalUrl = `https://deltacomsecurity.com/${location.slug}/`;

  return {
    metadataBase: new URL('https://deltacomsecurity.com'),
    title: location.seoTitle,
    description: location.seoDescription,
    keywords: [
      `${location.city} commercial security`,
      `${location.city} security systems`,
      'Deltacom Security',
      'commercial access control',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: location.seoTitle,
      description: location.seoDescription,
      url: canonicalUrl,
      type: 'website',
      siteName: 'Deltacom Security',
      images: [
        {
          url: '/images/hero/1.jpg',
          width: 1200,
          height: 630,
          alt: `Deltacom Security services in ${location.city}, ${location.state}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: location.seoTitle,
      description: location.seoDescription,
      images: ['https://deltacomsecurity.com/images/hero/1.jpg'],
    },
  };
}

export default function LocationPage({ params }) {
  const { slug } = params;
  const location = locationsData.locations.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <LocationTemplate 
      city={location.city}
      state={location.state}
      slug={location.slug}
      seoTitle={location.seoTitle}
      seoDescription={location.seoDescription}
      intro={location.intro}
      localContent={location.localContent}
    />
  );
}
