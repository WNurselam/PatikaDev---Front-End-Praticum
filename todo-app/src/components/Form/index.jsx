import { useState, useEffect } from "react";

const Form = (props) => {
  const { todos, setTodos } = props; // App.js içerisinden aldığımız todos propları
  const [value, setValue] = useState("");

  const addList = (e) => {
    if (value === "") {
      // Form'un içerisi boş ise göndermemesini istiyoruz
      return false;
    } else {
      e.preventDefault(); // Form kayıt edildikten sonra sürekli yenilenmemesi için.

      // Önceki ...todos(todos) değerlerini koruyoruz sonra yeni değerlerin atamasını yapıyoruz
      setTodos([   
        ...todos,
        {
          id:Math.random(),  // Her todo elemanı için rastgele id alıyoruz.
          text: value,       // input değerini text içerisine atıyoruz.
          completed: false, // tamamlanıp tamamlanmadığına bakıyoruz.
         
        },
      ]);
      setValue(""); // Form kayıt edildikten sonra input içerisini boşaltıyoruz.
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={addList}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)} // Değişen input değerini value state'ine atıyoruz.
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
};

export default Form;
