import locations from '@/public/data/locations.json';

const baseUrl = 'https://deltacomsecurity.com';

export default function sitemap() {
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/services/access-control',
    '/services/video-surveillance',
    '/services/mobile-surveillance',
    '/services/networking-solutions',
    // TEMPORARILY HIDDEN - Cybersecurity page disabled
    // '/services/cyber-security',
    '/services/commercial-security',
    '/services/fire-protection',
  ];

  const locationRoutes = locations.locations.map((location) => `/${location.slug}`);

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}/`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    })),
    ...locationRoutes.map((route) => ({
      url: `${baseUrl}${route}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
