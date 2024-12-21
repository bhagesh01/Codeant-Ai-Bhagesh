"use client";

import { AlignJustifyIcon } from "lucide-react";
import { Cloud, Code, DockIcon, Home, LogOut, Phone, Settings } from 'lucide-react'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Dropdown from "@/components/shared/sidenav-comps/Dropdown";

const DashNav = () => {

  
const dashnav= [
  {
    index:1,
    href:"#code-review",
    icon:Code,
    title:"Ai Code Review"
  },
  {
    index:2,
    href:"#code-security",
    icon:Cloud,
    title:"Code Security"
  },
  {
    index:3,
    href:"#how-to-use",
    icon:DockIcon,
    title:"How to use"
  },
  {
    index:4,
    href:"#settings",
    icon:Settings,
    title:"Settings"
  },
  {
    index:5,
    href:"#support",
    icon:Phone,
    title:"Support"
  },
  {
    index:6,
    href:"/signin",
    icon:LogOut,
    title:"LogOut"
  },
]




  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="
    xl:hidden
    flex items-center justify-between px-4 py-2 bg-white rounded-br-lg rounded-bl-lg relative"
    >
      <Link href={"/"} className="flex items-center justify-center gap-2">
        <img
          src="./siddenav-logo.svg"
          alt="logo"
          height={"30px"}
          width={"30px"}
        />
        <span className="text-3xl pt-2 font-thin">CodeAnt Ai</span>
      </Link>

      <div className="cursor-pointer">
        <motion.div
          className="cursor-pointer p-2 rounded-full w-full h-full z-[100]"
          onClick={handleToggle}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? (
            <img src="./cross.svg" alt="cross" height={25} width={25}/>
          ) : (
            <AlignJustifyIcon className="text-black" />
          )}
        </motion.div>

        {/* Full-Screen Animated Menu */}
        <motion.div
          className={`fixed inset-0 top-14 z-50 flex flex-col items-center justify-start h-[90%] bg-white transition-all ${
            isOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="text-left mt-8">
            
      <div className="">
        <Dropdown/>
      </div>
      <div className='flex flex-col gap-2 mt-6 px-4'>
      <Link 
      onClick={()=>{setIsOpen(!isOpen)}}
      href='#Respositories' className='flex items-center justify-left gap-2 px-6 py-2 text-white font-semibold bg-[#1570EF] rounded-lg w-fit'>
<Home/>
Repositories
</Link>
          {
                dashnav.map((item)=>{
                  const IconComponent = item.icon;
                  return(
                    <Link 
                    onClick={()=>{setIsOpen(!isOpen)}}
                    key={item.index} href={`${item.href}`} className='flex items-center justify-left w-fit font-semibold gap-2 px-2 py-1'>
{IconComponent && <IconComponent />}
{item.title}
</Link>
                  )
                })
          }
      </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashNav;
