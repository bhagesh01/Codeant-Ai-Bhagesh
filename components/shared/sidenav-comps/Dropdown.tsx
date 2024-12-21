

"use client"
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState("UtkarshDhairyaLigitimate");

  const truncateText = (text: string, max: number) => {
    return text.length > max ? text.slice(0, max) + "..." : text;
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="relative px-4 w-screen xl:w-[16vw]">
      <button
        onClick={toggleDropdown}
        className="pl-4 pr-4 py-2 mt-3 min-w-full xl:w-20 text-black bg-white rounded-md shadow-lg flex items-center justify-between text-default hover:bg-slate-100 gap-2"
      >
        {truncateText(`${dropdownText}`, 15)}
        {
          isOpen ? ( <ChevronUp />) : (<ChevronDown />)
        }
        
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-screen xl:w-fit mr-2 bg-white border border-gray-200 rounded-md shadow-md">
          <li 
          onClick={()=>{setDropdownText("UtkarshDhairya");
            setIsOpen(!isOpen)
          }}
          className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
          UtkarshDhairya
          </li>
          <li 
          onClick={()=>{setDropdownText("AftabAttarBhaijaanLigitimate");
            setIsOpen(!isOpen)
          }}
          className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
          AftabAttarBhaijaan
          </li>
          <li 
          onClick={()=>{setDropdownText("AvinashChiatreBhaijaanLigitimate");
            setIsOpen(!isOpen)
          }}
          className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
          AvinashChiatreBhaijaan
          </li>
          <li 
          onClick={()=>{setDropdownText("SurajDivekarBhaijaan");
            setIsOpen(!isOpen)
          }}
          className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
          SurajDivekarBhaijaan
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;













