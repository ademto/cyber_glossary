import { MetadataRoute } from 'next'
import { getAllTermSlugs } from '@/lib/mdx-utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cyber-glossary.com'
  
  // Get all term slugs
  const termSlugs = getAllTermSlugs()
  
  // Create sitemap entries for all terms
  const termEntries = termSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...termEntries,
  ]
} 