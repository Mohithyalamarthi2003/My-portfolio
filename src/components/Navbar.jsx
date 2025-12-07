import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ Changed Link to NavLink
import { Logo } from "./utiles/Cdn";
import ThemeToggle from "../../ThemeToggle.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = {
    color: "darkred", // ✅ Active color
  };

  return (
    <div className=" top-1">
      <div className=" bg-none border-solid h-20 rounded-full sticky z-50"></div>

      <nav className="bg-yellow-400 p-4 fixed w-full top-0 left-0 z-50 shadow-md">
        <div className="flex justify-between items-center gap-10">
          <img src={Logo} className="w-25 h-18 rounded-full" />

          {/* ✅ Desktop Menu */}
          <ul className="hidden md:flex gap-15 font-bold text-[23px] text-blue-900 mr-10">
            <NavLink
              to="/home"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="hover:text-red-800 ml-0 cursor-pointer">Home</li>
            </NavLink>

            <NavLink
              to="/projects"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="hover:text-red-800 cursor-pointer">Projects</li>
            </NavLink>

            <NavLink
              to="/skills"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="hover:text-red-800 cursor-pointer">Skills</li>
            </NavLink>

            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="hover:text-red-800 cursor-pointer">About Me</li>
            </NavLink>

            <NavLink
              to="/resume"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="hover:text-red-800 cursor-pointer">Resume</li>
            </NavLink>

            <NavLink
              to="/Publications"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="hover:text-red-800 cursor-pointer">
                Publications
              </li>
            </NavLink>

            <NavLink
              to="/contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="hover:text-red-800 cursor-pointer">Contact Me</li>
            </NavLink>
          </ul>

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-blue-900 font-bold mr-10"
          >
            ☰ Menu
          </button>
        </div>

        {/* ✅ Mobile Dropdown with Active State */}
        {isOpen && (
          <div className="flex flex-col md:hidden mt-3 bg-gray-300 rounded-lg shadow-lg">
            {[
              ["/home", "Home"],
              ["/projects", "Projects"],
              ["/skills", "Skills"],
              ["/about", "About Me"],
              ["/resume", "Resume"],
              ["/Publications", "Publications"],
              ["/contact", "Contact Me"],
            ].map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="py-2 border-b border-gray-300 hover:bg-gray-400 p-4 text-xl font-bold text-black hover:text-blue-800"
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
