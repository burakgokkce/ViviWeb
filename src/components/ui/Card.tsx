import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    onClick?: () => void;
}

export default function Card({
    children,
    className = '',
    hover = false,
    padding = 'md',
    onClick,
}: CardProps) {
    const paddingClasses = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    const baseClasses = 'bg-white border border-gray-200 rounded-2xl transition-all duration-300';
    const hoverClasses = hover ? 'hover:shadow-medium hover:-translate-y-1 cursor-pointer' : 'shadow-soft';
    const clickableClasses = onClick ? 'cursor-pointer' : '';

    return (
        <div
            className={`${baseClasses} ${hoverClasses} ${clickableClasses} ${paddingClasses[padding]} ${className}`}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={onClick ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            } : undefined}
        >
            {children}
        </div>
    );
}
