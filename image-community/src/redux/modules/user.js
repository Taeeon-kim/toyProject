import {createAction, handleActions}from "redux-actions";
import {produce} from "immer";
import {setCookie, deleteCookie} from "../../shared/Cookie";
import { auth, apiKey } from "../../shared/firebase";
import firebase from "firebase/compat/app";   
// import { createBrowserHistory } from "history";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//기존 redux 액션생성함수,리듀서 다 ~ export 로 만들었는데 redux-actions 쓸때는 export 안붙이는게 많다 그 이유는? 아래 action creator export 하는 함수가있다.

// actions

// const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER ="SET_USER";
// action creators

// const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user)=> ({user}));
const getUser = createAction(GET_USER, (user)=>({user}));
const setUser = createAction(SET_USER, (user)=>({user}));


//initialState
const initialState = {
     user :null,
     is_login : false,
}


const user_initial = {
    user_name: 'youngble',

}

// const loginAction = (user) => {    //이제 파이어베이스를 통해 로그인을 한다.
//     return function (dispatch, getState, {history}){
//         console.log(history)
//         dispatch(setUser(user));
//         history.push('/');
//     }
// }




// middleware actions

const loginFB = (id, pwd) => {
    return function (dispatch, getState, {history}){

       auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then((res) => {
            auth.signInWithEmailAndPassword(id, pwd)     //첫부분 auth. 은 공식문서 앞에 firebase.auth()는 제외하고 씀.
            .then((user) => {
                
                console.log(user);
          
              //   auth.currentUser
                dispatch(setUser({user_name:user.user.displayName, id:id, user_profile: '', uid: user.user.uid }))
              // Signed in
          
                  history.push('/');
          
              // ...
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;

              console.log(errorCode, errorMessage);
            });
        //   return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        

       
    }
}



const signupFB =(id, pwd, user_name) => {
    return function (dispatch, getState, {history}){

        auth.createUserWithEmailAndPassword(id, pwd)
        .then((user) => {
          // Signed in
          console.log(user)

          auth.currentUser.updateProfile({       //파이어베이스 공식문서 사용자관리 목록에 보면 업데이트하는법 나와있다.
            displayName : user_name,

          }).then(()=> { 
              dispatch(setUser({user_name:user_name, id:id, user_profile: '', uid: user.user.uid }))
              history.push('/');
          }).catch((error)=>{ console.log(error)});
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });



    }
}

        //아래 웹 9버전은 안됨
//         const auth = getAuth();
// createUserWithEmailAndPassword(id, pwd)
//   .then((user) => {
//     // Signed in
//     // const user = userCredential.user
//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;

//     console.log(errorCode, errorMessage);
//     // ..
//   });

const loginCheckFB = () => {
    return function (dispatch, getState, {history}){
        auth.onAuthStateChanged((user)=>{
            if(user){
                dispatch(setUser({user_name: user.displayName, user_profile: '', id:user.email, uid: user.uid})) // 여기선 user.user. 으로 안하는건 onAuthStateChanged 이용하여 현재 가져오는건 sessions Storage 에서 가져오는거라 key:value 를 눌러서 경로를 보면 user없이 바로 다이렉트로 값이 있기때문에 두번쓰지않고 한번만 쓴다.
            }
            else{
                dispatch(logOut());
            }
        })
    }
}

const logoutFB = () => {
    return function (dispatch, getState, {history}) {
        auth.signOut().then(()=> {    //파이어스토어에서 sighout 이되면 then 을 실행하여 dispatch 로 로그아웃 액션을 실행하고 리듀서로감
            dispatch(logOut());
            history.replace('/');
        })
    }
}

// Reducer
export default handleActions({   // 만들때부터 export 해줌
    [SET_USER]: (state,action) => produce(state, (draft)=>{  //기존 state를 첫번째 넣어줌 produce로 Immer를사용 state를 복사해서 가져올걸 draft 라고 지정하고 받아옴
        setCookie("is_login","success");

        draft.user = action.payload.user;  //draft 로 복사한걸 막바꾸면된다. creator 를쓰면 payload 라는 중간게 더 생기는데 이 payload가 우리가 넘겨줬던 값을 가지고있다.
        draft.is_login = true;
    } ), //불변성유지를위해 immer 를 쓴다. //복사한값이므로 막바꾸고 써도된다.

    [LOG_OUT]: (state,action) => produce(state, (draft)=>{  
        deleteCookie("is_login")
        draft.user= null;
        draft.is_login= false;
    } ),
    [GET_USER]: (state,action) =>produce(state, (draft)=>{  
        
    } ),
}, initialState) // 초기state 값 2번째 인자로 넘겨줌

//action creator export

const actionCreators ={
       
        logOut,
        getUser,
        loginFB,
        signupFB,
        loginCheckFB,
        logoutFB,
};


export { actionCreators };
