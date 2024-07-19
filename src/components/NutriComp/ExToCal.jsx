import React, { useState } from "react";
import { fetchFromNutritionix } from "./NutriApi";


const NaturalExercise = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    const body = JSON.stringify({ query });
    const response = await fetchFromNutritionix("natural/exercise", {
      method: "POST",
      body,
    });
    setResults(response);
  };

  return (
    <div>
      <h2>Natural Language for Exercise</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter exercise description"
      />
      <button onClick={handleSearch}>Search</button>
      {/* {results ? <pre>{JSON.stringify(results, null, 2)}</pre> : ""} */}
      <div className="">
        {results? results.exercises.map((exer, index) => (
          <div key={index}>{exer.nf_calories} Kcal</div>
        )) : ""}
      </div>
    </div>
  );
};

export default NaturalExercise;