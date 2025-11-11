import React, { useState, useEffect, useRef } from "react";
import Typewriter  from "./Typewriter";
import ThemeToggle from "../../ThemeToggle.jsx";
import {Java,skill1,css,js,react,tailcss,manual } from "./utiles/Cdn.js";
const Skills = ({img, name, description }) => {
  
  return (
    <>
      <div>
      </div>
      <div className="w-70 h-90 mt-10 mb-5 ml-10 mr-10 border-2 border-solid pl-3 pt-10 hover:w-75 duration-900 dark:bg-gray-900 dark:text-white">
       <img src={img} alt="" className="m-auto pr-3"/>
        <h1 className="pt-3 pr-7 font-bold text-2xl">{name}</h1>
        <h3 className="pr-5 pt-5"><i>{description}</i> </h3>
      </div>
    </>
  );
};

export default Skills;