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
import ActivityScheduler from "./components/ActivityScheduler";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage";
import ExerciseDetail from "./components/ExerciseDetail"; // New component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/nutrients" element={<NaturalNutrients />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/exercise/:bodypart" element={<ExerciseDetail />} /> {/* New route */}
        <Route path="/bmi" element={<BMIcalc />} />
        <Route path="/schedule" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
