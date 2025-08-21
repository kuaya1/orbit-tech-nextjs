import LocationPageTemplate from '@/components/locations/LocationPageTemplate';
import { sampleLocations } from '@/data/locations';
import type { Metadata } from 'next';

// This would typically come from your CMS or database
const locationData = sampleLocations[0]; // Loudoun County example

export const metadata: Metadata = {
  title: `Professional Starlink Installation in ${locationData.name}, ${locationData.state}`,
  description: locationData.introCopy,
  keywords: [
    'Starlink installation',
    locationData.name,
    locationData.county,
    locationData.state,
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

export default function LoudounCountyPage() {
  return <LocationPageTemplate location={locationData} />;
}
