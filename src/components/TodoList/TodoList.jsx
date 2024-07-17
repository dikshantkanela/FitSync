import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
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
      setInput('');
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
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input 
          type="text" 
          className="flex-grow p-2 border rounded" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a new task..."
        />
        <button 
          className="ml-2 p-2 bg-blue-500 text-white rounded" 
          onClick={addTodo}
        >
          {editIndex !== null ? 'Update' : 'Add'}
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
  );
};

export default TodoList;

