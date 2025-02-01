import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (input.trim()) {
      if (editIndex !== null) {
        const updatedTodos = todos.map((todo, index) =>
          index === editIndex ? { ...todo, text: input } : todo
        );
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, { text: input, completed: false }]);
      }
      setInput("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const startEdit = (index) => {
    setInput(todos[index].text);
    setEditIndex(index);
  };

  return (
    <div className="w-full font-sans p-6 bg-[#021020] min-h-screen flex flex-col items-center">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto bg-[#1E293B] rounded-lg shadow-lg p-6">
        <h1 className="text-center text-3xl sm:text-4xl text-white font-bold mb-6">
          Fitness Task Scheduler
        </h1>
        <div className="flex flex-col sm:flex-row items-center mb-6">
          <input
            type="text"
            className="w-full sm:w-auto flex-grow p-3 mb-4 sm:mb-0 sm:ml-4 border border-gray-600 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new fitness task..."
          />
          <button
            className="w-full sm:w-auto sm:ml-4 p-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
            onClick={addTodo}
          >
            {editIndex !== null ? "Update Task" : "Add Task"}
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              toggleTodo={() => toggleTodo(index)}
              removeTodo={() => removeTodo(index)}
              startEdit={() => startEdit(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
