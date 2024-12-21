import React from 'react'
import 'animate.css';
import Link from 'next/link';


const RightSection = () => {
  const buttonsData = [
    {
      index:1,
      src:"./github.svg",
      content:"Sign in With Github"
    },
    {
      index:2,
      src:"./bitbucket.svg",
      content:"Sign in With Bitbucket"
    },
    {
      index:3,
      src:"./azure.svg",
      content:"Sign in With Azure Devops"
    },
    {
      index:4,
      src:"./gitlab.svg",
      content:"Sign in With Gitlab"
    },
  ]

  
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center -pt-10 animate__animated animate__zoomIn">
    <div>
    <div className="w-[100%] h-[80%] border-[1px] bg-[#FFFFFF] rounded-lg max-w-md xl:max-w-full xl:mx-4 flex flex-col items-center justify-center py-6 px-6">
       <div className="text-center mb-8">
       <Link href={"/"} className="flex items-center justify-center gap-2 mb-4">
     <img
       src="./siddenav-logo.svg"
       alt="logo"
       height={"30px"}
       width={"30px"}
     />
     <span className="text-4xl pt-2 font-thin">CodeAnt Ai</span>
   </Link>
         <h1 className="text-3xl font-semibold text-gray-900 mb-4 ">Welcome to CodeAnt AI</h1>
       <div className='flex items-center justify-center gap-2'>
       <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 px-16 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
           <span className="text-gray-500">SAAS</span>
         </button>

         <button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-2.5 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
           Self Hosted
         </button>
       </div>
       </div>




       <div className='w-full h-[0.5px] bg-gray-300 mb-8'></div>


       <div className="space-y-4">


         {
           buttonsData.map((item)=>{
             return(
               <button 
               key={item.index}
               className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 px-24 py-2.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
           {/* <GithubIcon className="w-5 h-5" /> */}
           <img src={`${item.src}`} alt='button Logo' height={20}  width={20}/>
           <span>{item.content}</span>
         </button>
             )
           })
         }
         
       </div>

     </div>
     
       <p className="text-center text-sm text-gray-500 mt-8">
         By signing up you agree to the{' '}
         <a href="#" className="text-black font-semibold">
           Privacy Policy
         </a>
       </p>
    </div>
   </div>
  )
}

export default RightSection