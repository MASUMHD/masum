"use client";
import SectionName from "@/components/sectionName/SectionName";
import Link from "next/link";
import { useState } from "react";
import { FaBuilding, FaHandHoldingHeart } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import {
  SiAxios,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiShopify,
  SiTailwindcss,
  SiWebflow,
  SiWordpress,
} from "react-icons/si";

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
        <div className="flex items-center bg-white w-fit p-1 rounded-full mb-8 gap-2">
          {/* Reset / show all */}
          <button
            onClick={() => setActive("all")}
            className={`px-5 py-1 rounded-full text-base cursor-pointer ${
              active === "all"
                ? "bg-black text-white"
                : "text-gray-900 text-semibold  hover:bg-black hover:text-white transition duration-300 cursor-pointer"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setActive("current")}
            className={`px-5 py-1 rounded-full text-sm cursor-pointer ${
              active === "current"
                ? "bg-black text-white"
                : "text-gray-900 text-semibold  hover:bg-black hover:text-white transition duration-300 cursor-pointer"
            }`}
          >
            Current
          </button>

          <button
            onClick={() => setActive("previous")}
            className={`px-5 py-1 rounded-full text-sm cursor-pointer ${
              active === "previous"
                ? "bg-black text-white"
                : "text-gray-900 text-semibold  hover:bg-black hover:text-white transition duration-300 cursor-pointer"
            }`}
          >
            Previous
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Current Card */}
          {(active === "all" || active === "current") && (
            <div className="bg-white p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-orange-400 hover:-translate-y-1 transition duration-300 ease-in-out">
              <div className="mb-4 border-b border-orange-300 border-dashed">
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold text-black text-2xl">
                    Web Developer
                  </h3>
                  <span className="text-xs border flex items-center text-white leading-tight bg-orange-400 px-3 py-1 rounded-full">
                    2026 — PRESENT
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-3.5 flex items-center gap-2">
                  <IoLocationOutline size={18} className="text-orange-500" />
                  <span className="hover:underline hover:text-orange-400 hover:font-semibold transition duration-200">
                    <Link
                      href="https://betopiagroup.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Betopia Group
                    </Link>
                  </span>
                  ·{" "}
                  <span className="hover:underline hover:text-orange-400 hover:font-semibold transition duration-200">
                    <Link
                      href="https://scaleupadsagency.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ScaleUp
                    </Link>
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FiBriefcase size={40} className="text-orange-500 -mt-2" />
                <p className="text-sm text-gray-500 leading-relaxed">
                  Building high-quality, scalable web platforms using Shopify,
                  WordPress, and Webflow, complemented by custom development to
                  deliver seamless and performance-driven solutions for global
                  clients.
                </p>
              </div>

              {/* Skills */}
              <div className="flex items-center gap-3 mt-4 flex-wrap">
                <span className="text-xs text-black  bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                  <SiShopify size={18} className="text-green-600" /> Shopify
                </span>

                <span className="text-xs text-black  bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                  <SiWordpress size={18} className="text-blue-600" /> WordPress
                </span>

                <span className="text-xs text-black  bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                  <SiWebflow size={18} className="text-indigo-600" /> Webflow
                </span>
              </div>
            </div>
          )}

          {/* Previous Card */}
          {(active === "all" || active === "previous") && (
            <div className="bg-white p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-orange-400 hover:-translate-y-1 transition duration-300 ease-in-out">
              <div className="mb-4 border-b border-orange-300 border-dashed">
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold text-black text-2xl">
                    Jr. Front-End Developer
                  </h3>
                  <span className="text-xs border border-orange-300 flex items-center text-gray-500 leading-tight  px-3 py-1 rounded-full">
                    2025 — 2026 January
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-3.5 flex items-center gap-2">
                  <IoLocationOutline size={18} className="text-orange-500" />
                  <span className="hover:underline hover:text-orange-400 hover:font-semibold transition duration-200">
                    <Link
                      href="https://www.bangloss.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bangloss
                    </Link>
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FiBriefcase size={40} className="text-orange-500 -mt-2" />
                <p className="text-sm text-gray-500 leading-relaxed">
                  Worked as a Frontend Developer at a product-based company,
                  building scalable and responsive web applications using
                  React.js and Next.js, with API integration to deliver fast and
                  seamless user experiences.
                </p>
              </div>

              {/* Skills */}
              <div className="flex items-center gap-3 mt-4 flex-wrap">
                <span className="text-xs text-black bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                  <SiJavascript size={18} className="text-yellow-400" />{" "}
                  JavaScript
                </span>

                <span className="text-xs text-black bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                  <SiReact size={18} className="text-blue-500" /> React.js
                </span>

                <span className="text-xs text-black bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                  <SiNextdotjs size={18} className="text-black" /> Next.js
                </span>

                <span className="text-xs text-black bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                  <SiAxios size={18} className="text-purple-500" /> API
                  Integration
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
