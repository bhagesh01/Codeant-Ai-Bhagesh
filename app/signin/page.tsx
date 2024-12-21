import React from 'react';
import RightSection from './_components/RightSection';
import BottomDiv from './_components/BottomDiv';
import TopDiv from './_components/TopDiv';


const Page=()=>{

  
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex">
      {/* Left side - Hero/Branding */}
      <div className="hidden lg:flex lg:w-1/2 p-12 relative overflow-hidden bg-[#FFFFFF]">

        <div className="absolute inset-0 m-auto -top-10 w-[70%] h-[60%]  px-8">
          <TopDiv/>
      <BottomDiv/>
        </div>

          <img src='./subtract.svg' alt='gola' className='absolute bottom-0 left-0'/>

      </div>





      {/* Right side - Sign in form */}
        <RightSection/>

     
    </div>
  );
}



export default Page;