'use client';

import Link from 'next/link';
import { Mail, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <h3 className="text-xl font-bold text-gray-900">VIVI</h3>
              <p className="text-primary text-xs tracking-wide font-medium mt-0.5">
                Beauty & Aesthetics Academy
              </p>
            </Link>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-xs">
              World-class education in beauty and aesthetics. Master the art of beauty treatments.
            </p>
            
            {/* App Store Button */}
            <div className="mt-5">
              <p className="text-gray-500 text-xs mb-2">Download our app</p>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-80 leading-none">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/my-courses" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  My Courses
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-3">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/profile/faq" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/profile/contact" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/profile/about" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  About Vivi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:vivibeautyacademy@gmail.com" 
                  className="flex items-center gap-2 text-gray-600 hover:text-primary text-sm transition-colors"
                >
                  <Mail size={14} />
                  <span className="truncate">vivibeautyacademy@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://viviacademy.de/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary text-sm transition-colors"
                >
                  <Globe size={14} />
                  viviacademy.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {currentYear} VIVI Beauty & Aesthetics Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-500 hover:text-gray-700 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
