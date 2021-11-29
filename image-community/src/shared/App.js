
import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import PostList from "../pages/PostList"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
       <Route path ="/" exact component={PostList}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
