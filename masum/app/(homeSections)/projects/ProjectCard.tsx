import Image from "next/image";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import workImage from "@/public/work_image.jpeg";
import Link from "next/link";

export default function ProjectCard({ item }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-orange-400 hover:-translate-y-1 transition duration-300 ease-in-out">
      {/* PROJECT IMAGE */}
      <div className="h-40 ">
        <Image
          height={160}
          width={400}
          src={workImage}
          alt="Project Image"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-6">
          {item.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="text-xs px-4 py-1 rounded-full bg-gray-100 border border-orange-500 font-semibold text-gray-800"
            >
              {t}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4 justify-between text-sm text-gray-600 pt-3 border-t border-dotted border-orange-400">
          <div className="flex gap-4">
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-orange-400 hover:font-semibold"
            >
              Live <FiExternalLink size={14} />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-orange-400 hover:font-semibold"
            >
              Code <FiGithub size={14} />
            </Link>
          </div>

          <div>
            <Link
              href="#"
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
