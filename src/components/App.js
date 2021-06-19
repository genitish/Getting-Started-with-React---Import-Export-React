import React, { Component, useState } from "react";
import '../styles/App.css';
import SubHeading from "./SubHeading";
import Heading from "./Heading";
import SubmitButton from "./SubmitButton";
import InputQuery from "./InputQuery";
import Todos from "./Todos";

const App = () => {
  let value;
  const [input, setInput] = useState('')
  const addChange = (e) =>{
    setInput(e.target.value)
    localStorage.setItem('value' ,input);
  }
  
  console.log(localStorage.getItem('value'))
  return (
    <div id="main">
      <input type="text" onChange={addChange} />
      <h3>{localStorage.getItem('value')}</h3>
    </div>
  )
}

export default App;


