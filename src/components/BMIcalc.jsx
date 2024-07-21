import React, { useState } from "react";

const BMIcalc = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const bmiCalculator = (e) => {
    e.preventDefault();
    const hInMeter = height / 100;
    const BMI = (weight / (hInMeter * hInMeter)).toFixed(2);
    setBmi(BMI);
    setCategory(getBMICategory(BMI));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  };

  return (
    <div className=" text-gray-200">
      <h1>BMI Calculator</h1>
      <form onSubmit={bmiCalculator}>
        <div>
          <label>
            Height (cm):
            <input
              className="border-black border-2 text-gray-800"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Weight (kg):
            <input
              className="border-black border-2 text-gray-800"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" className="bg-red-800 cursor-pointer">
          Calculate BMI
        </button>
      </form>
      {bmi && (
        <div>
          <h2>Your BMI is: {bmi}</h2>
          <h2>Category : {category}</h2>
        </div>
      )}
    </div>
  );
};

export default BMIcalc;
