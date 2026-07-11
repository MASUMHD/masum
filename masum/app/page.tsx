import About from "@/app/(homeSections)/About";
import Contact from "@/app/(homeSections)/Contact";
import Education from "@/app/(homeSections)/Education";
import Experience from "@/app/(homeSections)/Experience";
import Hero from "@/app/(homeSections)/Hero";
import Projects from "@/app/(homeSections)/projects/Projects";
import Skills from "@/app/(homeSections)/Skills";

export default function Home() {
  return (
    <main className="">
     
        <div className="mb-40">
          
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
         
        </div>
        
    </main>
  );
}
