import "./Home.style.css";
import CountdownTimer from "./CountdownTimer";
import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { FaRegTrashAlt, FaCheckSquare, FaRegSquare, FaAsterisk, FaMoon, FaSun} from "react-icons/fa";

export default function Home({
  addTodo,
  todos,
  toggleComplete,
  deleteTodo,
  setFilter,
  filter
}) {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="home-container">
      <header className="navbar">
        <nav>
          <div className="navbar-title">
            <p className="dark-mode-label">Dark Mode: </p>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>
      </header>
    
    <main className="content-container">
    <div className="content-header">
    <FaAsterisk className="content-icon" />
    <h1 className="site-title">to-do list & countdown timer</h1>

    </div>
    <img src="/content_image.jpg" alt="" />
    </main>
    
    
    <div className="row content-row">
    <div className="col content-col">
    {/* Countdown Timer Section */}
    <div className="content-container-timer">
    <CountdownTimer start={10} />
    </div>
    </div>
    
    <div className="col content-col">
    {/* Todo List Section */}
    <div className="content-container-todo">
    <TodoForm addTodo={addTodo} />
    
    <div className="filters">
    <button
    className={filter === "all" ? "active-filter" : ""}
    onClick={() => setFilter("all")}
    >
    All
    </button>
    <button
    className={filter === "active" ? "active-filter" : ""}
    onClick={() => setFilter("active")}
    >
    Active
    </button>
    <button
    className={filter === "completed" ? "active-filter" : ""}
    onClick={() => setFilter("completed")}
    >
    Completed
    </button>
    </div>
    
    <div className="todo-list">
    {todos.length === 0 ? (
      <p>No tasks yet</p>
    ) : (
      <ul>
      {todos.map((todo) => (
        <li
        key={todo.id}
        className={todo.completed ? "completed-task" : ""}
        >
        <div className="todo-item">
        <span
        onClick={() => toggleComplete(todo.id)}
        style={{ cursor: "pointer" }}
        className="todo-check"
        >
        {todo.completed ? (
          <FaCheckSquare color="#489766" />
        ) : (
          <FaRegSquare />
        )}
        </span>
        
        <span
        onClick={() => toggleComplete(todo.id)}
        style={{ cursor: "pointer", marginLeft: "10px" }}
        className="todo-text"
        >
        {todo.task}
        </span>
        </div>
        
        <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
        >
        <FaRegTrashAlt />
        </button>
        </li>
      ))}
      </ul>
    )}
    </div>
    </div>
    </div>
    </div>
    
    <footer className="footer">
    <div className="footer-container">
    <p className="footer-text">
    Made with <span className="heart">♥</span> by{" "}
    <a
    href="https://github.com/KarenAlessandra/"
    target="_blank"
    rel="noopener noreferrer"
    >
    Karen
    </a>
    </p>
    </div>
    </footer>
    </div>
  );
}
