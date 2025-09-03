// app/lib/footer-data.ts

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { href: '/#services', label: 'Residential Installation' },
      { href: '/services/construction-connect', label: 'For Builders' },
      { href: '/#services', label: 'Mesh WiFi Setup' },
      { href: '/#services', label: 'RV & Marine' },
    ],
  },
  {
    title: 'Locations',
    links: [
      { href: '/starlink-installation-near-me', label: 'Near Me' },
      { href: '/starlink-installation-reston-va', label: 'Reston, VA' },
      { href: '/starlink-installation-mclean-va', label: 'McLean, VA' },
      { href: '/starlink-installation-ashburn-va', label: 'Ashburn, VA' },
      { href: '/starlink-installation-bethesda-md', label: 'Bethesda, MD' },
      { href: '/locations/loudoun-county-va', label: 'Loudoun County' },
      { href: '/locations/fairfax-county-va', label: 'Fairfax County' },
      { href: '/locations/arlington-county-va', label: 'Arlington County' },
      { href: '/locations/montgomery-county-md', label: 'Montgomery County' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Blog & Guides' },
      { href: '/#faq', label: 'FAQs' },
      { href: '/#testimonials', label: 'Customer Reviews' },
      { 
        href: 'https://maps.app.goo.gl/i3Gk33rmV9pxHBuA9', 
        label: 'Google Business',
        external: true 
      },
    ],
  },
];
