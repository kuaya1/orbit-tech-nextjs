// Server-side component for structured data
import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Orbit Tech",
    "description": "Professional Starlink installation services in McLean, VA and surrounding DMV areas",
    "url": "https://theorbittech.com",
    "telephone": "(571) 999-6915",
    "email": "info@theorbittech.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "McLean",
      "addressRegion": "VA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.9338",
      "longitude": "-77.1772"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Virginia"
      },
      {
        "@type": "State", 
        "name": "Maryland"
      },
      {
        "@type": "City",
        "name": "Washington DC"
      }
    ],
    "serviceType": ["Starlink Installation", "Satellite Internet Setup", "Wi-Fi Optimization"],
    "priceRange": "$$",
    "openingHours": "Mo-Su 08:00-18:00"
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Starlink Installation Service",
    "description": "Professional Starlink satellite internet installation with same-day service availability",
    "provider": {
      "@type": "LocalBusiness",
      "name": "The Orbit Tech"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "38.9338",
        "longitude": "-77.1772"
      },
      "geoRadius": "50000"
    },
    "serviceType": "Technology Installation"
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="service-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
    </>
  )
}
