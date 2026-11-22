import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center bg-school-bg">
      <div className="text-center px-4">
        <p className="text-7xl md:text-9xl font-black text-school-primary/20">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-school-dark mt-4 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-school-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
