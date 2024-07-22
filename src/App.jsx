import "./App.css";
import BMIcalc from "./components/BMIcalc";
import Exercise from "./components/Exercise";
import FitnessAdvisor from "./components/FitnessAdvisor";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NaturalExercise from "./components/NutriComp/ExToCal";
import NaturalNutrients from "./components/NutriComp/Nutrients";
import TodoList from "./components/TodoList/TodoList";
import TrackCalories from "./components/TrackCalories";
import TrackExercise from "./components/TrackExercise";
import TrackNutrients from "./components/TrackNutrients";


function App() {
  return (
  <div className="bg-[#021020]">
      <div className="">
        <Navbar />
      </div>
    <div className="">
      <Hero/>
    </div>
    <div>
      <TrackCalories/>
      {/* <BMIcalc/> */}
    </div>
      <div className="">
        <TrackExercise/>
        {/* <Exercise /> */}
      </div>

      <div>
        <TrackNutrients/>
        
     </div>

<div>
  <FitnessAdvisor/>
  <BMIcalc/>
</div>

      <div className="">
        {/* <TodoList/> */}
      </div>
      <div className=''>
      {/* <NaturalExercise/> */}
  
    </div>
    
    
      </div>
    
  );
}

export default App;
