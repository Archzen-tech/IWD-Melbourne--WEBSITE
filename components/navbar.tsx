'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mail, Menu, Phone, X } from 'lucide-react'

import { FacebookIcon } from '@/components/icons/facebook-icon'
import { Logo } from '@/components/logo'
import { nav, site } from '@/lib/site'
import { cn } from '@/lib/utils'

/**
 * Routes whose page starts with a full-bleed dark hero image. On these the
 * unscrolled navbar sits over the image, so it needs light-on-dark styling.
 */
const DARK_HERO_ROUTES = ['/', '/services']

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Light treatment only while transparent over a dark hero.
  const onDarkHero =
    DARK_HERO_ROUTES.includes(pathname) && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500',
        onDarkHero
          ? 'bg-transparent'
          : 'bg-charcoal/95 border-white/10 border-b backdrop-blur-md',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-[88rem] items-center justify-between px-5 transition-[height] duration-500 sm:px-8 lg:px-12',
          scrolled ? 'h-16' : 'h-16 lg:h-20',
        )}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative py-1 text-[0.8125rem] tracking-[0.06em] transition-colors',
                  'after:bg-accent after:absolute after:-bottom-0.5 after:left-0 after:h-px after:transition-[width] after:duration-300 after:content-[""]',
                  active
                    ? 'after:w-full text-background'
                    : 'after:w-0 hover:after:w-full text-background/70 hover:text-background',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 text-[0.8125rem] tracking-[0.04em] transition-colors xl:flex text-background/70 hover:text-background"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {site.phone.display}
          </a>

          <Link
            href="/contact"
            className={cn(
              'hover:bg-accent hover:text-background hidden px-6 py-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase transition-colors duration-300 lg:inline-flex',
              onDarkHero
                ? 'bg-background text-foreground'
                : 'bg-accent text-accent-foreground',
            )}
          >
            Get in Touch
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-mr-1 inline-flex size-11 items-center justify-center border transition-colors lg:hidden border-background/30 text-background hover:bg-background/10"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="bg-charcoal border-white/10 h-[calc(100dvh-4rem)] overflow-y-auto border-t lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 pt-4 sm:px-8">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-white/10 text-background font-serif text-[1.75rem] leading-tight tracking-wide not-last:border-b py-4"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3 px-5 pb-10 sm:px-8">
          <Link
            href="/contact"
            className="bg-accent text-accent-foreground flex items-center justify-center px-6 py-4 text-[0.75rem] font-medium tracking-[0.14em] uppercase"
          >
            Get in Touch
          </Link>
          <a
            href={site.phone.href}
            className="border-background/25 text-background hover:bg-background/10 flex items-center justify-center gap-2.5 border px-6 py-4 text-[0.75rem] font-medium tracking-[0.14em] uppercase"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {site.phone.display}
          </a>
          <div className="text-background/50 mt-4 flex flex-col gap-3 text-sm">
            <a
              href={site.email.href}
              className="hover:text-background flex items-center gap-2.5 transition-colors"
            >
              <Mail className="size-4" aria-hidden="true" />
              {site.email.display}
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background flex items-center gap-2.5 transition-colors"
            >
              <FacebookIcon className="size-4" />
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
