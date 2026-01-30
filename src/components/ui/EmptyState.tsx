'use client';

import { ReactNode } from 'react';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

export default function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      {icon && (
        <div className="text-gray-300 mb-3">
          {icon}
        </div>
      )}
      <h3 className="text-gray-900 text-lg font-medium mb-1 text-center">{title}</h3>
      <p className="text-gray-500 text-sm text-center max-w-sm">{description}</p>
    </div>
  );
}

