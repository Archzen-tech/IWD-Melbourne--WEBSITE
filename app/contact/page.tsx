import type { Metadata } from 'next'

import { Contact } from '@/components/contact'
import { PageHeader } from '@/components/page-header'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${site.legalName} to discuss kitchen, laundry, vanity, wardrobe, garage storage or other cabinetry works in Melbourne, Victoria.`,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk about your space."
        intro={`Have a cabinetry project in mind? Get in touch with ${site.name} to discuss your requirements.`}
      />
      <Contact showHeading={false} />
    </>
  )
}
