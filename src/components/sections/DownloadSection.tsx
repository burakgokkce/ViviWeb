'use client';

import AppStoreButtons from '@/components/ui/AppStoreButtons';

export default function DownloadSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary/5 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        Download the VIVI App
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                        Take your beauty education on the go. Access all courses, track your progress, and learn anywhere with our mobile app.
                    </p>
                    <AppStoreButtons />
                </div>
            </div>
        </section>
    );
}
