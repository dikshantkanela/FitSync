import React, { useEffect, useState } from "react";
import Muscle from "./Muscle";
import ExCard from "./ExCard";
import ExIconCard from "./ExIconCard";

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [bodypart, setBodypart] = useState("biceps");

  const fetchExercises = async (muscle) => {
    const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${bodypart}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e3d41d095dmsh31c9126189937dep1d07d5jsnd2efffc075fa",
        "x-rapidapi-host": "exercises-by-api-ninjas.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setExercises(data);
      console.log(data);
    } catch (error) {
      console.log("Error Occurred: ", error);
    }
  };

  useEffect(() => {
    fetchExercises(bodypart);
  }, [bodypart]);

  const handleBodyPartChange = (value) => {
    setBodypart(value);
  };

  return (
    <div className="font-sans bg-[#021020]">
      <h1 className="font-bold text-center text-6xl my-10 text-white">Fitness Exercises</h1>
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {Muscle.map((muscle, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleBodyPartChange(muscle)}
          >
            <ExIconCard text={muscle} />
          </div>
        ))}
      </div>

    
      <div className="">
        <div className="font-bold text-center text-5xl mt-[80px] text-white">Exercise List</div>
        <ExCard exercises={exercises} />
      </div>
    </div>
  );
};

export default Exercise;
