"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-900 via-indigo-900 to-slate-900 text-white px-6">
          <div className="text-center max-w-xl">
            <h2 className="text-7xl font-extrabold bg-linear-to-r from-pink-500 to-indigo-400 text-transparent bg-clip-text mb-4">
              500!
            </h2>

            <p className="text-lg text-gray-300 mb-6">
              Oops! Something went wrong on our side. Please try again or go
              back to the homepage.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => reset()}
                className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition font-medium"
              >
                Try Again
              </button>

              <Link href="/">
                <button className="px-6 py-3 rounded-full border border-gray-400 hover:bg-white hover:text-black transition font-medium">
                  Go Home
                </button>
              </Link>
            </div>

            <div className="mt-10 text-sm text-gray-500">
              Error: {error?.message}
            </div>
          </div>
        </div>
  );
}
