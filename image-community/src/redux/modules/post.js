import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import {firestore}  from "../../shared/firebase" 
import moment from "moment" 
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list)=>({post_list}));
const addPost = createAction(ADD_POST, (post)=>({post}));

const initialState = {
    list: [],
}


const initialPost = {
    // id:0,
    // user_info : { 
    //     user_name : "Youngble",
    //     user_profile : "https://youngble.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2021-11-17-00-56-23.jpeg",
        
    // },
    image_url :"https://youngble.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2021-11-17-00-56-23.jpeg",
    contents: "",
    comment_cnt : 0,
    insert_dt : moment().format("YYYY-MM-DD hh:mm:ss"),
}


const addPostFB = (contents="") => {
    return function (dispatch, getState, {history}){
        const postDB = firestore.collection("post");
        const _user = getState().user.user;   // getState스토어에있는 정보가져옴
        
        const user_info = {
            user_name : _user.user_name,
            user_id:_user.uid,
            user_profile: _user.user_profile,
        }
        const _post ={
            ...initialPost, 
            contents: contents,
            insert_dt: moment().format("YYYY-MM-DD hh:mm:ss") ,
        }
        
        postDB.add({...user_info, ..._post}).then((doc)=>{
            let post = {user_info:user_info, ..._post,id:doc.id}
            dispatch(addPost(post))
            history.replace("/");
        }).catch((err)=>{
            console.log("post 작성에 실패",err);
        })
    }
}


const getPostFB = ( ) => {
    return function (dispatch, getState, {history}){
        const postDB = firestore.collection("post");

        postDB.get().then((docs) =>{
            let post_list = [];
            docs.forEach((doc)=> { 
                let _post = doc.data();  //파이어스토어에서 문서가져옴
                console.log(_post)
                let post = Object.keys(_post).reduce((acc,cur)=>{         // 키값들을 배열로 만들어줌
                        if(cur.indexOf("user_")!== -1){
                            return {...acc, user_info: {...acc.user_info, [cur]: _post[cur]}}
                        }
                        return {...acc,[cur]: _post[cur] }    //_post[cur] 이라는건 value로써 키에 해당하는 value를 
                  }, {id: doc.id, user_info:{}})      //처음 기본값을 _post에 없는 id: doc.id 를 미리 넣고 

                    post_list.push(post)
            })
        
            console.log(post_list)
                dispatch(setPost(post_list));
        })
    }
}


export default handleActions(
{
    [SET_POST]: (state, action) =>produce(state, (draft)=>{
            draft.list = action.payload.post_list;  //draft.list 를 action으로 넘어와서 payload에 있는 post_list 를 넣어서 복사해줌, 이건 위에 getPostFB에서  map과 push, setPost등등으로 넘겨서 가져온것이다
    }),

    [ADD_POST]: (state, action) =>produce(state, (draft)=>{
        draft.list.unshift(action.payload.post); //뒤로 붙이는게 아닌 앞에 붙여야해서 push가 아닌 unshift를 씀
    })


}, initialState);

const actionCreators = {
    setPost,
    addPost,
    getPostFB,
    addPostFB,

}

export {actionCreators};