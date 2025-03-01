import React from "react";
import bmi from "../assets/bmi.jpeg";
import { Link } from "react-router-dom";

const FitnessAdvisor = () => {
  return (
    <div id="advisor" className="font-sans mt-[50px]">
      <div className="flex flex-col-reverse sm:flex-row justify-between sm:justify-around items-center sm:items-start gap-8 p-3">
        <div className="w-full sm:w-[45%] text-center sm:text-left mt-6 sm:mt-0">
          <h2 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-[50px] sm:leading-[60px] lg:leading-[70px] mb-6 sm:mb-10">
            Your Fitness Advisor
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-justify mx-4 sm:mx-0">
            Our new feature takes your height and weight to calculate your BMI,
            BMR, and maintenance calories, offering personalized recommendations
            to help you achieve your fitness goals. Once we have these key
            metrics, the tool provides tailored suggestions such as the optimal
            number of calories you should consume daily, how much exercise you
            should aim for, and practical tips for lifestyle adjustments to
            enhance your overall well-being and performance.
          </p>
          <Link
            to="/bmi"
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

        <div className="w-full sm:w-[45%] mt-6 sm:mt-0">
          <img
            src={bmi}
            className="rounded-md w-full h-auto max-h-[350px] sm:max-h-[500px] mx-auto"
            alt="FitnessAdvisor"
          />
        </div>
      </div>
    </div>
  );
};

export default FitnessAdvisor;
