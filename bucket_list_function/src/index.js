import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";   //store 를 provide 하여 컴포넌트에 주입하기위해 제공자를 만들고
import store from "./redux/configStore"
ReactDOM.render( // 제공자 provider 태그안에 그전에 만든 store 를 store에 넣어준다.
    <Provider store={store}>    
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
