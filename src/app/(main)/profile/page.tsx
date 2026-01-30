'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  User, 
  HelpCircle, 
  Mail, 
  Info, 
  LogOut, 
  ChevronRight 
} from 'lucide-react';
import { useUserStore } from '@/store/userStore';

const menuItems = [
  { href: '/profile/faq', label: 'FAQ', icon: HelpCircle },
  { href: '/profile/contact', label: 'Contact', icon: Mail },
  { href: '/profile/about', label: 'About Vivi', icon: Info },
];

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useUserStore();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Profile</h1>

        {/* User Info */}
        <div className="flex items-center gap-4 mb-8 p-5 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={24} className="text-gray-500" />
          </div>
          <div>
            <h2 className="text-gray-900 text-lg font-medium">
              {isAuthenticated && user ? user.name : 'Guest User'}
            </h2>
            <p className="text-gray-500 text-sm">
              {isAuthenticated && user ? user.email : 'Not logged in'}
            </p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-gray-500" />
                  <span className="text-gray-900 text-sm font-medium">{item.label}</span>
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </Link>
            );
          })}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg transition-colors hover:bg-red-50 hover:border-red-200 mt-4"
          >
            <div className="flex items-center gap-3">
              <LogOut size={18} className="text-red-500" />
              <span className="text-red-500 text-sm font-medium">Log Out</span>
            </div>
            <ChevronRight size={18} className="text-red-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

