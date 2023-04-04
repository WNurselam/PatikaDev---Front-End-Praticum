import React from "react";

const TodoList = (props) => {
  const {todos} = props; // App.js'den aldığımız todos propu
  return (
    <section className="main">
      <ul className="todo-list">
        {
           todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{todo.text}</label>
              <button className="destroy"></button>
            </div>
          </li>
          ))
        } 
        </ul>
    </section>
  );
};

export default TodoList;
