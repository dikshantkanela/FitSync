import React, { useState } from "react";

const BMIcalc = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("sedentary");
  const [result, setResult] = useState(null); // for BMR
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [advice, setAdvice] = useState("");

  const bmiCalculator = () => {
    const hInMeter = height / 100;
    const BMI = (weight / (hInMeter * hInMeter)).toFixed(2);
    setBmi(BMI);
    setCategory(getBMICategory(BMI));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      setAdvice(
        "You should consume more calories than your maintenance calories to gain weight!"
      );
      return "Underweight!";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setAdvice(
        "You should consume exactly your maintenance calories to keep your BMI constant!"
      );
      return "Normal Weight!";
    } else if (bmi >= 25 && bmi <= 29.9) {
      setAdvice(
        "You should consume fewer calories than your maintenance calories to lose weight!"
      );
      return "Overweight!";
    } else {
      setAdvice(
        "You should consume fewer calories than your maintenance calories to lose weight!"
      );
      return "Obese!";
    }
  };

  const calculateCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age, 10);
    let bmr;

    // Calculate BMR based on gender
    if (gender === "male") {
      bmr = 88.362 + 13.397 * w + 4.799 * h - 5.677 * a;
    } else {
      bmr = 447.593 + 9.247 * w + 3.098 * h - 4.33 * a;
    }

    // Adjust BMR based on activity level
    let maintenanceCalories;
    switch (activity) {
      case "sedentary":
        maintenanceCalories = bmr * 1.2;
        break;
      case "light":
        maintenanceCalories = bmr * 1.375;
        break;
      case "moderate":
        maintenanceCalories = bmr * 1.55;
        break;
      case "active":
        maintenanceCalories = bmr * 1.725;
        break;
      case "extra":
        maintenanceCalories = bmr * 1.9;
        break;
      default:
        maintenanceCalories = bmr;
    }

    setResult(
      `Your estimated daily maintenance calories are ${Math.round(
        maintenanceCalories
      )} kcal.`
    );
  };

  return (
    <div className="font-sans bg-[#031932] min-h-screen flex flex-col items-center p-4 sm:p-6 text-gray-300">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
        Fitness Report - BMR and BMI
      </h1>

      <div className="flex flex-col sm:flex-row w-full max-w-5xl gap-8 items-center">
        <form
          className="w-full sm:w-1/2 bg-[#021020] rounded-lg p-6"
          onSubmit={(e) => {
            e.preventDefault();
            calculateCalories();
            bmiCalculator();
          }}
        >
          <div className="mb-4">
            <label htmlFor="weight" className="block text-lg font-medium mb-2">
              Weight (kg):
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Weight in kg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="height" className="block text-lg font-medium mb-2">
              Height (cm):
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Height in cm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-lg font-medium mb-2">
              Age:
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Age"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-lg font-medium mb-2">
              Gender:
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="activity"
              className="block text-lg font-medium mb-2"
            >
              Activity Level:
            </label>
            <select
              id="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="sedentary">
                Sedentary (little or no exercise)
              </option>
              <option value="light">Lightly active (1-3 days/week)</option>
              <option value="moderate">
                Moderately active (3-5 days/week)
              </option>
              <option value="active">Very active (6-7 days/week)</option>
              <option value="extra">Extra active (physical job)</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#114880] hover:bg-[#20346d] text-white py-2 rounded mt-4"
          >
            Calculate
          </button>
        </form>

        <div className="w-full sm:w-1/2 bg-black text-center p-6 rounded-lg">
          {result ? (
            <>
              <p className="text-lg sm:text-xl font-semibold">{result}</p>
              <p className="text-lg sm:text-xl font-semibold my-3">
                Your Body Mass Index is {bmi} and you are {category}
              </p>
              <p className="text-lg sm:text-xl font-semibold">{advice}</p>
            </>
          ) : (
            <p className="text-lg sm:text-xl font-semibold">
              Fill the form to calculate your BMI and BMR
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMIcalc;
