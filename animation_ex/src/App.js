import React, {useState} from 'react'
import styled, { keyframes } from "styled-components";
import AddUser from "./users/AddUser";
import Card from "./UI/Card";
import UserList from "./users/UserList";
// import classes from "./App.css";
function App() {
  const [userList, setUserList]= useState([]);

  const addUserHandler = (uName, uAge)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  }
  console.log(userList)
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList} />
    </div>
  );
  // <Card className={classes.input}></Card>;
}

const boxAnimation = keyframes`
  0%{ border-radius: 0px;
    top : 20px; 
  }
  30%{ 
       top : 300px; 
  }

  50%{ border-radius: 50px;
       top : 700px; 
  }

  100%{ border-radius: 0px;
    top : 20px;  
  }

`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: green;
  border-radius: 0px;

  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${boxAnimation} 10s 10s infinite linear alternate;
`;

export default App;
