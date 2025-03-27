// src/TodoList.jsx
import React, { Component } from 'react';
import './TodoList.css'; 

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
      filter: 'all',
    };
  }

  addTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim()) {
      this.setState({
        todos: [...todos, { text: inputValue, completed: false }],
        inputValue: '',
      });
    }
  };

  deleteTodo = (index) => {
    const { todos } = this.state;
    const newTodos = todos.filter((_, i) => i !== index);
    this.setState({ todos: newTodos });
  };

  toggleComplete = (index) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: newTodos });
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { todos, inputValue, filter } = this.state;

    const filteredTodos = todos.filter(todo => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'active') return !todo.completed;
      return true; // 'all'
    });

    return (
      <div className="todo-container">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          placeholder="Add a new task"
        />
        <button onClick={this.addTodo}>Add</button>

        <div className="filter-buttons">
          <button onClick={() => this.setFilter('all')}>All</button>
          <button onClick={() => this.setFilter('active')}>Active</button>
          <button onClick={() => this.setFilter('completed')}>Completed</button>
        </div>

        <table className="todo-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTodos.map((todo, index) => (
              <tr key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                <td>{todo.text}</td>
                <td>{todo.completed ? 'Completed' : 'Active'}</td>
                <td>
                  <button onClick={() => this.toggleComplete(index)}>
                    {todo.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button onClick={() => this.deleteTodo(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;


