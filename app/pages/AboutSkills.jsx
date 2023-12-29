import React from 'react'
import data from '../_data/data.json'

const AboutSkills = React.forwardRef((props, ref) =>  {
  const { aboutRef, skillsRef } = props
  
  let languages = data.skills.languages
  let frameworksLibraries = data.skills.frameworksLibraries
  let tools = data.skills.tools
  
  return (
    <main ref={aboutRef} className='w-screen min-h-screen flex justify-center items-center py-5'>

      <div className="flex flex-col items-center justify-center gap-3 sm:gap-15 sm:flex-row sm:items-stretch sm:my-auto sm:h-3/4 lg:gap-28">
        <div className='flex-1 space-y-2 px-10 w-full text-justify box-border pt-5 sm:px-10 sm:space-y-5 md:pt-0 md:w-10/12 md:max-w-96 '>
          <h2>about</h2>
          <p className='indent-5'>
            I am a third-year computer engineering student at the Technological Institute of the Philippines with a passion for computers.        
          </p>
          <p className='indent-5'>
            In my free time, I enjoy building sensible and meaningful software projects. In college, I spearhead group projects that are required for my course. 
          </p>
          <p className='indent-5'>
            These projects help me hone my skills in full-stack development, software engineering, data science, and machine learning.
            With these skills, I hope to become an accomplished and proficient professional in the field of software engineering.
          </p>
        </div> 

        <div ref={skillsRef} className='flex flex-col flex-1 box-border w-full pt-5 md:pt-0 md:w-10/12 md:max-w-96 md:flex-row'>
          <div className='skills flex flex-col px-10 gap-2 sm:px-10 md:gap-5 '>
            <h2>skills</h2>
            <div>
              <h3 className='ml-2'>languages</h3>
              <ul className='ml-4'>
                {languages.map((item) => {
                    return (
                      <li key={item.name} 
                        className={`border-4 ${{
                          1: 'border-accentLow',
                          2: 'border-accentMid',
                          3: 'border-accent',
                        }[item.confidenceLevel]}`}>
                              {item.name}
                          </li>
                    )
                  })}
              </ul>
            </div>
            <div>
              <h3 className='ml-2'>libraries & frameworks</h3>
              <ul className='ml-4'>
                {frameworksLibraries.map((item) => {
                      return (
                        <li key={item.name} 
                          className={`border-4 ${{
                            1: 'border-accentLow',
                            2: 'border-accentMid',
                            3: 'border-accent',
                          }[item.confidenceLevel]}`}>
                            {item.name}
                        </li>
                      )
                    })}
              </ul>
            </div>
            <div>
              <h3 className='ml-2'>tools</h3>
              <ul className='ml-4'>
                {tools.map((item) => {
                        return (
                          <li key={item.name} 
                            className={`border-4 ${{
                              1: 'border-accentLow',
                              2: 'border-accentMid',
                              3: 'border-accent',
                            }[item.confidenceLevel]}`}>
                                  {item.name}
                              </li>
                        )
                      })}
              </ul>
            </div>
          </div>
          
          <div className='flex flex-row-reverse gap-20 self-center mt-5 md:mt-16 md:flex-col md:self-start md:mr-3'>
            <div className='bg-accent w-3 aspect-square'  />
            <div className='bg-accentMid w-3 aspect-square' />
            <div className='bg-accentLow w-3 aspect-square' />
          </div>
        </div>
      </div>
    </main>
  )
})

AboutSkills.displayName = 'AboutSkills';
export default AboutSkills;
