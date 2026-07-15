"use client";
import SectionName from "@/components/sectionName/SectionName";
import { useState } from "react";
import { FiBriefcase } from "react-icons/fi";

export default function Experience() {
  const [active, setActive] = useState("all"); // default = both

  return (
    <section className="py-20">
      <div className="">
        {/* Badge */}
        <SectionName width={40} name="EXPERIENCE" />

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-10 ">
          Where I've been <br /> building.
        </h2>

        {/* Toggle */}
        <div className="flex items-center bg-white w-fit p-1 rounded-full mb-12 gap-2">
          {/* Reset / show all */}
          <button
            onClick={() => setActive("all")}
            className={`px-5 py-1 rounded-full text-base cursor-pointer ${
              active === "all" ? "bg-black text-white" : "text-gray-900 text-semibold  hover:bg-black hover:text-white transition duration-300 cursor-pointer"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setActive("current")}
            className={`px-5 py-1 rounded-full text-sm cursor-pointer ${
              active === "current" ? "bg-black text-white" : "text-gray-900 text-semibold  hover:bg-black hover:text-white transition duration-300 cursor-pointer"
            }`}
          >
            Current
          </button>

          <button
            onClick={() => setActive("previous")}
            className={`px-5 py-1 rounded-full text-sm cursor-pointer ${
              active === "previous" ? "bg-black text-white" : "text-gray-900 text-semibold  hover:bg-black hover:text-white transition duration-300 cursor-pointer"
            }`}
          >
            Previous
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Current Card */}
          {(active === "all" || active === "current") && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">Full Stack Developer</h3>
                <span className="text-xs border px-3 py-1 rounded-full">
                  2024 — PRESENT
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-4">Freelance · Remote</p>

              <div className="flex gap-3 text-sm text-gray-600">
                <FiBriefcase />
                <p>
                  Designing and shipping premium web platforms for global
                  clients.
                </p>
              </div>
            </div>
          )}

          {/* Previous Card */}
          {(active === "all" || active === "previous") && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">Junior Developer</h3>
                <span className="text-xs border px-3 py-1 rounded-full">
                  2023 — 2024
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-4">Creative Agency</p>

              <div className="flex gap-3 text-sm text-gray-600">
                <FiBriefcase />
                <p>Worked on frontend, landing pages and UI components.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
