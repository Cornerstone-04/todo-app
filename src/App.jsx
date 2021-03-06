import React, {useState, useEffect} from 'react'
import './App.css';
import './index.css'
import Header from './Components/Header'
import Text from './Components/Text'
import Todo from './Components/Todo'

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
      <Text 
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        editTodo={editTodo}
        setEditTodo={setEditTodo} 
      />
      <Todo 
      todo={todo} 
      setTodo={setTodo} 
      setEditTodo={setEditTodo} />
    </div>
  );
}  

export default App;