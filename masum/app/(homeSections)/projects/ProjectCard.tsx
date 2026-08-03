import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ item }: any) {
  return (
    <div className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition group">
      
      {/* TOP GRADIENT */}
      <div className="h-40 bg-linear-to-br from-orange-300 to-pink-400 relative">
        
        {/* CATEGORY BADGE */}
        <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-white/80 backdrop-blur">
          {item.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">
          {item.title}
        </h3>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-gray-100 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4 text-sm text-gray-600">
          <a href="#" className="flex items-center gap-1 hover:text-black">
            Live <FiExternalLink size={14} />
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-black">
            Code <FiGithub size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}