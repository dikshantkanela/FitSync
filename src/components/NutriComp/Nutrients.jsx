import React, { useState } from "react";
import { fetchFromNutritionix } from "./NutriApi";

const NaturalNutrients = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    const body = JSON.stringify({ query });
    const response = await fetchFromNutritionix("natural/nutrients", {
      method: "POST",
      body,
    });
    setResults(response);
  };

  return (
    <div className="font-sans flex flex-col items-center p-5 min-h-screen bg-[#021020] justify-center">
      {/* Heading */}
      <h2 className="text-white my-5 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        Get Nutritional Information
      </h2>

      {/* Improved Search Bar */}
      <div className="relative my-5 w-full max-w-2xl">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Allow pressing Enter to search
          placeholder="Enter a food item (e.g., bananas, pizza)"
          className="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300"
          required
        />
        <button
          onClick={handleSearch}
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300"
        >
          Search
        </button>
      </div>

      {/* Results Section */}
      <div className="text-white flex-grow overflow-y-auto font-semibold text-lg sm:text-xl w-full max-w-2xl px-4">
        {results &&
          results.foods.map(
            (food, index) =>
              query === food.food_name && (
                <div
                  key={index}
                  className="text-justify bg-[#031932] rounded-md p-5 sm:p-7 my-4"
                >
                  {/* Food Image */}
                  <div className="flex justify-center">
                    <img
                      src={food.photo.thumb}
                      alt={food.food_name}
                      className="rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Food Details */}
                  <div className="mt-4 space-y-3">
                    <div>
                      <span className="font-bold">Food Name:</span>{" "}
                      {food.food_name}
                    </div>
                    <div>
                      <span className="font-bold">Calories:</span>{" "}
                      {food.nf_calories}
                    </div>
                    <div>
                      <span className="font-bold">Total Fat:</span>{" "}
                      {food.nf_total_fat}g
                    </div>
                    <div>
                      <span className="font-bold">Saturated Fat:</span>{" "}
                      {food.nf_saturated_fat}g
                    </div>
                    <div>
                      <span className="font-bold">Cholesterol:</span>{" "}
                      {food.nf_cholesterol}mg
                    </div>
                    <div>
                      <span className="font-bold">Sodium:</span>{" "}
                      {food.nf_sodium}mg
                    </div>
                    <div>
                      <span className="font-bold">Carbs:</span>{" "}
                      {food.nf_total_carbohydrate}g
                    </div>
                    <div>
                      <span className="font-bold">Fiber:</span>{" "}
                      {food.nf_dietary_fiber}g
                    </div>
                    <div>
                      <span className="font-bold">Sugar:</span> {food.nf_sugars}g
                    </div>
                    <div>
                      <span className="font-bold">Protein:</span>{" "}
                      {food.nf_protein}g
                    </div>
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default NaturalNutrients;