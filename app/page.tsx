"use client";

import { useState } from "react";

const colleges = [
  {
    name: "IIT Delhi",
    location: "New Delhi, India",
    rating: 4.8,
    fees: "₹2.2 Lakh/year",
    placement: "₹25 LPA",
  },
  {
    name: "IIT Bombay",
    location: "Mumbai, India",
    rating: 4.7,
    fees: "₹2.3 Lakh/year",
    placement: "₹26 LPA",
  },
  {
    name: "IIT Kanpur",
    location: "Kanpur, India",
    rating: 4.6,
    fees: "₹2.1 Lakh/year",
    placement: "₹24 LPA",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [compareList, setCompareList] = useState<string[]>([]);

  const filteredColleges = colleges.filter(
    (college) =>
      college.name.toLowerCase().includes(search.toLowerCase()) ||
      college.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleCompare = (name: string) => {
    if (compareList.includes(name)) {
      setCompareList(compareList.filter((item) => item !== name));
    } else {
      if (compareList.length < 3) {
        setCompareList([...compareList, name]);
      }
    }
  };

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
          <a
            href="/"
            className="font-semibold text-blue-200"
          >
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

      {/* Hero Section */}
      <section className="bg-blue-700 px-6 py-20 text-center text-white">
        <h1 className="text-5xl font-bold">
          Find the Right College for You
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
          Discover colleges, explore important information,
          and compare your options before making your decision.
        </p>

        {/* Search */}
        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search college or city..."
            className="flex-1 rounded-xl px-5 py-4 text-gray-900 outline-none"
          />

          <button
            onClick={() => {
              document
                .getElementById("colleges")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-xl bg-white px-7 py-4 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Search
          </button>
        </div>
      </section>

      {/* Colleges Section */}
      <section
        id="colleges"
        className="mx-auto max-w-6xl px-6 py-14"
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Explore Colleges
            </h2>

            <p className="mt-2 text-gray-600">
              Find colleges based on your preferences.
            </p>
          </div>

          {compareList.length > 0 && (
            <a
              href="/compare"
              className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Compare Now →
            </a>
          )}
        </div>

        {/* College Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((college) => (
              <div
                key={college.name}
                className={`rounded-2xl border bg-white p-6 shadow-md transition ${
                  compareList.includes(college.name)
                    ? "border-blue-600 ring-2 ring-blue-200"
                    : "border-gray-100"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {college.name}
                </h3>

                <p className="mt-3 text-gray-600">
                  📍 {college.location}
                </p>

                <p className="mt-2 text-gray-600">
                  ⭐ {college.rating} Rating
                </p>

                <p className="mt-2 text-gray-600">
                  💰 {college.fees}
                </p>

                <p className="mt-2 font-semibold text-green-600">
                  📈 {college.placement}
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={`/college?name=${encodeURIComponent(
                      college.name
                    )}`}
                    className="rounded-xl bg-blue-700 py-3 text-center font-semibold text-white hover:bg-blue-800"
                  >
                    View Details
                  </a>

                  <button
                    onClick={() => handleCompare(college.name)}
                    className={`rounded-xl py-3 font-semibold text-white ${
                      compareList.includes(college.name)
                        ? "bg-gray-600 hover:bg-gray-700"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {compareList.includes(college.name)
                      ? "Remove from Compare"
                      : "Add to Compare"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full rounded-2xl bg-white p-10 text-center shadow">
              <h3 className="text-xl font-semibold text-gray-900">
                No colleges found
              </h3>

              <p className="mt-2 text-gray-600">
                Try searching with another college name or city.
              </p>
            </div>
          )}
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