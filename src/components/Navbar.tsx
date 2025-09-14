// app/components/Navbar.tsx

"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Services" },
    { href: "#", label: "Portfolio" },
    { href: "#", label: "About" },
    { href: "#", label: "Contact" },
  ];

  return (
    <>
      <header className="relative z-50 w-full p-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-4xl font-serif font-bold text-white-800">
          LNKPR-AH
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-med text-gray-300">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center md:hidden">
          {/* Close Button */}
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6" aria-label="Close menu">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-4xl font-semibold hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}