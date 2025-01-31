import React from "react";
import calories from "../assets/calories.jpg";
import NaturalExercise from "./NutriComp/ExToCal";

const TrackCalories = () => {
  return (
    <>
      <div
        id="trackcalories"
        className="font-sans  flex flex-col sm:flex-row justify-between items-center sm:justify-around p-3 "
      >
        {/* Image Section */}
        <div className="w-full h-full sm:w-[40%] mt-6 sm:mt-0">
          <img
            src={calories}
            className="rounded-md w-full h-auto max-h-[350px] sm:max-h-[800px] mx-auto"
            alt="calorieImage"
          />
        </div>
        {/* Text Section */}
        <div className="w-full sm:w-[45%] text-center sm:text-left">
          <h2 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-[50px] sm:leading-[60px] lg:leading-[70px]">
            Track Calories by Activity
          </h2>
          <p className="text-base text-wrap sm:text-lg text-gray-300 mt-6 sm:mt-8 w-full  text-justify">
            Effortlessly track and analyze your calorie expenditure for every
            activity with precision and ease, ensuring you stay informed and
            motivated on your fitness journey. Monitor detailed insights and
            progress to achieve your health and wellness goals more effectively.
          </p>
          <div className="mt-6 sm:mt-8">
            <NaturalExercise />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackCalories;
