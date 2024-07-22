import React, { useEffect, useState } from "react";
import { fetchFromNutritionix } from "./NutriApi";
import { motion } from "framer-motion";

const NaturalExercise = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false); // State to manage fetch trigger

  useEffect(() => {
    // Fetch data only if shouldFetch is true and query is not empty
    if (shouldFetch && query.trim() !== "") {
      const fetchData = async () => {
        try {
          const body = JSON.stringify({ query });
          const response = await fetchFromNutritionix("natural/exercise", {
            method: "POST",
            body,
          });
          setResults(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setShouldFetch(false); // Reset trigger state after fetching
        }
      };

      fetchData();
    }
  }, [shouldFetch, query]); // Dependency array includes `shouldFetch` and `query`

  const handleSearch = () => {
    if (query.trim() !== "") {
      setShouldFetch(true); // Set trigger state to true
    }
  };

  return (
    <div className="flex flex-col ml-2">
      <h2 className="text-white text-3xl mt-8 mb-3">Enter Activity : </h2>

      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          id="search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ex: 1 hour Jogging"
          required
        />
        <button
          onClick={handleSearch}
          type="button"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>

      <motion.div
    
        className="text-gray-300 mt-8"
      >
        {results ? (
          results.exercises.map((exer, index) => (
            <div key={index} className="mb-4">
              <p className="text-4xl">
                You Burnt {exer.nf_calories} Kcal by{" "}
                <span className="capitalize">{exer.name}</span>{" "}
                <motion.span
                  initial={{ scale: 0.5, opacity: 0, rotate: 0 }}
                  animate={{ scale: 1, opacity: 1, rotate: 360 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  className="ml-2 inline-block"
                >
                  🎉
                </motion.span> 
              </p>
            </div>
          ))
        ) : ""}
      </motion.div>
      
    </div>
  );
};

export default NaturalExercise;
