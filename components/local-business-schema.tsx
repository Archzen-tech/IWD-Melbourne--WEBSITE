import { services } from '@/lib/constants'
import { site } from '@/lib/site'

/**
 * LocalBusiness structured data.
 *
 * Only verified business information is included. Deliberately omitted because
 * they have not been confirmed: openingHours, priceRange, aggregateRating,
 * reviewCount, geo coordinates, foundingDate, street address.
 */
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#business`,
    name: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone.display,
    email: site.email.display,
    image: `${site.url}/images/hero/kitchen-hero.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location.locality,
      addressRegion: site.location.region,
      postalCode: site.location.postalCode,
      addressCountry: site.location.country,
    },
    areaServed: {
      '@type': 'City',
      name: 'Melbourne',
    },
    sameAs: [site.social.facebook],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cabinetry Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      // Static, non-user-generated content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
