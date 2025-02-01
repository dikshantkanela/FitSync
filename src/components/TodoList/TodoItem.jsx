import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const TodoItem = ({ todo, toggleTodo, removeTodo, startEdit }) => {
  return (
    <li className="flex flex-col sm:flex-row font-sans text-white justify-between items-center p-4 border-b bg-[#1E293B] hover:bg-[#374151] transition-all duration-200">
      <span
        className={`flex-grow w-full sm:w-auto ${
          todo.completed ? "line-through text-gray-400" : "text-white"
        } cursor-pointer mb-2 sm:mb-0`}
        onClick={toggleTodo}
      >
        {todo.text}
      </span>

      <div className="flex gap-2 sm:gap-4">
        <button
          className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition-all duration-200"
          onClick={startEdit}
        >
          <FaEdit className="text-gray-900" />
        </button>
        <button
          className="p-2 bg-red-600 hover:bg-red-700 text-white rounded transition-all duration-200"
          onClick={removeTodo}
        >
          <FaTrashAlt className="text-gray-900" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
