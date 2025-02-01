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
    <div className="font-sans bg-[#021020] min-h-screen flex flex-col text-white">
      <h1 className="font-bold text-center text-4xl sm:text-5xl md:text-6xl my-6 sm:my-8 px-4 text-white">
        {bodypart.toUpperCase()} EXERCISES
      </h1>
      <div className="flex-grow overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10">
        <ExCard exercises={exercises} />
      </div>
    </div>
  );
};

export default ExerciseDetail;
