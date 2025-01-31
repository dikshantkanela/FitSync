import React from "react";
import exercise from "../assets/exercise.jpg";
import { Link } from "react-router-dom";

const TrackExercise = () => {
  return (
    <div
      id="exercises"
      className="font-sans flex flex-col-reverse sm:flex-row justify-between items-center sm:justify-around p-3"
    >
      {/* Left Section (Text) */}
      <div className="w-full sm:w-[45%] text-center sm:text-left">
        <h2 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-[50px] sm:leading-[60px] lg:leading-[70px] mb-6 sm:mb-10">
          Explore Exercises
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mt-6 sm:mt-8 text-justify">
          Dive into a comprehensive library of exercises tailored to target
          every muscle group, whether you're focusing on abdominals, biceps,
          calves, chest, forearms, glutes, or any other part of your body. Our
          extensive database offers a variety of workouts to suit your fitness
          goals, from beginner routines to advanced techniques. Each exercise is
          detailed with step-by-step instructions, ensuring you perform them
          correctly and effectively.
        </p>
        <Link
          to="/exercise"
          className="flex items-center justify-center sm:justify-start my-6 sm:my-8 gap-2 px-4 py-2 rounded-md text-indigo-50 bg-[#114880] hover:bg-[#20346d] transition-colors w-[160px] sm:w-[180px]"
        >
          <span className="font-medium text-lg">Explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
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

      {/* Right Section (Image) */}
      <div className="w-full sm:w-[45%] mt-6 sm:mt-0">
        <img
          src={exercise}
          className="rounded-md w-full h-auto max-h-[350px] sm:max-h-[800px] mx-auto"
          alt="Exercise"
        />
      </div>
    </div>
  );
};

export default TrackExercise;
