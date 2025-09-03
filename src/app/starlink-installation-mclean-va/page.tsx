import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/locations/LocationPageTemplate'
import type { Location } from '@/data/locations'

export const metadata: Metadata = {
  title: 'Starlink Installation McLean VA | Same-Day Service | The Orbit Tech',
  description: 'Professional Starlink installation in McLean, Virginia. Local technicians from Reston - Same-day service, certified installation, 90-day warranty. ⚡ Call (571) 999-6915',
  keywords: [
    'starlink installation mclean va',
    'starlink installer mclean virginia',
    'mclean starlink setup',
    'satellite internet mclean va',
    'starlink technician mclean',
    'internet installation mclean'
  ],
  openGraph: {
    title: 'Starlink Installation McLean VA | Same-Day Service',
    description: 'Professional Starlink installation in McLean, Virginia. Serving from nearby Reston with same-day service.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://theorbittech.com/starlink-installation-mclean-va'
  },
}

const locationData: Location = {
  id: 'mclean-va',
  slug: 'starlink-installation-mclean-va',
  name: 'McLean',
  county: 'Fairfax County',
  state: 'VA',
  introCopy: 'Tired of paying $200+ for unreliable Verizon Fios in McLean? Frustrated with Comcast outages during storms? Located just 10 minutes away in Reston, we provide same-day professional Starlink installation throughout McLean, Virginia. Our local team understands McLean\'s unique challenges from mature estate properties with dense tree coverage to high-end neighborhoods with strict architectural guidelines. Licensed technicians, competitive $499 installation pricing, and 90-day warranty for McLean\'s most discerning residents.',
  localChallenges: 'McLean\'s prestigious neighborhoods feature mature tree canopies, large estate properties, and strict HOA architectural guidelines that require expert navigation. Our team specializes in discreet installations that meet McLean\'s aesthetic standards while ensuring optimal satellite positioning for premium properties throughout this affluent Fairfax County community.',
  geoCoordinates: {
    lat: 38.9338,
    lon: -77.1772
  },
  cities: [
    'McLean',
    'Langley',
    'Great Falls',
    'Chain Bridge',
    'Potomac Hills',
    'Franklin Park',
    'Lewinsville',
    'Salona Village',
    'West McLean',
    'Chesterbrook'
  ],
  faqs: [
    {
      question: 'How much does Starlink installation cost in McLean, VA?',
      answer: 'Professional Starlink installation in McLean costs $499, including comprehensive site survey, discreet professional mounting, and system optimization. Monthly Starlink service is $120. This often saves McLean residents $50-100+ monthly compared to premium Verizon Fios packages while providing better rural coverage for large estate properties.'
    },
    {
      question: 'Can you install Starlink discretely on McLean estate properties?',
      answer: 'Absolutely! We specialize in high-end McLean installations that meet architectural standards and HOA requirements. Our team provides discreet mounting solutions on large properties, often positioning equipment to minimize visual impact while ensuring optimal satellite connectivity for premium homes.'
    },
    {
      question: 'How quickly can you reach McLean from your Reston location?',
      answer: 'Located just 10 minutes away in Reston, we can typically reach McLean properties within 15-20 minutes for emergency service. Our proximity allows us to provide same-day installation and immediate support for McLean residents, with intimate knowledge of local neighborhoods and requirements.'
    },
    {
      question: 'Do you work with McLean HOAs and architectural review boards?',
      answer: 'Yes, we have extensive experience with McLean\'s strict HOA and architectural review requirements. We provide all necessary documentation, technical specifications, and work directly with review boards to ensure installations meet aesthetic guidelines while maintaining optimal satellite performance.'
    }
  ]
}

export default function McLeanStarlinkPage() {
  return <LocationPageTemplate location={locationData} />
}
