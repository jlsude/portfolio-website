"use client"
import React from 'react'
import Image from 'next/image'
import programmer from '../../public/programmergif.gif'
import github from '../../public/github.png'
import mail from '../../public/mail.svg'
import upwork from '../../public/upwork.svg'
import TypeEffect from './components/TypeEffect'


export default function Mainpage({scrollToAbout, scrollToSkills, scrollToProjects}) {

  return (
    <main className='flex flex-col items-center justify-evenly w-screen h-dvh '>
      
      <div className='flex flex-col justify-evenly w-full h-3/4 mx-16 gap-5 lg:flex-row-reverse md:items-center lg:h-1/2 lg:gap-18 '>
          <div className='w-3/4 min-w-64 max-w-96 self-center md:w-96'>
              <Image src={programmer} alt="programmer" priority={true} className='rounded-3xl aspect-square object-cover'/>
          </div>

          <div className='text-center lg:text-start'>
              <label>hi! i am</label>
              <h1>john louie</h1>
              <p className='mx-10 sm:mx-0'>a computer engineering student from manila, philippines</p>
              <p className='inline-block'>
                specializing in&nbsp;
              </p>
              <span className='text-accent font-bold inline-block'>
                <TypeEffect />
              </span>
              
              <ul className='flex flex-row gap-10 items-center mt-5 justify-center'>
                <li className='w-8 cursor-pointer'>
                  <a href="https://github.com/jlsude" target='_blank' rel="noopener noreferrer">
                    <Image src={github} alt="github"/>
                  </a>
                </li>
                <li className='w-10 cursor-pointer' >
                  <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=sudejohnlouie@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Image src={mail} alt="mail" />
                  </a>
                </li>
                <li className='w-10 cursor-pointer'>
                  <a href="https://www.upwork.com/freelancers/~012761a013c53f8aa9?viewMode=1" target="_blank" rel="noopener noreferrer">
                    <Image src={upwork} alt="upwork" />
                  </a>
                </li>
              </ul>
          </div>
          
      </div>

      <div className='flex justify-center w-full '>
        <ul className='flex flex-row gap-10 sm:gap-20 lg:gap-56'>
          <li>
            <button onClick={scrollToAbout}>
              <h2 className='hover:underline'>about</h2>
            </button>
          </li>
          <li>
            <button onClick={scrollToAbout} className='hidden sm:inline-block'>
              <h2 className='hover:underline'>skills</h2>
            </button>

            <button onClick={scrollToSkills} className='sm:hidden'>
              <h2 className='hover:underline'>skills</h2>
            </button>

          </li>
          <li>
            <button onClick={scrollToProjects}>
              <h2 className='hover:underline'>projects</h2>
            </button>
          </li>
        </ul>
      </div>

    </main>
  )
}
