export const SITE = {
  name: 'JT\'s Heating Cooling & Plumbing',
  title: 'JT\'s Heating Cooling & Plumbing | Grand Rapids, MI',
  description:
    'Honest furnace, A/C, heat pump, mini-split, and water heater repair and installation in Grand Rapids and West Michigan. Licensed, insured, and owner-operated.',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://jts-homeservices.newsitebuild.dev',
  lang: 'en',
  phone: '(616) 840-3105',
  phoneTel: '+16168403105',
  twitterHandle: '',
  socials: {
    twitter: '',
    github: '',
    linkedin: '',
  },
} as const;

export type SiteConfig = typeof SITE;
