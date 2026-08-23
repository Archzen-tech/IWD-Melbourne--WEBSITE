import type { Metadata } from 'next'

import { FinalCta } from '@/components/final-cta'
import { GalleryFilter } from '@/components/gallery-filter'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Cabinetry by IWD Melbourne across kitchens, laundries, vanities, wardrobes, garage storage and other residential spaces in Melbourne, Victoria.',
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Our Work"
        intro="Explore cabinetry across kitchens, laundries, vanities, wardrobes and storage spaces."
      />

      <section className="mx-auto max-w-[88rem] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <GalleryFilter />
      </section>

      <FinalCta />
    </>
  )
}
