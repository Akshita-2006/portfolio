import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Achievements } from "@/sections/Achievements";
import { Leadership } from "@/sections/Leadership";
import { Skills } from "@/sections/Skills";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Leadership />
      <Skills />
      <Certifications />
      <Contact />
    </>
  );
}
