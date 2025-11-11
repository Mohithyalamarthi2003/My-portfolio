import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Logo} from "./utiles/Cdn.js";
import ThemeToggle from "../../ThemeToggle.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
      <div className=" top-1">
       <div className=" bg-none border-solid h-20  rounded-full sticky  z-50 ">
      
     
      </div>
    <nav className="bg-yellow-400 p-4 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center gap-10">
       <img src={Logo} className="w-25 h-18 rounded-full"/>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-15 font-bold text-[23px]  text-blue-900 mr-10">
          <Link to="/home"><li className="hover:text-red-800 ml-0 cursor-pointer">Home</li></Link>
          <Link to="/projects"><li className="hover:text-red-800 cursor-pointer">Projects</li></Link>
          <Link to="/skills"><li className="hover:text-red-800 cursor-pointer">Skills</li></Link>
          <Link to="/about"><li className="hover:text-red-800 cursor-pointer">About Me</li></Link>
          <Link to="/resume"><li className="hover:text-red-800 cursor-pointer">Resume</li></Link>
          <li className="hover:text-red-800 cursor-pointer">Language</li>
          <Link to="/contact"><li className="hover:text-red-800 cursor-pointer">Contact Me</li></Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-blue-900 font-bold mr-10"
        >
          ☰ Menu
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="flex flex-col md:hidden mt-3 bg-gray-300 rounded-lg  shadow-lg">
          <Link to="/home" className=" border-b py-2 border-gray-300   hover:bg-gray-400 p-4 text-xl font-bold text-black hover:text-blue-800" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/projects" className="py-2 border-b border-gray-300   hover:bg-gray-400  p-4 text-xl font-bold text-black hover:text-blue-800" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/skills" className="py-2 border-b border-gray-300   hover:bg-gray-400 p-4 text-xl font-bold text-black hover:text-blue-800" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/about" className="py-2 border-b border-gray-300  hover:bg-gray-400 p-4 text-xl font-bold text-black hover:text-blue-800" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link to="/resume" className="py-2 border-b border-gray-300   hover:bg-gray-400 p-4 text-xl font-bold text-black hover:text-blue-800" onClick={() => setIsOpen(false)}>Resume</Link>
         <ThemeToggle/>
          <Link to="/contact" className="py-2  hover:bg-gray-400 p-4 text-xl font-bold text-black hover:text-blue-800" onClick={() => setIsOpen(false)}>Contact Me</Link>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
