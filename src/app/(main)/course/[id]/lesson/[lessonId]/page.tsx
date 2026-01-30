'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Play, CheckCircle, Lock } from 'lucide-react';
import VideoPlayer from '@/components/ui/VideoPlayer';
import { useCourseStore } from '@/store/courseStore';
import Button from '@/components/ui/Button';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id as string;
  const lessonId = params.lessonId as string;

  const { getCourseById, purchasedCourses } = useCourseStore();
  const course = getCourseById(courseId);

  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [lessonProgress, setLessonProgress] = useState<Record<string, number>>({});

  // Check if user has purchased this course
  const isPurchased = purchasedCourses.some(c => c.id === courseId);

  // Find current lesson
  const currentLesson = course?.contents?.find(c => c.id === lessonId);
  const lessonIndex = course?.contents?.findIndex(c => c.id === lessonId) ?? 0;

  useEffect(() => {
    setCurrentLessonIndex(lessonIndex);
  }, [lessonIndex]);

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-500">Course not found</p>
      </div>
    );
  }

  if (!isPurchased) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock size={40} className="text-gray-400" />
          </div>
          <h2 className="text-gray-900 text-2xl font-bold mb-3">
            Access Denied
          </h2>
          <p className="text-gray-600 mb-8">
            You need to purchase this course to watch the lessons.
          </p>
          <Button
            onClick={() => router.push(`/course/${courseId}`)}
            variant="primary"
            size="lg"
          >
            Go to Course
          </Button>
        </div>
      </div>
    );
  }

  if (!currentLesson) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-500">Lesson not found</p>
      </div>
    );
  }

  const handleProgress = (progress: number) => {
    setLessonProgress(prev => ({
      ...prev,
      [lessonId]: progress
    }));
  };

  const handleComplete = () => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons(prev => [...prev, lessonId]);
    }

    // Auto-play next lesson
    if (course.contents && currentLessonIndex < course.contents.length - 1) {
      const nextLesson = course.contents[currentLessonIndex + 1];
      router.push(`/course/${courseId}/lesson/${nextLesson.id}`);
    }
  };

  const navigateToLesson = (lesson: { id: string }) => {
    router.push(`/course/${courseId}/lesson/${lesson.id}`);
  };

  // Demo video URL - in production this would come from the API
  const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-18 bg-white/95 backdrop-blur-lg border-b border-gray-200 z-40 shadow-soft">
        <div className="max-w-container mx-auto px-6 h-16 flex items-center gap-4">
          <button
            onClick={() => router.push(`/course/${courseId}`)}
            className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Back to course"
          >
            <ArrowLeft size={24} strokeWidth={2} />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-gray-900 font-semibold text-lg truncate">{currentLesson.title}</h1>
            <p className="text-gray-500 text-sm truncate">{course.title}</p>
          </div>
        </div>
      </header>

      {/* Video Player */}
      <div className="w-full bg-black">
        <div className="max-w-container mx-auto">
          <VideoPlayer
            src={videoUrl}
            title={currentLesson.title}
            onProgress={handleProgress}
            onComplete={handleComplete}
            initialProgress={lessonProgress[lessonId] || 0}
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-container mx-auto px-6 py-8">
        {/* Lesson Info */}
        <div className="mb-8">
          <h2 className="text-gray-900 text-2xl font-bold mb-2">{currentLesson.title}</h2>
          {currentLesson.duration && (
            <p className="text-gray-600 text-base">Duration: {currentLesson.duration}</p>
          )}
        </div>

        {/* Lesson List */}
        <div>
          <h3 className="text-gray-900 text-xl font-bold mb-4">Course Contents</h3>
          <div className="space-y-3">
            {course.contents?.map((lesson, index) => {
              const isCompleted = completedLessons.includes(lesson.id);
              const isCurrent = lesson.id === lessonId;
              const progress = lessonProgress[lesson.id] || 0;

              return (
                <button
                  key={lesson.id}
                  onClick={() => navigateToLesson(lesson)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all min-h-[72px] ${isCurrent
                      ? 'bg-primary-50 border-2 border-primary shadow-soft'
                      : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-soft'
                    }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${isCompleted
                      ? 'bg-green-500'
                      : isCurrent
                        ? 'bg-primary'
                        : 'bg-gray-100'
                    }`}>
                    {isCompleted ? (
                      <CheckCircle size={24} className="text-white" strokeWidth={2.5} />
                    ) : (
                      <Play size={20} className={isCurrent ? 'text-white' : 'text-gray-600'} strokeWidth={2} />
                    )}
                  </div>

                  <div className="flex-1 text-left min-w-0">
                    <p className={`font-semibold text-[15px] truncate ${isCurrent ? 'text-primary' : 'text-gray-900'}`}>
                      {index + 1}. {lesson.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      {lesson.duration && (
                        <span className="text-gray-500 text-sm">{lesson.duration}</span>
                      )}
                      {progress > 0 && progress < 100 && (
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full max-w-24">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

