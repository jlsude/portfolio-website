"use client";
import React, { useRef, useState, useEffect } from "react";
import data from "../_data/data.json";
import Carousel from "../../components/ui/Carousel";
import ProjectModal from "../../features/projects/ProjectModal";
import ProjectCard from "../../features/projects/ProjectCard";
import type { Project } from "../../types/Project";

const Page = React.forwardRef((props, ref) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [projectModalData, setProjectModalData] = useState<Project | null>(
    null,
  );
  const projectsRef = useRef(null);
  const projects = data.projects as Project[];

  const scrollToSection = (ref: any) => {
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
      {displayModal && projectModalData?.projectName ? (
        <ProjectModal {...projectModalData} setDisplayModal={setDisplayModal} />
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

Page.displayName = "Page";
export default Page;
