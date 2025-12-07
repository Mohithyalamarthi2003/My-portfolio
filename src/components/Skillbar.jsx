import React from "react";
import ThemeToggle from "../../ThemeToggle";

const Skillbar = ({ skill, level }) => {
  return (
    <div className="w-[250px] mb-4">
      {/* Skill Label */}
      <div className="text-lg font-bold mb-2">{skill}</div>

      {/* Skillbar Container */}
      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden flex items-center">
        {/* Filled Bar */}
        <div
          className="bg-amber-500 h-full rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};
export default Skillbar;
