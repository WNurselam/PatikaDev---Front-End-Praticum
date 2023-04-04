import React from "react";

const TodoList = (props) => {
  const { todos, setTodos } = props; // App.js'den aldığımız todos propları

  const changeBox = (id) => {
      // Listelediğimiz elemanları ile proptan gelen elemanın idlerini birbirine eşitliyoruz.
      const checkTodo = todos.find((todo) => todo.id === id);
      checkTodo.completed = !checkTodo.completed;// Her tıklamada true veya false olması için
      setTodos(todos.map((todo) => (todo.id === id ? checkTodo:todo)))
      // checkTodo'dan alınan kontrol'ü todos'a atıyoruz
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={todo.completed}
                onChange={() => changeBox(todo.id)}
              />
              <label>{todo.text}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
