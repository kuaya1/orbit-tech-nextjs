import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer-new'
import StructuredData from '@/components/seo/StructuredData'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Starlink Installation DMV | Certified Installers | Same-Day Service',
  description: 'Expert Starlink installation in DC, Maryland & Virginia. ✓ Licensed technicians ✓ Same-day service ✓ 90-day warranty. Get 200+ Mbps speeds. Call (571) 999-6915 for free quote.',
  keywords: [
    'professional Starlink installation Northern Virginia',
    'certified Starlink installer Maryland suburbs', 
    'custom Starlink mount Fairfax VA',
    'Starlink business setup DC',
    'best Starlink installers DMV',
    'Starlink roof mount rural Virginia',
    'emergency Starlink installation McLean',
    'Starlink obstruction solutions DMV',
    'who installs Starlink near Reston VA',
    'same-day Starlink installation',
    'licensed Starlink technician',
    'Starlink site survey Maryland suburbs'
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
    canonical: 'https://theorbittech.com'
  },
  verification: {
    google: 'lJzXDJr8RSz6F7KrF_-lTU-LLuCSz3zsE4hs2njIUpE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <SpeedInsights />
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
