import SectionName from '@/components/sectionName/SectionName';

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="">
        <SectionName width={40} name="PROJECTS" />

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-2xl">
          Selected work.
        </h2>
      </div>
    </section>
  );
}
