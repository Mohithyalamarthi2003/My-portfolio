// LazySection.jsx
import React, { useEffect, useRef, useState } from "react";

const LazySection = ({ children, height = 400 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Stop observing once loaded
        }
      },
      { threshold: 0.2 }, // Trigger when 20% of section visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: height }}>
      {isVisible ? (
        children
      ) : (
        <div className="flex justify-center items-center h-full text-gray-500 italic">
          Loading section...
        </div>
      )}
    </div>
  );
};

export default LazySection;
