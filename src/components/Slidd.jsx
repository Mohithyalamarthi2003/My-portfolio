import React, { useState, useEffect } from "react";
import { duo,duo1,duo2,duo3,duo4,duo5 } from "./utiles/Cdn.js";

const Slidd = () => {
  const images = [duo,duo1,duo2,duo3,duo4,duo5];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length); 
      // ✅ % keeps it looping correctly between 0–5
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80 md:h-[450px] overflow-hidden rounded-xl shadow-lg mb-10">
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
