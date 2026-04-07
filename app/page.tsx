import Hero from "@/components/Hero";
import Image from "next/image";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Capabilities from "@/components/Capabilities";
import ColorWidgets from "@/components/ColorWidgets";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div>
      <main>
       <Hero/>
       <Capabilities/>
       <Projects/>
      {/*  <ColorWidgets/> */}
       
       <Contact/>

      </main>
    </div>
  );
}
