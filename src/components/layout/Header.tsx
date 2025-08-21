import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">The Orbit Tech</span>
              <div className="text-2xl font-bold text-white">
                The Orbit Tech
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
              Coverage Areas
            </a>
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="tel:(571) 999-6915"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Call (571) 999-6915
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
