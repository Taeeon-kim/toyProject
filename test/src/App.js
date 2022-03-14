import logo from "./logo.svg";
import "./App.css";
import person from "./person";
import React from "react";
import axios from "axios";

function App() {
  class Human {
    gender = "male";

    printGender = () => {
      console.log(this.gender);
    };
  }
  class Person extends Human {
    name = "naa";

    printMyname() {
      console.log(this.name);
    }
  }

  const person = {
    name: "Maxx",
  };

  const newperson = {
    ...person,
    age: 20,
  };
  person.name = "ms";
  console.log(person);
  console.log(newperson);

  const filter = (...args) => {
    console.log(...args);
    return args.sort();
  };

  console.log(filter(3, 1, 4, 2));
  const myPerson = new Person();

  myPerson.printMyname();
  myPerson.printGender();
  const oldArray = [1, 2, 4];
  const newArray = [...oldArray, 10];
  console.log(newArray);
  oldArray[0] = 0;
  console.log(oldArray);
  const numbers = [1, 2];
  const [num1, num2] = numbers;
  console.log(num1, num2);

  const { a, b, ...c } = { b: 10, c: 20, d: 30, a: 4, e: 100 };
  console.log(a, b, c);
  const [info, setInfo] = React.useState([{ 거래금액: 20000 }]);
  const [colorState, setColorState]=React.useState(true)
  React.useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => {
      setInfo(res.data);
    });
  }, []);
  console.log(info);
  let ba = " ";
  console.log(ba.trim().length);
  const test = (event)=>{
    if(event.target.value.trim()){
      return setColorState(false)
    }
      setColorState(true)
   
  }
  return (
    <div className="App">
      {info
        ? info.map((value, index) => {
            return (
              <div
                key={index + "item"}
              >{`거래금액: ${value.거래금액}, 건축년도: ${value.건축년도}, 도로명: ${value.도로명}`}</div>
            );
          })
        : null}
      {[
        <div style={{ color: info.length > 0 ? "yellow" : "blue" }}>gg</div>,
        <div>
          <span style={{ color:  info.length > 0 ?"red":"salmon" }}>dddd</span>
        </div>,
      ]}
      <input type="text" onChange={test} style={{ backgroundColor:  colorState?"red":"blue" }}></input>
    </div>
  );
}

export default App;
