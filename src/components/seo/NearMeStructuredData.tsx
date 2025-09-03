import Script from 'next/script'

export default function NearMeStructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://theorbittech.com/#localbusiness",
    "name": "The Orbit Tech - Starlink Installation Near Me",
    "alternateName": ["Orbit Tech Starlink", "Starlink Installation DMV", "Local Starlink Installer"],
    "description": "Professional Starlink installation services near you in the DMV region. Same-day service available with certified technicians.",
    "url": "https://theorbittech.com/starlink-installation-near-me",
    "telephone": "(571) 999-6915",
    "email": "info@theorbittech.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1760 Reston Pkwy",
      "addressLocality": "Reston", 
      "addressRegion": "VA",
      "postalCode": "20190",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.9586,
      "longitude": -77.3570
    },
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates", 
          "latitude": 38.9586,
          "longitude": -77.3570
        },
        "geoRadius": "80467"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Fairfax County, Virginia"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Loudoun County, Virginia"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Arlington County, Virginia"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Montgomery County, Maryland"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Prince William County, Virginia"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Prince George's County, Maryland"
      }
    ],
    "serviceType": ["Starlink Installation Near Me", "Local Satellite Internet Setup", "Same-Day Starlink Service"],
    "priceRange": "$$$",
    "openingHours": ["Mo-Su 08:00-18:00"],
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing"],
    "currenciesAccepted": "USD",
    "foundingDate": "2024",
    "sameAs": [
      "https://maps.app.goo.gl/i3Gk33rmV9pxHBuA9"
    ],
    "availableAtOrFrom": {
      "@type": "Place",
      "name": "The Orbit Tech Service Center",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1760 Reston Pkwy",
        "addressLocality": "Reston",
        "addressRegion": "VA", 
        "postalCode": "20190",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.9586,
        "longitude": -77.3570
      }
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://theorbittech.com/starlink-installation-near-me#service",
    "name": "Starlink Installation Near Me",
    "description": "Professional Starlink satellite internet installation service near you with same-day availability and certified technicians serving the DMV region",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://theorbittech.com/#localbusiness"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.9586,
        "longitude": -77.3570
      },
      "geoRadius": "80467"
    },
    "availableAtOrFrom": {
      "@type": "Place",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.9586,
        "longitude": -77.3570
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1760 Reston Pkwy",
        "addressLocality": "Reston",
        "addressRegion": "VA",
        "postalCode": "20190",
        "addressCountry": "US"
      }
    },
    "serviceType": "Telecommunications Installation",
    "category": ["Internet Service Provider", "Satellite Communication Service", "Telecommunications Contractor"],
    "hoursAvailable": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Same-Day Starlink Installation Near Me",
        "description": "Professional Starlink installation with same-day service availability",
        "price": "499.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01",
        "areaServed": {
          "@type": "GeoCircle", 
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 38.9586,
            "longitude": -77.3570
          },
          "geoRadius": "24140"
        }
      },
      {
        "@type": "Offer",
        "name": "Next-Day Starlink Installation Near Me", 
        "description": "Professional Starlink installation with next-day service guarantee",
        "price": "549.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01",
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates", 
            "latitude": 38.9586,
            "longitude": -77.3570
          },
          "geoRadius": "56327"
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://theorbittech.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Starlink Installation Near Me",
        "item": "https://theorbittech.com/starlink-installation-near-me"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I find Starlink installation service near me?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "The Orbit Tech provides professional Starlink installation services throughout the DMV region. Located at 1760 Reston Pkwy in Reston, VA, we serve customers within a 50-mile radius including all of Northern Virginia, Maryland suburbs, and Washington DC areas. Call (571) 999-6915 for same-day service availability in your area."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve for Starlink installation near me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide Starlink installation services near you in Fairfax County, Loudoun County, Arlington County, Montgomery County MD, Prince William County, and Prince George's County MD. Our service area covers all major cities within 50 miles of Reston, VA including McLean, Ashburn, Bethesda, Arlington, Manassas, and surrounding communities."
        }
      },
      {
        "@type": "Question", 
        "name": "How quickly can you install Starlink near my location?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Installation speed depends on your distance from our Reston location. Within 15 miles: same-day service available. 15-35 miles: next-day installation. 35-50 miles: 2-3 day installation. Emergency same-day service is available for urgent requests within our entire service area."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free estimates for Starlink installation near me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide free site surveys and installation estimates for all customers within our 50-mile service radius. For locations within 15 miles of Reston, we offer complimentary on-site consultations. For distant locations, we provide detailed remote consultations and accurate estimates based on your specific property requirements."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="near-me-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <Script
        id="near-me-service-schema"
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <Script
        id="near-me-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <Script
        id="near-me-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </>
  )
}
