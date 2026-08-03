const cmsList = ["All", "Shopify", "Webflow", "WordPress"];

export default function CMSFilter({ CMS, setCms }: any) {
  return (
    <div className="flex flex-wrap items-center bg-white w-fit p-2 rounded-lg mb-8 gap-2 ">
      {cmsList.map((c) => (
        <button
          key={c}
          onClick={() => setCms(c)}
          className={`px-5 py-1 rounded-full cursor-pointer text-sm
          ${
            CMS === c
              ? "bg-black text-white"
              : "text-gray-900 border border-gray-200  hover:bg-black hover:text-white transition duration-300 cursor-pointer"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}