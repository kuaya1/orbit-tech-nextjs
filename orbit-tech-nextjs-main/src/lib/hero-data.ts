// app/lib/hero-data.ts
import { CheckCircle, Shield, Clock, LucideIcon } from 'lucide-react';

export interface TrustIndicator {
  icon: LucideIcon;
  text: string;
}

export const trustIndicators: TrustIndicator[] = [
  { icon: CheckCircle, text: 'Licensed & Insured' },
  { icon: Shield, text: '90-Day Warranty' },
  { icon: Clock, text: 'Same-Day Service Available' },
];
