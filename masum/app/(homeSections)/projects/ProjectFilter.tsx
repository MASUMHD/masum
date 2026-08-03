const filters = ["All", "Frontend", "Fullstack", "Next.js", "CMS"];

export default function ProjectFilter({ active, setActive }: any) {
  return (
    <div className="flex gap-3 flex-wrap">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setActive(f)}
          className={`px-4 py-1 rounded-full text-sm border transition
          ${
            active === f
              ? "bg-black text-white"
              : "bg-white text-gray-600"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}