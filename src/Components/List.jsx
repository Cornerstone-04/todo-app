import React from "react";
import "../index.css";
import Moment from "moment";

const List = ({ todo, setTodo, setEditTodo }) => {
  const editList = ({ id }) => {
    const findTodo = todo.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const deleteTodo = ({ id }) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const date = Moment().format("DD/MM/YYYY");

  return (
    <div className="message__area">
      {" "}
      {todo.map((todo) => (
        <div className="todo__list" key={todo.id}>
          <div className="list__holder">
            <p className={` list ${todo.completed ? "complete" : ""}`}>
              {todo.title}
            </p>
          </div>
          <div className="date__holder">
            {" "}
            <p className="date"> {date} </p>
            <div className="eod">
              <button
                className="edit__btn eod_btn"
                onClick={() => editList(todo)}
              >
                {/* <FontAwesomeIcon icon={faEdit} />{" "} */}
                📝
              </button>{" "}
              <button
                className="delete__btn eod__btn"
                onClick={() => deleteTodo(todo)}
              >
                {/* <FontAwesomeIcon icon={faTrashAlt} />{" "} */}
                🗑️
              </button>{" "}
            </div>{" "}
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default List;
