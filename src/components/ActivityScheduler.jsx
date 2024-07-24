import React from "react";
import activity from "../assets/activity.jpg";
import { Link } from "react-router-dom";
const ActivityScheduler = () => {
  return (
    <div
      id="goals"
      className="flex flex-row justify-around font-sans gap-8 h-[80vh] mt-[50px] p-3"
    >
      <div className="left">
        <img
          src={activity}
          className="rounded-md w-[600px] h-[400px]"
          alt="calorieImage"
        />
      </div>
      <div className="right flex flex-col  ">
        <h2 className="text-white font-bold text-5xl">
          Fitness Task Scheduler
        </h2>
        <p className="text-gray-300 text-justify m text-xl ml-2 h-[180px] w-[600px] mb-[-50px] mt-10">
          Our Activity Scheduler tool offers a streamlined approach to
          organizing your tasks and managing your time. By allowing you to set
          and track your activities, it ensures you stay on top of your
          commitments and productivity goals. This tool helps you efficiently
          allocate your time, maintain focus on your priorities, and achieve a
          more balanced and productive lifestyle.
        </p>
        <Link to="/schedule" className="flex items-center my-[143px] gap-2 px-3 w-[120px] py-2 rounded-md text-indigo-50 bg-[#114880] hover:bg-[#20346d] transition-colors">
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
        <div></div>
      </div>
    </div>
  );
};

export default ActivityScheduler;
