import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#111827",
        primary: {
          DEFAULT: "#E91E8C",
          light: "#FF4DA6",
          dark: "#C4177A",
          50: "#FDF2F8",
          100: "#FCE7F3",
          200: "#FBCFE8",
          300: "#F9A8D4",
          400: "#F472B6",
          500: "#E91E8C",
          600: "#C4177A",
          700: "#9F1068",
          800: "#7A0C52",
          900: "#5C0940",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1.16' }],        // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1' }],      // 60px
      },
      spacing: {
        '0.5': '0.125rem',   // 2px
        '18': '4.5rem',      // 72px
        '22': '5.5rem',      // 88px
        '88': '22rem',       // 352px
        '128': '32rem',      // 512px
        '160': '40rem',      // 640px
      },
      borderRadius: {
        'xs': '0.25rem',     // 4px
        'sm': '0.375rem',    // 6px
        'DEFAULT': '0.5rem', // 8px
        'md': '0.625rem',    // 10px
        'lg': '0.75rem',     // 12px
        'xl': '1rem',        // 16px
        '2xl': '1.25rem',    // 20px
        '3xl': '1.5rem',     // 24px
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'strong': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'xl': '0 12px 32px rgba(0, 0, 0, 0.15)',
        'primary': '0 4px 12px rgba(233, 30, 140, 0.2)',
        'primary-lg': '0 8px 20px rgba(233, 30, 140, 0.3)',
        'primary-xl': '0 12px 28px rgba(233, 30, 140, 0.35)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },
      maxWidth: {
        'container': '1280px',
        'content': '1200px',
        'narrow': '800px',
      },
    },
  },
  plugins: [],
};
export default config;
