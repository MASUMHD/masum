import About from "./(homeSections)/About";
import Contact from "./(homeSections)/Contact";
import Education from "./(homeSections)/Education";
import Experience from "./(homeSections)/Experience";
import Hero from "./(homeSections)/Hero";
import Projects from "./(homeSections)/projects/Projects";
import Skills from "./(homeSections)/Skills";

export default function Home() {
  return (
    <main>
     
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
