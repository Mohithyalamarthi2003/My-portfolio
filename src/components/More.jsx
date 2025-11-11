import React from "react";
import AccordionItem from "./AccordianItem.jsx";
import ThemeToggle from "../../ThemeToggle.jsx";

const More= () => {
  const items = [
    {
      title: "Why to choose You",
      content: "You should choose me because I bring a unique combination of technical expertise, strategic thinking, and relentless drive. With a solid foundation in Computer Science and hands-on experience in frontend development using React.js, JavaScript, and Tailwind CSS, Ive built polished, responsive projects that reflect both functionality and design excellence. My certifications in AI, Cloud, and Testing show my commitment to continuous learning, while my 500+ day Duolingo streak in German reflects my discipline and adaptability—especially important as I prepare for a global career in Switzerland. I dont just solve problems I analyze them deeply, troubleshoot persistently, and always aim to build scalable, maintainable solutions. Im not just looking for a position—Im looking to contribute meaningfully, grow continuously, and represent your institution or company with integrity and innovation."
    },
    {
      title: "Are your skills and projects are Geneuine!",
      content:"Absolutely. Every skill I have listed and every project I have built is the result of hands-on learning, consistent practice, and real-world application. I have completed certifications from trusted platforms like Google, IBM, and Besant Technologies, and I have applied those skills directly in my portfolio. From React.js components with advanced UI effects to structured manual testing workflows, everything I showcase is built by me, not copied or outsourced. I believe in transparency and depth. That is why I am always ready to explain the logic behind my code, the structure of my projects, and the reasoning behind every decision I make. If you explore my portfolio, you will see not just polished interfaces but also scalable and maintainable solutions that reflect my genuine capabilities."
    },
    {
      title: "Certifications",
      content: "Google AI, IBM Cloud, Namaste React, Besant Java & Testing..."
    },
    {
      title: "How to beleive Your skills",
      content: "My portfolio and projects are the best examples to prove my skills"
    },
    {
      title:"How do you learn German",
      content: "I learnt german a2 level with the help of duolingo app"
    },
    {
      title:"Are you intrested in only frontend or any others",
      content: "Frontend is just a starting point iam ready to explore all the new technologies booming around the world"
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div>
        <h1 className=" font-extrabold pt-10  ml-30 text-2xl">Welcome to the Answer page for all your questions</h1>
      </div>
    <div className="max-w-4xl max-h-[500px] mx-auto mt-8  shadow-md rounded-md overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={ item.content} />
      ))}
    </div></div>
  );
};



export default More;