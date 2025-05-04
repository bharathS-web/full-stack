import React, { useState } from 'react';

function Todo() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (task.trim() === '') return;

    setTodos([...todos, { text: task, completed: false }]);
    setTask('');
  };

  const toggleComplete = (index) => { 
    const updatedTodos = todos.map( (todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className='container'>
      <h2>Simple To-Do List</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} >
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => toggleComplete(index)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>

            <button onClick={() => handleDelete(index)}>
              {'delete'}
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
