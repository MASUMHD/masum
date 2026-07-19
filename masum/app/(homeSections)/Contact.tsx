"use client";

import SectionName from "@/components/sectionName/SectionName";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="py-16 ">
      <div className="py-10">
        <SectionName width={40} name="CONTACT" />

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight  max-w-2xl">
          Let’s build something worth remembering.
        </h2>
      </div>

      <div className="w-full grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mb-8">
            Have a project in mind or just want to say hi? Send a note — I
            typically reply within a day.
          </p>

          {/* ICON LIST */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-4 group">
              <div className="p-2 rounded-lg bg-black/5 text-black group-hover:bg-black group-hover:text-white transition">
                <FiMail className="text-lg" />
              </div>
              <span className="text-gray-700 text-sm md:text-base group-hover:text-black transition">
                mrmasum2k4@gmail.com
              </span>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4 group">
              <div className="p-2 rounded-lg bg-black/5 text-black group-hover:bg-black group-hover:text-white transition">
                <FiGithub className="text-lg" />
              </div>
              <span className="text-gray-700 text-sm md:text-base group-hover:text-black transition">
                github.com/MASUMHD
              </span>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4 group">
              <div className="p-2 rounded-lg bg-black/5 text-black group-hover:bg-black group-hover:text-white transition">
                <FiLinkedin className="text-lg" />
              </div>
              <span className="text-gray-700 text-sm md:text-base group-hover:text-black transition">
                linkedin.com/in/masum
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-lg border border-gray-300 hover:border-orange-500 p-6 md:p-8">
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-base text-gray-900 font-semibold mb-2 tracking-[4px]">
                NAME
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-3 placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-base text-gray-900 font-semibold mb-2 tracking-[4px]">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="you@studio.com"
                className="w-full border rounded-lg px-4 py-3 placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-base text-gray-900 font-semibold mb-2 tracking-[4px]">
                MESSAGE
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about the project..."
                className="w-full border rounded-lg px-4 py-3 placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-black resize-none"
              />
            </div>

            {/* Button */}
            <button
              // type=""
              className="w-full bg-black text-white py-3 rounded-full hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer hover:border border-orange-500"
            >
              Send message <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
