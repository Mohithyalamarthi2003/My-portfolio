import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../../ThemeToggle";
const Resume = () => {
  return (
    <div className=" bg-orange-50 pb-10 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl  underline md:ml-10 text-center font-bold  pt-10">
        You can view the resume here
      </h1>
      <button
        type="button"
        className="border border-gray-400 rounded-2xl mt-10 md:mt-23 ml-10 animate-bounce w-32 h-10 bg-blue-500 text-white hover:bg-blue-700 transition"
      >
        <a href="/Resume.pdf" target="_blank">
          View Resume
        </a>
      </button>
      <div className="mr-10">
        <h1 className="text-3xl mt-10 md:ml-10 ml-10 text-shadow-amber-50 underline animate-pulse">
          Overview of my resume
        </h1>
        <h2 className="text-2xl font-bold ml-10 mt-10 ">
          Consolidated BTech Grade Sheet
        </h2>
        <p className="ml-10 mt-5 md:text-xl">
          I completed my B.Tech in Computer Science with a consolidated CGPA of
          8.69 (83.5%), reflecting consistent academic excellence. My coursework
          covered core subjects and hands-on projects in React.js, JavaScript,
          Python, and Machine Learning. I earned certifications from Google,
          IBM, and Besant Technologies, applying those skills in real-world
          portfolio work. This strong foundation equips me for advanced research
          in Cybersecurity and AI
        </p>
        <button
          type="button"
          className="border ml-10 mt-6 pl-5 pr-5 bg-blue-600 text-white pt-2 pb-2 animate-bounce"
        >
          <a href="./consolidated.jpg" target="_blank">
            Click to View{" "}
          </a>
        </button>
        <h2 className=" mt-10 ml-10 font-bold text-2xl">
          Proffesional Summary
        </h2>
        <p className="mt-5   ml-10 md:text-xl lg:text-xl">
          The professional summary section serves as a concise introduction that
          highlights my core strengths, technical expertise, and career
          direction. It’s crafted to reflect my real achievements and
          aspirations, offering recruiters a quick yet authentic glimpse into
          who I am. The summary I've included in my resume is both realistic and
          strategically written to align with my goals in AI, Data Science, and
          global opportunities
        </p>
        <h2 className=" mt-10 ml-10 font-bold text-2xl md:text-xl lg:text-2xl">
          Educational Background
        </h2>
        <p className="mt-5   ml-10 md:text-xl lg:text-xl">
          I completed my Bachelor's degree in Computer Science in 2025,
          graduating with a CGPA of 8.69. My academic journey emphasized core
          subjects like programming, data structures, and software testing. This
          foundation, combined with hands-on certifications, fuels my pursuit of
          advanced studies in AI and Data Science
        </p>
        <h2 className=" mt-10 ml-10 font-bold text-2xl">Technical Skills</h2>
        <p className="mt-5 md:text-xl lg:text-xl  ml-10">
          My technical skills reflect a blend of academic learning and
          post-graduation mastery, built through hands-on projects and
          certifications. I've developed strong proficiency in Java, React.js,
          HTML, CSS, JavaScript, and Manual Testing, along with scalable UI/UX
          design techniques. These skills empower me to build responsive web
          applications, troubleshoot complex issues, and contribute effectively
          to modern development teams
        </p>
        <h2 className=" mt-10 ml-10 font-bold text-2xl">
          Internship Experience
        </h2>
        <p className="mt-5 md:text-xl lg:text-xl  ml-10">
          I completed a recent internship during my college years, gaining
          practical exposure to real-world development workflows and team
          collaboration. The experience helped me apply my technical skills in
          Java, React.js, and Manual Testing to live projects and
          problem-solving scenarios. It strengthened my understanding of
          professional environments and enhanced my readiness for global
          opportunities in tech and AI.
        </p>
        <h2 className=" mt-10 ml-10 font-bold text-2xl">Projects</h2>
        <p className="mt-5 md:text-xl lg:text-xl  ml-10">
          The Projects section highlights the hands-on work I completed during
          and after my college education, showcasing my ability to apply theory
          to practice. These include frontend applications, UI/UX enhancements,
          and testing workflows built using React.js, JavaScript, Java, and
          Manual Testing. Each project reflects my growth in scalable design,
          problem-solving, and readiness for global tech challenges.
        </p>
        <h2 className=" mt-10 ml-10 font-bold text-2xl">Certifications</h2>
        <p className="mt-5 mb-10 md:text-xl lg:text-xl ml-10">
          The Certification section showcases the credentials I earned during
          and after my college education, reflecting continuous learning and
          technical growth. These include recognized certifications in React
          (Namaste React), Java & Manual Testing (Besant Technologies), and
          JavaScript Essentials. Each certificate strengthens my profile for
          global opportunities and validates my expertise across key development
          and testing domains.
        </p>
      </div>
    </div>
  );
};

export default Resume;
