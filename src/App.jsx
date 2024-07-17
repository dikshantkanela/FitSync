import "./App.css";
import Exercise from "./components/Exercise";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>

      <div className="">
        <Exercise />
      </div>
    </>
  );
}

export default App;
