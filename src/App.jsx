import "./App.css";
import Exercise from "./components/Exercise";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NaturalExercise from "./components/NutriComp/ExToCal";
import NaturalNutrients from "./components/NutriComp/Nutrients";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
  <div className="bg-[#021020]">
      <div className="">
        <Navbar />
      </div>
    <div className="">
      <Hero/>
    </div>
      <div className="">
        {/* <Exercise /> */}
      </div>

      <div className="">
        {/* <TodoList/> */}
      </div>
      <div className=''>
      <NaturalExercise/>
      <NaturalNutrients/>
    </div>
      </div>
    
  );
}

export default App;
