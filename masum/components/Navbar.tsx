"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineX } from "react-icons/hi";
import ToggleButtons from "./ThemeToggleButton/ToggleButtons";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import logo from "@/public/loga-img-too.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full border-b border-[#e6dccb] dark:border-white/10 fixed top-0 left-0 z-50 ">
      <div className="max-w-300 mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg cursor-pointer">
          <div className="h-10 w-10 flex items-center justify-center object-cover rounded-full bg-black text-white">
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
          <span>
            <h2>
              Masum<span className="text-yellow-500">.</span>
            </h2>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                <h6>{link.name}</h6>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <ToggleButtons />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden cursor-pointer"
          >
            <HiOutlineMenuAlt3 size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-65 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b text-black">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <HiOutlineX size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-5 text-sm font-medium text-black">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 cursor-pointer"
        ></div>
      )}
    </nav>
  );
}
