import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/locations/LocationPageTemplate'
import type { Location } from '@/data/locations'

export const metadata: Metadata = {
  title: 'Starlink Installation Reston VA | Same-Day Service | The Orbit Tech',
  description: 'Professional Starlink installation in Reston, Virginia. Located at 1760 Reston Pkwy - Same-day service, certified technicians, 90-day warranty. ⚡ Call (571) 999-6915',
  keywords: [
    'starlink installation reston va',
    'starlink installer reston virginia', 
    'reston starlink setup',
    'starlink technician reston',
    'satellite internet reston va',
    'starlink mount reston',
    'internet installation reston'
  ],
  openGraph: {
    title: 'Starlink Installation Reston VA | Same-Day Service',
    description: 'Professional Starlink installation in Reston, Virginia. Located right in your neighborhood at 1760 Reston Pkwy.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://theorbittech.com/starlink-installation-reston-va'
  },
}

const locationData: Location = {
  id: 'reston-va',
  slug: 'starlink-installation-reston-va',
  name: 'Reston',
  county: 'Fairfax County',
  state: 'VA',
  introCopy: 'Tired of unreliable internet in your Reston neighborhood? Frustrated with Comcast outages or Verizon Fios pricing? Located right here at 1760 Reston Pkwy, we provide same-day professional Starlink installation throughout Reston, Virginia. Our local team understands Reston\'s unique challenges from dense tree coverage in South Reston to HOA requirements in planned communities. Licensed technicians, competitive $499 installation pricing, and 90-day warranty. Experience lightning-fast satellite internet that works reliably in your neighborhood.',
  localChallenges: 'Reston\'s mature tree canopy and planned community HOA requirements create unique installation challenges. Our local team navigates Reston Association guidelines, works around established vegetation near Lake Anne and South Reston, and ensures optimal satellite positioning for consistent connectivity across Reston\'s diverse neighborhoods and architectural styles.',
  geoCoordinates: {
    lat: 38.9586,
    lon: -77.3570
  },
  cities: [
    'South Reston',
    'North Reston',
    'Lake Anne',
    'Hunters Woods',
    'Tall Oaks',
    'Glade Drive',
    'Reston Town Center',
    'Wiehle Avenue',
    'Sunset Hills',
    'Baron Cameron'
  ],
  faqs: [
    {
      question: 'How much does Starlink installation cost in Reston, VA?',
      answer: 'Professional Starlink installation in Reston costs $499, which includes comprehensive site survey, professional mounting, cable routing, and system optimization. Monthly Starlink service is $120. As a local Reston business, we often provide same-day service and include free follow-up support for our neighbors.'
    },
    {
      question: 'Do you work with Reston Association HOA requirements?',
      answer: 'Absolutely! Located right here in Reston, we have extensive experience with Reston Association guidelines and cluster association requirements. We handle all necessary approvals and ensure installations meet architectural standards while maintaining optimal satellite performance throughout Reston\'s planned communities.'
    },
    {
      question: 'How quickly can you install Starlink since you\'re located in Reston?',
      answer: 'Since we\'re based right here at 1760 Reston Pkwy, we can often provide same-day emergency service and typically complete installations within 2-3 hours. Our local inventory and intimate knowledge of Reston neighborhoods allows us to provide the fastest, most convenient service for our neighbors.'
    },
    {
      question: 'Can Starlink work effectively with Reston\'s tree coverage?',
      answer: 'Yes! Our Reston-based team conducts thorough site surveys and understands the specific challenges of each neighborhood. We often recommend strategic tree trimming or alternative mounting positions to ensure year-round connectivity, especially in heavily wooded areas of South Reston and around Lake Anne.'
    }
  ]
}

export default function RestonStarlinkPage() {
  return <LocationPageTemplate location={locationData} />
}
