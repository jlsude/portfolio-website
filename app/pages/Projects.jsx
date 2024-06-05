import React, { useRef, useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import data from "../_data/data.json";
import Carousel from "../components/Carousel";
import ProjectModal from "../components/ProjectModal";

const Projects = React.forwardRef((props, ref) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [projectModalData, setProjectModalData] = useState({});
  const projectsRef = useRef(null);
  const projects = data.projects;

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    if (displayModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [displayModal]);

  return (
    <main
      ref={projectsRef}
      className="grid-template-system relative min-h-screen w-screen bg-[#231D18]"
    >
      {displayModal ? (
        <ProjectModal
          {...projectModalData}
          setDisplayModal={setDisplayModal}
          className={"absolute z-10"}
        />
      ) : null}

      <div className="col-span-full row-start-1 flex items-end justify-center md:items-center">
        <h2>projects</h2>
      </div>
      <Carousel>
        {projects.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              {...item}
              onClick={() => {
                scrollToSection(projectsRef);
                setDisplayModal(true);
                setProjectModalData(item);
              }}
            />
          );
        })}
      </Carousel>
    </main>
  );
});

Projects.displayName = "Projects";
export default Projects;
