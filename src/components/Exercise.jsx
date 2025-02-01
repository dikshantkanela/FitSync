import React from "react";
import { useNavigate } from "react-router-dom";
import Muscle from "./Muscle";
import ExIconCard from "./ExIconCard";

const Exercise = () => {
  const navigate = useNavigate();

  const handleBodyPartChange = (muscle) => {
    navigate(`/exercise/${muscle}`);
  };

  return (
    <div className="font-sans p-5 bg-[#021020] min-h-screen">
      <h1 className="font-bold text-center text-4xl sm:text-5xl md:text-6xl my-6 text-white">
        Fitness Exercises
      </h1>

      <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 p-4 justify-center">
        {Muscle.map((muscle, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleBodyPartChange(muscle.name)}
          >
            <ExIconCard text={muscle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise;
