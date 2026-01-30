'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import SearchBar from '@/components/ui/SearchBar';
import CourseCard from '@/components/ui/CourseCard';
import { useCourseStore } from '@/store/courseStore';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { courses } = useCourseStore();

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">All Courses</h1>
          <p className="text-gray-500 text-sm mb-6">Browse our complete collection of courses</p>
          <div className="max-w-md">
            <SearchBar
              placeholder="Search courses..."
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search size={40} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500">No courses found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
}

