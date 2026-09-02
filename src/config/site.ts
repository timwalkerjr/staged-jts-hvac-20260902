export const SITE = {
  name: 'JT\'s Heating Cooling & Plumbing',
  title: 'JT\'s Heating Cooling & Plumbing',
  description:
    'Furnace, A/C, heat pump, mini-split, and water heater repair and installation across Grand Rapids and West Michigan by JT\'s Heating Cooling & Plumbing',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://jts-hvac.netlify.app',
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
