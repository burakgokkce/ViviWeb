'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending password reset email
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  if (sent) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-primary" />
        </div>
        <h2 className="text-white text-2xl font-bold mb-2 text-center">
          Check your email
        </h2>
        <p className="text-gray-400 text-center mb-8">
          We&apos;ve sent a password reset link to{' '}
          <span className="text-white">{email}</span>
        </p>
        <Link href="/login">
          <Button>Back to Sign In</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col px-6 py-12">
      {/* Back Button */}
      <Link
        href="/login"
        className="flex items-center gap-2 text-gray-400 mb-8 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Sign In</span>
      </Link>

      {/* Logo */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">VIVI</h1>
        <p className="text-primary text-sm tracking-wide">
          Beauty • Aesthetics • Academy
        </p>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-white text-2xl font-bold mb-2">Forgot Password?</h2>
        <p className="text-gray-400">
          Enter your email address and we&apos;ll send you a link to reset your password.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div className="relative">
          <Mail
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" fullWidth disabled={loading}>
          {loading ? 'Sending...' : 'Send Reset Link'}
        </Button>
      </form>
    </div>
  );
}

