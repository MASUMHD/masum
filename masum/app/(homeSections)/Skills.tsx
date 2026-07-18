import SectionName from "@/components/sectionName/SectionName";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiWebflow,
  SiShopify,
  SiNetlify,
  SiVercel, 
  // SiThunderstore,
  // SiFigma,
} from "react-icons/si";

const skillsData = [
  {
    title: "Core Technologies",
    items: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#6B7280" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      // { name: "Thunder Client", icon:  SiThunderstore, color: "#FF6C37" },
      // { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "CMS",
    items: [
      { name: "Webflow", icon: SiWebflow, color: "#4353FF" },
      { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
      { name: "WordPress", icon: FaWordpress, color: "#21759B" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="w-full py-24">
      <div className="">
        {/* Top Title */}
        <SectionName width={40} name="SKILLS" />

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-10 ">
          Tools of the craft.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow hover:border-orange-400 ease-in-out hover:-translate-y-1 transition duration-300"
            >
              {/* Title */}
              <h3 className="text-sm tracking-[0.2em] text-gray-500 mb-4 uppercase border-b border-orange-300 border-dashed pb-2">
                {category.title}
              </h3>

              {/* Items */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm px-3 py-1 rounded-md border border-gray-300 bg-[#f3eee8]"
                    >
                      <Icon size={24} style={{ color: item.color }} className="text-base" />
                      <span className="text-black">{item.name}</span>
                    </div>
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
