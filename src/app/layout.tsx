import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer-new'
import StructuredData from '@/components/seo/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Orbit Tech | Professional Starlink Installation DMV',
  description: 'Professional Starlink installation services in McLean, VA and surrounding areas. Expert technicians, same-day service. Call (571) 999-6915',
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
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
