import { MetadataRoute } from 'next'
import { sampleLocations } from '@/data/locations'
import { installationJobs } from '@/lib/jobs-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theorbittech.com'
  
  // Add all static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/portfolio',
    '/blog',
    '/faq',
    '/services/starlink-installation',
    '/services/mesh-wifi-setup',
    '/services/business-solutions',
    '/resources',
    '/resources/installation-guide',
    '/resources/faq',
    '/resources/blog',
    '/service-areas',
    '/service-areas/maryland',
    '/service-areas/northern-virginia',
    '/service-areas/washington-dc',
    '/test-google'
  ]

  // Add all location pages
  const locations = [
    '/locations/loudoun-county-va',
    '/locations/fairfax-county-va',
    '/locations/montgomery-county-md',
    '/locations/arlington-county-va',
    '/locations/prince-georges-county-md',
    '/locations/fauquier-county-va',
    '/locations/prince-william-county-va'
  ]

  // Combine all URLs
  const allPages = [...staticPages, ...locations]

  // Convert to sitemap format
  const sitemapEntries = allPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))

  // Add dynamic portfolio/job pages
  const portfolioPages = installationJobs.map(job => ({
    url: `${baseUrl}/portfolio/${job.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...sitemapEntries, ...portfolioPages]
}
