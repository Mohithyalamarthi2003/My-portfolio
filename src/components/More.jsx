import React from "react";
import AccordionItem from "./AccordianItem.jsx";
import ThemeToggle from "../../ThemeToggle.jsx";

const More= () => {
  const items = [
    {
      title: "Why to choose You",
      content: "I bring strong technical expertise in Computer Science, React.js, and AI, backed by certifications and global readiness. With discipline, adaptability, and a drive for innovation, I aim to deliver scalable solutions and contribute meaningfully to your institution."
    },
    {
      title: "Are your skills and projects are Geneuine!",
      content:"Every skill and project I showcase comes from hands‑on learning, consistent practice, and real application. With a project publication in Machine Learning–based Driver Drowsiness Detection, my portfolio reflects genuine, scalable solutions built entirely by me."
    },
    {
      title: "Certifications",
      content: " Namaste React, Besant Java & Testing, Project Publication, College project certificate"
    },
    {
      title: "How to beleive Your skills",
      content: "The best proof of my skills is my portfolio itself—every project is built through hands‑on learning and real application. From published research to responsive React.js interfaces, my work demonstrates genuine capability, scalability, and problem‑solving depth."
    },
    {
      title:"How did you learn German",
      content: "I have learned German up to the A2 level with the help of the Duolingo app."
    },
    {
      title:"Are you intrested in only frontend or any others",
      content: "Frontend is just my starting point—I’m eager to expand into diverse domains of technology. I’m ready to explore and adapt to new innovations that are booming globally."
    },
    {
      title:"Why do you want to do masters in switzerland",
      content:"I want to pursue my master’s in Switzerland because it’s my dream destination and offers world‑class education. A degree from Switzerland is globally recognized, giving me strong academic reputation and international career opportunities."
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div>
        <h1 className=" font-extrabold pt-10 md:ml-30 ml-2 text-2xl">Welcome to the Answers page, where your questions find clear and reliable solutions!</h1>
      </div>
    <div className="max-w-4xl max-h-[1500px] mx-auto mt-8  shadow-md rounded-md pr-10 ">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={ item.content} />
      ))}
    </div></div>
  );
};



export default More;