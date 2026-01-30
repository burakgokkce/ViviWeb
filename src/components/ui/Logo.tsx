import Link from 'next/link';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    showTagline?: boolean;
}

export default function Logo({ className = '', size = 'md', showTagline = true }: LogoProps) {
    const sizes = {
        sm: 'text-xl',
        md: 'text-2xl',
        lg: 'text-3xl',
    };

    const taglineSizes = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
    };

    return (
        <Link href="/" className={`flex items-center gap-3 group ${className}`}>
            <div className="flex items-center gap-1">
                <span className={`${sizes[size]} font-bold text-gray-900 tracking-tight transition-colors group-hover:text-primary`}>
                    VIVI
                </span>
            </div>
            {showTagline && (
                <span className={`hidden md:block text-primary ${taglineSizes[size]} tracking-wide font-semibold transition-opacity group-hover:opacity-80`}>
                    Beauty • Aesthetics • Academy
                </span>
            )}
        </Link>
    );
}
