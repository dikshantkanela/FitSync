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
import ActivityScheduler from "./components/ActivityScheduler"

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
      {/* route this */}
    </div>
      <div className="">
        <TrackExercise/>
        {/* <Exercise />   */}
        {/* route this */}
      </div>

      <div>
        <TrackNutrients/>
        {/* <NaturalNutrients/> */}
        {/* route this */}
     </div>

<div>
  <FitnessAdvisor/>
  {/* <BMIcalc/> */}
  {/* route this */}
</div>

      <div className="">
        <ActivityScheduler/>
        {/* <TodoList/> */}
        {/* Route this */}
      </div>
   
    
      </div>
    
  );
}

export default App;
