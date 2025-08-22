// Schema markup for Google Business Profile integration
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Orbit Tech",
  "description": "Professional Starlink satellite internet installation serving Northern Virginia, Maryland, and DC metro area",
  "url": "https://theorbittech.com",
  "telephone": "+1-XXX-XXX-XXXX", // Replace with your actual phone
  "email": "contact@theorbittech.com", // Replace with your actual email
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Loudoun County, VA"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Fairfax County, VA"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Arlington County, VA"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Fauquier County, VA"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Prince William County, VA"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Montgomery County, MD"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Prince George's County, MD"
    }
  ],
  "serviceType": [
    "Starlink Installation",
    "Satellite Internet Setup", 
    "Rural Internet Solutions",
    "Professional Antenna Installation",
    "Wi-Fi Network Optimization"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Starlink Installation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Professional Starlink Installation"
        },
        "price": "499",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    ]
  }
}
