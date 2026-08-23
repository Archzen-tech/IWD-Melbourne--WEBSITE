import type { MetadataRoute } from 'next'

import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: { path: string; priority: number }[] = [
    { path: '/', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/work', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.9 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }))
}
