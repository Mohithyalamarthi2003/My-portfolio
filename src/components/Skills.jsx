import React, { useState, useEffect, useRef } from "react";
import Typewriter from "./Typewriter";
import ThemeToggle from "../../ThemeToggle.jsx";
import { Java, skill1, css, js, react, tailcss, manual } from "./components/utiles/Cdn";
const Skills = ({ img, name, description }) => {
  return (
    <>
      <div></div>
      <div className="w-64 h-96 mt-10 mb-5 ml-10  border-2 border-solid  hover:w-[300px] duration-3900 dark:bg-gray-900 dark:text-white">
        <img src={img} alt="" className="m-auto pl-0" />
        <h1 className="pt-5 pr-7 font-bold text-2xl pl-7">{name}</h1>
        <h3 className="pr-5 pt-5 pl-5">
          <i>{description}</i>{" "}
        </h3>
      </div>
    </>
  );
};

export default Skills;
