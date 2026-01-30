'use client';

import { Heart } from 'lucide-react';
import CourseCard from '@/components/ui/CourseCard';
import EmptyState from '@/components/ui/EmptyState';
import { useCourseStore } from '@/store/courseStore';

export default function FavoritesPage() {
  const { favorites } = useCourseStore();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Favorites</h1>
          <p className="text-gray-500 text-sm">Your favorite courses</p>
        </div>

        {/* Content */}
        {favorites.length === 0 ? (
          <EmptyState
            icon={<Heart size={48} />}
            title="No favorites yet"
            description="Add some courses to your favorites!"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

