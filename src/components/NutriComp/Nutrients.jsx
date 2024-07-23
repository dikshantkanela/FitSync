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
    <div>
      <h2>Natural Language for Nutrients</h2>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter food description"
      />
      <button onClick={handleSearch}>Search</button>
      {/* {results && <pre>{JSON.stringify(results, null, 2)}</pre>} */}
      <div className="">
        {results? results.foods.map((food, index) => (
          <div key={index}>
            {query === food.food_name ?
            <div className="">
                <div className="">Food Name : <span>{food.food_name}</span></div>
                <div className="">Calories : <span>{food.nf_calories}</span></div>
                <div className="">Total fat : <span>{food.nf_total_fat}</span></div>
                <div className="">Saturated fat : <span>{food.nf_saturated_fat}</span></div>
                <div className="">Cholesterol : <span>{food.nf_cholesterol}</span></div>
                <div className="">Sodium : <span>{food.nf_sodium}</span></div>
                <div className="">Carbs : <span>{food.nf_total_carbohydrate}</span></div>
                <div className="">Fiber : <span>{food.nf_dietary_fiber}</span></div>
                <div className="">Sugar : <span>{food.nf_sugars}</span></div>
                <div className="">Protien : <span>{food.nf_protein}</span></div>
            </div> : " NO RESULTS FOUND "}</div>
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
