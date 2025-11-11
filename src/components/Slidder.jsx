import React, { useState, useEffect } from "react";
import { Java, skill1, css, js, react, tailcss, manual } from "./utiles/Cdn.js";

const Slidder = () => {
  const img = [Java, skill1, css, js, react, tailcss, manual];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % img.length);
    }, 2000); // change every 2s
    return () => clearInterval(interval);
  }, [img.length]);

  return (
    <div className="relative w-full md:bg-gray-300 overflow-hidden rounded-xl shadow-lg h-[250px] sm:h-[250px] md:h-[270px]  lg:h-[600px]">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {img.map((src, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-full p-2 overflow-hidden object-cover md:w-[1500px] md:ml-60 md:h-70 lg:w-[800px] sm:ml-60 sm:h-100 sm:w-[800px] lg:ml-60 lg:h-100 md:pt-20 md:pb-[-40px] "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slidder;
