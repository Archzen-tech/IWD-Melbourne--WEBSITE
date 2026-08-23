'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Reveal } from '@/components/reveal'
import { Lightbox } from '@/components/lightbox'
import type { GalleryImage } from '@/lib/constants'
import { cn } from '@/lib/utils'

const spanClasses: Record<GalleryImage['span'], string> = {
  tall: 'aspect-[3/4] sm:row-span-2 sm:aspect-auto sm:min-h-[34rem]',
  wide: 'aspect-[4/3] sm:col-span-2 sm:aspect-[16/9]',
  square: 'aspect-square',
}

export function GalleryGrid({
  images,
  priorityCount = 2,
}: {
  images: GalleryImage[]
  priorityCount?: number
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <>
      <ul className="grid auto-rows-min grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => (
          <Reveal
            as="li"
            key={`${image.src}-${i}`}
            delay={(i % 3) * 80}
            className={cn(
              'group bg-secondary relative overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2',
              spanClasses[image.span],
            )}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className="relative block h-full w-full text-left focus:outline-none cursor-pointer"
              aria-label={`View full size image of ${image.alt} - ${image.comment}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading={i < priorityCount ? 'eager' : 'lazy'}
                priority={i < priorityCount}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
              />
              <div
                aria-hidden="true"
                className="from-charcoal/70 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <p className="text-background text-[0.6875rem] font-medium tracking-[0.16em] uppercase">
                  {image.category}
                </p>
                <p className="text-background mt-1 max-w-[18rem] text-sm leading-relaxed">
                  {image.comment}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </ul>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChangeActiveIndex={setActiveIndex}
        />
      )}
    </>
  )
}
