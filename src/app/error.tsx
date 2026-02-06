'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-light mb-4">Something went wrong</h2>
        <p className="text-gray-500 mb-6">{error.message || 'An unexpected error occurred'}</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-cyan-500 text-black rounded-full font-medium hover:bg-cyan-400 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
