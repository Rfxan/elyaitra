"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">
          Something went wrong
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

