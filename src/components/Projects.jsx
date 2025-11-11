import React from "react";
import { port} from "./utiles/Cdn";
import {machine,website,cal} from "./utiles/Cdn.js";
import ThemeToggle from "../../ThemeToggle.jsx";


const Projects=()=>
{
    return(
        <div className="bg-gray-100 mb-10 border-1 dark:bg-gray-900 dark:text-white">
            <h1 className="ml-5 pt-10 font-bold text-[18px] md:text-2xl lg:text-2xl sm:text-xl md:ml-50 md:mt-10 md:mb-10 lg:ml-50 lg:mt-10 lg:mb-10 sm:ml-40 sm:mt-10 sm:mb-5">Welcome to the project section of my work   ......!</h1>
       <div className=" w-full mt-10 mb-20 border   mr-10 pt-10 rounded-2xl sm:ml-10 md:ml-10 md:pr-50 overflow-hidden p-2 md:w-[1200]">
        <div className="  ml-0 overflow-hidden mb-10 sm:w-full md:w-full md:h-70"><img src={port} alt="none" className=" p-2 w-full md:w-[350px] md:h-60 h-44 mt-[-40]"/></div>
        <p className="pl-10 text-[16px]  w-full mb-5 sm:text-2xl mt-[10] pt-[-10] ml-[-20] md:mt-[-300]  md:ml-60 md:text-[18px] lg:text-xl sm:text-[18px] lg:ml-90 lg:mb-20 sm:ml-90 md:px-30">My Personal Portfolio is a fully responsive, single-page web application designed to showcase my technical skills, certifications, educational background, and career aspirations. Built with modern frontend technologies, the project reflects my proficiency in scalable UI development and interactive web design
</p>
<b className="md:ml-[480px] md:mb-50 md:mt-[-150] ">Tech Stack:</b>
<h5 className=" md:mt-[-27] md:mb-20 md:ml-[590]">Html5, Css3, Javascript, React Js, Tailwindcss</h5>

       </div>
       <div className="max-w-[1900px] w-full mt-30 mb-20 border-1 bw-[1900px]  mr-10 pt-10 rounded-2xl sm:ml-10 md:ml-10 md:pr-50 overflow-hidden p-2 md:w-[1200]">
        <div className="  ml-0 overflow-hidden mb-10 sm:w-full "><img src={machine} alt="none" className=" p-2 w-full h-44 mt-[-40] md:w-[350px] md:h-60 md:mb-10"/></div>
        <p className="pl-10 text-[16px]  w-full mb-5 sm:text-2xl mt-[10] pt-[-10] ml-[-20] md:mt-[-250] md:mb-20 md:ml-60 md:text-[18px] lg:text-xl sm:text-[18px] lg:ml-90 lg:mb-20 sm:ml-90 sm:mb-20 md:px-30">My Personal Portfolio is a fully responsive, single-page web application designed to showcase my technical skills, certifications, educational background, and career aspirations. Built with modern frontend technologies, the project reflects my proficiency in scalable UI development and interactive web design
</p>
       </div>

      <div className=" w-full mt-10 mb-20 border   mr-10 pt-10 rounded-2xl sm:ml-10 md:ml-10 md:pr-50 overflow-hidden p-2 md:w-[1200]">
        <div className="  ml-0 overflow-hidden mb-10 sm:w-full md:w-full md:h-70"><img src={website} alt="none" className=" p-2 w-full md:w-[350px] md:h-60 h-44 mt-[-40]"/></div>
        <p className="pl-10 text-[16px]  w-full mb-5 sm:text-2xl mt-[10] pt-[-10] ml-[-20] md:mt-[-300] md:mb-20 md:ml-60 md:text-[18px] lg:text-xl sm:text-[18px] lg:ml-90 lg:mb-20 sm:ml-90 sm:mb-20 md:px-30">My Personal Portfolio is a fully responsive, single-page web application designed to showcase my technical skills, certifications, educational background, and career aspirations. Built with modern frontend technologies, the project reflects my proficiency in scalable UI development and interactive web design
</p>

       </div>

         <div className="max-w-[1900px] w-full mt-30 mb-20 border-1 bw-[1900px]  mr-10 pt-10 rounded-2xl sm:ml-10 md:ml-10 md:pr-50 overflow-hidden p-2 md:w-[1200]">
        <div className="  ml-0 overflow-hidden mb-10 sm:w-full "><img src={cal} alt="none" className=" p-2 w-full h-44 mt-[-40] md:w-[350px] md:h-60 md:mb-10"/></div>
        <p className="pl-10 text-[16px]  w-full mb-5 sm:text-2xl mt-[10] pt-[-10] ml-[-20] md:mt-[-270] md:mb-20 md:ml-60 md:text-[18px] lg:text-xl sm:text-[18px] lg:ml-90 lg:mb-20 sm:ml-90 sm:mb-20 md:px-30">My Personal Portfolio is a fully responsive, single-page web application designed to showcase my technical skills, certifications, educational background, and career aspirations. Built with modern frontend technologies, the project reflects my proficiency in scalable UI development and interactive web design
</p>
       </div>

        </div>
    )
}

export default Projects;