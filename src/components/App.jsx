import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ThemeToggle from "../../ThemeToggle.jsx";

// Static imports (used immediately)
import Header from "./Header.jsx";
import ScrolltoTop from "./ScrolltoTop.jsx";
import Footer from "./Footer.jsx";
import {
  Java,
  skill1,
  css,
  js,
  react,
  tailcss,
  manual,
  jsx,
  tailblocks,
} from "./utiles/Cdn";

// Lazy-loaded components
const Body = lazy(() => import("./Body.jsx"));
const Typewriter = lazy(() => import("./Typewriter.jsx"));
const Skills = lazy(() => import("./Skills.jsx"));
const Projects = lazy(() => import("./Projects.jsx"));
const Skillbar = lazy(() => import("./Skillbar.jsx"));
const About = lazy(() => import("./About.jsx"));
const Resume = lazy(() => import("./Resume.jsx"));
const More = lazy(() => import("./More.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const Publications = lazy(() => import("./Publications.jsx"));
import Schimmer from "./Schimmer.jsx";

const App = () => {
  return (
    <div className="">
      <Header />
      <ScrolltoTop />

      <Suspense
        fallback={
          <div className="flex gap-20 ml-20 flex-wrap">
            <Schimmer />
            <Schimmer /> <Schimmer />
            <Schimmer />
            <Schimmer />
            <Schimmer />
            <Schimmer /> <Schimmer />
            <Schimmer />
            <Schimmer />
            <Schimmer />
            <Schimmer />
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Body />
                <div className="text-2xl mb-5">
                  <Typewriter />
                </div>
                <div className="bg-amber-100  dark:bg-gray-900 dark:text-white ">
                  <div className="flex flex-wrap justify-start md:pb-5 md:ml-10 md:pt-5 gap-6 md:gap-30 md:w-full px-4">
                    <Skillbar skill="Html" level={90} />
                    <Skillbar skill="Css" level={80} />
                    <Skillbar skill="Javascript" level={80} />
                    <Skillbar skill="Reactjs" level={85} />
                    <Skillbar skill="Java" level={75} />
                    <Skillbar skill="Tailwind CSS" level={85} />
                    <Skillbar skill="Manual testing" level={95} />
                    <Skillbar skill="Jsx" level={90} />
                  </div>
                </div>
                <div className="">
                  <Link to="/skills">
                    <div className="md:mt-0  dark:bg-gray-900 border-solid">
                      <button
                        type="button"
                        className=" p-2 bg-blue-500 text-white animate-bounce ml-10 mb-8 mt-10"
                      >
                        Know more
                      </button>
                    </div>
                  </Link>
                </div>
              </>
            }
          />

          <Route
            path="/home"
            element={
              <>
                <Body />
                <div className="text-2xl">
                  <Typewriter />
                </div>
                <div className="bg-amber-100 dark:text-white">
                  <div className="bg-amber-100  dark:bg-gray-900 dark:text-white">
                    <div className="flex flex-wrap justify-start mt-5 md:pb-5 md:ml-10 md:pt-5 gap-6 md:gap-30 md:w-full px-4 lg:mt-8">
                      <Skillbar skill="Html" level={90} />
                      <Skillbar skill="Css" level={80} />
                      <Skillbar skill="Javascript" level={80} />
                      <Skillbar skill="Reactjs" level={85} />
                      <Skillbar skill="Java" level={75} />
                      <Skillbar skill="Tailwind CSS" level={85} />
                      <Skillbar skill="Manual testing" level={95} />
                      <Skillbar skill="Jsx" level={90} />
                    </div>
                  </div>
                </div>
                <div className="">
                  <Link to="/skills">
                    <button
                      type="button"
                      className="border-1 border-solid p-2 bg-blue-500 text-white animate-bounce  ml-10 mb-5 md:mb-14 md:mt-10 mt-8 "
                    >
                      Know more
                    </button>
                  </Link>
                </div>
              </>
            }
          />

          <Route
            path="/skills"
            element={
              <div className="mt-2 bg-blue-50">
                <div className=" text-2xl md:text-4xl font-bold text-orange-800 md:ml-20 mb-10 ">
                  <Typewriter />
                </div>
                <div className="ml-[12px] flex flex-wrap md:gap-15  bg-blue-50 dark:bg-gray-900">
                  <Skills
                    img={skill1}
                    name="Html"
                    description="Html is a markup language which is used for designing a static webpages"
                  />
                  <Skills
                    img={css}
                    name="CSS"
                    description="CSS is used to style the webpages which are developed using html"
                  />
                  <Skills
                    img={js}
                    name="Javascript"
                    description="Js is used to make website dynamic. For loading dynamic content we use js"
                  />
                  <div className="ml-0 flex flex-wrap md:gap-15">
                    <Skills
                      img={react}
                      name="ReactJs"
                      description="ReactJs is a popular js library with react we can able to develope a single page application with high performance"
                    />
                    <Skills
                      img={Java}
                      name="Java"
                      description="Java is mostly used for backend and for developing enterprise level applications with the help of springboot"
                    />
                    <Skills
                      img={tailcss}
                      name="Talwind CSS"
                      description="Talwind css has a utility classes so we can use the classes and implement styling fasty and easily"
                    />
                    <div className="ml-0 flex flex-wrap md:gap-15">
                      <Skills
                        img={manual}
                        name="Manual Testing"
                        description="Manual Testing is used to test the software whether its properly working or not and matching with user requirements are not"
                      />
                      <Skills
                        img={tailblocks}
                        name="Tailblocks"
                        description="Tailblocks is similar to the bootstrap we can able to copy and use the code for the styling this makes our design faster and easier"
                      />
                      <Skills
                        img={jsx}
                        name="Jsx"
                        description="Jsx is a lightweighted html syntax language using jsx we can able to write the html inside the react code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/more" element={<More />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consolidated" element={<Resume />} />
          <Route path="/Publications" element={<Publications />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
