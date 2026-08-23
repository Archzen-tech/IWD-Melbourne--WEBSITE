'use client'

import { useEffect, useRef, useState } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { processSteps } from '@/lib/constants'

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Check if browser prefers reduced motion, and disable scroll animations if so
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setProgress(100)
      return
    }

    const handleScroll = () => {
      const element = containerRef.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Start filling the bar when the top of the element enters 85% of the viewport height.
      const start = viewportHeight * 0.85
      // Complete the bar when the bottom of the element reaches 25% of the viewport height.
      const end = viewportHeight * 0.25

      const elementHeight = rect.height
      const currentTop = rect.top

      const totalDist = start - end + elementHeight
      const scrolledDist = start - currentTop

      let scrollProgress = (scrolledDist / totalDist) * 100
      scrollProgress = Math.max(0, Math.min(100, scrollProgress))

      setProgress(scrollProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Trigger initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Timeline node trigger percentages for Discuss, Plan, Build, Complete
  const activeThresholds = [10, 35, 60, 85]

  return (
    <section className="border-border/70 bg-muted/40 border-y">
      <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="reveal" data-visible="true">
          <SectionHeading
            eyebrow="Process"
            title="How a Project Can Come Together"
            intro="A cabinetry project generally moves through four stages, from the first conversation to the finished space."
          />
        </div>

        {/* Process Timeline with scroll-driven loading bar */}
        <div ref={containerRef} className="relative mt-16 lg:mt-24">
          {/* Progress bar container (Desktop: horizontal, Mobile: vertical) */}
          {/* Desktop track line */}
          <div className="absolute top-[7px] left-0 right-0 hidden h-[2px] bg-border lg:block" aria-hidden="true">
            <div 
              className="bg-accent h-full transition-all duration-300 ease-out" 
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Mobile/Tablet vertical track line */}
          <div className="absolute top-2 bottom-2 left-[7px] w-[2px] bg-border lg:hidden" aria-hidden="true">
            <div 
              className="bg-accent w-full transition-all duration-300 ease-out" 
              style={{ height: `${progress}%` }}
            />
          </div>

          <ol className="grid gap-y-12 pl-6 sm:grid-cols-2 sm:gap-x-12 sm:pl-0 lg:grid-cols-4 lg:gap-x-8">
            {processSteps.map((step, i) => {
              const isActive = progress >= activeThresholds[i]
              return (
                <li
                  key={step.number}
                  className="relative flex flex-col pt-0 lg:pt-8"
                >
                  {/* Node indicator on the track */}
                  <span
                    className={`absolute left-[-23px] top-[4px] size-4 rounded-full border-2 z-10 lg:left-0 lg:top-0 transition-all duration-500 ease-out ${
                      isActive 
                        ? 'border-accent bg-accent shadow-[0_0_8px_1px_rgba(200,16,30,0.3)]' 
                        : 'border-border bg-background'
                    }`}
                    aria-hidden="true"
                  />

                  {/* Step content */}
                  <div
                    className={`transition-all duration-700 ease-out ${
                      isActive 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-15 translate-y-[8px]'
                    }`}
                  >
                    <span className="text-accent font-serif text-[0.9375rem] tracking-[0.15em] font-medium block">
                      {step.number}
                    </span>
                    <h3 className="mt-3 font-serif text-[1.625rem] leading-snug font-normal text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mt-3 text-[0.9375rem] leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
