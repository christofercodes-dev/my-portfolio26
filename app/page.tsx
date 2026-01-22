import Hero from "@/components/Hero";
import Image from "next/image";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <main>
       <Hero/>
       <Projects/>
       <Contact/>

      </main>
    </div>
  );
}
