import React from "react";
import data from "../_data/data.json";
import SkillsFlair from "../components/SkillsFlair";

const AboutSkills = React.forwardRef((props, ref) => {
  const { aboutRef, skillsRef } = props;

  let languages = data.skills.languages;
  let frameworksLibraries = data.skills.frameworksLibraries;
  let tools = data.skills.tools;

  return (
    <main
      ref={aboutRef}
      className="grid-template-system relative min-h-screen w-screen bg-background"
    >
      <div className="col-span-full row-span-3 flex flex-col gap-3 p-5 text-justify md:col-span-4 md:col-start-1 md:row-span-4 md:row-start-2 xl:col-span-5 xl:col-start-2 xl:row-span-4 xl:row-start-2">
        <h2 className="mb-5 text-center">about</h2>
        <p className="indent-5">
          I’m a senior Computer Engineering student at the Technological
          Institute of the Philippines - Manila with a passion for full-stack
          development, software engineering, data science, machine learning.
          Throughout my college journey, I’ve been honored with awards like
          President's, Vice President's, and Dean's Listers.
        </p>
        <p className="indent-5">
          In my free time, I love working on cool software projects to sharpen
          my skills and teaming up with my classmates on various projects. I
          also join hackathons and events at my school related to my passion and
          interests. I enjoy working with people from diverse backgrounds and am
          always open to future collaborations and work.
        </p>
        <p className="indent-5">
          As of the moment, I’m diving into web and mobile development and
          mixing in several machine learning models. My goal is to become an
          accomplished and proficient professional in the field of software
          engineering who can create innovative and impactful solutions.
        </p>
      </div>

      <div className="col-span-full row-span-4 flex flex-col p-5 text-justify md:col-span-4 md:col-start-5 md:row-span-4 md:row-start-2 xl:col-span-5 xl:col-start-7 xl:row-span-4 xl:row-start-2">
        <h2 className="mb-5 text-center">skills</h2>
        <div className="flex flex-col md:flex-row">
          <div className="skills flex flex-col gap-3 px-5">
            <div>
              <h3 className="">languages</h3>
              <SkillsFlair data={languages} />
            </div>

            <div>
              <h3 className="text-left">libraries & frameworks</h3>
              <SkillsFlair data={frameworksLibraries} />
            </div>

            <div>
              <h3 className="">tools</h3>
              <SkillsFlair data={tools} />
            </div>
          </div>
          <div className="mt-5 flex flex-row-reverse gap-20 self-center md:ml-5 md:mt-16 md:flex-col md:self-start">
            <div className="aspect-square w-3 bg-accent" />
            <div className="aspect-square w-3 bg-accent/50" />
            <div className="aspect-square w-3 bg-accent/20" />
          </div>
        </div>
      </div>
    </main>
  );
});

AboutSkills.displayName = "AboutSkills";
export default AboutSkills;
