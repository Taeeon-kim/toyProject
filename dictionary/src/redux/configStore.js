import bucket from './module/bucket';
import {createStore,combineReducers, applyMiddleware} from 'redux' 
import thunk from 'redux-thunk';

const middlewares = [thunk];
const bindReducer = combineReducers({bucket});  //리듀서를 묶어줌
const enhancer = applyMiddleware(...middlewares);

const store = createStore(bindReducer, enhancer); // 묶은 리듀서를 스토어에 넣어 스토어만듬.
export default store; // store 를 export 해서 다른 컴포넌트들이 쓸수있게 해줌