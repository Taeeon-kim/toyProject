import React from 'react';
import './App.css';
import styled from 'styled-components'
import {Route,useHistory} from 'react-router-dom'
import Card from './Card';
import AddPage from './AddPage';


function App() {
const history = useHistory()

  return (
    <div className="App">
      <Container>
      <Title>MY DICTIONARY</Title>
      <Route path="/" exact>
      <Card />
      <AddButton onClick={() =>{history.push("/page")} }> </AddButton>
      </Route>
      <Route path="/page">
      <AddPage />
      </Route>     
        </Container>
       
    </div>
  );
}

const Container = styled.div`

/* min-height: 60vh; */
background-color: #e2fef8;
padding: 16px;

min-width: 380px;
margin: 30px;
height: 100%;
border-radius: 5px;
border: 1px solid #ddd;

`;

const Title = styled.h2`
color: slateblue;
text-align: left;
`;

const AddButton = styled.a`
 border : 1px solid red;
 width: 50px;
 height: 50px;
 background: red;
 border-radius: 50%;
 
  position: fixed;
  bottom: 10px;
  right: 10px;
  
`;

const CrossButton = styled

export default App;
