"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring if needed
    console.error(error);
  }, [error]);

  return (
    <div className="flex-1 min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-[#FAF8F5]">
      <span className="text-sm font-semibold tracking-widest uppercase text-[#8B1538] mb-2">
        Sri Ambamata Devasthana
      </span>
      <h1 className="text-3xl sm:text-5xl font-sans font-bold text-[#74132A] mb-4">
        Something Went Wrong
      </h1>
      <p className="text-base text-gray-700 max-w-md mb-8">
        We encountered an unexpected error while loading the temple services. Please try refreshing or return to the homepage.
      </p>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="px-6 py-3 rounded-lg bg-[#F4C542] text-[#74132A] font-bold hover:bg-[#E8B947] transition-colors shadow-md"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-lg bg-[#8B1538] text-white font-medium hover:bg-[#74132A] transition-colors shadow-md"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

