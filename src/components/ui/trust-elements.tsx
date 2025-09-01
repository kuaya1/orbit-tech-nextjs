// app/components/ui/trust-elements.tsx
"use client";

import React from 'react';
import { Star, LucideIcon } from 'lucide-react';

// Star Rating Component
export const StarRating: React.FC = () => (
  <div className="flex items-center" role="img" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
    ))}
  </div>
);

// Trust Indicator Component
interface TrustIndicatorProps {
  icon: LucideIcon;
  text: string;
}

export const TrustIndicator: React.FC<TrustIndicatorProps> = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 text-neutral-400 justify-center sm:justify-start">
    <Icon className="w-4 h-4 text-green-500 flex-shrink-0" />
    <span className="text-sm font-medium whitespace-nowrap">{text}</span>
  </div>
);
