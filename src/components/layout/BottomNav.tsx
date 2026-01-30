'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Heart, PlayCircle, User } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/courses', label: 'Courses', icon: BookOpen },
  { href: '/favorites', label: 'Favorites', icon: Heart },
  { href: '/my-courses', label: 'My Courses', icon: PlayCircle },
  { href: '/profile', label: 'Profile', icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 safe-bottom z-50">
      <div className="max-w-lg mx-auto px-2">
        <ul className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex flex-col items-center justify-center px-3 py-2 transition-colors ${
                    active ? 'text-primary' : 'text-gray-400'
                  }`}
                >
                  <Icon size={24} strokeWidth={active ? 2.5 : 2} />
                  <span className="text-xs mt-1 font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

