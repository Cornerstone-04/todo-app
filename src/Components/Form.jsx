import React, { useEffect } from "react";
import "../index.css";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todo, setTodo, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todo.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodo(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form
      onSubmit={onFormSubmit}
      className="md:w-[50%] w-[90%] flex justify-center items-center my-0 mx-auto mb-[50px]"
    >
      <input
        className="py-0 px-[20px] w-full outline-none h-[50px] border-2 border-transparent text-[1.2rem] font-karla bg-white transition-all ease-linear"
        type="text"
        placeholder="Enter a Todo"
        value={input}
        required
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="font-black text-[1.2rem] font-karla bg-blue-gradient text-white w-[25%] h-[50px] p-0 border-0 cursor-pointer flex justify-center items-center hover:bg-[#311987] active:bg-[#311987] transition-all ease-linear"
      >
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
