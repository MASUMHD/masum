import { FaProjectDiagram, FaUsers, FaCoffee } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import SectionName from "@/components/sectionName/SectionName";

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 z-10 relative">
      {/* LEFT CONTENT */}
      <div>

        <SectionName name="About" />

        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
          Building considered <br />
          products with quiet <br />
          craft.
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* RIGHT CONTENT */}
        <div className="">
          <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-6 max-w-xl">
            I'm a full stack developer with a deep interest in interface design,
            motion and the moments that make a product feel considered. I work
            with founders and teams to ship refined web experiences end-to-end.
          </p>

          <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
            My work spans SaaS interfaces, marketing sites, e-commerce, and
            custom CMS builds. I care about typography, restraint and the tiny
            details that add up to feel premium.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* CARD 1 */}
          <div className="bg-white rounded-lg justify-center p-6 hover:shadow-lg border border-gray-300 hover:border-orange-400 transition duration-300 ease-in-out flex items-center gap-4">
            <FaProjectDiagram size={24} className="text-xl text-orange-500" />
            <div>
              <h2 className="text-xl font-semibold text-black">50+</h2>
              <p className="text-sm text-gray-500">Projects shipped</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-lg justify-center p-6 hover:shadow-lg border border-gray-300 hover:border-orange-400 transition duration-300 ease-in-out flex items-center gap-4">
            <MdWork size={24} className="text-xl text-orange-500" />
            <div>
              <h2 className="text-xl font-semibold text-black">3+</h2>
              <p className="text-sm text-gray-500">Years experience</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-lg justify-center p-6 hover:shadow-lg border border-gray-300 hover:border-orange-400 transition duration-300 ease-in-out flex items-center gap-4">
            <FaUsers size={24} className="text-xl text-orange-500" />
            <div>
              <h2 className="text-xl font-semibold text-black">10+</h2>
              <p className="text-sm text-gray-500">Happy clients</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-lg justify-center p-6 hover:shadow-lg border border-gray-300 hover:border-orange-400 transition duration-300 ease-in-out flex items-center gap-4">
            <FaCoffee size={24} className="text-xl text-orange-500" />
            <div>
              <h2 className="text-xl font-semibold text-black">∞</h2>
              <p className="text-sm text-gray-500">Cups of coffee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
