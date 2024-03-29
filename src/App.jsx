import React, { useState, useEffect } from "react";
import { Header, Form, List } from "./Components";
import { Arrow } from "./Components/icons";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [displayArrow, setDisplayArrow] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setDisplayArrow(true);
    } else {
      setDisplayArrow(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [todo]);

  return (
    <div className="flex flex-col justify-center items-center w-full text-center mx-auto my-0 bg-[#00040f] relative">
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
      {displayArrow && (
        <button
          className="flex justify-center items-center w-10 h-10 fixed bottom-[10px] right-[10px] cursor-pointer"
          onClick={scrollUp}
        >
          <Arrow />
        </button>
      )}
    </div>
  );
};

export default App;
