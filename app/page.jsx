"use client";
import Mainpage from "./pages/Mainpage";
import AboutSkills from "./pages/AboutSkills";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

import SecondaryWaves from "./components/SecondaryWaves";
import ProjectModal from "./components/ProjectModal";

export default function Home() {
  return (
    <main className="scrollBar dark relative overflow-x-hidden bg-background">
      <Mainpage />
      <AboutSkills />
      <SecondaryWaves />
      <Projects />
      <Footer />
    </main>
  );
}
