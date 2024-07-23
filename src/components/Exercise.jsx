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
    <div>
      <h1 className="font-bold text-center text-2xl text-gray-200">Fitness Exercises</h1>
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

      {/* <select className="text-center" value={bodypart} onChange={handleBodyPartChange}> */}
      {/* </select> */}
      {/* <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise.name}</li>
        ))}
      </ul> */}
      <div className="">
        <div className="font-bold text-center text-2xl text-gray-200">Exercise List</div>
        <ExCard exercises={exercises} />
      </div>
    </div>
  );
};

export default Exercise;
