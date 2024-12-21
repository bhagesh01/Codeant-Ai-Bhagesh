import Sidenav from '@/components/shared/Sidenav'
import React from 'react'
import Hero from './_components/Hero'

const page = () => {
  return (
    <div className='lg:flex min-h-screen'>
      <Sidenav/>
      <Hero/>
    </div>
  )
}

export default page