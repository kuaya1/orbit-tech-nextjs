import LocationPageTemplate from '@/components/locations/LocationPageTemplate';
import { sampleLocations } from '@/data/locations';
import type { Metadata } from 'next';

const locationData = sampleLocations.find(loc => loc.slug === 'fairfax-county-va')!;

export const metadata: Metadata = {
  title: `Professional Starlink Installation in ${locationData.name}, ${locationData.state}`,
  description: locationData.introCopy,
  keywords: [
    'Starlink installation',
    locationData.name,
    locationData.county,
    locationData.state,
    'McLean',
    'Vienna',
    'Falls Church',
    'satellite internet',
    'professional installation'
  ],
  alternates: {
    canonical: `https://theorbittech.com/locations/${locationData.slug}`
  },
  openGraph: {
    title: `Starlink Installation - ${locationData.name}, ${locationData.state}`,
    description: locationData.introCopy,
    type: 'website'
  }
};

export default function FairfaxCountyPage() {
  return <LocationPageTemplate location={locationData} />;
}
