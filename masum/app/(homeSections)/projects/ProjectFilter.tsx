const filters = ["All", "Frontend", "Fullstack", "Next.js", "CMS"];

export default function ProjectFilter({ active, setActive }: any) {
  return (
    <div className="flex flex-wrap items-center bg-white w-fit p-2 rounded-lg mb-3 gap-2 ">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setActive(f)}
          className={`px-5 py-1 rounded-full cursor-pointer text-sm
          ${
            active === f
              ? "bg-black text-white"
              : "text-gray-900 border border-gray-200  hover:bg-black hover:text-white transition duration-300 cursor-pointer"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}