import React, { useState, useEffect } from "react";
import "./index.css";
import { Header, Form, List } from "./Components";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="App">
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <List todo={todo} setTodo={setTodo} setEditTodo={setEditTodo} />
    </div>
  );
}

export default App;
