import ActivityScheduler from "./ActivityScheduler";
import FitnessAdvisor from "./FitnessAdvisor";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import TrackCalories from "./TrackCalories";
import TrackExercise from "./TrackExercise";
import TrackNutrients from "./TrackNutrients";

function Home() {
  return (
    <div className="bg-[#021020] h-screen w-screen">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Hero />
      </div>
      <div>
        <TrackCalories />
        {/* <BMIcalc/> */}
        {/* route this */}
      </div>
      <div className="">
        <TrackExercise />
        {/* <Exercise />   */}
        {/* route this */}
      </div>

      <div>
        <TrackNutrients />
        {/* <NaturalNutrients/> */}
        {/* route this */}
      </div>

      <div>
        <FitnessAdvisor />
        {/* <BMIcalc/> */}
        {/* route this */}
      </div>

      <div className="">
        <ActivityScheduler />
        {/* <TodoList/> */}
        {/* Route this */}
      </div>
      <div className="">
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
