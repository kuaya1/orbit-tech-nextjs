// Server-side component for structured data - Updated for deployment
import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://theorbittech.com/#organization",
    "name": "The Orbit Tech",
    "alternateName": "Orbit Tech Starlink",
    "description": "Professional Starlink installation services in McLean, VA and surrounding DMV areas",
    "url": "https://theorbittech.com",
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
    "serviceType": ["Starlink Installation", "Satellite Internet Setup", "Wi-Fi Optimization"],
    "priceRange": "$$",
    "openingHours": ["Mo-Su 08:00-18:00"],
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
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
    "@id": "https://theorbittech.com/#service",
    "name": "Professional Starlink Installation",
    "description": "Expert Starlink satellite internet installation with same-day service availability in Northern Virginia",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://theorbittech.com/#organization"
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
    },
    "serviceType": "Technology Installation",
    "category": "Internet Service Provider",
    "offers": {
      "@type": "Offer",
      "price": "499.00",
      "priceCurrency": "USD",
      "description": "Professional Starlink installation starting at $499",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Starlink Installation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Starlink Installation"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Starlink Installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Wi-Fi Mesh Network Setup"
          }
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://theorbittech.com/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does professional Starlink installation cost in Northern Virginia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional Starlink installation in Northern Virginia starts at $499. This includes comprehensive site survey, professional dish mounting, hidden cable routing, and speed optimization testing. We offer same-day service and a 90-day performance guarantee with lifetime technical support."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you handle trees or roof obstructions during Starlink installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our certified technicians conduct comprehensive site surveys using specialized obstruction detection tools. For properties with tree coverage or roof challenges, we offer elevated pole mounts (10-20 feet), remote mounting solutions (up to 150 feet from home), and custom roof peak installations to ensure optimal satellite visibility."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve for Starlink installation in the DMV region?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide professional Starlink installation throughout the entire DMV region including Northern Virginia (Fairfax, Loudoun, Prince William, Arlington counties), Maryland suburbs (Montgomery, Prince George's counties), and Washington DC metro area. Based in Reston, VA, we serve within 50 miles of our location."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical Starlink installation take?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Most residential Starlink installations take 2-4 hours depending on property complexity. This includes site survey, dish mounting, cable routing through walls/attic, router setup, and final speed testing. We offer same-day installation for most locations in Northern Virginia."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide warranty on Starlink installations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide a comprehensive 90-day installation warranty covering all mounting hardware, cable connections, and performance optimization. We also offer lifetime technical support for troubleshooting and system optimization questions."
        }
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://theorbittech.com/#website",
    "name": "The Orbit Tech - Professional Starlink Installation",
    "alternateName": "Orbit Tech Starlink Installation Services",
    "url": "https://theorbittech.com",
    "description": "Professional Starlink satellite internet installation services in Northern Virginia, Maryland, and Washington DC",
    "publisher": {
      "@type": "Organization",
      "@id": "https://theorbittech.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://theorbittech.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://theorbittech.com/#organization"
    }
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  )
}
