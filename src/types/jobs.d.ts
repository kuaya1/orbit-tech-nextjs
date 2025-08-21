// types/jobs.d.ts

export interface InstallationJob {
  id: string;
  location: string;
  region: string;
  challenge: string;
  solution: string;
  speedAchieved: string;
  installationType: 'residential' | 'business';
  imageUrl: string;
  completionTime: string;
}
