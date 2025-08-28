import { MetadataRoute } from 'next'
import { installationJobs } from '@/lib/jobs-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theorbittech.com'
  
  // Portfolio main page
  const portfolioMain = {
    url: `${baseUrl}/portfolio`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }
  
  // Individual portfolio pages
  const portfolioPages = installationJobs.map(job => ({
    url: `${baseUrl}/portfolio/${job.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [portfolioMain, ...portfolioPages]
}
