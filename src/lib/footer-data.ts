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
        href: 'https://www.google.com/maps/place/The+Orbit+Tech/@38.922118,-77.231073,15z/data=!4m6!3m5!1s0x89b64ad802a8a697:0xb03038d132625853!8m2!3d38.922118!4d-77.231073!16s%2Fg%2F11v551j4wb?hl=en-US&entry=ttu', 
        label: 'Google Business',
        external: true 
      },
    ],
  },
];
