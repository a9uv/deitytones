// app/components/Footer.tsx

import Link from 'next/link';
import { navLinks } from '@/config/navigation'; // <-- IMPORT SHARED LINKS

const socialLinks = [
  { 
    name: 'X', 
    href: '#', 
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> 
  },
  { 
    name: 'Instagram', 
    href: '#', 
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.575 2h-.26zM12 4.869c-2.403 0-4.329 1.926-4.329 4.329s1.926 4.329 4.329 4.329 4.329-1.926 4.329-4.329S14.403 4.869 12 4.869zM12 11.822a2.822 2.822 0 110-5.644 2.822 2.822 0 010 5.644zM16.969 6.575a1.24 1.24 0 11-2.48 0 1.24 1.24 0 012.48 0z" clipRule="evenodd" /></svg>
  },
  { 
    name: 'Facebook', 
    href: '#', 
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
  },
];

export default function Footer() {
  return (
    <footer className="relative z-30 bg-[#2C2A3A] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
        {/* Copyright */}
        <div className="text-sm">
          <p className="font-serif font-bold text-lg text-white">LNKPR-AH</p>
          <p className="mt-1 text-gray-400">&copy; 2025 LNKPR-AH. All Rights Reserved.</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8 text-sm">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex items-center space-x-5">
          {socialLinks.map((social) => (
            <a key={social.name} href={social.href} className="text-gray-400 hover:text-white transition-colors" aria-label={social.name}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}