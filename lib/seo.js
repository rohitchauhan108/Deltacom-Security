import { business } from './business';

export const serviceProvider = {
  '@type': 'LocalBusiness',
  '@id': 'https://deltacomsecurity.com/#business',
  name: business.name,
  url: 'https://deltacomsecurity.com/',
  telephone: '+1-703-345-1012',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4000 Legato Road, Suite 1100',
    addressLocality: 'Fairfax',
    addressRegion: 'VA',
    postalCode: '22033',
    addressCountry: 'US',
  },
};

export const serviceSchema = ({ id, name, serviceType, url, description }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': id,
  name,
  serviceType,
  url,
  description,
  provider: serviceProvider,
});
