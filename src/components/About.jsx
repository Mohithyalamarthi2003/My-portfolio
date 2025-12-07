import React, { useState, useEffect, useRef } from "react";
import Slidd from "./Slidd.jsx";
import { image, namastey, besant, german } from "../utiles/Cdn.js";
import { Link } from "react-router-dom";
import LazySection from "./LazySection.jsx";
import ThemeToggle from "../../ThemeToggle.jsx";

const About = () => {
  const texts = [
    "Hello this is Mohith Sri Satya Sai",
    "Welcome to my portfolio",
    "I love building scalable UIs",
    "Frontend meets AI here",
    "Let’s create something amazing",
  ];

  const [txt, settxt] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const indexref = useRef(0);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const interval = setInterval(() => {
      const currentChar = currentText.charAt(indexref.current);
      settxt((prev) => prev + currentChar);
      indexref.current += 1;

      if (indexref.current >= currentText.length) {
        clearInterval(interval);
        setTimeout(() => {
          settxt("");
          indexref.current = 0;
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="bg-amber-50 dark:bg-gray-900 dark:text-white">
        <div>
          <h1 className="text-2xl text-red-500 font-bold pt-10 ml-5 sm:text-4xl md:text-4xl md:ml-30">
            {txt}
            <span className="animate-pulse text-blue-400">|</span>
          </h1>
        </div>
        <div className="">
          <div className="mt-16 flex flex-col md:flex-row gap-6 items-center px-4">
            <div className=" max-w-[1740px]  ml-0 mb-10 rounded-3xl  ">
              <img
                src={image}
                alt="error"
                className=" w-full sm:full  h-70  transition-all  md:w-[1750px] lg:w-[1900] md:hover:w-[1900px]  lg:hover:w-[2000] duration-4000"
              />
            </div>
            <div>
              {" "}
              <p className="text-[16px] sm:text-xl md:text-xl lg:text-xl">
                I'm{" "}
                <span className="font-bold text-[18px]">
                  I'm Mohith Sri Satya Sai Yalamarthi
                </span>
                , a future-focused frontend developer and aspiring AI/Data
                Science specialist with a strong foundation in both engineering
                and design thinking. I hold a Bachelor’s degree in Computer
                Science with a CGPA of 8.8, and I’ve cultivated a versatile
                skill set that bridges creativity, precision, and performance.
              </p>
              <p className="pt-3 text-[16px] sm:text-xl md:text-xl  lg:text-xl">
                My technical expertise spans React.js, JavaScript, HTML, CSS,
                Tailwind CSS, JSX, and Java, complemented by hands-on experience
                in manual testing and UI/UX refinement. I specialize in building
                scalable, responsive interfaces that elevate user experience
                while maintaining clean architecture and maintainable code.
              </p>
            </div>
          </div>
          {/*Education background information */}
          <div>
            <div>
              <h1 className="font-bold  text-[23px] sm:text-3xl ml-2 md:ml-9 lg:ml-9 mt-10 underline">
                My Educational Background
              </h1>
              <div className="overflow-x-auto w-full mt-10 p-4">
                <table className="min-w-full border border-solid bg-blue-50 sm:w-full sm:h-50 md:h-50 lg:h-50">
                  <thead>
                    <tr className="bg-orange-300 h-10 border">
                      <th className="px-4 py-2">Degree</th>
                      <th className="px-4 py-2 pl-10">
                        Name of the institution
                      </th>
                      <th className="px-4 py-2">Score</th>
                      <th className="px-4 py-2">Percentage</th>
                      <th className="px-4 py-2">Year of Completion</th>
                      <th className="px-4 py-2">Stream</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-300 border">
                      <td className="px-4 py-2 text-center">B-Tech</td>
                      <td className="px-4 py-2 md:pl-25 pl-19">
                        Dr MGR University, Chennai
                      </td>
                      <td className="px-4 py-2 md:pl-21">8.66 CGPA</td>
                      <td className="px-4 py-2 font-bold">83.6% approx</td>
                      <td className="px-4 py-2 text-center font-bold">2025</td>
                      <td className="px-4 py-2 pl-13">CSE</td>
                    </tr>

                    <tr className="hover:bg-gray-300 border">
                      <td className="px-4 py-2 md:pl-15">12th degree</td>
                      <td className="px-4 py-2 md:pl-21 pl-19">
                        Sri Chaitanya Educational Institution
                      </td>
                      <td className="px-4 py-2 md:pl-15">850 out of 1000!</td>
                      <td className="px-4 py-2 font-bold md:pl-17">85%</td>
                      <td className="px-4 py-2 text-center font-bold">2021</td>
                      <td className="px-4 py-2 pl-13">MPC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* code for the certifications*/}

          <div>
            <LazySection height={100} offset={200}>
              <h1 className="font-bold sm:text-xl text-[23px] pt-10 pl-10 underline md:text-[24px] lg:text-3xl">
                My Certifications
              </h1>
              <h2 className="font-bold sm:text-xl text-[20px] pt-10 md:pl-10 pl-5 underline md:text-[22px]">
                Namastey React certification
                <span className=" pl-22 md:pl-[630px] ml-[-15px]">
                  August 2025
                </span>
              </h2>
              <p className="italic sm:text-xl text-[17px] pt-5 md:pl-9 lg:pl-10 pl-6 pr-5">
                I've successfully completed the Namaste React course — a
                comprehensive, in-depth program on React.js and Tailwind CSS,
                taught by renowned educator Akshay Saini, one of India’s most
                influential tech mentors and a popular YouTube lecturer. This
                certification reflects my mastery of core and advanced React
                concepts.
              </p>
              <button
                type="button"
                className="bg-blue-500 p-3 text-white border-1 border-solid  rounded-[6px] ml-10 mt-10 animate-bounce"
              >
                <a href={namastey} target="-_self">
                  click to view
                </a>
              </button>

              <h2 className="font-bold sm:text-2xl text-[20px] pt-10 md:pl-10 pl-5 underline">
                Java & Manual Testing by Besant Technology
                <span className="md:pl-[430px] pl-22">April 2025</span>
              </h2>
              <p className="italic sm:text-xl text-[17px] pt-5 md:pl-9 lg:pl-10 pl-6 pr-5">
                I’ve successfully completed professional training in Java and
                Manual Testing at Besant Technologies, Velachery, where I gained
                hands-on experience in writing structured test cases and
                executing complete manual testing workflows. This training
                enhanced my backend fundamentals and equipped me to confidently
                handle real-world testing scenarios across SDLC and STLC phases.
              </p>
              <button
                type="button"
                className="bg-blue-500 text-white border-1 border-solid p-3 rounded-[6px] ml-10 mt-10 animate-bounce"
              >
                <a href={besant} target="_self">
                  click to view
                </a>
              </button>

              <h2 className="font-bold sm:text-2xl text-[20px] pt-10 md:pl-10 pl-5 underline">
                Project Publication Certificate{" "}
                <span className="md:pl-[630px] pl-44">March 2025</span>
              </h2>
              <p className="italic sm:text-xl text-[17px] pt-5  pl-6 lg:pl-10 md:pl-9 pr-5">
                {" "}
                I successfully published a research project on Machine
                Learning–based Driver Drowsiness Detection, showcasing
                innovative use of computer vision and AI to enhance road safety.
                This achievement was formally recognized with a publication
                certificate, highlighting my contribution to applied machine
                learning in real-world scenarios.
              </p>
              <button
                type="button"
                className="bg-blue-500 text-white cursor-pointer border-1 border-solid p-3 cursor:pointer rounded-[6px] ml-10 mt-10 animate-bounce"
              >
                <a href="/mlpublish.jpg" target="_self">
                  click to view{" "}
                </a>
              </button>
            </LazySection>
          </div>

          {/*code for the german language */}

          <div className=" flex md:flex-row flex-col  mt-10">
            <div className=" items-center justify-center mb-9  w-full sm:max-w-[950px] md:max-w-[950px]">
              <h1 className="mb-10 ml-10 text-3xl font-bold underline sm:ml-10 md:ml-10 md:max-w-full">
                German Language Proficiency
              </h1>
              <p className="text-[18px] ml-10 pr-15  sm:max-w-[700px] md:max-w-[700px] sm:text-xl md:text-[13px] lg:text-xl w-full ">
                As part of my long-term commitment to academic and cultural
                integration in Switzerland, I've been consistently learning
                German, maintaining a 520+ day streak on Duolingo and
                progressing steadily through formal certification. Having nearly
                completed A1 level and now advancing into A2, this daily
                discipline reflects not only my linguistic growth but also my
                deep respect for Switzerland's multilingual heritage and my
                proactive mindset toward adapting to life in a German-speaking
                academic environment
              </p>
            </div>
            <div className="w-full h-20 sm:h-[400px] md:ml-[150px] mr-10">
              <Slidd />
            </div>
          </div>
          <p className="text-[18px] ml-10 mt-[270px] md:mt-[5px] sm:text-[14px] lg:text-xl pr-15  md:text-[10px] w-full ">
            I believe that language is a bridge to deeper collaboration, and my
            ongoing efforts demonstrate a genuine readiness to engage
            meaningfully with peers, professors, and the broader Swiss
            community. Whether in classroom discussions, research
            collaborations, or everyday interactions, I aim to contribute with
            both technical expertise and cultural fluency building connections
            that go beyond code and curriculum
          </p>
        </div>

        {/*most of the questions asked by me */}

        <div>
          <h2 className="text-2xl mt-10 ml-7 md:mt-5 lg:mt-5 sm:mt-5 sm:text-2xl md:text-2xl lg:text-2xl font-bold ">
            Want to know more about me!
          </h2>
          <Link to="/more">
            {" "}
            <button
              type="button"
              className="bg-blue-500 text-white border-1 border-solid rounded-[6px] ml-10 mt-8 animate-bounce mb-10 p-5 w-[200px] md:w-[140px] lg:w-[180px] sm:w-[160px]  md:mt-10 sm:mt-10 lg:mt-10"
            >
              Let's Go !
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
