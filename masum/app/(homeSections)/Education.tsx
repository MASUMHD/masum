import SectionName from "@/components/sectionName/SectionName";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const data = [
    {
      year: "2021 — 2025",
      title: "B.Sc. in Computer Science",
      institute: "University of Technology",
      desc: "Focused on software engineering, algorithms and modern web systems.",
    },
    {
      year: "2019 — 2021",
      title: "Higher Secondary — Science",
      institute: "City College",
      desc: "Mathematics, Physics and early self-taught programming.",
    },
    {
      year: "2024",
      title: "Full Stack Web Development",
      institute: "Certified Program",
      desc: "MERN stack, deployment, testing and production workflows.",
    },
  ];

  return (
    <section className="w-full py-16 ">
      <div className="">
        {/* Header */}
        <div className="mb-10">
          <SectionName width={36} name="QUALIFICATIONS" />

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Education & training.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 dark:border-gray-300 space-y-10">
          {data.map((item, index) => (
            <div key={index} className="relative pl-10">
              {/* Icon */}
              <div className="absolute -left-3.5 -top-1 w-7 h-7 rounded-full  flex items-center justify-center border bg-amber-50  border-gray-300 dark:border-gray-300">
                <FaGraduationCap size={18} className="text-[#e3a73b]" />
              </div>

              {/* Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 md:p-6">
                <p className="text-sm text-gray-500 mb-1">{item.year}</p>

                <h3 className="text-lg md:text-xl lg:text-2xl text-black font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.institute}
                </p>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
