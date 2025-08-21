export interface FAQ {
  question: string;
  answer: string;
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  county: string;
  state: string;
  introCopy: string;
  localChallenges: string;
  geoCoordinates: { 
    lat: number; 
    lon: number; 
  };
  cities: string[];
  faqs: FAQ[];
}

// Sample location data for reference
export const sampleLocations: Location[] = [
  {
    id: '1',
    slug: 'loudoun-county-va',
    name: 'Loudoun County',
    county: 'Loudoun County',
    state: 'Virginia',
    introCopy: 'Expert Starlink satellite internet installation and optimization services in Loudoun County, Virginia. Licensed technicians, same-day service, competitive pricing for Reston, Herndon, Ashburn and surrounding communities.',
    localChallenges: 'Loudoun County\'s diverse geography, from dense suburban developments to rural estates, requires specialized installation expertise. Our local technicians understand the unique challenges of Northern Virginia\'s terrain, HOA requirements, and seasonal weather patterns that can affect satellite positioning and performance.',
    geoCoordinates: {
      lat: 39.0839,
      lon: -77.6413
    },
    cities: [
      'Reston',
      'Herndon', 
      'Ashburn',
      'Leesburg',
      'Sterling',
      'Purcellville'
    ],
    faqs: [
      {
        question: 'How long does Starlink installation take in Loudoun County?',
        answer: 'Most residential installations in Loudoun County take 2-4 hours, depending on the complexity of your setup and roof accessibility. We offer same-day installation for most locations when scheduled in advance.'
      },
      {
        question: 'Do I need HOA approval for Starlink installation in Loudoun County?',
        answer: 'Many Loudoun County communities have HOA guidelines for satellite installations. We can help navigate HOA requirements and provide documentation needed for approval. Our low-profile mounting options often meet community standards.'
      },
      {
        question: 'What internet speeds can I expect with Starlink in Loudoun County?',
        answer: 'Starlink typically delivers 100-200+ Mbps download speeds in Loudoun County, with some locations achieving higher speeds. Performance can vary based on network congestion and weather conditions.'
      }
    ]
  }
];
