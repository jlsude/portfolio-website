import Image from 'next/image'
import React from 'react'
import ProjectCard from './components/ProjectCard'
import data from '../_data/data.json'

const Projects = React.forwardRef((props, ref) =>  {

  const projects = data.projects;

  return (
    <main ref={ref} className='flex w-screen min-h-screen flex-col items-center '>
        <h2 className='my-10'>projects</h2>
        <div className='flex flex-col gap-5 items-center pb-10'>

          {projects.map((project, index) => {
            return (
              <ProjectCard 
                key={index} 
                projectName={project.projectName}
                github={project.github}
                backend={project.backend}
                demo={project.demo}
                platform={project.platform}
                description={project.description}
                status={project.status}
                tech={project.tech}
                isPrivate={project.isPrivate}
                isOnline={project.isOnline}
                thumbnail={project.thumbnail}
                hasBackend={project.hasBackend}

              />
            )
          })}

            
        </div>
    </main>
  ) 
})

Projects.displayName = 'Projects';
export default Projects;