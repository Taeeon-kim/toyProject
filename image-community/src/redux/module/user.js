import {createAction, handleActions}from "redux-actions";
import {produce} from "immer";

//기존 redux 액션생성함수,리듀서 다 ~ export 로 만들었는데 redux-actions 쓸때는 export 안붙이는게 많다 그 이유는? 아래 action creator export 하는 함수가있다.
// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creators


const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user)=> ({user}));
const getUser = createAction(GET_USER, (user)=>({user}));

//기존 액션생성함수
// const logIn = (user) => {
//     return {
//         type: LOG_IN,
//         user
//     }
// }

//initalState
const initialState = {
     user :null,
     is_login : false,
}


//기존 reducer
// const reducer = handleActions({
//     [LOG_IN]: (state, action) => {
        
//     },
// },{})  //두번째는 똑같이 initialState 넣어주면된다.

// const reducer = (state= {initialstate}, action={}) => {
//     switch(action.type){
//         case "LOG_IN" : {
//             state.user =action.user;
//         }
//     }
// }


// Reducer
export default handleActions({   // 만들때부터 export 해줌
    [LOG_IN]: (state,action) =>produce(state, (draft)=>{  //기존 state를 첫번째 넣어줌 Immer가 state를 복사해서 가져올걸 draft 라고 지정하고 받아옴
        
    } ), //불변성유지를위해 immer 를 쓴다. //복사한값이므로 막바꾸고 써도된다.

    [LOG_OUT]: (state,action) =>produce(state, (draft)=>{  
        
    } ),
    [GET_USER]: (state,action) =>produce(state, (draft)=>{  
        
    } ),
})

//action creator export

const actionCreators ={
        logIn,
        logOut,
        getUser,
};


export { actionCreators };
