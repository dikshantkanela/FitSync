import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExCard from "./ExCard";

const ExerciseDetail = () => {
  const { bodypart } = useParams();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
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
      } catch (error) {
        console.log("Error Occurred: ", error);
      }
    };

    fetchExercises();
  }, [bodypart]);

  return (
    <div className="font-sans bg-[#021020] ">
        <div className="">
      <h1 className="font-bold text-center text-6xl text-white">{bodypart} Exercises</h1>
      <ExCard exercises={exercises} /></div>
    </div>
  );
};

export default ExerciseDetail;
