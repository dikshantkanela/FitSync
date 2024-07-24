import React from "react";
import logo2 from '../assets/logo2.png'

const Footer = () => {
  return (
    <div className="font-sans">
      <footer className="bg-[#010d1a] rounded-lg shadow ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
          <a href="">
    <div className='flex flex-row items-center '>
          <img className='w-[80px]' src={logo2} alt="" />
          <h1 className='text-3xl text-white mx-4 font-semibold'>FitSync</h1>
      </div>
      </a>  
            
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-400 sm:text-center">
            © 2024{" "}
            <a href="/" className="hover:underline">
              FitSync
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
