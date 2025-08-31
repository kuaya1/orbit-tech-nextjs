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
