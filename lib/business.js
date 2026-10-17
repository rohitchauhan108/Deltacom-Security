export const business = {
  name: 'Deltacom Security, LLC',
  legalName: 'Deltacom Security, LLC',
  phone: '703-345-1012',
  phoneHref: 'tel:+17033451012',
  email: 'support@deltacomsecurity.com',
  siteUrl: 'https://deltacomsecurity.com',
  address: {
    streetAddress: '4000 Legato Road, Suite 1100',
    addressLocality: 'Fairfax',
    addressRegion: 'VA',
    postalCode: '22033',
    addressCountry: 'US',
    formatted: '4000 Legato Road, Suite 1100, Fairfax, VA 22033',
  },
  foundingDate: '2017',
  serviceArea: 'Virginia, Maryland, Washington, DC, and nationwide where applicable',
};

export const siteConfig = {
  siteUrl: business.siteUrl,
  defaultTitle: 'Commercial Security Systems in Washington, DC | Deltacom',
  defaultDescription: 'Protect your business with Deltacom Security. We deliver access control, video surveillance, fire protection, networking, and 24/7 monitoring in DC, Maryland, and Virginia.',
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
};

export const localBusinessSchema = (url = business.siteUrl) => ({
  '@type': 'LocalBusiness',
  '@id': `${url}#business`,
  name: business.name,
  url,
  telephone: `+1-${business.phone}`,
  email: business.email,
  foundingDate: business.foundingDate,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.streetAddress,
    addressLocality: business.address.addressLocality,
    addressRegion: business.address.addressRegion,
    postalCode: business.address.postalCode,
    addressCountry: business.address.addressCountry,
  },
  areaServed: business.serviceArea,
});
