import Image from "next/image";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import workImage from "@/public/work_image.jpeg";
import Link from "next/link";
import GithubButton from "./GithubButton";

export default function ProjectCard({ item, onCodeClick }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-orange-400 hover:-translate-y-1 transition duration-300 ease-in-out relative group">
      {/* PROJECT IMAGE */}
      <div className="h-56 relative overflow-hidden rounded-t-lg">
        <Image
          height={160}
          width={400}
          src={workImage}
          alt="Project Image"
          className="w-full h-full object-cover rounded-t-lg"
        />

        {/* CATEGORY BADGE */}
        <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-orange-400 text-white font-semibold backdrop-blur">
          {item.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-lg mb-2">
          {item.title}
        </h3>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-6">
          {item.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full text-black bg-gray-100 border border-gray-100 hover:bg-orange-400 hover:text-white hover:-translate-y-1 transition duration-300 ease-in-out"
            >
              {t}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4 justify-between text-sm text-gray-600 pt-3 border-t border-dashed border-orange-400">
          <div className="flex gap-4">
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-orange-400 hover:font-semibold"
            >
              Live <FiExternalLink size={14} />
            </Link>

            {/* code link */}
            <GithubButton />
          </div>

          <div>
            <Link
              href="#"
              onClick={onCodeClick}
              className="flex items-center gap-1 hover:text-orange-400 hover:font-semibold"
            >
              View More <FiArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
