import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [username, setEnterUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangehandler = (event) => {
    setEnterUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onAddUser(username, enteredAge);
    setEnterUsername('');
    setEnteredAge('');
  };
  
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangehandler}
          value={username}
        ></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={ageChangeHandler}  value={enteredAge}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
