import React from "react";
import activity from "../assets/activity.jpg";
import { Link } from "react-router-dom";

const ActivityScheduler = () => {
  return (
    <div id="goals" className="font-sans mt-[50px] p-3">
      <div className="flex flex-col sm:flex-row justify-between sm:justify-around items-center sm:items-start gap-8">
        <div className="w-full sm:w-[45%] mt-6 sm:mt-0">
          <img
            src={activity}
            className="rounded-md w-full h-auto max-h-[350px] sm:max-h-[500px] mx-auto"
            alt="ActivityScheduler"
          />
        </div>

        <div className="w-full sm:w-[45%] text-center sm:text-left">
          <h2 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-[50px] sm:leading-[60px] lg:leading-[70px] mb-6 sm:mb-10">
            Fitness Task Scheduler
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-justify mx-4 sm:mx-0">
            Our Activity Scheduler tool offers a streamlined approach to
            organizing your tasks and managing your time. By allowing you to set
            and track your activities, it ensures you stay on top of your
            commitments and productivity goals. This tool helps you efficiently
            allocate your time, maintain focus on your priorities, and achieve a
            more balanced and productive lifestyle.
          </p>
          <Link
            to="/schedule"
            className="flex items-center justify-between sm:justify-start my-6 sm:my-8 gap-3 px-6 py-3 rounded-lg text-white bg-[#114880] hover:bg-[#20346d] transition-all duration-300 w-[140px] sm:w-[160px] shadow-lg transform hover:scale-105"
          >
            <span className="font-semibold text-lg">Explore</span>
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
      </div>
    </div>
  );
};

export default ActivityScheduler;
