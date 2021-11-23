

import {createStore, combineReducers, applyMiddleware, compose} from "redux";     // createStore 로 store 를 만드는데 reducer 들을 합치기위해 comineReducers 를 사용
import bucket from "./modules/bucket"; //리듀서를 가져옴
import thunk from "redux-thunk";


const middlewares = [thunk];  //미들웨어란?
const rootReducer = combineReducers({bucket});   // 이렇게하면 bucket.js에 있는 리듀서를 다 묶음
const enhancer = applyMiddleware(...middlewares); //(thunk, thunk2, thunk3) 등을 저렇게 ...으로 통합해서 써줌



const store = createStore(rootReducer, enhancer); //첫번째 인자가 reducer 이다. 묶은 리듀서를 store 에 넣어줌

export default store;
// 이렇게 store 를 만들어줬다. 