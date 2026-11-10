import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-[#FAF8F5]">
      <span className="text-sm font-semibold tracking-widest uppercase text-[#8B1538] mb-2">
        Sri Ambamata Devasthana
      </span>
      <h1 className="text-4xl sm:text-6xl font-sans font-bold text-[#74132A] mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-base text-gray-700 max-w-md mb-8">
        The page you are looking for does not exist or has been moved. Return to the sacred presence of Goddess Ambadevi.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-[#8B1538] text-white font-medium hover:bg-[#74132A] transition-colors shadow-md"
      >
        Return to Home
      </Link>
    </div>
  );
}

