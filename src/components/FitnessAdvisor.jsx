import React from "react";
import bmi from "../assets/bmi.jpeg";
import { Link } from "react-router-dom";
const FitnessAdvisor = () => {
  return (
    <div id="advisor">
      <div className="font-sans mt-[50px] ">
        <div className="flex flex-row justify-around">
          <div className="left flex flex-col">
            <h2 className="text-white text font-bold mb-[50px] text-5xl">
              Your Fitness Advisor
            </h2>
            <p className=" text-gray-300 text-justify text-xl  h-[180px] w-[600px]">
              Our new feature takes your height and weight to calculate your
              BMI, BMR, and maintenance calories, offering personalized
              recommendations to help you achieve your fitness goals. Once we
              have these key metrics, the tool provides tailored suggestions
              such as the optimal number of calories you should consume daily,
              how much exercise you should aim for, and practical tips for
              lifestyle adjustments to enhance your overall well-being and
              performance.
            </p>

            <Link to="/bmi" className="flex items-center my-[92px] gap-2 px-3 w-[120px] py-2 rounded-md text-indigo-50 bg-[#114880] hover:bg-[#20346d] transition-colors">
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
            <img src={bmi} className="w-[600px] h-[400px] rounded-md" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessAdvisor;
