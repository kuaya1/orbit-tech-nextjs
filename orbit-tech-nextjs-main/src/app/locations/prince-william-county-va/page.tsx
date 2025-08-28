import LocationPageTemplate from '@/components/locations/LocationPageTemplate';
import { sampleLocations } from '@/data/locations';
import type { Metadata } from 'next';

// This would typically come from your CMS or database
const locationData = sampleLocations[6]; // Prince William County

export const metadata: Metadata = {
  title: `Prince William County Starlink Installation - Same-Day Service from $499`,
  description: locationData.introCopy,
  keywords: [
    'Starlink installation',
    'Prince William County',
    'Virginia',
    'satellite internet',
    'professional installation',
    'Manassas',
    'Woodbridge',
    'Haymarket',
    'rural internet'
  ],
  alternates: {
    canonical: `https://theorbittech.com/locations/${locationData.slug}`
  },
  openGraph: {
    title: `Prince William County Starlink Installation - Same-Day Service from $499`,
    description: locationData.introCopy,
    type: 'website'
  }
};

export default function PrinceWilliamCountyPage() {
  return <LocationPageTemplate location={locationData} />;
}
