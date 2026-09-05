import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { MobileContactBar } from '@/components/mobile-contact-bar'
import { LocalBusinessSchema } from '@/components/local-business-schema'
import { site } from '@/lib/site'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-cormorant',
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Custom Cabinetry in Melbourne`,
    template: `%s | ${site.name}`,
  },
  description:
    'IWD Melbourne Pty Ltd provides kitchen, laundry and vanity cabinets, wardrobes, garage storage and cabinetry works in Melbourne, Victoria.',
  applicationName: site.name,
  keywords: [
    'custom cabinetry Melbourne',
    'kitchen cabinetry Melbourne',
    'wardrobe cabinetry Melbourne',
    'laundry cabinetry Melbourne',
    'vanity cabinets Melbourne',
    'garage storage Melbourne',
    'cabinetry works Melbourne',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: site.url,
    siteName: site.legalName,
    title: `${site.name} | Custom Cabinetry in Melbourne`,
    description:
      'IWD Melbourne Pty Ltd provides kitchen, laundry and vanity cabinets, wardrobes, garage storage and cabinetry works in Melbourne, Victoria.',
    images: [
      {
        url: '/images/hero/kitchen-hero.png',
        width: 1200,
        height: 630,
        alt: 'Custom kitchen cabinetry by IWD Melbourne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Custom Cabinetry in Melbourne`,
    description:
      'Kitchen, laundry and vanity cabinets, wardrobes, garage storage and all kinds of cabinetry works in Melbourne, Victoria.',
    images: ['/images/hero/kitchen-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico` },
      { url: `${basePath}/icon.png`, type: 'image/png' },
    ],
    apple: `${basePath}/apple-icon.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#171717',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <a
          href="#main"
          className="focus:bg-foreground focus:text-background sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to main content
        </a>
        <LocalBusinessSchema />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileContactBar />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
