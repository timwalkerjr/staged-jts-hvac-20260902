import { getCollection } from 'astro:content';
import { SITE } from './site';
import {
  absoluteUrl,
  businessId,
  extractFaqsFromMarkdown,
  faqPageFromItems,
  SERVICE_CITIES,
  type JsonLd,
} from './jsonld';

export function serviceSlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/services\/([^/]+)\/?$/);
  return match?.[1] || null;
}

export async function servicePageJsonLd(pathname: string): Promise<JsonLd[] | null> {
  const slug = serviceSlugFromPath(pathname);
  if (!slug) return null;

  const entries = await getCollection('services', ({ data }) => data.draft !== true);
  const entry = entries.find((item) => item.id === slug);
  if (!entry) return null;

  const { title, description, image, seoDescription } = entry.data;
  const faqs = extractFaqsFromMarkdown(entry.body ?? '');

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title,
      serviceType: title,
      description: seoDescription || description,
      url: absoluteUrl(`/services/${entry.id}/`),
      image,
      areaServed: SERVICE_CITIES.map((name) => ({
        '@type': 'City',
        name,
      })),
      provider: {
        '@id': businessId(),
        '@type': 'HVACBusiness',
        name: SITE.name,
        telephone: SITE.phone,
        url: SITE.url,
      },
    },
    ...(faqs.length > 0 ? [faqPageFromItems(faqs)] : []),
  ];
}
