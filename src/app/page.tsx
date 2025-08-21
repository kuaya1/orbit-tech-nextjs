// Main homepage with server-side rendering for SEO
import type { Metadata } from 'next'
import StaticHero from '@/components/sections/StaticHero'
import StaticServices from '@/components/sections/StaticServices'
import StaticContact from '@/components/sections/StaticContact'

export const metadata: Metadata = {
  title: 'Orbit Tech Starlink - Professional Starlink Installation in Northern Virginia',
  description: 'Expert Starlink satellite internet installation and optimization services in Reston, Herndon, Ashburn and throughout Northern Virginia. Licensed technicians, same-day service, competitive pricing.',
  keywords: [
    'Starlink installation',
    'Starlink installer',
    'satellite internet',
    'Northern Virginia',
    'Reston',
    'Herndon', 
    'Ashburn',
    'internet installation',
    'professional installation',
    'licensed technician'
  ],
  openGraph: {
    title: 'Orbit Tech Starlink - Professional Installation Services',
    description: 'Get expert Starlink installation in Northern Virginia. Licensed technicians, same-day service, competitive pricing.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Orbit Tech Starlink'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbit Tech Starlink - Professional Installation Services',
    description: 'Expert Starlink installation in Northern Virginia. Same-day service available.'
  },
  alternates: {
    canonical: 'https://orbit-tech-nextjs.vercel.app'
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <StaticHero />
      <StaticServices />
      <StaticContact />
    </main>
  )
}
