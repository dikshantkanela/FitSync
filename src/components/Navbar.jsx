import React from "react";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div className="font-sans">
      <nav className="flex flex-row items-center justify-between bg-[#021020] text-white md:mb-20 py-4 px-6 md:px-12">
        <a href="/" className="flex items-center space-x-3">
          <img className="w-16 h-16" src={logo} alt="FitSync Logo" />
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            FitSync
          </h1>
        </a>

        <div className="flex items-center space-x-6 mr-4 md:mr-0">
          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-gray-400 transition duration-300">
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
            <li className="hover:text-gray-400 transition duration-300">
              <a href="/about" className="text-lg">
                About Us
              </a>
            </li>
            <li className="hover:text-gray-400 transition duration-300">
              <a href="/contact" className="text-lg">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="relative">
            <Dropdown />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
