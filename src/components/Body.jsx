import React, { useState, useEffect, useRef } from "react";
import { Logo, image } from "./utiles/Cdn.js";
import Slidder from "./Slidder.jsx";
import About from "./About.jsx";
import { useNavigate, Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Body = () => {
  const hero = "Welcome To My World of Love!";
  const [text, setText] = useState("");
  const [loopTrigger, setLoopTrigger] = useState(0);
  const navigate = useNavigate();
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentChar = hero.charAt(indexRef.current);
      setText((prev) => prev + currentChar);
      indexRef.current += 1;

      if (indexRef.current >= hero.length) {
        clearInterval(interval);
        setTimeout(() => {
          setText("");
          indexRef.current = 0;
          setLoopTrigger((prev) => prev + 1);
        }, 500);
      }
    }, 180);
    return () => clearInterval(interval);
  }, [loopTrigger]);

  return (
    <div className="pt-14 bg-green-50 dark:bg-gray-900 dark:text-white">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center px-4">
        <div className="max-w-[570px]">
          <h1 className="text-4xl md:text-5xl font-bold text-red-800 pt-5 pb-10 ">
            {text}
            <span className="animate-pulse text-blue-500">|</span>
          </h1>
          <p className="pt-10 leading-relaxed text-[18px]">
            Hi, I'm{" "}
            <span className="font-bold">Mohith Sri Satya Sai Yalamarthi</span> —
            a passionate developer with a strong foundation in Java, HTML, CSS,
            Tailwind CSS, JSX, and React.js, backed by hands-on experience in
            manual testing and UI/UX refinement. I specialize in building
            responsive, scalable, and visually engaging web interfaces that
            merge performance with polish.
          </p>
          <p className="mt-3 text-[18px]">
            Beyond code, I bring a global mindset to my work. I'm actively{" "}
            <span className="font-bold">
              learning German, with a 520+ day streak on Duolingo
            </span>{" "}
            and nearing <b>A2 proficiency</b>, preparing for international
            opportunities and cross-cultural collaboration. Whether it's
            debugging complex React setups or designing elegant component
            architectures, I thrive on solving problems with clarity, precision,
            and persistence.
          </p>

          <Link to="/about" smooth={true} duration={500}>
            <button className="mt-6 ml-10 px-4 py-2 animate-bounce rounded-xl bg-blue-300 text-black hover:bg-blue-400 transition mb-4">
              Explore me
            </button>
          </Link>
        </div>

        <img
          src={image}
          alt="Profile"
          className="h-40 mb-10 w-full sm:h-60 sm:mb-0 sm:w-[600px]  duration-8000 group   lg:w-[700px] lg:h-80"
        />
      </div>

      {/* Slider Section */}
      <div className="shadow-sm mt-10 md:pt-5  dark:bg-gray-900">
        <Slidder />
      </div>
    </div>
  );
};

export default Body;
