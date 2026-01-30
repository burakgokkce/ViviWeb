'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowLeft } from 'lucide-react';

const faqItems = [
  {
    id: 1,
    question: 'Where can I see the courses I\'ve completed?',
    answer: 'You can view your completed courses in the "My Courses" section. All courses you have purchased and completed will be listed there with your progress.',
  },
  {
    id: 2,
    question: 'How can I reset my password?',
    answer: 'To reset your password, go to the login page and click on "Forgot Password". Enter your email address and we will send you a link to reset your password.',
  },
  {
    id: 3,
    question: 'Can I change my profile picture?',
    answer: 'Yes, you can change your profile picture by going to your Profile settings and tapping on your current profile picture to upload a new one.',
  },
  {
    id: 4,
    question: 'Are certificates available for all courses?',
    answer: 'Certificates are available for most courses upon completion. Check the course details to see if a certificate is offered for that specific course.',
  },
  {
    id: 5,
    question: 'How do I change the app language?',
    answer: 'You can change the app language in your device settings. The app will automatically adapt to your device\'s language preferences.',
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

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

        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
      
        <div className="space-y-3">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900 text-sm font-medium pr-4">{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 transition-transform flex-shrink-0 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openId === item.id && (
                <div className="px-4 pb-4">
                  <p className="text-gray-500 text-sm">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

