import React from 'react'

const TopDiv = () => {
  return (
    <div className='relative top-10 w-[27rem] h-40 rounded-xl shadow-xl z-10 '>
            <div className="flex items-center justify-center gap-2 mb-4 px-6 pt-4">
        <img
          src="./siddenav-logo.svg"
          alt="logo"
          height={"25px"}
          width={"25px"}
        />
        <span className="text-xl whitespace-nowrap pt-2 font-semibold">Ai To Detect & Auto-Fix Bas Code</span>
      </div>
            <div id='seperator' className='w-full h-[0.1px] bg-gray-600'></div>



            <div className='flex items-center justify-center gap-4 pt-5'>
          <div className='text-center'>
            <h1 className='font-semibold'>30+</h1>
            <p>Language support</p>
          </div>
          <div className='text-center'>
          <h1 className='font-semibold'>10K+</h1>
          <p>Developers</p>
          </div>
          <div className='text-center'>
          <h1 className='font-semibold'>100K+</h1>
          <p>Hours Saved</p>
          </div>
            </div>
          </div>
  )
}

export default TopDiv