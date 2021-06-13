import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function Todo({todo, setTodo,  setEditTodo}) {
    const editList = ({id}) =>{
        const findTodo = todo.find((todo) => todo.id === id)
        setEditTodo(findTodo);
    }

    const deleteTodo = ({id}) => {
        setTodo(todo.filter((todo) => todo.id !== id));
    };

    return (
        <div className="messageArea">
            {todo.map((todo) => 
                <li className="todo-list" key={todo.id}>
                    <input 
                    type="text" 
                    value={todo.title} 
                    className={` list ${todo.completed  ? "complete" : ""}`} 
                    onChange={(event) => event.preventDefault()} />

                    <div>
                        <button className="edit-btn" onClick={() => editList(todo)}>
                        <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className="delete-btn" onClick={() => deleteTodo(todo)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div> 
                </li>

                
            )
            
            }
        </div>
    )
}
