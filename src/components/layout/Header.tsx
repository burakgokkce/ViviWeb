'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

interface HeaderProps {
  title?: string;
  showCart?: boolean;
  showBack?: boolean;
}

export default function Header({ title, showCart = true, showBack = false }: HeaderProps) {
  const { items } = useCartStore();
  const cartCount = items.length;

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {showBack ? (
          <button onClick={() => window.history.back()} className="text-gray-900 hover:text-gray-700 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        ) : (
          <div className="w-6" />
        )}

        {title && (
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        )}

        {showCart ? (
          <Link href="/cart" className="relative hover:opacity-80 transition-opacity">
            <ShoppingCart size={24} className="text-gray-900" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>
        ) : (
          <div className="w-6" />
        )}
      </div>
    </header>
  );
}

