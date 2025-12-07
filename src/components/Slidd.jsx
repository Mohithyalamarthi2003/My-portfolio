import React, { useState, useEffect } from "react";
import { duo1, duo2, duo3, duo4, german } from "./components/utiles/Cdn";

const Slidd = () => {
  const images = [duo1, duo2, duo3, duo4, german];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      // ✅ % keeps it looping correctly between 0–5
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full md:mt-5  h-80 md:h-[350px] overflow-hidden rounded-xl shadow-lg mb-10">
      <div
        className="flex transition-transform duration-1000 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="w-full h-full flex-shrink-0 p-2"
          />
        ))}
      </div>
    </div>
  );
};

export default Slidd;
