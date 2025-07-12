import './App.css';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    const todo = { id: id, task: text, completed: false };
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const [filter, setFilter] = useState("all");

const filteredTodos = todos.filter(todo => {
  if (filter === "active") return !todo.completed;
  if (filter === "completed") return todo.completed;
  return true; // "all"
});

  return (
    <div className="app-container">
     <Home
  addTodo={addTodo}
  todos={filteredTodos}
  toggleComplete={toggleComplete}
  deleteTodo={deleteTodo}
  setFilter={setFilter}
  filter={filter}
/>

    </div>
  );
}

export default App;