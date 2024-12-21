import { ArrowUp } from 'lucide-react'
import React from 'react'

const BottomDiv = () => {
  return (
    <div className=' relative left-56 top-7 w-[14rem] h-36 rounded-xl shadow-xl z-20 px-6 pt-4 bg-white'>
    {/* upper div of the bottom div */}
      <div className='flex items-center justify-between '>
          <div className='flex items-center justify-center p-2 bg-[#9c90fa55] rounded-full'>
          <img src='./pie-chart.svg' alt='some logo' height={25} width={25}/>
          </div>

          <div>
            <h1 className='text-lg text-[rgb(0,73,198)] flex items-center justify-center gap-2 font-semibold'><ArrowUp/> 14%</h1>
            <p className='text-sm'>this week</p>
          </div>
      </div>

      {/* bottom div of the upper div */}
      <div className='font-semibold text-lg pt-4'>
        <p >issues fixed</p>
        <h1 className='text-xl'>500K+</h1>
      </div>
  </div>
  )
}

export default BottomDiv