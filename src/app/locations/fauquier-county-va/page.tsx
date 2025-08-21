import LocationPageTemplate from '@/components/locations/LocationPageTemplate';
import { sampleLocations } from '@/data/locations';
import type { Metadata } from 'next';

// This would typically come from your CMS or database
const locationData = sampleLocations[5]; // Fauquier County

export const metadata: Metadata = {
  title: `Fauquier County Starlink Installation - Same-Day Service from $499`,
  description: locationData.introCopy,
  keywords: [
    'Starlink installation',
    'Fauquier County',
    'Virginia',
    'satellite internet',
    'professional installation',
    'rural internet',
    'horse farms',
    'agricultural property'
  ],
  alternates: {
    canonical: `https://theorbittech.com/locations/${locationData.slug}`
  },
  openGraph: {
    title: `Fauquier County Starlink Installation - Same-Day Service from $499`,
    description: locationData.introCopy,
    type: 'website'
  }
};

export default function FauquierCountyPage() {
  return <LocationPageTemplate location={locationData} />;
}
