"use client";

import { useState } from "react";
import SectionName from "@/components/sectionName/SectionName";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import CMSFilter from "./cms/CMSFilter";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Aurora Analytics",
    category: "Frontend",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Vault Banking UI",
    category: "Frontend",
    tech: ["React", "Framer Motion"],
  },
  {
    id: 3,
    title: "Kairos SaaS",
    category: "Next.js",
    tech: ["Next.js", "tRPC", "Postgres"],
  },
  {
    id: 4,
    title: "Nimbus Chat",
    category: "Fullstack",
    tech: ["React", "Express", "Socket.io"],
  },
  {
    id: 5,
    title: "Atelier Clothing",
    category: "CMS",
    cms: "Shopify",
    tech: ["Shopify", "Liquid"],
  },
  {
    id: 6,
    title: "Lumen Studio",
    category: "CMS",
    cms: "Webflow",
    tech: ["Webflow", "GSAP"],
  },
  {
    id: 7,
    title: "Prose Journal",
    category: "CMS",
    cms: "WordPress",
    tech: ["WordPress", "ACF"],
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [CMS, setCms] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filtered = projectsData.filter((item) => {
    if (active === "All") return true;
    if (active === "CMS") {
      if (CMS === "All") return item.category === "CMS";
      return item.cms === CMS;
    }
    return item.category === active;
  });

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <SectionName name="PROJECTS" />

        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Selected work.
        </h2>

        <ProjectFilter active={active} setActive={setActive} />

        {active === "CMS" && <CMSFilter CMS={CMS} setCms={setCms} />}

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {(showAll ? filtered : filtered.slice(0, 6)).map((item) => (
            <ProjectCard
              key={item.id}
              item={item}
              onCodeClick={() => {
                setOpenModal(true);
                setSelectedProject(item);
              }}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        {filtered.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full cursor-pointer hover:-translate-y-1 transition duration-300 ease-in-out"
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          </div>
        )}
      </div>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-[90%] max-w-md rounded-xl shadow-xl p-6 relative animate-fadeIn">
            {/* CLOSE */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-center mb-5">
              {selectedProject?.title}
            </h3>

            {/* OPTIONS */}
            <div className="flex flex-col gap-4">
              <Link
                href={selectedProject?.frontend || "#"}
                className="text-center px-4 py-3 rounded-lg bg-gray-100 hover:bg-orange-400 hover:text-white transition"
              >
                Frontend Code
              </Link>

              <Link
                href={selectedProject?.backend || "#"}
                className="text-center px-4 py-3 rounded-lg bg-gray-100 hover:bg-orange-400 hover:text-white transition"
              >
                Backend Code
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
