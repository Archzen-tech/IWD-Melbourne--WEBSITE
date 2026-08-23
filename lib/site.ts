/**
 * Central configuration for IWD Melbourne Pty Ltd.
 *
 * Every business detail rendered anywhere on the site is read from here.
 * To update the phone number, email, address, Facebook URL or domain,
 * change it in this file only.
 *
 * NOTE: Only verified, supplied business information belongs in this file.
 * Do not add years of experience, project counts, testimonials, ratings,
 * awards, certifications, guarantees, warranties, pricing or opening hours
 * unless the business has explicitly confirmed them.
 */

export const site = {
  legalName: 'IWD Melbourne Pty Ltd',
  name: 'IWD Melbourne',
  wordmark: { primary: 'IWD', secondary: 'Melbourne' },

  /** Faithful to the business's own description — do not alter the meaning. */
  description:
    'Kitchen, laundry and vanity cabinets, wardrobes, garage storage and all kinds of cabinetry works.',

  /**
   * Update this to the final production domain once deployed.
   * Used for canonical URLs, Open Graph and structured data.
   */
  url: 'https://iwdmelbourne.com.au',

  phone: {
    display: '0431 422 571',
    href: 'tel:+61431422571',
  },

  email: {
    display: 'innovativewooddecor@gmail.com',
    href: 'mailto:innovativewooddecor@gmail.com',
  },

  location: {
    display: 'Melbourne, VIC, Australia 3977',
    locality: 'Melbourne',
    region: 'VIC',
    postalCode: '3977',
    country: 'AU',
  },

  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61564715591263',
  },

  /** Secondary information — not for prominent display. */
  facebookStats: { followers: 187, following: 10 },
} as const

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const
