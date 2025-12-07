import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 mr-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 mb-6 m-6 mr-2 font-semibold bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <span className="center ">{title}</span>
        <span className="pr-10">{isOpen ? "-" : "+"}</span>
      </button>

      <div
        className={`px-4 overflow-hidden mb-3 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300] py-2" : "max-h-0"
        }`}
      >
        <p className="text-gray-700 font-bold ml-5 pb-3 mb-10">{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
