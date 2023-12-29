import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function ProjectCard({projectName, github, backend, 
        demo, platform, description, status, tech, isPrivate, isOnline, thumbnail, hasBackend}) {

    return (
        <div className='flex flex-col w-8/12 shadow-md md:w-9/12 md:min-w-[42rem] md:h-80 border md:flex-row rounded-xl bg-cardColor '>

            <Image src={thumbnail} alt={projectName} width={500} height={500} priority={true}
                className='w-full aspect-video md:h-full md:w-auto md:aspect-square rounded-t-xl md:rounded-l-xl md:rounded-tr-none 
                bg-white object-cover'
            />
            <div className='flex p-4 flex-col h-full md:w-full relative'>
                <h4 className='text-accent md:mt-8 md:mb-2'>
                    {projectName}
                </h4>

                <ul className='md:absolute md:right-3 my-1 md:my-0'>
                    {!isPrivate ? (
                        <li  className='border-primary inline-block border-4 rounded-full 
                        px-1 py-0.5 text-xs mx-1 my-0.5 md:text-xs ml-0'>
                            <Link href={github} target="_blank" className='hover:underline' rel="noopener noreferrer">Repo</Link>
                            {hasBackend? <>
                                <span>&nbsp;|&nbsp;</span>
                                <Link href={backend} target="_blank" className='hover:underline' rel="noopener noreferrer">Backend</Link>
                            </> : (null)}
                            
                        </li>
                    ) : (null)}
                    {isOnline ? (
                        <li className='border-primary inline-block border-4 rounded-full px-1 py-0.5 text-xs mx-1 my-0.5 md:text-xs '>
                            <Link href={demo} target="_blank" className='hover:underline' rel="noopener noreferrer">Demo</Link>
                        </li>
                    ) : (null)}
                    
                </ul>

                <label className='italic'>
                    Platform: {platform}
                </label>

                <p > 
                    {/* limits to 200 characthers only */}
                    {description}
                </p>
                
                <label className='mt-5 mb-1 md:mt-auto '>
                    Status: {status}
                </label>
                
                <ul>
                    {tech.map((item)=> {
                        return (
                            <li key={item} className='border-accent inline-block border-4 
                                rounded-full px-1 py-0.5 text-xs mx-1 my-0.5 md:text-xs'>
                                {item}
                            </li>
                        )
                    })}
                </ul>
                
                
            </div>
        </div>
    )
}
