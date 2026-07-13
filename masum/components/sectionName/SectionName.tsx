import { BsStars } from "react-icons/bs";

export default function SectionName({
  name,
  width,
}: {
  name: string;
  width?: number;
}) {
  return (
    <div
      className={`inline-flex mx-auto text-xs tracking-widest px-3 py-1 rounded-full border border-gray-300 dark:border-gray-300 items-center justify-center gap-2 ${width ? width : "w-28"} uppercase text-center mb-6`}
    >
      <span className="text-[#e3a73b]">
        <BsStars size={14} />
      </span>
      <span>{name}</span>
    </div>
  );
}
