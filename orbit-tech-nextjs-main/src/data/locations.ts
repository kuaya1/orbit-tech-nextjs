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
    state: 'VA',
    introCopy: 'Frustrated with Comcast\'s spotty coverage west of Route 15? Tired of buffering during video calls in Purcellville? Verizon Fios still hasn\'t reached Waterford or Hamilton, leaving residents with expensive, unreliable internet options. Our expert Starlink installation team, based in nearby Reston, provides same-day professional installation throughout Loudoun County. Licensed technicians, competitive $499 installation pricing, and 90-day warranty. Transform your rural or suburban Loudoun County property with blazing-fast satellite internet that actually works where traditional providers fail.',
    localChallenges: 'Loudoun County\'s western regions face unique challenges with rolling hills blocking traditional ISP infrastructure and mature tree canopy requiring strategic satellite positioning. Our local team navigates HOA requirements in developments like Brambleton and One Loudoun while ensuring optimal performance in rural estates near Bluemont and Round Hill.',
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
      'Purcellville',
      'Hamilton',
      'Waterford',
      'Round Hill',
      'Lovettsville'
    ],
    faqs: [
      {
        question: 'How much does Starlink installation cost in Loudoun County?',
        answer: 'Professional Starlink installation in Loudoun County costs $499, which includes site survey, professional mounting, cable routing, and system optimization. The Starlink service itself is $120/month. We offer same-day installation and provide a 90-day warranty on all work performed.'
      },
      {
        question: 'Comcast vs Starlink - which is better for Loudoun County residents?',
        answer: 'Starlink excels in western Loudoun County where Comcast coverage is poor or unavailable. Areas like Purcellville, Hamilton, and Waterford often experience slower Comcast speeds (25-50 Mbps) while Starlink consistently delivers 100-200+ Mbps. For rural properties beyond traditional cable reach, Starlink is often the only high-speed option available.'
      },
      {
        question: 'How quickly can you install Starlink in western Loudoun County?',
        answer: 'We typically complete Loudoun County installations within 2-4 hours and offer same-day service when scheduled in advance. Our Reston-based team can reach Purcellville, Leesburg, or Hamilton within 30 minutes. We maintain local inventory and understand the specific challenges of Loudoun County\'s terrain and HOA requirements.'
      }
    ]
  },
  {
    id: '2',
    slug: 'fairfax-county-va',
    name: 'Fairfax County',
    county: 'Fairfax County',
    state: 'VA',
    introCopy: 'McLean residents: Tired of paying $200+ for unreliable Verizon Fios? Great Falls homes beyond cable coverage struggling with slow DSL? Vienna neighborhoods experiencing constant internet outages during peak hours? Our professional Starlink installation team provides same-day service throughout Fairfax County at competitive $499 pricing. Based locally in Reston, we understand Fairfax County\'s unique challenges from dense tree coverage in Great Falls to high-rise condo installations in Tysons. Licensed, insured, and trusted by hundreds of Northern Virginia families for dependable satellite internet.',
    localChallenges: 'Fairfax County\'s mature tree canopy in areas like Great Falls and McLean requires expert satellite positioning, while urban density in Tysons and Falls Church presents mounting challenges. Our experienced team navigates strict HOA regulations in communities like Reston Association and handles complex roof configurations in Vienna\'s diverse housing stock.',
    geoCoordinates: {
      lat: 38.8462,
      lon: -77.3064
    },
    cities: [
      'McLean',
      'Vienna',
      'Falls Church',
      'Oakton',
      'Great Falls',
      'Fairfax',
      'Annandale',
      'Springfield',
      'Burke',
      'Chantilly'
    ],
    faqs: [
      {
        question: 'How much does Starlink installation cost in Fairfax County?',
        answer: 'Professional Starlink installation in Fairfax County costs $499 for complete setup including site survey, professional mounting, and system optimization. Monthly Starlink service is $120. We often save customers $50-100+ monthly compared to premium Verizon Fios or Comcast packages while providing better rural coverage.'
      },
      {
        question: 'Can Starlink work effectively with Fairfax County\'s heavy tree coverage?',
        answer: 'Yes, our expert technicians conduct thorough site surveys in areas like Great Falls and McLean to identify optimal mounting positions with clear sky visibility. We often recommend strategic tree trimming or alternative mounting locations on properties with dense canopy to ensure year-round connectivity.'
      },
      {
        question: 'Verizon Fios vs Starlink - which is better for Fairfax County?',
        answer: 'For most of Fairfax County with Fios access, both provide excellent speeds. However, Starlink excels in Great Falls estates, rural Vienna areas, and locations where Fios is unavailable or unreliable. Starlink also offers better value at $120/month versus Fios gigabit plans often costing $80-120+ with equipment fees and contracts.'
      }
    ]
  },
  {
    id: '3',
    slug: 'montgomery-county-md',
    name: 'Montgomery County',
    county: 'Montgomery County',
    state: 'MD',
    introCopy: 'Expert Starlink satellite internet installation and optimization services in Montgomery County, Maryland. Our licensed technicians serve Bethesda, Rockville, Silver Spring, Gaithersburg, and surrounding communities with professional installation, whole-home Wi-Fi setup, and ongoing support. Experience lightning-fast satellite internet with same-day installation available. Trusted by hundreds of Maryland families and businesses for reliable, high-performance internet connectivity that works even in rural areas where traditional broadband fails.',
    localChallenges: 'Montgomery County\'s rolling hills and established neighborhoods require careful satellite positioning to overcome terrain obstacles and mature vegetation. Our team specializes in navigating Maryland\'s strict permitting requirements and ensuring installations meet local building codes while maximizing signal performance.',
    geoCoordinates: {
      lat: 39.1547,
      lon: -77.2405
    },
    cities: [
      'Bethesda',
      'Rockville',
      'Silver Spring',
      'Gaithersburg',
      'Germantown',
      'Potomac',
      'Wheaton',
      'Takoma Park',
      'Olney',
      'Damascus'
    ],
    faqs: [
      {
        question: 'Do I need permits for Starlink installation in Montgomery County, MD?',
        answer: 'Most residential Starlink installations in Montgomery County don\'t require permits, but we handle all compliance requirements and can assist with any necessary documentation. Our team is familiar with local building codes and HOA requirements throughout the county.'
      },
      {
        question: 'How does Starlink perform during Maryland winters and severe weather?',
        answer: 'Starlink is designed to handle Maryland\'s weather conditions, including snow and storms. Our professional installation includes weatherproofing and we position dishes to minimize snow accumulation. The system typically maintains connectivity even during severe weather when traditional internet fails.'
      },
      {
        question: 'What areas of Montgomery County do you serve for Starlink installation?',
        answer: 'We provide Starlink installation services throughout Montgomery County, from urban areas like Bethesda and Silver Spring to rural communities like Damascus and Poolesville. Our local technicians understand the unique challenges of each area and provide tailored solutions.'
      }
    ]
  },
  {
    id: '4',
    slug: 'arlington-county-va',
    name: 'Arlington County',
    county: 'Arlington County',
    state: 'VA',
    introCopy: 'Professional Starlink satellite internet installation services in Arlington County, Virginia. Our certified technicians provide expert installation for Arlington, Crystal City, Pentagon City, and surrounding neighborhoods. Specializing in urban satellite installations, whole-home Wi-Fi optimization, and comprehensive support services. Licensed, insured, and trusted by hundreds of Northern Virginia residents for reliable, high-speed internet connectivity. Same-day installation available with our 90-day service warranty and lifetime technical support.',
    localChallenges: 'Arlington County\'s high-rise buildings and dense urban environment create unique signal challenges requiring specialized mounting solutions. Our technicians excel at navigating strict condo board regulations, limited roof access, and optimizing installations in tight urban spaces while ensuring clear satellite visibility.',
    geoCoordinates: {
      lat: 38.8816,
      lon: -77.0910
    },
    cities: [
      'Arlington',
      'Crystal City',
      'Pentagon City',
      'Ballston',
      'Clarendon',
      'Rosslyn',
      'Court House',
      'Virginia Square',
      'East Falls Church',
      'Shirlington'
    ],
    faqs: [
      {
        question: 'Can Starlink be installed on high-rise buildings in Arlington County?',
        answer: 'Yes, we specialize in urban installations including high-rise buildings and condominiums. We work with building management and condo boards to ensure compliant installation while achieving optimal satellite positioning for reliable connectivity.'
      },
      {
        question: 'How do you handle Arlington County condo board approvals for Starlink?',
        answer: 'We have extensive experience with Arlington County condo boards and HOAs. We provide all necessary documentation, technical specifications, and work directly with building management to secure approvals while meeting architectural guidelines and safety requirements.'
      },
      {
        question: 'Is Starlink reliable in Arlington\'s dense urban environment?',
        answer: 'Absolutely. Our expert installation techniques ensure clear sky visibility even in dense urban areas. We conduct thorough site surveys to identify optimal positioning that avoids building interference while maintaining strong satellite connectivity for consistent high-speed internet.'
      }
    ]
  },
  {
    id: '5',
    slug: 'prince-georges-county-md',
    name: 'Prince George\'s County',
    county: 'Prince George\'s County',
    state: 'MD',
    introCopy: 'Expert Starlink satellite internet installation services throughout Prince George\'s County, Maryland. Our licensed technicians serve Bowie, College Park, Hyattsville, Laurel, and surrounding communities with professional installation, network optimization, and ongoing support. Specializing in both suburban and rural installations where traditional broadband is limited or unreliable. Same-day service available with comprehensive warranty coverage. Trusted by Maryland families and businesses for dependable, high-performance satellite internet that delivers consistent speeds regardless of location.',
    localChallenges: 'Prince George\'s County\'s mix of suburban developments and rural areas presents diverse installation challenges from HOA compliance to agricultural property setups. Our team navigates varying terrain, addresses proximity to BWI airport flight patterns, and ensures optimal performance across the county\'s diverse geography and building types.',
    geoCoordinates: {
      lat: 38.7849,
      lon: -76.8721
    },
    cities: [
      'Bowie',
      'College Park',
      'Hyattsville',
      'Laurel',
      'Greenbelt',
      'Upper Marlboro',
      'Clinton',
      'Fort Washington',
      'Lanham',
      'Riverdale Park'
    ],
    faqs: [
      {
        question: 'Does proximity to BWI airport affect Starlink installation in Prince George\'s County?',
        answer: 'BWI airport operations don\'t typically interfere with Starlink service. Our technicians are familiar with FAA guidelines and ensure installations comply with any aviation requirements while maintaining optimal satellite connectivity for your location.'
      },
      {
        question: 'Can you install Starlink in rural areas of Prince George\'s County where other internet options are limited?',
        answer: 'Absolutely! Starlink is ideal for rural Prince George\'s County areas with limited broadband options. Our team specializes in rural installations, including agricultural properties, and can provide reliable high-speed internet where traditional services aren\'t available.'
      },
      {
        question: 'How quickly can you complete Starlink installation in Prince George\'s County?',
        answer: 'Most installations in Prince George\'s County are completed within 2-4 hours, with same-day service available when scheduled in advance. We maintain local inventory and our Maryland-based technicians ensure prompt, professional service throughout the county.'
      }
    ]
  },
  {
    id: '6',
    slug: 'fauquier-county-va',
    name: 'Fauquier County',
    county: 'Fauquier County',
    state: 'VA',
    introCopy: 'Frustrated with HughesNet\'s data caps and slow speeds in Marshall? Tired of Verizon DSL crawling at 10 Mbps in The Plains? Rural Fauquier County properties near Sky Meadows still waiting for reliable broadband? Our expert Starlink installation team provides same-day professional installation throughout Fauquier County at competitive $499 pricing. Based in nearby Northern Virginia, we understand the unique challenges of horse country properties, sprawling estates, and rural businesses. Licensed technicians, 90-day warranty, and proven experience with Fauquier\'s rolling terrain and agricultural properties.',
    localChallenges: 'Fauquier County\'s rural landscape presents unique challenges with horse farms requiring livestock-safe installations, historic properties in The Plains with preservation considerations, and steep terrain near the Blue Ridge foothills. Our team specializes in agricultural property installations, navigating conservation easements, and ensuring clear sight lines over Fauquier\'s signature rolling hills and mature oak trees.',
    geoCoordinates: {
      lat: 38.7126,
      lon: -77.8311
    },
    cities: [
      'Warrenton',
      'The Plains',
      'Marshall',
      'Catlett',
      'Bealeton',
      'Remington',
      'Casanova',
      'Delaplane',
      'Upperville',
      'Midland'
    ],
    faqs: [
      {
        question: 'How much does Starlink installation cost in Fauquier County?',
        answer: 'Professional Starlink installation in Fauquier County costs $499, including site survey, professional mounting on barns or homes, cable routing, and system optimization. Monthly Starlink service is $120. This typically saves $50-80 monthly compared to business-class satellite internet while providing 10x faster speeds than rural DSL options.'
      },
      {
        question: 'Can Starlink be installed on horse farms and agricultural properties in Fauquier County?',
        answer: 'Absolutely! We specialize in Fauquier County agricultural installations. Our team ensures livestock-safe mounting on barns, houses, or dedicated poles. We understand working around horses, farm equipment, and seasonal operations while providing the reliable internet essential for modern farm management and rural business operations.'
      },
      {
        question: 'How does Starlink perform in rural Fauquier County compared to HughesNet or Viasat?',
        answer: 'Starlink dramatically outperforms traditional satellite internet in Fauquier County. While HughesNet typically provides 25 Mbps with data caps, Starlink delivers 100-200+ Mbps with unlimited data. No more buffering during video calls from The Plains or slow uploads from Marshall. Perfect for rural businesses, remote work, and streaming.'
      }
    ]
  },
  {
    id: '7',
    slug: 'prince-william-county-va',
    name: 'Prince William County',
    county: 'Prince William County',
    state: 'VA',
    introCopy: 'Tired of Comcast outages during storms in Manassas? Frustrated with Verizon Fios unavailability in rural Nokesville? Prince William County\'s western areas near Bull Run still struggling with slow DSL speeds? Our professional Starlink installation team provides same-day service throughout Prince William County at $499 installation pricing. Based in nearby Northern Virginia, we serve from Woodbridge townhomes to Haymarket estates with expert satellite positioning. Licensed, insured, and experienced with PWC\'s diverse housing from dense subdivisions to rural properties near the battlefield parks.',
    localChallenges: 'Prince William County\'s mix of dense suburban developments and rural western areas creates diverse installation challenges. Our team navigates strict HOA requirements in communities like Lake Ridge and Potomac Shores, while handling rural installations near Bull Run Battlefield and Prince William Forest Park where terrain and tree coverage require expert satellite positioning.',
    geoCoordinates: {
      lat: 38.7135,
      lon: -77.4605
    },
    cities: [
      'Woodbridge',
      'Manassas',
      'Dale City',
      'Lake Ridge',
      'Dumfries',
      'Occoquan',
      'Haymarket',
      'Nokesville',
      'Gainesville',
      'Bristow'
    ],
    faqs: [
      {
        question: 'How much does Starlink installation cost in Prince William County?',
        answer: 'Professional Starlink installation in Prince William County costs $499 for complete setup including site survey, professional mounting, cable routing, and optimization. Monthly Starlink service is $120. We often save customers money compared to premium Comcast packages while providing better reliability in areas prone to outages.'
      },
      {
        question: 'Can you install Starlink in Prince William County townhomes and condos?',
        answer: 'Yes! We have extensive experience with PWC townhome and condo installations, including communities like Lake Ridge, Potomac Shores, and Dale City. We work with HOAs to ensure compliant installation while achieving optimal satellite positioning for reliable connectivity in various architectural configurations.'
      },
      {
        question: 'How does Starlink perform in western Prince William County\'s rural areas?',
        answer: 'Starlink excels in rural western PWC areas like Nokesville, Haymarket, and near Bull Run where traditional cable is unavailable or unreliable. Our installations consistently deliver 100-200+ Mbps speeds compared to slow DSL options, making it perfect for remote work, streaming, and modern connectivity needs in rural settings.'
      }
    ]
  }
];
