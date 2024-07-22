import React, { useState } from "react";
import { Box } from "@chakra-ui/react";


const BMIcalc = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState('sedentary');
  const [result, setResult] = useState(null); // for BMR
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const bmiCalculator = () => {
    const hInMeter = height / 100;
    const BMI = (weight / (hInMeter * hInMeter)).toFixed(2);
    setBmi(BMI);
    setCategory(getBMICategory(BMI));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight!";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal Weight!";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight!";
    } else {
      return "Obese!";
    }
  };

  const calculateCalories = () => {

    
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age, 10);
    let bmr;

    // Calculate BMR based on gender
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
    } else {
      bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
    }

   
    // Adjust BMR based on activity level
    let maintenanceCalories;
    switch (activity) {
      case 'sedentary':
        maintenanceCalories = bmr * 1.2;
        break;
      case 'light':
        maintenanceCalories = bmr * 1.375;
        break;
      case 'moderate':
        maintenanceCalories = bmr * 1.55;
        break;
      case 'active':
        maintenanceCalories = bmr * 1.725;
        break;
      case 'extra':
        maintenanceCalories = bmr * 1.9;
        break;
      default:
        maintenanceCalories = bmr;
    }

    setResult(`Your estimated daily maintenance calories are ${Math.round(maintenanceCalories)} kcal.`);
  };
  return (
    
    <div  className="font-sans mx-[250px] rounded-md bg-[#031932] flex justify-center items-center flex-col text-gray-300">
    
    
     <h1 className="text-5xl font-bold text-white mt-10">Fitness Report - BMR and BMI</h1>
      <form className="my-10"  onSubmit={(e) => { e.preventDefault(); calculateCalories();bmiCalculator(); }}>
        <div>

        <label
        htmlFor="weight"
        className="block mb-2 text-xl font-medium" >
        Weight (kg) :
      </label>
      <input
        type="number"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
        className="bg-gray-50 border my-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Your Weight in kg"
        
      />

        </div>
        <div>
        <label
        htmlFor="height"
        className="block mb-2 text-xl font-medium" >
        Height (cm) :
      </label>

      <input
        type="number"
        id="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        required
        className="bg-gray-50 my-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Your Height in cm"
        
      />

         
        </div>
        <div>
        <label
        htmlFor="height"
        className="block mb-2 text-xl font-medium" >
      Age :
      </label>

      <input
       type="number"
       id="age"
       value={age}
       onChange={(e) => setAge(e.target.value)}
       required
        className="bg-gray- my-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Your Age"
        
      />

        </div>
        <div>
          <label htmlFor="gender" className="text-xl  block mb-2 font-medium  ">Gender : </label>
          <select
          className="bg-gray-50 border my-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="activity" className="text-xl block mb-2 font-medium">Activity Level : </label>
          <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">Lightly active (light exercise/sports 1-3 days/week)</option>
            <option value="moderate">Moderately active (moderate exercise/sports 3-5 days/week)</option>
            <option value="active">Very active (hard exercise/sports 6-7 days/week)</option>
            <option value="extra">Extra active (very hard exercise/physical job)</option>
          </select>
        </div>
        <div className="flex justify-center">
        <button type="submit" className= "flex items-center my-6  gap-2 px-3 w-[120px] py-2 rounded-md text-indigo-50 bg-[#114880] hover:bg-[#20346d] transition-colors">
            <span className="font-medium text-md">Report</span>
            <svg
    xmlns="http://www.w3.org/2000/svg"   //ARROW IMAGE
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
          </button>
        </div>
       
      </form>
      {result && <p className="text-2xl font-bold">{result} </p>}
     {bmi &&  <p className="text-2xl font-bold my-3">Your Body Mass Index is  {bmi} and you are {category} </p> }
    </div>
  );
};

export default BMIcalc;
