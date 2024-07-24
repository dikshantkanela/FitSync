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
    <div className="font-sans flex flex-col items-center justify-center ">
      <h2 className="text-white   text-center text-6xl font-bold" >Get Nutritional Information</h2>

      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative my-10">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex : bananas"
          id="search" className="block w-[600px]  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        <button type="submit" onClick={handleSearch} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>

      {/* {results && <pre>{JSON.stringify(results, null, 2)}</pre>} */}
      <div className="text-white  font-semibold text-2xl ">
        {results? results.foods.map((food, index) => (
          <div key={index}>
            {query === food.food_name ?
            <div className="text-justify bg-[#031932] rounded-md p-7 w-[600px] ">
               <div className=""><span><img src={food.photo.thumb} alt="..." /></span></div>
                <div className="my-3">Food Name :  <span>{food.food_name}</span></div>
                <div className="my-3">Calories : <span>{food.nf_calories}</span></div>
                <div className="my-3">Total Fat : <span>{food.nf_total_fat}</span></div>
                <div className="my-3">Saturated Fat : <span>{food.nf_saturated_fat}</span></div>
                <div className="my-3">Cholesterol : <span>{food.nf_cholesterol}</span></div>
                <div className="my-3">Sodium : <span>{food.nf_sodium}</span></div>
                <div className="my-3">Carbs : <span>{food.nf_total_carbohydrate}</span></div>
                <div className="my-3">Fiber : <span>{food.nf_dietary_fiber}</span></div>
                <div className="my-3">Sugar : <span>{food.nf_sugars}</span></div>
                <div className="my-3">Protien : <span>{food.nf_protein}</span></div>
            </div> : "" }</div>
        )) : ""}
      </div>

    </div>
  );
};

export default NaturalNutrients;

// Natural Language for Nutrients
// pizza
// Search
// {
//   "foods": [
//     {
//       "food_name": "pizza",
//       "brand_name": null,
//       "serving_qty": 1,
//       "serving_unit": "slice",
//       "serving_weight_grams": 107,
//       "nf_calories": 284.62,
//       "nf_total_fat": 10.37,
//       "nf_saturated_fat": 4.78,
//       "nf_cholesterol": 18.19,
//       "nf_sodium": 639.86,
//       "nf_total_carbohydrate": 35.66,
//       "nf_dietary_fiber": 2.46,
//       "nf_sugars": 3.83,
//       "nf_protein": 12.19,
//       "nf_potassium": 184.04,
//       "nf_p": 231.12,
//       "full_nutrients": [ {
//           "serving_weight": 28.3495,
//           "measure": "wt. oz",
//           "seq": null,
//           "qty": 1
//         }
//       ],
//       "lat": null,
//       "lng": null,
//       "meal_type": 3,
//       "photo": {
//         "thumb": "https://nix-tag-images.s3.amazonaws.com/1060_thumb.jpg",
//         "highres": "https://nix-tag-images.s3.amazonaws.com/1060_highres.jpg",
//         "is_user_uploaded": false
//       },
//       "sub_recipe": null,
//       "class_code": null,
//       "brick_code": null,
//       "tag_id": null
//     }
//   ]
// }
