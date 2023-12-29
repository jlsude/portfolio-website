"use client"
import { useRef } from "react"
import Mainpage from './pages/Mainpage'
import AboutSkills from './pages/AboutSkills'
import Projects from './pages/Projects'
import Footer from './pages/Footer'

export default function Home() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <main className='overflow-x-hidden'>
      <Mainpage 
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
      />
      <AboutSkills aboutRef={aboutRef} skillsRef={skillsRef}/>
      <Projects ref={projectsRef}/>
      <Footer/>
    </main>
  )
}
