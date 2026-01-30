'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Back Link */}
        <Link
          href="/profile"
          className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-sm mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Profile
        </Link>

        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">About VIVI</h1>

        {/* Logo */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">VIVI</h2>
          <p className="text-primary text-sm">Beauty & Aesthetics Academy</p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="text-gray-900 font-semibold text-base mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              VIVI Beauty & Aesthetics Academy is dedicated to providing world-class education in beauty and aesthetics. Our comprehensive courses are designed to help you master the art of beauty treatments and build a successful career in the industry.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="text-gray-900 font-semibold text-base mb-3">What We Offer</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>Professional beauty courses</li>
              <li>Expert instructors</li>
              <li>Hands-on training</li>
              <li>Industry-recognized certificates</li>
              <li>Flexible learning options</li>
            </ul>
          </div>

          <div className="text-gray-500 text-xs">
            Version 1.0.0
          </div>
        </div>
      </div>
    </div>
  );
}

