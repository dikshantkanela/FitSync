import React, { useEffect, useState } from "react";
import Muscle from "./Muscle";
import ExCard from "./ExCard";


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

  const handleBodyPartChange = (event) => {
    setBodypart(event.target.value);
  };

  return (
    <div>
      <h1 className="font-bold text-center text-2xl">Fitness Exercises</h1>
      <select className="text-center" value={bodypart} onChange={handleBodyPartChange}>
        {Muscle.map((muscle, index) => (
          <option key={index} value={muscle}>
            {muscle.replace('_', ' ')}
          </option>
        ))}
      </select>
      {/* <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise.name}</li>
        ))}
      </ul> */}
      <div className="">
        <ExCard exercises={exercises} />
      </div>
    </div>
  );
};

export default Exercise;

