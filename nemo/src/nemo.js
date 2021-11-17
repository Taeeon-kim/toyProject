import React, {useState} from "react";

const Nemo = (props) => {
    
    const [cou nt, setCount] = useState(3);
    const nemo_count = Array.from({length: count}, (v,i)=>i)
    const addCount = () => {
        setCount(count+1)
    }

    const minusCount =() => {
       count>0 ? setCount(count-1) : window.alert("네모가 없네요")
    };
    
    return (
        <> {nemo_count.map((n, i) => {
            return ( <div key = {i} style={{
              width : "150px",
              height : "150px",
              backgroundColor  : "#dddddd",
              margin: "10px"
            }}> 
              nemo
            </div>)
          }   
          )}
      <div>
        <button onClick={addCount}>하나 추가</button> 
        <button onClick={minusCount }>하나 빼기</button>
      </div></>

    );
}

export default Nemo