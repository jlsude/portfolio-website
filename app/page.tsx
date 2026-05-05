"use client";

import Footer from "../components/layout/Footer";
import SecondaryWaves from "../features/about/SecondaryWaves";
import AboutSkills from "./about/page";
import Mainpage from "./main/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main className="scrollBar dark bg-background relative overflow-x-hidden">
      <Mainpage />
      <AboutSkills />
      <SecondaryWaves />
      <Projects />
      <Footer />
    </main>
  );
}
