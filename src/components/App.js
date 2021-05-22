import React, { Component, useState } from "react";
import '../styles/App.css';
import SubHeading from "./SubHeading";
import Heading from "./Heading";
import SubmitButton from "./SubmitButton";
import InputQuery from "./InputQuery";

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  )
}

export default App;


