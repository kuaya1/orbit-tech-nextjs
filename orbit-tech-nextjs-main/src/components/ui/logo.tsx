// app/components/ui/logo.tsx

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'light' }) => {
  const logoSrc = variant === 'dark' 
    ? '/Starlink Dmv (33).png' // Assuming a dark version of the logo
    : '/Starlink Dmv (33).png'; // The default/light version

  return (
    <Link href="/" className="group transition-transform duration-300 hover:scale-105" aria-label="Return to The Orbit Tech homepage">
      <Image
        src={logoSrc}
        alt="The Orbit Tech Logo"
        width={140}
        height={40}
        priority={true} // Load the logo immediately, as it's above the fold
        className="h-10 w-auto"
      />
    </Link>
  );
};

export default Logo;
