import './index'
import './App.css';
import Cat from './Cat';
import Dog from './Dog';
import {Route, Link} from "react-router-dom"            //리액트의 router-dom 에서 Route 와 Link 가져옴
import Home from './Home';


function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">홈으로가기</Link>
        <Link to="/cat">고양이로가기</Link>
        <Link to="/dog">강아지로가기</Link>
        
      </div>
      <Route path="/" exact>
       <Home />
      </Route>
      <Route path="/cat" component={Cat}>
       {/* <Cat /> */}
      </Route>
      <Route path="/dog" >
       <Dog />
      </Route>
      
    </div>
  );
}

export default App;
