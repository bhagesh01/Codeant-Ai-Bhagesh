
"use client"

import React, { useState } from 'react'
import Dropdown from './sidenav-comps/Dropdown'
import Link from 'next/link'
import { Cloud, Code, DockIcon, Home, LogOut, Phone, Settings } from 'lucide-react'

const Sidenav = () => {

  const [activeIndex, setActiveIndex] = useState<number>(0);



  return (
    <aside className='hidden min-h-screen xl:flex flex-col items-center justify-between w-[17%]'>
      <div>
      <Link href={"/"} className='flex items-center justify-center gap-2 pt-4'>
        <img src='./siddenav-logo.svg' alt='logo' height={"30px"} width={"30px"}/>
        <span className='text-3xl pt-2 font-thin'>
          CodeAnt Ai
        </span>
      </Link>
      
      <div>
        <Dropdown/>
      </div>

      <div className="flex flex-col gap-2 mt-6">
      {[
        { href: '#Repositories', icon: <Home />, label: 'Repositories' },
        { href: '#code-review', icon: <Code />, label: 'AI Code Review' },
        { href: '#code-security', icon: <Cloud />, label: 'Code Security' },
        { href: '#how-to-use', icon: <DockIcon />, label: 'How To Use' },
        { href: '#settings', icon: <Settings />, label: 'Settings' },
      ].map((link, index) => (
        <Link
          key={index}
          href={link.href}
          onClick={() => setActiveIndex(index)}
          className={`flex items-center justify-left gap-2 px-2 py-2 ml-5 font-semibold rounded-lg transition-all duration-300 ${
            activeIndex === index
              ? 'bg-blue-500 text-white'
              : 'bg-transparent text-black'
          }`}
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
    </div>

{/* <div className='flex flex-col gap-2 mt-6'>
<Link href='#Respositories' className='flex items-center justify-left gap-2 px-2 w-fit py-2 ml-6 text-white font-semibold bg-[#1570EF] rounded-lg'>
<Home/>
Repositories
</Link>
<Link className='flex items-center justify-left font-semibold gap-2 px-2 py-1 ml-5' href='#code-review'>
<Code/>
Ai Code Review
</Link>
<Link className='flex items-center justify-left font-semibold gap-2 px-2 py-1 ml-5' href='#code-security'>
<Cloud/>
Code Security
</Link>
<Link className='flex items-center justify-left font-semibold gap-2 px-2 py-1 ml-5' href='#how-to-use'>
<DockIcon/>
How To Use
</Link>
<Link className='flex items-center justify-left font-semibold gap-2 px-2 py-1 ml-5' href='#settings'>
<Settings/>
Settings
</Link>

</div> */}
      </div>
      <div className='mb-4 mr-20'>
      <Link className='flex items-center justify-center font-semibold gap-2 py-1 mb-3' href='#support'>
<Phone/>
Support
</Link>
      <Link className='flex items-center justify-center font-semibold gap-2 py-1' href='/signin'>
<LogOut/>
LogOut
</Link>
      </div>
    </aside>
  )
}

export default Sidenav