import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'
function App() {
const [info, setInfo] = React.useState([])
  React.useEffect(()=>{
    axios.get('http://localhost:8080/').then((res)=>{
      setInfo(res.data)
    })
  },[])
  console.log(info)
  return (
    <div className="App">
      {info?info.map((value, index)=>{
        return <div key={index+'item'}>{`거래금액: ${value.거래금액}, 건축년도: ${value.건축년도}, 도로명: ${value.도로명}`}</div>
      }): null}
    </div>
  );
}

export default App;
