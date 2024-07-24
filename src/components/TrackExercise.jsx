import React from "react";
import exercise from "../assets/exercise.jpg";
import { Link } from "react-router-dom";
const TrackExercise = () => {
  return (
    <div id="exercises" className="font-sans mt-[50px] ">
      <div className="flex flex-row justify-around">
        <div className="left flex flex-col">
          <h2 className="text-white text font-bold mb-[50px] text-5xl">
            Explore Exercises
          </h2>
          <p className=" text-gray-300 text-justify text-xl  h-[180px] w-[600px]">
            Dive into a comprehensive library of exercises tailored to target
            every muscle group, whether you're focusing on abdominals, biceps,
            calves, chest, forearms, glutes, or any other part of your body. Our
            extensive database offers a variety of workouts to suit your fitness
            goals, from beginner routines to advanced techniques. Each exercise
            is detailed with step-by-step instructions, ensuring you perform
            them correctly and effectively.{" "}
          </p>
          
          <Link to="/exercise" className="flex items-center my-[82px] gap-2 px-3 w-[120px] py-2 rounded-md text-indigo-50 bg-[#114880] hover:bg-[#20346d] transition-colors">
            <span className="font-medium text-md">Explore</span>
            <svg
              xmlns="http://www.w3.org/2000/svg" //ARROW IMAGE
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
        <div className="right">
          <img
            src={exercise}
            className="w-[600px] h-[400px] rounded-md"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TrackExercise;
