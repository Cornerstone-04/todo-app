import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/todo.css";

import Moment from "moment";

export default function Todo({ todo, setTodo, setEditTodo }) {
  const editList = ({ id }) => {
    const findTodo = todo.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const deleteTodo = ({ id }) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const date = Moment().format("DD/MM/YYYY");

  return (
    <div className="messageArea">
      {" "}
      {todo.map((todo) => (
        <div className="todo-list" key={todo.id}>
          <div className="list_holder">
            <p className={` list ${todo.completed ? "complete" : ""}`}>
              {todo.title}
            </p>
          </div>
          <div className="date_holder">
            {" "}
            <p className="date"> {date} </p>
            <div className="eod">
              <button className="edit-btn" onClick={() => editList(todo)}>
                <FontAwesomeIcon icon={faEdit} />{" "}
              </button>{" "}
              <button className="delete-btn" onClick={() => deleteTodo(todo)}>
                <FontAwesomeIcon icon={faTrashAlt} />{" "}
              </button>{" "}
            </div>{" "}
          </div>
        </div>
      ))}{" "}
    </div>
  );
}
