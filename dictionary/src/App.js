import React from 'react';
import './App.css';
import styled from 'styled-components'
import {Route,useHistory} from 'react-router-dom'
import Card from './Card';
import AddPage from './AddPage';
import {db} from './firebase'
import {collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'  
import { Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {loadBucketFB } from './redux/module/bucket'

function App() {
const history = useHistory()
const dispatch = useDispatch()
React.useEffect(async()=>{
  console.log(db)
  dispatch(loadBucketFB());
  

},[]);


  return (
    <div className="App">
      <Container>
      <Route path="/" exact>
      <Title>MY DICTIONARY</Title>
      <Card />
      <AddButton onClick={() =>{history.push("/page")} }> </AddButton>
      </Route>
      <Route path="/page">
      <Title>단어 추가하기</Title>
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
width: 90%;
/* min-width: 380px; */
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
