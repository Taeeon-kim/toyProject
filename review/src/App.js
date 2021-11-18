import './index'
import './App.css';
import React from 'react';
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom';
import Review from './Review';
import { useHistory } from "react-router";

function App() {

  const history = useHistory();
  const [name, setName] = React.useState("요일쓸꺼");

  return (
    <div className="App">
      
    
      <Route path="/" exact>
      <Wrap><div style={{}}>내 일주일은?</div>
        <Center>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }} />
        </Center>
        <Center>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }}/>
        </Center>
        <Center>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }} />
        </Center>
        <Center>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }} />
            </Center>
        <Center>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }} />
        </Center>
        <Center>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }} />
        </Center>
        <Center>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Triangle onClick={()=>{
                 history.push("/review")
             }} />
        </Center>
      
      </Wrap>
      </Route>
   
      <Route path="/review" >
        <Review name={name}/>
      </Route>
    </div>
  
  );
}



const Wrap = styled.div`
max-width: 350px;
width: 80vw;
height: 90vh;
margin: 5vh auto;padding: 5vh 0px;
border: 1px solid rgb(221, 221, 221);
box-sizing: border-box;
border-radius: 5px;
`;

const Center = styled.div`
    display:flex;
    justify-content: center;
    margin-bottom: 10px;
`;

const Circle = styled.div`
     margin:2px;
     width: 25px ;
     height: 25px ;
     background: gray ;
     border-radius:25px;
`;

const Triangle = styled.div`
  width: 0px;height: 0px;
  border-top:14px solid transparent;
  border-bottom:14px solid transparent;
  border-left: 20px solid  purple;
  cursor: pointer;
`;

export default App;
