import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";

// Dynamically import components that are not immediately visible
const About = dynamic(() => import("@/sections/About"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded-lg" />
});
const TechnicalSkills = dynamic(() => import("@/sections/TechnicalSkills"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded-lg" />
});
const Education = dynamic(() => import("@/sections/Education"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded-lg" />
});
const Projects = dynamic(() => import("@/sections/Projects"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded-lg" />
});
const Contact = dynamic(() => import("@/sections/Contact"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded-lg" />
});
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="bg-shape top-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full" />
      <div className="bg-shape top-[40%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full" />
      <div className="bg-shape bottom-[10%] right-[-10%] w-[35%] h-[35%] bg-primary/5 rounded-full" />

      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
