"use client";

import { useState } from "react";
import SectionName from "@/components/sectionName/SectionName";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import CMSFilter from "./cms/CMSFilter";

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
            <ProjectCard key={item.id} item={item} />
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
    </section>
  );
}
