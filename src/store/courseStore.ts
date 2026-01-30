import { create } from 'zustand';
import { Course } from '@/types';

// Demo courses data
const demoCourses: Course[] = [
  {
    id: '1',
    title: 'Lips',
    author: 'quexperts',
    price: 20.00,
    rating: 0.0,
    reviewCount: 0,
    isFavorite: false,
    description: 'Learn the art of lip treatments and techniques. This comprehensive course covers everything from basic lip care to advanced aesthetic procedures.',
    language: 'English',
    contents: [
      { id: '1-1', title: 'Introduction to Lip Anatomy', duration: '10:00' },
      { id: '1-2', title: 'Basic Lip Care Techniques', duration: '15:00' },
      { id: '1-3', title: 'Advanced Lip Treatments', duration: '20:00' },
      { id: '1-4', title: 'Safety and Hygiene', duration: '12:00' },
    ],
  },
];

interface CourseState {
  courses: Course[];
  favorites: Course[];
  purchasedCourses: Course[];
  toggleFavorite: (courseId: string) => void;
  addToPurchased: (course: Course) => void;
  getCourseById: (id: string) => Course | undefined;
}

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: demoCourses,
  favorites: [],
  purchasedCourses: [],
  
  toggleFavorite: (courseId) => {
    set((state) => {
      const updatedCourses = state.courses.map((course) =>
        course.id === courseId
          ? { ...course, isFavorite: !course.isFavorite }
          : course
      );
      
      const favorites = updatedCourses.filter((course) => course.isFavorite);
      
      return { courses: updatedCourses, favorites };
    });
  },
  
  addToPurchased: (course) => {
    set((state) => ({
      purchasedCourses: [...state.purchasedCourses, course],
    }));
  },
  
  getCourseById: (id) => {
    return get().courses.find((course) => course.id === id);
  },
}));

