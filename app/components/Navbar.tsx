'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  { name: 'Dashboard', href: '/' },
  { name: 'Cameras', href: '/cameras' },
  { name: 'Scenes', href: '/scenes' },
  { name: 'Incidents', href: '/incidents' },
  { name: 'Users', href: '/users' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-blue-900 text-white shadow-lg z-50 flex flex-col items-center">
      <div className="p-4 text-xl font-bold border-b border-blue-700 w-full text-center">
        SecureSight
      </div>
      <nav className="flex flex-row justify-center items-center gap-90 p-4 w-full">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-white hover:text-blue-300 ${
              pathname === link.href ? 'font-bold' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
