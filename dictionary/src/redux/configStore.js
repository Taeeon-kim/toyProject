import bucket from './module/bucket';
import {createStore,combineReducers} from 'redux' 

const bindReducer = combineReducers({bucket});  //리듀서를 묶어줌
const store = createStore(bindReducer); // 묶은 리듀서를 스토어에 넣어 스토어만듬.

export default store; // store 를 export 해서 다른 컴포넌트들이 쓸수있게 해줌