import React from "react";
import Logo from "../../../assets/logo.gif";

const Navbar: React.FC = () => {
  return (
    <nav className="hidden md:block bg-[var(--body-color)] fixed top-0 left-0 w-full shadow-md z-20">
      <div className="container mx-auto px-4 max-w-screen-lg flex items-center justify-center py-3">
        {/* Left Links */}
        <div className="flex gap-20">
          <a
            href="#home"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            About
          </a>
        </div>

        {/* Center Logo */}
        <div className="mx-6 px-10">
          <a href="#home">
            <img src={Logo} alt="Logo" className="h-10" />
          </a>
        </div>

        {/* Right Links */}
        <div className="flex gap-20">
          <a
            href="#animation"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            Animation
          </a>
          <a
            href="#contact"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
