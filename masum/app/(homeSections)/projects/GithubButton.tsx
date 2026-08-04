import Link from "next/link";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";

export default function GithubButton() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
  onClick={(e) => {
    e.stopPropagation();
    setOpen(true);
  }}
  className="flex items-center gap-1 hover:text-orange-400 hover:font-semibold"
>
  Code <FiGithub size={14} />
</button>

      {open && (
  <div
    className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 rounded-lg"
    onClick={() => setOpen(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white w-[90%] max-w-sm rounded-xl shadow-xl p-5 relative animate-fadeIn"
    >
      {/* CLOSE */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
      >
        ✕
      </button>

      <h3 className="text-center font-semibold mb-4">
        Choose Code Type
      </h3>

      <div className="flex flex-col gap-3">
        <Link href="#">Frontend Code</Link>
        <Link href="#">Backend Code</Link>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
