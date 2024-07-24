import React from "react";
import ex from "../assets/ex.jpg";

const ExIconCard = ({ text }) => {
  return (
    <div className="bg-[#031932] pt-1 font-sans hover:bg-[#19284e] text-white  w-40 h-52 flex-col shadow-gray-200 shadow-lg rounded-xl">
      <div className="bg-pink-100 mx-6 my-4 overflow-hidden w-28 h-28 rounded-full shadow-gray-200 shadow-lg">
        <img className="w-full h-full object-cover" src={text.link} alt="img" />
      </div>

      <div className="bg-black rounded-xl hover:bg-[#213d5c] text-center p-2 mt-6">
        {text.name}
      </div>
    </div>
  );
};

export default ExIconCard;
