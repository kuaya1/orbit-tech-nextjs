// app/lib/jobs-data.ts
import { InstallationJob } from '@/types/jobs';

export const installationJobs: InstallationJob[] = [
  {
    id: 'keppa-fitness-hamilton',
    location: 'Keppa Fitness, Hamilton VA',
    region: 'Loudoun County',
    challenge: 'Heavy tree coverage and a steep roofline made standard installation impossible. The property\'s size meant Wi-Fi dead zones in critical areas.',
    solution: 'Implemented a ridgeline roof mount with precision aiming, combined with a professional mesh network setup delivering 200+ Mbps to every room.',
    speedAchieved: '245 Mbps',
    installationType: 'business',
    imageUrl: '/images/installations/keppa-fitness.jpg', // Assuming you place images in public/images/installations
    completionTime: '3 Hours'
  },
  {
    id: 'charlestown-residential-home',
    location: 'Charlestown Residential Home',
    region: 'Jefferson County, WV',
    challenge: 'Rural location with no fiber access. The family needed reliable internet for remote work and homeschooling across a 5-acre property.',
    solution: 'Strategic dish placement for optimal satellite visibility, with extended cable runs and whole-property Wi-Fi coverage using outdoor access points.',
    speedAchieved: '195 Mbps',
    installationType: 'residential',
    imageUrl: '/images/installations/charlestown-home.jpg',
    completionTime: '2.5 Hours'
  },
  {
    id: 'annapolis-vacation-home',
    location: 'Annapolis Vacation Home',
    region: 'Anne Arundel County, MD',
    challenge: 'A waterfront property with strict aesthetic requirements needed a discreet but powerful installation for guests and smart home devices.',
    solution: 'Utilized a low-profile facade mount with custom-painted, weatherproof cabling that blended seamlessly into the home\'s exterior.',
    speedAchieved: '285 Mbps',
    installationType: 'residential',
    imageUrl: '/images/installations/annapolis-home.jpg',
    completionTime: '4 Hours'
  }
];
