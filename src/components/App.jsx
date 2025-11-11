import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import ThemeToggle from "../../ThemeToggle.jsx";


// Static imports (used immediately)
import Header from "./Header.jsx";
import ScrolltoTop from "./ScrolltoTop.jsx";
import Footer from "./Footer.jsx";
import { Java, skill1, css, js, react, tailcss, manual, jsx, tailblocks } from "./utiles/Cdn.js";

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
import Schimmer from "./Schimmer.jsx";

const App = () => {
  return (
    <div className="">
      <Header />
      <ScrolltoTop />

      <Suspense fallback={<div className="flex gap-20 ml-20 flex-wrap"><Schimmer/><Schimmer/>  <Schimmer/><Schimmer/><Schimmer/><Schimmer/><Schimmer/>      <Schimmer/><Schimmer/><Schimmer/><Schimmer/><Schimmer/></div>}>
        <Routes>
           <Route
            path="/"
            element={
              <>
                <Body />
                <Typewriter />
                <div className="bg-amber-100  dark:bg-gray-900 dark:text-white ">
                 <div className="flex flex-col md:flex md:flex-row md:flex-wrap md:justify-center gap-10 md:gap-20 px-6 pb-10">
  <Skillbar skill="HTML" level={90} />
  <Skillbar skill="CSS" level={80} />
  <Skillbar skill="JavaScript" level={80} />
  <Skillbar skill="ReactJS" level={85} />
  <Skillbar skill="Java" level={75} />
  <Skillbar skill="Tailwind CSS" level={85} />
  <Skillbar skill="Manual Testing" level={95} />
</div>

                </div>
                <div className="">
                  <Link to="/skills">
                  <div className="md:mt-10  dark:bg-gray-900 border-solid">
                    <button
                      type="button"
                      className=" p-2 bg-blue-500 text-white animate-bounce ml-10 mb-14"
                    >
                      Know more
                    </button></div>
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
                <Typewriter />
                <div className="bg-amber-100 dark:text-white">
                 <div className="bg-amber-100  dark:bg-gray-900 dark:text-white">
  <div className="ml-10 w-60 pt-5 flex flex-col md:pt-5  md:flex-wrap md:flex-row   md:gap-10 mb-10 pb-10 md:w-[600px]">
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
                      className="border-1 border-solid p-2 bg-blue-500 text-white animate-bounce ml-10 mb-14"
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
                <div className="text-red-500 h-25">
                  <Typewriter />
                </div>
                <div className="flex flex-wrap gap-8 bg-blue-50 dark:bg-gray-900">
                  <Skills img={skill1} name="Html" description="Html is a markup language which is used for designing a static webpages" />
                  <Skills img={css} name="CSS" description="CSS is used to style the webpages which are developed using html" />
                  <Skills img={js} name="Javascript" description="Js is used to make website dynamic. For loading dynamic content we use js" />
                  <Skills img={react} name="ReactJs" description="ReactJs is a popular js library with react we can able to develope a single page application with high performance" />
                  <Skills img={Java} name="Java" description="Java is mostly used for backend and for developing enterprise level applications with the help of springboot" />
                  <Skills img={tailcss} name="Talwind CSS" description="Talwind css has a utility classes so we can use the classes and implement styling fasty and easily" />
                  <Skills img={manual} name="Manual Testing" description="Manual Testing is used to test the software whether its properly working or not and matching with user requirements are not" />
                  <Skills img={tailblocks} name="Tailblocks" description="Tailblocks is similar to the bootstrap we can able to copy and use the code for the styling this makes our design faster and easier" />
                  <Skills img={jsx} name="Jsx" description="Jsx is a lightweighted html syntax language using jsx we can able to write the html inside the react code" />
                </div>
              </div>
            }
          />

          <Route path="/projects" element={<Projects />} />
         <Route
  path="/about"
  element={
    <LazyLoad height={200} offset={100} once>
      <About />
    </LazyLoad>
  }
/>
          <Route path="/resume" element={<Resume />} />
          <Route path="/more" element={<More />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;