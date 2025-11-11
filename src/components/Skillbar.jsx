import React from "react";
import ThemeToggle from "../../ThemeToggle";

const Skillbar = ({ skill, level }) => {
  return (
    <div className="w-full mb-4 px-2 sm:px-4 md:px-0">
      {/* Skill Label */}
      <div className="text-lg sm:text-xl font-bold  mb-2">
        {skill}
      </div>

      {/* Skillbar Container */}
      <div className="w-full md:flex  max-w-md bg-gray-200 rounded-full h-6 sm:h-7 overflow-hidden flex  items-center">
        {/* Filled Bar */}
        <div
          className="bg-amber-500 h-full rounded-full transition-all duration-1000 ease-in-out md:flex-row"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default Skillbar;