import { SITE } from './site';

export type JsonLd = Record<string, unknown>;

export const SCHEMA = {
  ratingValue: 5,
  reviewCount: 31,
  logo: 'https://pagesmith-cdn.com/381bbb8d/favicons/apple-touch-icon-6c9c6c82.png',
  image: 'https://pagesmith-cdn.com/381bbb8d/images/Jordan-T-Miller2048w-1536.webp',
  ownerImage: 'https://pagesmith-cdn.com/381bbb8d/images/jt-owner-1024.webp',
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=JT's+Heating+Cooling+%26+Plumbing+Grand+Rapids+MI",
} as const;

export const SERVICE_CITIES = [
  'Grand Rapids',
  'Kentwood',
  'Wyoming',
  'Rockford',
  'Ada',
  'Walker',
  'Saranac',
  'Lowell',
  'Greenville',
  'Portland',
  'Hudsonville',
] as const;

export const FAQS = [
  {
    question: 'Do you handle emergency calls?',
    answer:
      "Yes, when the schedule allows. If your furnace dies on a freezing night or your A/C quits during a heat wave, call me -- I'll fit you in as soon as I possibly can. For gas leaks or safety issues, call 911 and your utility company first.",
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      "Yes -- fully licensed and insured in the state of Michigan. I'm an owner-operated business, so the person you talk to on the phone is the same person who shows up at your door. Happy to share paperwork before any job.",
  },
  {
    question: 'How does pricing work?',
    answer:
      "Once I've seen your system and diagnosed the issue, I'll give you a clear quote before starting any work. Repair vs. replacement -- I'll walk you through both options honestly, with no pressure either way.",
  },
  {
    question: 'What brands of equipment do you work on?',
    answer:
      "I work on all major brands -- Carrier, Trane, Lennox, Rheem, Goodman, American Standard, Bryant, and more. If you've got a furnace, A/C, heat pump, or water heater that needs attention, I can help.",
  },
] as const;

function siteOrigin(): string {
  return SITE.url.replace(/\/$/, '');
}

export function absoluteUrl(path = '/'): string {
  const origin = siteOrigin();
  if (!path || path === '/') return `${origin}/`;
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
}

export function businessId(): string {
  return `${siteOrigin()}/#business`;
}

export function localBusiness(extra: JsonLd = {}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': businessId(),
    name: SITE.name,
    description: SITE.description,
    url: absoluteUrl('/'),
    telephone: SITE.phone,
    priceRange: '$$',
    image: [SCHEMA.image, SCHEMA.ownerImage],
    logo: SCHEMA.logo,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Grand Rapids',
      addressRegion: 'MI',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.9634,
      longitude: -85.6681,
    },
    areaServed: [
      ...SERVICE_CITIES.map((name) => ({
        '@type': 'City',
        name,
        containedInPlace: {
          '@type': 'State',
          name: 'Michigan',
        },
      })),
      {
        '@type': 'AdministrativeArea',
        name: 'West Michigan',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    hasMap: SCHEMA.mapsUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SCHEMA.ratingValue,
      bestRating: 5,
      worstRating: 1,
      reviewCount: SCHEMA.reviewCount,
      ratingCount: SCHEMA.reviewCount,
    },
    founder: {
      '@type': 'Person',
      name: 'Jordan Miller',
      alternateName: 'JT',
      jobTitle: 'Owner & Lead Technician',
      image: SCHEMA.ownerImage,
      worksFor: { '@id': businessId() },
    },
    ...extra,
  };
}

export function webPage(opts: {
  type?: string;
  name: string;
  description: string;
  path: string;
  extra?: JsonLd;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'WebPage',
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: absoluteUrl('/'),
    },
    about: { '@id': businessId() },
    ...opts.extra,
  };
}

export function extractFaqsFromMarkdown(body = ''): { question: string; answer: string }[] {
  const match = body.match(/## Frequently Asked Questions\s+([\s\S]*)$/i);
  if (!match) return [];
  return match[1]
    .split(/^### /m)
    .slice(1)
    .map((chunk) => {
      const newline = chunk.indexOf('\n');
      const question = (newline === -1 ? chunk : chunk.slice(0, newline)).trim();
      const answer = (newline === -1 ? '' : chunk.slice(newline)).replace(/\n+$/, '').trim();
      return { question, answer };
    })
    .filter((item) => item.question && item.answer);
}

export function faqPageFromItems(items: { question: string; answer: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function faqPage(): JsonLd {
  return faqPageFromItems([...FAQS]);
}

export function offerCatalog(
  services: { id: string; title: string; description?: string }[],
): JsonLd {
  return {
    '@type': 'OfferCatalog',
    name: 'HVAC and plumbing services',
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: absoluteUrl(`/services/${service.id}/`),
        provider: { '@id': businessId() },
      },
    })),
  };
}

export function reviewNodes(
  reviews: {
    author: string;
    body: string;
    rating: number;
    reviewDate: Date;
  }[],
): JsonLd[] {
  return reviews.map((review) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    datePublished: review.reviewDate.toISOString().slice(0, 10),
    reviewBody: review.body,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: { '@id': businessId() },
  }));
}
