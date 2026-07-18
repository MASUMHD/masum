"use client";
import SectionName from "@/components/sectionName/SectionName";
import Link from "next/link";
import { useState } from "react";
import { FiBriefcase } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import {
  SiAxios,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiShopify,
  SiWebflow,
  SiWordpress,
} from "react-icons/si";

export default function Experience() {
  const [active, setActive] = useState("all");

  const experienceData = [
    {
      type: "current",
      role: "Web Developer",
      duration: "2026 — PRESENT",
      company: [
        {
          name: "Betopia Group",
          link: "https://betopiagroup.com",
        },
        {
          name: "ScaleUp",
          link: "https://scaleupadsagency.com",
        },
      ],
      description:
        "Building high-quality, scalable web platforms using Shopify, WordPress, and Webflow, complemented by custom development to deliver seamless and performance-driven solutions for global clients.",
      skills: [
        {
          name: "Shopify",
          icon: SiShopify,
          color: "text-green-600",
        },
        {
          name: "WordPress",
          icon: SiWordpress,
          color: "text-blue-600",
        },
        {
          name: "Webflow",
          icon: SiWebflow,
          color: "text-indigo-600",
        },
      ],
    },
    {
      type: "previous",
      role: "Jr. Front-End Developer",
      duration: "2025 — 2026 January",
      company: [
        {
          name: "Bangloss",
          link: "https://www.bangloss.com/",
        },
      ],
      description:
        "Worked as a Frontend Developer at a product-based company, building scalable and responsive web applications using React.js and Next.js, with API integration to deliver fast and seamless user experiences.",
      skills: [
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "text-yellow-400",
        },
        {
          name: "React.js",
          icon: SiReact,
          color: "text-blue-500",
        },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-black",
        },
        {
          name: "API Integration",
          icon: SiAxios,
          color: "text-purple-500",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-10 md:py-20">
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
          {experienceData
            .filter((item) => active === "all" || active === item.type)
            .map((exp, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-orange-400 hover:-translate-y-1 transition duration-300 ease-in-out"
              >
                <div className="mb-4 border-b border-orange-300 border-dashed">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-bold text-black text-lg md:text-xl lg:text-2xl ">
                      {exp.role}
                    </h3>
                    <span
                      className={`text-xs border flex items-center leading-tight px-3 py-1 rounded-full ${
                        exp.type === "current"
                          ? "text-white bg-orange-400"
                          : "border-orange-300 text-gray-500"
                      }`}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-3.5 flex items-center gap-2">
                    <IoLocationOutline size={18} className="text-orange-500" />

                    {exp.company.map((comp, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <span className="hover:underline hover:text-orange-400 hover:font-semibold transition duration-200">
                          <Link href={comp.link} target="_blank">
                            {comp.name}
                          </Link>
                        </span>
                        {i !== exp.company.length - 1 && "·"}
                      </span>
                    ))}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FiBriefcase size={40} className="text-orange-500 -mt-2" />
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex items-center gap-3 mt-4 flex-wrap">
                  {exp.skills.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <span
                        key={i}
                        className="text-xs text-black bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1"
                      >
                        <Icon size={18} className={skill.color} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
