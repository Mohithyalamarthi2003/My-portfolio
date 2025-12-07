import React from "react";
import { port } from "./components/utiles/Cdn";
import { machine, internet, manual } from "./components/utiles/Cdn";
import ThemeToggle from "../../ThemeToggle.jsx";

const Projects = () => {
  return (
    <div className="bg-blue-50 md:mb-0 border dark:bg-gray-900 dark:text-white">
      <h1 className="ml-5 pt-10 font-bold text-[18px] md:text-2xl lg:text-2xl sm:text-xl md:ml-50 md:mt-10 md:mb-10 lg:ml-50 lg:mt-10 lg:mb-10 sm:ml-40 sm:mt-10 sm:mb-5">
        Browse through the work I'm most proud of ......!
      </h1>
      <div className=" w-full mt-10 md:mb-20 border-3 mb-[-20px]  mr-10 pt-10 rounded-2xl sm:ml-10 md:ml-10 md:pr-50 overflow-hidden p-2 md:w-[1200]">
        <div className="  ml-0 overflow-hidden mb-10 sm:w-full md:w-full md:h-70">
          <img
            src={port}
            alt="none"
            className=" p-2 w-full md:w-[350px] md:h-60 h-44 mt-[-40]"
          />
        </div>
        <p className="pl-10 text-[16px]  w-full mb-5 sm:text-2xl mt-[10] pt-[-10] ml-[-20] md:mt-[-330] pr-5  md:ml-60 md:text-[18px] lg:text-xl sm:text-[18px] lg:ml-90  sm:ml-90 md:px-30">
          My Personal Portfolio is a fully responsive, single-page web
          application designed to showcase my technical skills, certifications,
          educational background, and career aspirations. Built with modern
          frontend technologies, the project reflects my proficiency in scalable
          UI development and interactive web design
        </p>
        <b className="md:ml-[480px] md:mb-50 md:mt-[-10] md:text-xl ml-20">
          Tech Stack:
        </b>
        <h5 className=" md:mt-[-27] pb-5  md:ml-[590] md:text-xl ml-10">
          Html5, Css3, Javascript, React Js, Tailwindcss and Jsx
        </h5>
        <h3>
          <a
            href="https://github.com/Mohithyalamarthi2003/My-portfolio"
            taget="_self"
            className="hover:underline md:ml-120 ml-20  pt-20 text-blue-800 mb-10 text-xl"
          >
            Source code
          </a>
        </h3>
      </div>
      <div className="max-w-[1900px] w-full mt-30 mb-20 border-3 bw-[1900px]  mr-10 pt-10 rounded-2xl sm:ml-10 md:ml-10 md:pr-50 overflow-hidden p-2 md:w-[1200]">
        <div className="  ml-0 overflow-hidden mb-10 sm:w-full ">
          <img
            src={machine}
            alt="none"
            className=" p-2 w-full h-44 mt-[-40] md:w-[350px] md:h-60 md:mb-10"
          />
        </div>
        <p className="pl-10 text-[16px]  w-full mb-5 lg:mb-3 md:mb-2 sm:text-2xl mt-[10] pt-[-10] ml-[-20] md:mt-[-280]  md:ml-60 md:text-[18px] lg:text-xl sm:text-[18px] lg:ml-90  sm:ml-90 sm:mb-20 md:px-30 lg:pt-[-20px] lg:pr-40">
          Driver drowsiness detection using machine learning aims to improve
          road safety by identifying fatigue in real time. By analyzing facial
          features and eye movements, the system can accurately detect early
          signs of drowsiness. It then alerts drivers promptly, reducing the
          risk of accidents and enhancing overall transportation safety. The
          model leverages computer vision techniques and ML algorithms to ensure
          reliable performance across diverse driving conditions. This project
          highlights the potential of AI to create intelligent safety systems
          that protect lives on the road.
        </p>
        <b className="md:ml-[480px] md:mb-50 lg:pt-[10] md:text-xl ml-20">
          Tech Stack:
        </b>
        <h5 className=" md:mt-[-27] pb-5  md:ml-[590] md:text-xl ml-10">
          Python, Machine Learning
        </h5>
        <h3>
          <a
            href="https://github.com/Mohithyalamarthi2003/Driver-Drowsiness-Detection"
            taget="_self"
            className="hover:underline md:ml-120 ml-20 pt-20 text-blue-800 mb-10 text-xl"
          >
            Source code
          </a>
        </h3>
      </div>

      <div className=" w-full mt-10 mb-20 border-3   mr-10 pt-10 rounded-2xl sm:ml-10 md:ml-10 md:pr-50 overflow-hidden p-2 md:w-[1200]">
        <div className="  ml-0 overflow-hidden mb-10 sm:w-full md:w-full md:h-70">
          <img
            src={internet}
            alt="none"
            className=" p-2 w-full md:w-[350px] md:h-60 h-44 mt-[-40]"
          />
        </div>
        <p className="pl-10 text-[16px]  w-full mb-5 sm:text-2xl mt-[10] pt-[-10] ml-[-20] md:mt-[-320] md:mb-3 md:ml-60 md:text-[18px] lg:text-xl sm:text-[18px] lg:ml-90 lg:mb-4 sm:ml-90 sm:mb-20 md:px-30 lg:pr-41">
          The Internet banking application was developed in Java to handle
          essential backend banking operations securely. It supports account
          creation, balance enquiry, fund transfers, credit/debit transactions,
          and password management. Core functionalities were implemented using
          object‑oriented principles, ensuring modularity and maintainability of
          the code. Robust exception handling and validation mechanisms were
          added to improve reliability and prevent invalid operations. The
          system integrates with a database to store and manage user account
          details efficiently. This project demonstrates backend development
          skills in building scalable and secure financial applications using
          Java.
        </p>
        <b className="md:ml-[480px] md:mb-50 md:mt-[-10] md:text-xl ml-20">
          Tech Stack:
        </b>
        <h5 className=" md:mt-[-27] pb-5  md:ml-[590] md:text-xl ml-10">
          {" "}
          Advanced Java, OOPS concepts, and Collections
        </h5>
        <h3>
          <a
            href="https://github.com/Mohithyalamarthi2003/Internet-Banking-system-project"
            taget="_self"
            className="hover:underline md:ml-120 ml-20 pt-20 text-blue-800 mb-10 text-xl"
          >
            Source code
          </a>
        </h3>
      </div>

      <div className="max-w-[1900px] w-full mt-30 mb-20 border-3 bw-[1900px]  mr-10 pt-10 rounded-2xl sm:ml-10 md:ml-10 md:pr-50 overflow-hidden p-2 md:w-[1200]">
        <div className="  ml-0 overflow-hidden mb-10 sm:w-full ">
          <img
            src={manual}
            alt="none"
            className=" p-2 w-full h-44 mt-[-40] md:w-[350px] md:h-60 md:mb-10"
          />
        </div>
        <p className="pl-10 text-[16px]  w-full mb-2 sm:text-2xl mt-[10] pt-[-10] ml-[-20] md:mt-[-290] md:pr-40 md:mb-4 md:ml-60 md:text-[18px] lg:text-xl sm:text-[18px] lg:ml-90 lg:mb-4 sm:ml-90 sm:mb-20 md:px-30">
          The manual testing project on OpenCart focused on validating the core
          functionalities of the e‑commerce platform. Test cases were designed
          and executed to cover modules such as product catalog, shopping cart,
          checkout process, and user account management. Functional, regression,
          and boundary testing techniques were applied to ensure system
          reliability. Defects were identified, documented, and tracked to
          closure using standard bug‑reporting practices. This project
          highlights practical skills in test planning, execution, and quality
          assurance for web applications.
        </p>
        <b className="md:ml-[480px] md:mb-50 lg:pt-[-20] md:text-xl ml-20 ">
          Tech Stack:
        </b>
        <h5 className=" md:mt-[-27] pb-5  md:ml-[590] md:text-xl ml-10">
          Manual Testing, Test scenario's, and Test cases!
        </h5>
        <h3>
          <a
            href="https://github.com/Mohithyalamarthi2003/Manual-Testing-Project"
            taget="_self"
            className="hover:underline md:ml-120 ml-20 pt-20 text-blue-800 md:mb-0 mb-10 text-xl"
          >
            Source File
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Projects;
