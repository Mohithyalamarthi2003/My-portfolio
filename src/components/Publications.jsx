import React from "react";
import { publication, publication1, ml, internet,mgrpublish} from "./utiles/Cdn.js";
import Journal from "../assests/Journal.pdf";
import Report from '../assests/Report.pdf';
import abstract from '../assests/abstract.pdf';

const Publications = () => {
  return (
    <div className="bg-amber-50">
      <h1 className="mt-10 font-bold md:ml-80 md:text-3xl ml-10 text-[22px] underline">
        Research Publications & Academic Contributions
      </h1>
      <div className="m-10 mt-8 md:text-xl text-[17px]">
        <p>
          My academic journey has given me opportunities to explore both
          research and practical development. One of my key contributions is a
          project on Driver Drowsiness Detection using Machine Learning, where I
          applied AI techniques to identify signs of fatigue in drivers. This
          work highlights how intelligent systems can be used to improve road
          safety by reducing accidents through real‑time monitoring and
          predictive analysis. It reflects my interest in combining computer
          vision and machine learning to solve problems that have a direct
          impact on society.
        </p>
        <p className="mt-5">
          {" "}
          Alongside this, I also published a project during my undergraduate
          studies titled Internet Banking Application, which focused on
          designing and implementing a secure, user‑friendly platform for online
          financial transactions. This project demonstrates my ability to build
          scalable applications with attention to usability and cybersecurity
          principles. Together, these publications showcase my commitment to
          applying technology for meaningful solutions—whether in
          safety‑critical AI systems or real‑world financial applications.
        </p>
      </div>
      <h1 className="font-bold text-2xl underline ml-10">
        Driver Drowsinees Detection Using Machine-Learning
      </h1>
      <div className="md:max-w-4xl  ml-10">
        <p className=" md:text-xl mt-2 max-w-2xl text-[17px] mr-3">
          This project was conceived to address a critical issue in road safety:
          detecting driver fatigue before it leads to accidents. Using machine
          learning algorithms, I developed a system capable of identifying signs
          of drowsiness based on facial cues and behavioral patterns. The model
          was trained and tested with real-world data, and the final
          implementation included a working prototype with live detection
          capabilities. The project integrates computer vision techniques with
          predictive modeling to deliver accurate, real-time
          alerts—demonstrating how AI can be applied to life-saving
          applications.
        </p>
        <img
          src={ml}
          alt="none"
          className=" w-xl mr-12 mt-4 md:max-w-2xl md:mt-[-280px] md:ml-[690px]"
        ></img>
      </div>
      <p className="mt-6 ml-10 text-[17px] md:text-xl mb-5 mr-2 ">
        This project was conceived to address a critical issue in road safety:
        detecting driver fatigue before it leads to accidents. Using machine
        learning algorithms, I developed a system capable of identifying signs
        of drowsiness based on facial cues and behavioral patterns. The model
        was trained and tested with real-world data, and the final
        implementation included a working prototype with live detection
        capabilities. The project integrates computer vision techniques with
        predictive modeling to deliver accurate, real-time alerts—demonstrating
        how AI can be applied to life-saving applications.
      </p>
      <div className="md:ml-10 md:animate-bounce ml-2 ">
        <a
          href={Journal}
          className="border p-2 cursor-pointer ml-8  bg-blue-800 text-white inline-block pointer"
          target="_self"
        >
          Journal Paper
        </a>

        <a
          href={Report}
          className="border p-2 cursor-pointer  bg-blue-800 text-white inline-block pointer ml-10  md:ml-40"
          target="_self"
        >
          Project Report
        </a>

        <a
          href="https://github.com/Mohithyalamarthi2003/Driver-Drowsiness-Detection"
          className="border p-2 cursor-pointer md:ml-40  ml-7 bg-blue-800 text-white inline-block pointer"
          target="_blank"
        >
          Source Code
        </a>

        <a
          href={mlpublish}
          className="border p-2 cursor-pointer  bg-blue-800 text-white inline-block pointer  md:ml-40 ml-12 mt-5"
          target="_self"
        >
          Certification
        </a>
      </div>

      <h1 className="m-10 mb-2 text-2xl font-bold underline">
        Internet Banking System
      </h1>
      <div className="ml-10 md:text-xl text-[17px] pb-2 max-w-full mt-10">
        <img
          src={internet}
          alt="none"
          className="md:max-w-3xl h-60 md:w-[450px] mr-10"
        />
        <p className="md:text-xl mr-2 md:max-w-2xl md:mt-[-240px] md:ml-[500px] mt-5">
          This project was developed and published as part of my undergraduate
          academic work, focusing on the backend architecture of a secure
          Internet Banking Application. Built entirely in Java, the system
          supports core banking operations such as account creation, balance
          management, transaction processing, and authentication logic. The
          backend was designed with modular principles, ensuring scalability and
          maintainability, and included basic encryption techniques to safeguard
          sensitive data and user credentials.
        </p>
      </div>
      <p className="ml-10 mr-2 md:text-xl pb-10 md:pt-10">
        I presented this project at the{" "}
        <span className="font-bold">
          9th National Conference on Innovative Computing Techniques (NCICT'24 –
          Vishwa Pradyog), hosted by the Department of Computer Science and
          Engineering{" "}
        </span>{" "}
        at Dr. M.G.R. Educational & Research Institute. Following the
        presentation, I was awarded a certificate of participation, recognizing
        the technical depth and relevance of the work. This experience
        strengthened my backend development skills and deepened my understanding
        of secure transaction systems in financial applications.
      </p>
      <div className="md:ml-10  md:animate-bounce  gap-20 ml-5">
        <a
          href={abstract}
          className="border p-2 cursor-pointer  bg-blue-800 text-white inline-block pointer ml-10 md:ml-40 md:mb-4"
          target="_self"
        >
          Abstract
        </a>

        <a
          href="https://github.com/Mohithyalamarthi2003/Internet-Banking-system-project/blob/main/README.md"
          className="border p-2 cursor-pointer  bg-blue-800 text-white inline-block pointer ml-8 md:ml-40 mt-5"
          target="_self"
        >
          Source Code
        </a>

        <a
          href={mgrpublish}
          className="border p-2 cursor-pointer  bg-blue-800 text-white inline-block pointer ml-18 md:ml-40 mt-4 mb-2"
          target="_self"
        >
          Certification
        </a>
      </div>
    </div>
  );
};

export default Publications;
