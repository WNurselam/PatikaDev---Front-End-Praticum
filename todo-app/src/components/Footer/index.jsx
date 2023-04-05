import React, { useState } from "react";

const Footer = (props) => {
  const { todos, setTodos,select,setSelect } = props; // App.js proplarımız

  // Tamamlanmayan todoları kalsın ve tamamlanan todoların silmesini istiyoruz.
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };


  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong>
        items left
      </span>
      <ul className="filters">
        <li>
          {/* Her bir tıklama için selecten alan filtera atama işlemleri */}
          <a
            href="#/"
            className={select == "all" ? "selected" : ""}
            onClick={() => setSelect("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={select == "active" ? "selected" : ""}
            onClick={() => setSelect("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={select == "completed" ? "selected" : ""}
            onClick={() => setSelect("completed")}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
};
export default Footer;
