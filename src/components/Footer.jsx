import React from "react";
import { insta, linkedin, gmail } from "./utiles/Cdn.js";
import ThemeToggle from "../../ThemeToggle.jsx";

function fun(url) {
  window.open(url, "_blank");
}

const Footer = () => {
  return (
    <div className=" p-4 pb-4 dark:bg-gray-400 dark:text-white bg-gray-200 text-center sm:text-left md:pl-2 md:w-full md:h-30">
      {/* Name & Location */}
      <h1 className="text-[15px] sm:text-xl md:text-[22px] lg:text-xl font-bold md:mt-1 md:mb-0">
        Mohith Yalamarthi
      </h1>
      <p className="text-[14px] sm:text-lg md:text-[12px] lg:text-2xl pl-0">
        Eluru, Andhra Pradesh
      </p>

      {/* Footer content */}
      <div className="flex flex-col items-center justify-center mt-4 relative md:mt-[-40]">
        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-20 lg:gap-12 mb-4 ">
          <img
            src={linkedin}
            alt="LinkedIn"
            onClick={() =>
              fun(
                "https://www.linkedin.com/in/mohith-sri-satya-sai-yalamarthi-995893257"
              )
            }
            className="w-6 h-6 cursor-pointer rounded-xl sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 hover:scale-110 transition-transform "
          />
          <img
            src={gmail}
            alt="Gmail"
            onClick={() =>
              fun(
                "https://mail.google.com/mail/?view=cm&fs=1&to=mohith.engineer@gmail.com"
              )
            }
            className="w-6 h-6 cursor-pointer rounded-xl sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 hover:scale-110 transition-transform"
          />
          <img
            src={insta}
            alt="Instagram"
            onClick={() => fun("https://github.com/Mohithyalamarthi2003")}
            className="w-6 h-6 cursor-pointer rounded-xl sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 hover:scale-110 transition-transform"
          />
        </div>

        {/* Contact number */}
        <h1 className=" mr-10 font-bold text-[13px] sm:text-[15px]  md:ml-[-1050] md:text-[17px] lg:text-[18px]  mb-2 md:mt-[-9]">
          +91 6281302115
        </h1>

        {/* Copyright */}
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px]  text-center md:mt-[-34]">
          © 2025 Mohith Sri Satya Sai Yalamarthi. All rights reserved.
        </p>

        {/* Back to Top Button */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-500  text-white px-4 py-2 rounded-md text-[14px] sm:text-[16px] md:text-[17px] absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 animate-bounce hover:bg-blue-600 transition md:mt-[-10]"
        >
          Top ⬆️
        </button>
      </div>
    </div>
  );
};

export default Footer;
