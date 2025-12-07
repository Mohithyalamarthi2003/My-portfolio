import React from "react";
import { Logo } from "./utiles/Cdn.js";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import ThemeToggle from "../../ThemeToggle.jsx";
const Header = () => {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
    </div>
  );
};

export default Header;
