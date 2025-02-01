import React from "react";

const ExIconCard = ({ text }) => {
  return (
    <div className="bg-[#031932] font-sans hover:bg-[#19284e] text-white w-32 h-44 sm:w-36 sm:h-48 md:w-40 md:h-52 lg:w-48 lg:h-60 flex flex-col justify-around items-center p-3 md:p-4 shadow-gray-200 shadow-lg rounded-xl transition-all duration-300">
      {/* Image Container */}
      <div className="bg-pink-100 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full shadow-gray-200 shadow-lg overflow-hidden flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          src={text.link}
          alt="icon"
        />
      </div>

      {/* Text Container */}
      <div className="bg-black w-full text-center py-1 sm:py-2 rounded-lg hover:bg-[#213d5c] transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg">
        {text.name}
      </div>
    </div>
  );
};

export default ExIconCard;
