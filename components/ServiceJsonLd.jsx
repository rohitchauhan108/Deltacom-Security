import { serviceSchema } from '@/lib/seo';

export default function ServiceJsonLd({ id, name, serviceType, url, description, areaServed }) {
  const schema = serviceSchema({ id, name, serviceType, url, description });

  if (areaServed) {
    schema.areaServed = areaServed;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
