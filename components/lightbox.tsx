'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

import type { GalleryImage } from '@/lib/constants'

interface LightboxProps {
  images: GalleryImage[]
  activeIndex: number
  onClose: () => void
  onChangeActiveIndex: (index: number) => void
}

export function Lightbox({
  images,
  activeIndex,
  onClose,
  onChangeActiveIndex,
}: LightboxProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const nextButtonRef = useRef<HTMLButtonElement>(null)

  const activeImage = images[activeIndex]

  const handleNext = () => {
    onChangeActiveIndex((activeIndex + 1) % images.length)
  }

  const handlePrev = () => {
    onChangeActiveIndex((activeIndex - 1 + images.length) % images.length)
  }

  // Handle Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      }
    };
    window.addEventListener('keydown', handleKeyDown)

    // Focus close button on open
    closeButtonRef.current?.focus()

    // Lock background scrolling
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [activeIndex, images.length])

  // Handle Mobile Swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const currentTouch = e.targetTouches[0].clientX
    const diff = touchStart - currentTouch

    if (diff > 25) {
      handleNext()
      setTouchStart(null)
    } else if (diff < -25) {
      handlePrev()
      setTouchStart(null)
    }
  }

  const handleTouchEnd = () => {
    setTouchStart(null)
  }

  if (!activeImage) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo Gallery Lightbox"
      className="bg-charcoal/95 fixed inset-0 z-50 flex flex-col items-center justify-between pb-6 pt-16 backdrop-blur-md transition-opacity duration-300 touch-none"
    >
      {/* Top controls */}
      <div className="absolute right-5 top-5 z-50 flex items-center gap-4 sm:right-8 sm:top-8">
        <span className="text-background/50 font-sans text-xs tracking-wider">
          {activeIndex + 1} / {images.length}
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox"
          className="text-background/80 hover:bg-background/10 hover:text-background border-background/20 inline-flex size-11 items-center justify-center border transition-colors focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      {/* Main Image Viewport */}
      <div
        className="relative flex w-full flex-1 items-center justify-center px-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Buttons (Desktop) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Image"
          className="bg-charcoal/60 text-background/80 hover:bg-charcoal hover:text-background border-background/10 absolute left-4 z-10 hidden size-12 items-center justify-center border transition-colors focus:outline-none focus:ring-2 focus:ring-accent sm:inline-flex md:left-8 cursor-pointer"
        >
          <ChevronLeft className="size-6" aria-hidden="true" />
        </button>

        <div className="relative aspect-[4/3] h-full max-h-[70vh] w-full max-w-[85vw] select-none md:max-h-[75vh]">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority
            unoptimized
            className="object-contain"
          />
        </div>

        <button
          ref={nextButtonRef}
          type="button"
          onClick={handleNext}
          aria-label="Next Image"
          className="bg-charcoal/60 text-background/80 hover:bg-charcoal hover:text-background border-background/10 absolute right-4 z-10 hidden size-12 items-center justify-center border transition-colors focus:outline-none focus:ring-2 focus:ring-accent sm:inline-flex md:right-8 cursor-pointer"
        >
          <ChevronRight className="size-6" aria-hidden="true" />
        </button>
      </div>

      {/* Meta Bar at bottom */}
      <div className="mx-auto w-full max-w-2xl px-6 text-center text-background">
        <p className="text-accent text-[0.6875rem] font-medium tracking-[0.2em] uppercase">
          {activeImage.category}
        </p>
        <p className="mt-2 font-serif text-[1.125rem] leading-snug font-light text-background/90 md:text-[1.25rem]">
          {activeImage.comment}
        </p>
      </div>
    </div>
  )
}
