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
    "openingHours": "Mo-Su 08:00-18:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
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
    "serviceType": "Technology Installation",
    "offers": {
      "@type": "Offer",
      "price": "499",
      "priceCurrency": "USD",
      "description": "Professional Starlink installation starting at $499"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does professional Starlink installation cost in Northern Virginia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional Starlink installation in Northern Virginia starts at $499. This includes site survey, dish mounting, cable routing, and speed optimization. We offer same-day service and a 90-day performance guarantee."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you handle trees or roof obstructions during Starlink installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our certified technicians conduct comprehensive site surveys using specialized obstruction detection tools. For properties with tree coverage or roof challenges, we offer elevated pole mounts (10-20 feet), remote mounting (up to 150 feet), and custom roof peak installations."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve for Starlink installation?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide professional Starlink installation throughout the DMV region including Northern Virginia (Fairfax, Loudoun, Prince William counties), Maryland suburbs (Montgomery, Prince George's counties), and Washington DC metro area."
        }
      }
    ]
  }

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".speakable-content"]
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
        id="speakable-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(speakableSchema)
        }}
      />
    </>
  )
}
