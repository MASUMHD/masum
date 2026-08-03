const cmsList = ["All", "Shopify", "Webflow", "WordPress"];

export default function CMSFilter({ CMS, setCms }: any) {
  return (
    <div className="flex gap-3 mt-4 flex-wrap">
      {cmsList.map((c) => (
        <button
          key={c}
          onClick={() => setCms(c)}
          className={`px-4 py-1 rounded-full text-xs border transition
          ${
            CMS === c
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}