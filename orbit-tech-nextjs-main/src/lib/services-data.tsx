// app/lib/services-data.ts
import { SatelliteIcon, WifiIcon, BusinessIcon } from '@/components/ui/service-icons';

export const primaryServiceData = {
  title: "Professional Starlink Installation",
  subtitle: "Expert Installation • Guaranteed Performance",
  description: "Transform your property with lightning-fast satellite internet. Our certified technicians in the Reston area ensure flawless installation and optimal performance, backed by our 90-day warranty.",
  icon: <SatelliteIcon isPrimary={true} />,
  features: [
    "Free site survey & analysis",
    "Storm-proof mounting system",
    "Speed optimization guarantee",
    "Same-day installation available",
    "Hidden cable routing",
    "Lifetime technical support"
  ]
};

export const secondaryServicesData = [
  {
    title: "Whole-Home Wi-Fi Optimization",
    description: "Eliminate dead zones and maximize your Starlink speeds in every corner of your property.",
    icon: <WifiIcon />,
    features: [
      "Professional mesh network setup",
      "Complete coverage guarantee",
      "Smart device integration",
      "Network security configuration"
    ]
  },
  {
    title: "Business & Enterprise Solutions",
    description: "Enterprise-grade connectivity for businesses in Northern Virginia that demand reliability and performance.",
    icon: <BusinessIcon />,
    features: [
      "Priority installation scheduling",
      "Business-grade equipment",
      "1-hour emergency response",
      "Dedicated account management"
    ]
  }
];