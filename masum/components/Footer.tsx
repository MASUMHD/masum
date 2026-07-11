
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Year from "@/components/Year";

export default function Footer() {

  return (
    <footer className="w-full border-t bg-[#f7f5f2]">
      <div className="max-w-300 mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Text */}
        <h6 className="text-sm text-gray-600 text-center md:text-left">
          © <Year /> Masum. Crafted with care.
        </h6>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full border text-gray-600 hover:bg-black/80 hover:text-white transition duration-400 cursor-pointer"
          >
            <FiGithub size={16} />
          </a>

          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full border text-gray-600 hover:bg-black/80 hover:text-white transition duration-400 cursor-pointer"
          >
            <FaLinkedinIn size={16} />
          </a>

          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full border text-gray-600 hover:bg-black/80 hover:text-white transition duration-400 cursor-pointer"
          >
            <FaEnvelope size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
