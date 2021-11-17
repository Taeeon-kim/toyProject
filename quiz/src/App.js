import React from 'react';
import './App.css';
import Start from './Start.js';
import styled from "styled-components"

function App() {
  const [name, setName] = React.useState("르탄이");
  
  return (
    <div className="App" style ={{
      maxWidth : "350px",
      margin : "auto",

    }}>
        <Start name = {name}/>
        </div>
  );
}




export default App;
