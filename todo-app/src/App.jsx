import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";


// Başlangıç için liste elemanımız
const initialState = [
  {
    id:1,
    text:"Code",
    completed:true
  }
]
function App() {
  // Listelemek istediğimiz todos elemaları
  const [todos,setTodos] = useState(initialState); 
  return (
    <section className="todoapp">
      <Form  todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer todos={todos} setTodos={setTodos} />
    </section>
  );
}

export default App;
