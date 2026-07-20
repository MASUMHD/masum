import SectionName from "@/components/sectionName/SectionName";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="">
        <SectionName width={40} name="CONTACT" />

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-2xl">
          Let’s build something worth remembering.
        </h2>
      </div>

      <div className="w-full grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT CONTENT */}
        <div className="mt-10">
          <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-base mb-8">
            Have a project in mind or just want to say hi? Send a note — I
            typically reply within a day.
          </p>

          {/* ICON LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div className="flex flex-col items-start  gap-2 group border border-gray-200 hover:border-orange-500 p-4 rounded-lg py-6 bg-white">
              <div className="p-2 rounded-lg bg-black/5 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition">
                <FiMail className="text-lg" />
              </div>
              <div className="border-b border-orange-500 border-dashed w-full pb-2 mb-1 text-gray-900 font-semibold">
                <h4>Email :</h4>
              </div>
              <span className="text-gray-700 text-sm md:text-base group-hover:text-black transition cursor-pointer">
                mrmasum2k4@gmail.com
              </span>
            </div>

            {/* FaWhatsapp */}
            <div className="flex flex-col items-start  gap-2 group border border-gray-200 hover:border-orange-500 p-4 rounded-lg py-6 bg-white">
              <div className="p-2 rounded-lg bg-black/5 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition">
                <FaWhatsapp className="text-lg" />
              </div>
              <div className="border-b border-orange-500 border-dashed w-full pb-2 mb-1 text-gray-900 font-semibold">
                <h4>What's App :</h4>
              </div>
              <span className="text-gray-700 text-sm md:text-base group-hover:text-black transition cursor-pointer">
                +880 18654-55901
              </span>
            </div>

            {/* GitHub */}
            <div className="flex flex-col items-start  gap-2 group border border-gray-200 hover:border-orange-500 p-4 rounded-lg py-6 bg-white">
              <div className="p-2 rounded-lg bg-black/5 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition">
                <FiGithub className="text-lg" />
              </div>
              <div className="border-b border-orange-500 border-dashed w-full pb-2 mb-1 text-gray-900 font-semibold">
                <h4>GitHub :</h4>
              </div>
              <span className="text-gray-700 text-sm md:text-base group-hover:text-black transition cursor-pointer">
                github.com/MASUMHD
              </span>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-start  gap-2 group border border-gray-200 hover:border-orange-500 p-4 rounded-lg py-6 bg-white">
              <div className="p-2 rounded-lg bg-black/5 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition">
                <FiLinkedin className="text-lg" />
              </div>
              <div className="border-b border-orange-500 border-dashed w-full pb-2 mb-1 text-gray-900 font-semibold">
                <h4>Linkdin :</h4>
              </div>
              <span className="text-gray-700 text-sm md:text-base group-hover:text-black transition cursor-pointer">
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
                className="w-full border rounded-lg px-4 py-3 placeholder:text-gray-400 placeholder:text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-base text-gray-900 font-semibold mb-2 tracking-[4px]">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full border rounded-lg px-4 py-3 placeholder:text-gray-400 placeholder:text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
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
                className="w-full border rounded-lg px-4 py-3 placeholder:text-gray-400 text-gray-900 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-black resize-none"
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
