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

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else {
      if (selected.length < 3) {
        setSelected([...selected, name]);
      }
    }
  };

  const selectedColleges = colleges.filter((college) =>
    selected.includes(college.name)
  );

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
            className="font-semibold text-blue-200"
          >
            Compare
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-blue-700 px-6 py-14 text-center text-white">
        <h1 className="text-4xl font-bold">
          Compare Colleges
        </h1>

        <p className="mt-4 text-blue-100">
          Select 2 or 3 colleges to compare them.
        </p>
      </section>

      {/* Selection */}
      <section className="mx-auto max-w-6xl px-6 py-12">

        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Select Colleges
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {colleges.map((college) => (
            <div
              key={college.name}
              className={`rounded-2xl border bg-white p-6 shadow-sm ${
                selected.includes(college.name)
                  ? "border-blue-600 ring-2 ring-blue-200"
                  : ""
              }`}
            >
              <h3 className="text-xl font-bold text-gray-900">
                {college.name}
              </h3>

              <p className="mt-2 text-gray-600">
                📍 {college.location}
              </p>

              <p className="mt-2 text-gray-600">
                ⭐ {college.rating}
              </p>

              <button
                onClick={() => handleSelect(college.name)}
                className={`mt-5 w-full rounded-xl py-3 font-semibold text-white ${
                  selected.includes(college.name)
                    ? "bg-gray-600 hover:bg-gray-700"
                    : "bg-blue-700 hover:bg-blue-800"
                }`}
              >
                {selected.includes(college.name)
                  ? "Remove"
                  : "Add to Compare"}
              </button>
            </div>
          ))}

        </div>

        {/* Comparison */}
        {selectedColleges.length >= 2 && (
          <div className="mt-12 overflow-x-auto rounded-2xl bg-white shadow-md">

            <h2 className="p-6 text-2xl font-bold text-gray-900">
              Comparison
            </h2>

            <table className="w-full min-w-[600px] border-collapse">

              <thead>
                <tr className="bg-blue-50">
                  <th className="border p-4 text-left">
                    Feature
                  </th>

                  {selectedColleges.map((college) => (
                    <th
                      key={college.name}
                      className="border p-4 text-left"
                    >
                      {college.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td className="border p-4 font-semibold">
                    Location
                  </td>

                  {selectedColleges.map((college) => (
                    <td key={college.name} className="border p-4">
                      {college.location}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="border p-4 font-semibold">
                    Rating
                  </td>

                  {selectedColleges.map((college) => (
                    <td key={college.name} className="border p-4">
                      ⭐ {college.rating}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="border p-4 font-semibold">
                    Fees
                  </td>

                  {selectedColleges.map((college) => (
                    <td key={college.name} className="border p-4">
                      {college.fees}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="border p-4 font-semibold">
                    Average Placement
                  </td>

                  {selectedColleges.map((college) => (
                    <td
                      key={college.name}
                      className="border p-4 font-semibold text-green-600"
                    >
                      {college.placement}
                    </td>
                  ))}
                </tr>

              </tbody>

            </table>
          </div>
        )}

        {/* Message */}
        {selectedColleges.length < 2 && (
          <div className="mt-10 rounded-xl bg-white p-8 text-center shadow">
            <p className="text-gray-600">
              Select at least 2 colleges to start comparison.
            </p>
          </div>
        )}

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