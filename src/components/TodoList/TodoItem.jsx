import React from 'react';

const TodoItem = ({ todo, toggleTodo, removeTodo, startEdit }) => {
  return (
    <li className="flex font-sans text-white justify-between items-center p-2 border-b">
      <span 
        className={`flex-grow ${todo.completed ? 'line-through' : ''}`} 
        onClick={toggleTodo}
      >
        {todo.text}
      </span>
      <div>
        <button 
          className="ml-2 p-2 bg-yellow-500 text-white rounded" 
          onClick={startEdit}
        >
          Edit
        </button>
        <button 
          className="ml-2 p-2 bg-green-600 text-white rounded" 
          onClick={removeTodo}
        >
          Check Mark!
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
