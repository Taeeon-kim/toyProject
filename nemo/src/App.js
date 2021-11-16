import React from "react";


class App extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      count: 3
    };
  }


  componentDidMount(){
    console.log("마운트완료")
  }

  addNemo = () => {
      this.setState({ count: this.state.count+1 });
  }

  removeNemo = () => {
    this.setState(this.state.count >0 ? { count : this.state.count-1} : window.alert("없어요"));
  }
  
  render(){
    const nemo_count = Array.from({length: this.state.count}, (v,i)=>i)
    console.log(nemo_count);
    console.log(this.state);
    return (
      <div className="App">
          {nemo_count.map((n, i) => {

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
        <button onClick={() => this.addNemo()}>하나 추가</button>
        <button onClick={this.removeNemo }>하나 빼기</button>
      </div>



         
     </div>
    )
  }
}
export default App;
