// app/lib/contact-data.ts

import { Shield, Award, Clock, CheckCircle, LucideIcon } from 'lucide-react';

interface TrustIndicator {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const trustIndicators: TrustIndicator[] = [
  { icon: Shield, value: '100%', label: 'Licensed & Insured' },
  { icon: Award, value: '90 Day', label: 'Service Warranty' },
  { icon: Clock, value: '24hr', label: 'Response Time' },
  { icon: CheckCircle, value: '100+', label: 'Installations' }
];