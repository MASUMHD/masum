
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
// import image from "@/public/Masum.png";
import image from "@/public/profile.jpg";
import Year from "@/components/Year";
import { FiMapPin } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="w-full py-16 md:24 lg:py-36 ">
      <div className="max-w-300 mx-auto px-4 grid md:grid-cols-2 gap-20 md:gap-10 items-center ">
        {/* LEFT */}
        <div className="order-2 md:order-1 text-center md:text-start">
          <div className="inline-flex items-center gap-2 border px-4 py-1 rounded-full text-xs text-gray-500 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            AVAILABLE FOR SELECT WORK • <Year />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-yellow-600">Rifath</span>
            <br />
            <span className="text-[#6b625c] tracking-[10px]">Front-End</span>
            <br />
            <span className="text-[#6b625c] tracking-wide">Developer</span>
          </h1>

          <p className="text-gray-500 text-lg mt-6 max-w-xl">
            I design and build premium digital experiences — from marketing
            sites and SaaS products to Shopify and Webflow storefronts. Focused
            on craft, performance and quiet luxury.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
            <button className="flex items-center gap-2 bg-black hover:bg-yellow-600/90 text-white px-6 py-3 rounded-full text-sm hover:opacity-90 transition duration-400 cursor-pointer">
              View Projects <FiArrowRight />
            </button>

            <button className="px-6 py-3 rounded-full border text-sm  hover:bg-yellow-600/90 hover:text-white transition duration-400 cursor-pointer">
              Contact Me
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 mt-8 text-sm text-gray-500 flex-wrap">
            <span className="flex items-center gap-3"><FiMapPin /> Remote <span>•</span> Worldwide</span>
            <span>•</span>
            <span>3+ years crafting for the web</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="bg-[#dcd7cf] rounded-t-3xl rounded-b-xl w-75 md:w-90">
            <div className="rounded-t-2xl overflow-hidden">
              <Image
                src={image}
                alt="Md. Masum Billah"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-2 px-4 py-1">
              <span>© masum.dev</span>
              <span>v.<Year /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
