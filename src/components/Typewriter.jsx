import React, { useState, useEffect, useRef } from "react";
import ThemeToggle from "../../ThemeToggle";

const Typewriter = () => {
  const text = [
    "Are you ready to explore my Skills....!",
    "Showcasing my skills here !",
    "I have hands-on experience on my skills !",
  
  ];

  const [txt, settxt] = useState("");
  const [index, setindex] = useState(0);
  const indexref = useRef(0);
  const [visible, setVisible] = useState(true); // for fade effect

  useEffect(() => {
    const currenttxt = text[index];
    const interval = setInterval(() => {
      const currentchar = currenttxt.charAt(indexref.current);
      settxt((prev) => prev + currentchar);
      indexref.current += 1;

      if (indexref.current >= currenttxt.length) {
        clearInterval(interval);

        // Fade out before next sentence
        setTimeout(() => {
          setVisible(false); // trigger fade out
          setTimeout(() => {
            settxt("");
            indexref.current = 0;
            setindex((prev) => (prev + 1) % text.length);
            setVisible(true); // fade back in
          }, 500); // fade duration
        }, 2000); // wait before fade out
      }
    }, 150);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <h1
        className={`  mt-0 pt-10  font-bold ml-10 transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {txt}
      </h1>
    </div>
  );
};

export default Typewriter;