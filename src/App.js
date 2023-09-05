import React from 'react'
import Header from "./Components/Header/Header.jsx"
import TodoForm from "./Components/TodoForm/TodoForm.jsx";

import "./Components/Header/Header.scss";
import "./Components/TodoForm/TodoForm.scss";
import "./Components/MediaQuery/MediaQuery.scss";
import "./App.css"

const App = () => {
  return (
    <>
    <Header/>
    <TodoForm/>
    </>
  )
}

export default App