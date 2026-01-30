'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  ShoppingCart,
  Menu,
  X,
  User,
  BookOpen,
  LogOut,
  ChevronDown
} from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useUserStore } from '@/store/userStore';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/favorites', label: 'Favorites' },
  { href: '/my-courses', label: 'My Courses' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { items } = useCartStore();
  const { user, isAuthenticated, logout } = useUserStore();
  const cartCount = items.length;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleLogout = () => {
    logout();
    setProfileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200'
          : 'bg-white border-b border-gray-200'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">VIVI</span>
            <span className="hidden sm:inline-block text-base text-primary font-semibold tracking-wide">
              Beauty & Aesthetics Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors ${isActive(link.href)
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Cart & Profile */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <Link
              href="/cart"
              className={`relative p-3 rounded-lg transition-colors ${pathname === '/cart'
                  ? 'text-primary bg-primary/5'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              aria-label="Shopping cart"
            >
              <ShoppingCart size={26} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-sm w-6 h-6 rounded-full flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile / Auth */}
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${pathname.startsWith('/profile')
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  aria-label="User menu"
                  aria-expanded={profileMenuOpen}
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <User size={22} className="text-gray-600" />
                  </div>
                  <span className="hidden lg:block text-lg font-medium">{user.name}</span>
                  <ChevronDown
                    size={18}
                    className={`hidden lg:block transition-transform ${profileMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Profile Dropdown */}
                {profileMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setProfileMenuOpen(false)}
                      aria-hidden="true"
                    />
                    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-20">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{user.email}</p>
                      </div>
                      <div className="py-2">
                        <Link
                          href="/profile"
                          onClick={() => setProfileMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <User size={18} />
                          <span>Profile</span>
                        </Link>
                        <Link
                          href="/my-courses"
                          onClick={() => setProfileMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <BookOpen size={18} />
                          <span>My Courses</span>
                        </Link>
                      </div>
                      <div className="border-t border-gray-100 py-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 w-full transition-colors"
                        >
                          <LogOut size={18} />
                          <span>Log Out</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden sm:inline-flex px-6 py-3 bg-primary text-white rounded-lg text-lg font-medium hover:bg-primary-dark transition-colors"
              >
                Sign In
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive(link.href)
                    ? 'bg-primary/5 text-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {!isAuthenticated && (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 bg-primary text-white rounded-lg text-base font-medium text-center mt-4"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
