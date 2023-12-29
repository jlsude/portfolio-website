import React from 'react'
import packageJson from '../../package.json'
export default function Footer() {
    const { version } = packageJson

    return (
        <footer className='w-screen h-20 p-2 bg-cardColor shadow-md'>
            <div className='flex flex-col items-center justify-start'>
                <label>© 2024 All Rights Reserved</label>
                {/* <label>Inspired by Arpan Neupane's</label> */}
                <label>v{version}</label>
            </div>
        </footer>
    )
}
