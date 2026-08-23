'use client'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

type RevealTag = 'div' | 'section' | 'li' | 'article' | 'header'

/**
 * Lightweight fade-up on scroll using IntersectionObserver.
 * Falls back to visible immediately when the observer is unavailable, and the
 * animation is disabled entirely under `prefers-reduced-motion` via CSS.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
  ...rest
}: React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: RevealTag
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn('reveal', className)}
      data-visible={visible ? 'true' : 'false'}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
