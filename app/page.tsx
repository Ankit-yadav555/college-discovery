"use client";

import { useSearchParams } from "next/navigation";

const colleges = [
  {
    name: "IIT Delhi",
    location: "New Delhi, India",
    rating: 4.8,
    fees: "₹2.2 Lakh/year",
    placement: "₹25 LPA",
    courses: ["B.Tech", "M.Tech", "M.Sc"],
    description:
      "IIT Delhi is a premier engineering institution offering programs in engineering, technology and science.",
  },
  {
    name: "IIT Bombay",
    location: "Mumbai, India",
    rating: 4.7,
    fees: "₹2.3 Lakh/year",
    placement: "₹26 LPA",
    courses: ["B.Tech", "M.Tech", "M.Sc"],
    description:
      "IIT Bombay is a leading institute known for engineering, technology, research and innovation.",
  },
  {
    name: "IIT Kanpur",
    location: "Kanpur, India",
    rating: 4.6,
    fees: "₹2.1 Lakh/year",
    placement: "₹24 LPA",
    courses: ["B.Tech", "M.Tech", "M.Sc"],
    description:
      "IIT Kanpur is a renowned institute focused on engineering, science, technology and research.",
  },
];

export default function CollegePage() {
  const searchParams = useSearchParams();

  const collegeName =
    searchParams.get("name") || "IIT Delhi";

  const college =
    colleges.find((item) => item.name === collegeName) ||
    colleges[0];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between bg-blue-700 px-8 py-5">
        <a
          href="/"
          className="text-2xl font-bold text-white"
        >
          CollegeFinder
        </a>

        <div className="flex gap-6 text-white">
          <a href="/" className="hover:text-blue-200">
            Home
          </a>

          <a
            href="/#colleges"
            className="hover:text-blue-200"
          >
            Colleges
          </a>

          <a
            href="/compare"
            className="hover:text-blue-200"
          >
            Compare
          </a>
        </div>
      </nav>

      {/* College Header */}
      <section className="bg-blue-700 px-6 py-14 text-center text-white">

        <h1 className="text-5xl font-bold">
          {college.name}
        </h1>

        <p className="mt-4 text-xl text-blue-100">
          📍 {college.location}
        </p>

        <div className="mt-5">
          <span className="rounded-full bg-white px-5 py-2 font-semibold text-blue-700">
            ⭐ {college.rating} Rating
          </span>
        </div>

      </section>

      {/* Details */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        {/* Overview */}
        <div className="rounded-2xl bg-white p-8 shadow-md">

          <h2 className="text-3xl font-bold text-gray-900">
            Overview
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            {college.description}
          </p>

        </div>

        {/* Courses + Fees */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-8 shadow-md">

            <h2 className="text-2xl font-bold text-gray-900">
              Courses
            </h2>

            <ul className="mt-4 space-y-3 text-gray-600">
              {college.courses.map((course) => (
                <li key={course}>
                  ✓ {course}
                </li>
              ))}
            </ul>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md">

            <h2 className="text-2xl font-bold text-gray-900">
              Fees
            </h2>

            <p className="mt-4 text-xl font-semibold text-blue-700">
              {college.fees}
            </p>

          </div>

        </div>

        {/* Placement */}
        <div className="mt-6 rounded-2xl bg-white p-8 shadow-md">

          <h2 className="text-2xl font-bold text-gray-900">
            Placements
          </h2>

          <p className="mt-4 text-xl font-semibold text-green-600">
            Average Package: {college.placement}
          </p>

        </div>

        {/* Back */}
        <div className="mt-8 text-center">

          <a
            href="/#colleges"
            className="inline-block rounded-xl bg-blue-700 px-8 py-3 font-semibold text-white hover:bg-blue-800"
          >
            ← Back to Colleges
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-6 py-8 text-center text-gray-300">
        <p>
          © 2026 CollegeFinder. Find your future college.
        </p>
      </footer>

    </main>
  );
}