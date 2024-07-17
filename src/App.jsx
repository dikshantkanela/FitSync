import "./App.css";
import Exercise from "./components/Exercise";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
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
      </div>
    
  );
}

export default App;
