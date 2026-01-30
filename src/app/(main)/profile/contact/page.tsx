'use client';

import Link from 'next/link';
import { Mail, Globe, ArrowLeft } from 'lucide-react';

export default function ContactPage() {
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

        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
        <p className="text-gray-500 text-sm mb-8">
          We&apos;d love to hear from you! Reach out to us through any of the following channels.
        </p>

        <div className="space-y-4">
          {/* Email */}
          <a
            href="mailto:vivibeautyacademy@gmail.com"
            className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg transition-colors hover:bg-gray-50"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Mail size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Email</p>
              <p className="text-gray-900 text-sm font-medium">vivibeautyacademy@gmail.com</p>
            </div>
          </a>

          {/* Website */}
          <a
            href="https://viviacademy.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg transition-colors hover:bg-gray-50"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Globe size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Website</p>
              <p className="text-gray-900 text-sm font-medium">viviacademy.de</p>
            </div>
          </a>
        </div>

        <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-500 text-center text-sm">
            Our team is available to answer your questions Monday through Friday, 9 AM to 6 PM CET.
          </p>
        </div>
      </div>
    </div>
  );
}

