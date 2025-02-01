import React from "react";
import Nutri from "../assets/nutri.jpeg";
import { Link } from "react-router-dom";

const TrackNutrients = () => {
  return (
    <div
      id="food"
      className="font-sans flex flex-col sm:flex-row justify-between sm:justify-around items-center sm:items-start gap-8 p-3 mt-10 sm:mt-12"
    >
      <div className="w-full sm:w-[45%] mt-6 sm:mt-0">
        <img
          src={Nutri}
          className="rounded-md w-full h-auto max-h-[350px] sm:max-h-[500px] mx-auto"
          alt="NutriImage"
        />
      </div>

      <div className="w-full sm:w-[45%] text-center sm:text-left mt-6 sm:mt-0">
        <h2 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-[50px] sm:leading-[60px] lg:leading-[70px] mb-6 sm:mb-10">
          Get Nutritional Information
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mt-6 sm:mt-8 text-justify mx-4 sm:mx-0">
          Our Nutritional Information tool provides detailed insights into the
          food you enter, giving you precise data to support your dietary goals.
          For each item, you’ll receive a complete breakdown, including
          calories, total fat, saturated fat, cholesterol, sodium,
          carbohydrates, fiber, sugar, and protein. This comprehensive
          information helps you stay aware of health factors and track your
          calorie, protein, and other nutritional goals, making it easier to
          make informed and balanced dietary choices.
        </p>

        <Link
          to="/nutrients"
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
  );
};

export default TrackNutrients;
