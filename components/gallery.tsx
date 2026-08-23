import { ArrowRight } from 'lucide-react'

import { CtaButton } from '@/components/cta-button'
import { GalleryGrid } from '@/components/gallery-grid'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { gallery } from '@/lib/constants'

export function Gallery() {
  const featured = gallery.slice(0, 6)

  return (
    <section
      id="work"
      className="mx-auto max-w-[88rem] scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-32"
    >
      <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Gallery"
          title="Our Work"
          intro="Explore cabinetry across kitchens, laundries, vanities, wardrobes and storage spaces."
        />
        <CtaButton href="/work" variant="outline" className="shrink-0 self-start lg:self-auto">
          View Full Gallery
          <ArrowRight className="size-4" aria-hidden="true" />
        </CtaButton>
      </Reveal>

      <div className="mt-14 lg:mt-20">
        <GalleryGrid images={featured} />
      </div>
    </section>
  )
}
