import { MetadataRoute } from 'next'
import { sampleLocations } from '@/data/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theorbittech.com'
  
  return sampleLocations.map(location => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))
}
