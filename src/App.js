import React from 'react'
import './App.css';
import './index.css'
import TodoList from './TodoList'
import Input from './Input'
import Message from './Message'

function App() {
  
  return (
    <div className="App">
      <TodoList />
      <Input />
      <Message />
    </div>
  );
}  

export default App;
 