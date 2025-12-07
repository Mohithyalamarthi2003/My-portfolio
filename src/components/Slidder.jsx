import React, { useState, useEffect } from "react";
import { Java, skill1, css, js, react, tailcss, manual } from "./utiles/Cdn";

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
    <div className="relative w-full md:bg-gray-300 overflow-hidden rounded-xl shadow-lg h-[250px] sm:h-[250px] md:h-[400px] md:pt-10 md:pb-[-50px] lg:h-[500px]">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {img.map((src, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-[98%] h-full object-cover md:h-[390px] md:mb-[-50px] md:w-[2000px] md:ml-40 lg:w-[800px] sm:ml-60 sm:w-[800px] lg:ml-60"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slidder;
