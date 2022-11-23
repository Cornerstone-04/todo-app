import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";

export default function Text({ input, setInput, todo, setTodo, editTodo, setEditTodo }) {
    const updateTodo = (title, id, completed) => {
        const newTodo = todo.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        )
        setTodo(newTodo);
        setEditTodo("");
    };
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo])

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }

    }
    return (
        <form onSubmit={onFormSubmit} className="form">
            <input
                className="input__section"
                type="text"
                placeholder="Enter a Todo..."
                value={input}
                required
                onChange={onInputChange}
            />
            <button type="submit" className="button__add">
                {editTodo ? "OK" : "Add"}
            </button>
        </form>
    )
}
