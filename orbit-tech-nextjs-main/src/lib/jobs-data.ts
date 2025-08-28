// app/lib/jobs-data.ts
import { InstallationJob } from '@/types/jobs';

export const installationJobs: InstallationJob[] = [
  {
    id: 'professional-roof-installation',
    location: 'Professional Roof Installation',
    region: 'Northern Virginia',
    challenge: 'Complex roof geometry and mature tree coverage required expert positioning for optimal satellite visibility and signal strength.',
    solution: 'Implemented a precision roof mount with professional cable management, ensuring clean installation while maximizing performance in challenging conditions.',
    speedAchieved: '220 Mbps',
    installationType: 'residential',
    imageUrl: '/installation-1.jpg',
    completionTime: '3 Hours'
  },
  {
    id: 'rural-property-setup',
    location: 'Rural Property Installation',
    region: 'Virginia Countryside',
    challenge: 'Remote location with no traditional broadband options. Property needed reliable internet for remote work and smart home automation.',
    solution: 'Strategic dish placement with extended cable runs and weatherproof connections, delivering high-speed internet to previously unserved rural area.',
    speedAchieved: '195 Mbps',
    installationType: 'residential',
    imageUrl: '/installation-2.jpg',
    completionTime: '2.5 Hours'
  },
  {
    id: 'residential-home-upgrade',
    location: 'Residential Home Upgrade',
    region: 'DMV Area',
    challenge: 'Family needed to replace unreliable cable internet with consistent high-speed connectivity for work-from-home and streaming needs.',
    solution: 'Clean residential installation with optimized positioning and professional cable management, transforming home connectivity experience.',
    speedAchieved: '250 Mbps',
    installationType: 'residential',
    imageUrl: '/installation-3.jpg',
    completionTime: '2 Hours'
  }
];
