import React from "react";

const ExIconCard = ({ text }) => {
  return (
    <div className="bg-[#031932] justify-around font-sans hover:bg-[#19284e] text-white w-32 h-44 sm:w-28 sm:h-40 md:w-32 md:h-44 lg:w-40 lg:h-56 xl:w-48 xl:h-60 flex flex-col items-center p-3 sm:p-3 md:p-4 shadow-lg rounded-xl transition-all duration-300">
      <div className="bg-pink-100 w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full shadow-lg overflow-hidden flex items-center justify-center mb-3">
        <img
          className="w-full h-full object-cover"
          src={text.link}
          alt="icon"
        />
      </div>

      <div className="bg-black w-full text-center py-1.5 sm:py-1.5 md:py-2 rounded-lg hover:bg-[#213d5c] transition-all duration-300 text-sm sm:text-sm md:text-base lg:text-lg font-medium">
        {text.name}
      </div>
    </div>
  );
};

export default ExIconCard;