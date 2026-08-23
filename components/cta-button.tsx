import Link from 'next/link'

import { cn } from '@/lib/utils'

type Variant = 'solid' | 'outline' | 'outlineLight' | 'solidLight'

const variants: Record<Variant, string> = {
  solid: 'bg-accent text-accent-foreground hover:bg-foreground',
  solidLight: 'bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
  outline:
    'border border-foreground/25 text-foreground hover:bg-foreground hover:text-background',
  outlineLight:
    'border border-background/35 text-background hover:bg-background hover:text-foreground',
}

const base =
  'inline-flex items-center justify-center gap-2.5 px-7 py-4 text-[0.75rem] font-medium tracking-[0.14em] uppercase transition-colors duration-300'

export function CtaButton({
  href,
  children,
  variant = 'solid',
  external,
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  external?: boolean
  className?: string
}) {
  const classes = cn(base, variants[variant], className)

  // tel:, mailto: and off-site links must not use the client router.
  const isPlainAnchor =
    external ||
    href.startsWith('tel:') ||
    href.startsWith('mailto:') ||
    href.startsWith('http')

  if (isPlainAnchor) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith('http')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
