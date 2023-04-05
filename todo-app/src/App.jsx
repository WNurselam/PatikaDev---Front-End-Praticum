import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

// Başlangıç için liste elemanımız
const initialState = [
  {
    id: 1,
    text: "Eat",
    completed: true,
  },
  {
    id: 2,
    text: "Sleep",
    completed: false,
  },
];
function App() {
  // Listelemek istediğimiz todos elemaları
  const [todos, setTodos] = useState(initialState);
  const [select, setSelect] = useState("all"); // Seçile durumuna göre todos listeleme state'i
  return (
    <section className="todoapp">
      <Form todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        select={select}
        setSelect={setSelect}
      />
      <Footer
        todos={todos}
        setTodos={setTodos}
        select={select}
        setSelect={setSelect}
      />
    </section>
  );
}

export default App;
