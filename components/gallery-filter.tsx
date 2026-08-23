'use client'

import { useMemo, useState } from 'react'

import { GalleryGrid } from '@/components/gallery-grid'
import {
  gallery,
  galleryCategories,
  type GalleryCategory,
} from '@/lib/constants'
import { cn } from '@/lib/utils'

export function GalleryFilter() {
  const [active, setActive] = useState<GalleryCategory>('All')

  const images = useMemo(
    () =>
      active === 'All'
        ? gallery
        : gallery.filter((image) => image.category === active),
    [active],
  )

  return (
    <div>
      <div
        role="group"
        aria-label="Filter gallery by space"
        className="border-border/70 -mx-5 flex gap-2 overflow-x-auto border-b px-5 pb-4 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {galleryCategories.map((category) => {
          const selected = category === active
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={selected}
              className={cn(
                'shrink-0 border px-4 py-2.5 text-[0.75rem] font-medium tracking-[0.12em] uppercase transition-colors duration-300',
                selected
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground',
              )}
            >
              {category}
            </button>
          )
        })}
      </div>

      <p className="text-muted-foreground mt-5 text-[0.8125rem]">
        Showing {images.length} {images.length === 1 ? 'image' : 'images'}
        {active !== 'All' ? ` in ${active}` : ''}.
      </p>

      <div className="mt-8" aria-live="polite">
        <GalleryGrid key={active} images={images} priorityCount={3} />
      </div>
    </div>
  )
}
