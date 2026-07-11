"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function ToggleButtons() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setRotate(!rotate);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600
           text-black dark:text-white
           
           hover:bg-black hover:text-white
           dark:hover:bg-white/20
           
           hover:shadow-md hover:scale-105
           
           transition-all duration-300
           flex items-center justify-center cursor-pointer"
    >
      <span
        className={`inline-block transform transition-all duration-700 ease-in-out will-change-transform
        ${rotate ? "rotate-360 scale-110" : "rotate-0 scale-100"}`}
      >
        {theme === "dark" ? (
          <FiSun size={18} className="text-white" />
        ) : (
          <FiMoon size={18} className="text-black" />
        )}
      </span>
    </button>
  );
}
